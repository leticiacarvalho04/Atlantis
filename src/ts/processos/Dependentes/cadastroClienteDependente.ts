import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";
import Telefone from "../../modelos/telefone";
import CadastrarDocumentosCliente from "../Titulares/cadastrarDocumentosCliente";

export default class CadastroClienteDependente extends Processo {
    private buscarClientePorCPF(cpf: number): Cliente | undefined {
        return Armazem.InstanciaUnica.Clientes.find(cliente => cliente.Documentos.some(doc => doc.Numero === cpf.toString() && doc.Tipo === TipoDocumento.CPF));
    }

    processar(): void {
        let cpf = this.entrada.receberNumero(`Digite o número de CPF do cliente que você deseja adicionar um dependente:`);
        
        // Buscar cliente pelo CPF
        let cliente = this.buscarClientePorCPF(cpf);

        if (cliente) {
            console.log('Cliente encontrado.');

            console.log('Iniciando o cadastro de um novo cliente...')
            let nomeDependente = this.entrada.receberTexto('Qual o nome do dependente?')
            let nomeSocialDependente = this.entrada.receberTexto('Qual o nome social do dependente?')
            let dataNascimentoDependente = this.entrada.receberData('Qual a data de nascimento do dependente?')
            let dependente = new Cliente(nomeDependente, nomeSocialDependente, dataNascimentoDependente)

            // Clonar o endereço do cliente e atribuir ao dependente
            dependente.Endereco = cliente.Endereco.clonar() as Endereco;

            // Clonar os telefones do cliente e atribuir ao dependente
            dependente.Telefones = cliente.Telefones.map(telefone => ({ ...telefone })) as Telefone[];

            this.processo = new CadastrarDocumentosCliente(dependente);
            this.processo.processar();

            cliente.adicionarDependente(dependente);

            let armazem = Armazem.InstanciaUnica;
            armazem.Clientes.push(cliente);

            console.log('Finalizando o cadastro do cliente...');
        } else {
            console.log('Cliente não encontrado.');
        }
    }
}
