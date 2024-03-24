import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import Telefone from "../../modelos/telefone";

export default class CadastroTelefoneTitular extends Processo{
    private cliente: Cliente

    constructor(cliente:Cliente){
        super()
        this.cliente = cliente
    }

    processar(): void {
        let quantidade = this.entrada.receberNumero('| Quantos telefones serão cadastrados?')
        for(let index=0; index < quantidade; index++){
            console.log('Coletando os dados de telefone...');
            let ddd = this.entrada.receberTexto('| Qual o seu ddd?')
            let numero = this.entrada.receberTexto('| Qual o seu número?')
            let telefone = new Telefone(ddd,numero)
            this.cliente.Telefones.push(telefone)

            console.log(`----------------------`)
        }
    }
}