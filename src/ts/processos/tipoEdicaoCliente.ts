import Processo from "../abstracoes/processo";
import MenuTipoClienteEdicao from "../menus/menuTipoClienteEdicao";
import CadastroClienteDependente from "./Dependentes/cadastroClienteDependente";
import EditarClienteDependente from "./Dependentes/editarClienteDependente";
import EditarClienteTitular from "./Titulares/editarClienteTitular";

export default class TipoEdicaoCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoClienteEdicao()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new EditarClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new EditarClienteDependente()
                this.processo.processar()
                break;
            default:
                console.log('Opção não entendida :(')
        }
    }
}