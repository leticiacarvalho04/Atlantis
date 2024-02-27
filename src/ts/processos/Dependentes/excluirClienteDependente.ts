import { clear } from "console";
import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import Armazem from "../../dominio/armazem";

export default class ExcluirClienteDependente extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        clear();

        for (let index = 0; index < this.clientes.length; index++) {
            console.log(`| ${index + 1}: ${this.clientes[index].Nome}`);
        }
        let indiceCliente = this.entrada.receberNumero(`Digite o número do cliente que deseja excluir: `);
        indiceCliente--;

        if (indiceCliente >= 0 && indiceCliente < this.clientes.length) {
            this.clientes[indiceCliente].Dependentes.splice(0, this.clientes[indiceCliente].Dependentes.length);
            console.log("Dependentes do cliente excluídos com sucesso!");
        } else {
            console.log('Índice de cliente inválido!');
        }
    }
}
