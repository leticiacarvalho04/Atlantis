import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class ExcluirClienteTitular extends Processo{
    private clientes: Cliente[]

    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();

        for (let index = 0; index < this.clientes.length; index++) {
            console.log(`| ${index + 1}: ${this.clientes[index].Nome}`);
        }
        let indiceCliente = this.entrada.receberNumero(`Digite o número do cliente que deseja excluir: `);
        indiceCliente--;
        
        if (indiceCliente >= 0 && indiceCliente < this.clientes.length) {
            this.clientes.splice(indiceCliente, 1);
            console.log("Cliente excluído com sucesso!");
        } else {
            console.log('Índice de cliente inválido!');
        }
        
    }
}
