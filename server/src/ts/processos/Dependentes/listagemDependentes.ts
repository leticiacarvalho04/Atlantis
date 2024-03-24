import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorCliente from "../../impressores/impressorCliente";
import Cliente from "../../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[];
    private impressor!: ImpressorCliente;

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        const documento = this.entrada.receberNumero("Digite o Documento do cliente que você deseja listar os dependentes:");

        // Encontrar o cliente pelo documento
        const cliente = this.clientes.find(cliente => cliente.Documentos.some(doc => doc.Numero === documento.toString()));

        if (cliente) {
            console.log(`Dependentes do cliente ${cliente.Nome}:`);

            if (cliente.Dependentes.length > 0) {
                this.impressor = new ImpressorCliente(cliente);
                console.log(this.impressor.imprimir());
            } else {
                console.log("Este cliente não possui dependentes.");
            }

            console.log("----------------------");
        } else {
            console.log("Cliente não encontrado.");
        }
    }
}
