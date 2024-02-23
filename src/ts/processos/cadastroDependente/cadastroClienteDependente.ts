import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";
import Cliente from "../../modelos/cliente";
import CadastrarDocumentosDependente from "./cadastroDocumentosDependente";
import CadastroEnderecoDependente from "./cadastroEnderecoDependente";

export default class CadastroClienteDependente extends Processo {
    private buscarClientePorRG(rg: number): Cliente | undefined {
        return Armazem.InstanciaUnica.Clientes.find(cliente => cliente.Documentos.some(doc => doc.Numero === rg.toString() && doc.Tipo === TipoDocumento.RG));
    }

    processar(): void {
        let rg = this.entrada.receberNumero(`Digite o número de RG do cliente que você deseja adicionar um dependente:`);
        
        // Buscar cliente pelo RG
        let cliente = this.buscarClientePorRG(rg);

        if (cliente) {
            console.log('Cliente encontrado.');

            console.log('Iniciando o cadastro de um novo cliente...')
            let nomeDependente = this.entrada.receberTexto('Qual o nome do dependente?')
            let nomeSocialDependente = this.entrada.receberTexto('Qual o nome social do dependente?')
            let dataNascimentoDependente = this.entrada.receberData('Qual a data de nascimento do dependente?')
            let dependente = new Cliente(nomeDependente, nomeSocialDependente, dataNascimentoDependente)

            // Verifica se cliente não é undefined antes de adicionar dependente
            if (cliente) {
                cliente.adicionarDependente(dependente)

                this.processo = new CadastroEnderecoDependente(cliente)
                this.processo.processar()

                this.processo = new CadastroEnderecoDependente(cliente)
                this.processo.processar()

                this.processo = new CadastrarDocumentosDependente(cliente)
                this.processo.processar()

                let armazem = Armazem.InstanciaUnica
                armazem.Clientes.push(cliente)

                console.log('Finalizando o cadastro do cliente...')
            }
        } else {
            console.log('Cliente não encontrado.');
        }
    }
}
