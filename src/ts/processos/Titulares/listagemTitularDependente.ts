import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import ImpressorCliente from "../../impressores/impressorCliente";

export default class ListagemTitularDependenteEspecifico extends Processo{
    private clientes: Cliente[];
    private impressor!: ImpressorCliente;

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }
    
    processar(): void {
        console.clear();

        let dependentes = [];
        for (let index = 0; index < this.clientes.length; index++) {
            const cliente = this.clientes[index];
            for (let indexDependente = 0; indexDependente < cliente.Dependentes.length; indexDependente++) {
                console.log(`| ${dependentes.length + 1}: ${cliente.Dependentes[indexDependente].Nome}`);
                dependentes.push({dependente: cliente.Dependentes[indexDependente], titular: cliente});
            }
        }
        
        let indiceDependente = this.entrada.receberNumero(`Digite o número do dependente que deseja selecionar: `);
        indiceDependente--;

        if (indiceDependente >= 0 && indiceDependente < dependentes.length) {
            const dependenteSelecionado = dependentes[indiceDependente];
            console.log(`Dependente selecionado: ${dependenteSelecionado.dependente.Nome}`);
            console.log(`Titular correspondente: ${dependenteSelecionado.titular.Nome}`);
            console.log(dependenteSelecionado.titular);
        } else {
            console.log('Índice de dependente inválido!');
        }
    }
}
