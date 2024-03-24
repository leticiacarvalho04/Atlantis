import { clear } from "console";
import Processo from "../abstracoes/processo";
import MenuExcluirCliente from "../menus/menuExcluirCliente";
import ExcluirClienteDependente from "./Dependentes/excluirClienteDependente";
import ExcluirClienteTitular from "./Titulares/excluirTitular";

export default class TipoClienteExcluido extends Processo{
    constructor(){
        super()
        this.menu = new MenuExcluirCliente();
    }

    processar(): void {
        clear()
        
        this.menu.mostrar()
        let opcao = this.entrada.receberNumero('Qual opção desejada?')

        switch(opcao){
            case 1:
                this.processo = new ExcluirClienteTitular();
                this.processo.processar();
                break;
            case 2:
                this.processo = new ExcluirClienteDependente();
                this.processo.processar();
                break;
            case 0:
                break;
        }
    }
}