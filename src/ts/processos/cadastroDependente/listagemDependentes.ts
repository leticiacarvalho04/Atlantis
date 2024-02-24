import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[]
    private impressor !: Impressor;
    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        console.clear();
        const cpf = this.entrada.receberNumero("Digite o CPF do cliente que você deseja listar os dependentes:");
        const cliente = this.buscarClientePorCPF(cpf);

        if (cliente) {
            console.log(`Dependentes do cliente ${cliente.Nome}:`);

            if (cliente.Dependentes.length > 0) {
                for (const dependente of cliente.Dependentes) {
                    console.log(dependente);
                }
            } else {
                console.log("Este cliente não possui dependentes.");
            }

            console.log("----------------------");
        } else {
            console.log("Cliente não encontrado.");
        }
    }

    private buscarClientePorCPF(cpf: number): Cliente | undefined {
        return Armazem.InstanciaUnica.Clientes.find(cliente => cliente.Documentos.some(doc => doc.Numero === cpf.toString()));
    }
}
