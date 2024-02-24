import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class ListagemTodosDependentes extends Processo {
    private clientes: Cliente[]
    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        console.clear();
        for (const cliente of this.clientes) {
            console.log(`Dependentes do cliente ${cliente.Nome}:`);

            if (cliente.Dependentes.length > 0) {
                for (const dependente of cliente.Dependentes) {
                    console.log(dependente);
                }
            } else {
                console.log("Este cliente não possui dependentes.");
            }

            console.log("----------------------");
        }
    }
}
