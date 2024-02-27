import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";
import Telefone from "../../modelos/telefone";
import CadastrarDocumentosCliente from "../Titulares/cadastrarDocumentosCliente";

export default class CadastroClienteDependente extends Processo {
    constructor() {
        super();
    }

    processar(): void {
        let documento = this.entrada.receberNumero(`Digite o número de documento do cliente que você deseja adicionar um dependente:`);
        
        let clienteEncontrado: Cliente | undefined;

        // Procurar cliente pelo documento dentro do array de clientes
        for (const cliente of Armazem.InstanciaUnica.Clientes) {
            for (const documentoCliente of cliente.Documentos) {
                if (documentoCliente.Numero === documento.toString()) {
                    clienteEncontrado = cliente;
                    break;
                }
            }
            if (clienteEncontrado) break;
        }

        if (clienteEncontrado) {
            console.log('Cliente encontrado.');

            console.log('Iniciando o cadastro de um novo cliente...')
            let nomeDependente = this.entrada.receberTexto('| Qual o nome do dependente?')
            let nomeSocialDependente = this.entrada.receberTexto('| Qual o nome social do dependente?')
            let dataNascimentoDependente = this.entrada.receberData('| Qual a data de nascimento do dependente?')
            let dependente = new Cliente(nomeDependente, nomeSocialDependente, dataNascimentoDependente)

            // Clonar o endereço do cliente e atribuir ao dependente
            dependente.Endereco = clienteEncontrado.Endereco.clonar() as Endereco;

            // Clonar os telefones do cliente e atribuir ao dependente
            dependente.Telefones = clienteEncontrado.Telefones.map(telefone => ({ ...telefone })) as Telefone[];

            this.processo = new CadastrarDocumentosCliente(dependente);
            this.processo.processar();

            clienteEncontrado.Dependentes.push(dependente);

            let armazem = Armazem.InstanciaUnica;
            armazem.Clientes.push(clienteEncontrado);
            console.log(clienteEncontrado);

            console.log('Finalizando o cadastro do cliente...');
        } else {
            console.log('Cliente não encontrado.');
        }
    }
}
