import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import CadastroAcomodacoes from "./Acomodacao/cadastroAcomodacoes"
import ListagemAcomodacoes from "./Acomodacao/listagemAcomodacao"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoClienteExcluido from "./tipoClienteExcluido"
import TipoEdicaoCliente from "./tipoEdicaoCliente"
import TipoListagemClientes from "./tipoListagemClientes"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')

        // Cadastro das acomodações estáticas
        this.processo = new CadastroAcomodacoes()
        this.processo.processar()

        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break;
            case 2:
                this.processo = new TipoEdicaoCliente()
                this.processo.processar()
                break;
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break;
            case 4:
                this.processo = new TipoClienteExcluido()
                this.processo.processar()
                break;
            case 5:
                this.processo = new ListagemAcomodacoes()
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break;
            default:
                console.log('Opção não entendida :(')
        }
    }
}