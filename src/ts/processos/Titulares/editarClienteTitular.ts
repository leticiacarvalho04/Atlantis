import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";
import MenuEditarCliente from "../../menus/menuEditarCliente";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";
import Telefone from "../../modelos/telefone";

export default class EditarClienteTitular extends Processo{
    private clientes: Cliente[]
    constructor(){
        super()
        this.menu = new MenuEditarCliente()
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear()
        let documento = this.entrada.receberNumero(`Digite o número do documento do cliente que você deseja editar:`);
        
        let clienteEncontrado: Cliente | undefined;

        // Procurar cliente pelo documento dentro do array de clientes
        for (const cliente of this.clientes) {
            for (const documentoCliente of cliente.Documentos) {
                if (documentoCliente.Numero === documento.toString()) {
                    clienteEncontrado = cliente;
                    break;
                }
            }
            if (clienteEncontrado) break;
        }

        if(clienteEncontrado){
            console.log('Iniciando a edição do cadastro do cliente...')
            this.menu.mostrar();
            let opcao = this.entrada.receberNumero(`Selecione uma opção:`);
            switch(opcao){
                case 1:
                    let novoNome = this.entrada.receberTexto(`| Digite novo nome do cliente: `)
                    clienteEncontrado.Nome = novoNome;
                    break;
                case 2:
                    let novoNomeSocial = this.entrada.receberTexto(`| Digite o novo nome do cliente: `)
                    clienteEncontrado.NomeSocial = novoNomeSocial;
                    break;
                case 3:
                    let rua = this.entrada.receberTexto(`| Digite a rua: `)
                    let bairro = this.entrada.receberTexto(`| Digite o bairro: `)
                    let cidade = this.entrada.receberTexto(`| Digite a cidade: `)
                    let estado = this.entrada.receberTexto(`| Digite o estado: `)
                    let pais = this.entrada.receberTexto(`| Digite o país: `)
                    let codigoPostal = this.entrada.receberTexto(`| Digite o código postal: `)
                    let novoEndereco = new Endereco(rua,bairro,cidade,estado,pais,codigoPostal)
                    clienteEncontrado.Endereco = novoEndereco;
                    break;
                case 4:
                    if (clienteEncontrado.Telefones.length > 0) {
                        if(clienteEncontrado.Telefones.length === 1 ){
                            let novoDdd = this.entrada.receberTexto(`| Digite o novo ddd: `)
                            let novoNumero = this.entrada.receberTexto(`| Digite o novo número: `)
                            clienteEncontrado.Telefones[0] = new Telefone(novoDdd,novoNumero)
                        } else {
                            console.log('Telefones do cliente:');
                            clienteEncontrado.Telefones.forEach((telefone, index) => {
                            console.log(`| ${index + 1}. DDD: ${telefone.Ddd}, Número: ${telefone.Numero}`);
                            });
                            let index = this.entrada.receberNumero(`| Digite o número correspondente ao telefone que deseja atualizar: `) - 1;
                            let novoDdd = this.entrada.receberTexto(`| Digite o novo ddd: `)
                            let novoNumero = this.entrada.receberTexto(`| Digite o novo número: `)
                            
                            if (index >= 0 && index < clienteEncontrado.Telefones.length) {
                                clienteEncontrado.Telefones[index] = new Telefone(novoDdd,novoNumero)
                            } else {
                                console.log('| Índice de telefone inválido.')
                            }
                        }
                    } else {
                        console.log('Este cliente não possui um telefone para atualizar.')
                    }
                    break;
                case 5:
                    if(clienteEncontrado.Documentos.length > 0){
                        console.log('Documentos do cliente:');
                        clienteEncontrado.Documentos.forEach((documento, index) => {
                            console.log(`| ${index + 1}. Tipo: ${documento.Tipo}, Número: ${documento.Numero}`);
                        });
                        let index = this.entrada.receberNumero(`| Digite o número correspondente ao documento que deseja atualizar: `) - 1;
                        let novoTipo = this.entrada.receberNumero(`| Digite o novo tipo de documento (1 - CPF, 2 - RG, 3 - Passaporte): `)
                        let novoNumero = this.entrada.receberTexto(`| Digite o novo número do documento: `)
                        if (index >= 0 && index < clienteEncontrado.Documentos.length) {
                            switch(novoTipo) {
                                case 1:
                                    clienteEncontrado.Documentos[index].setTipo(TipoDocumento.CPF);
                                    break;
                                case 2:
                                    clienteEncontrado.Documentos[index].setTipo(TipoDocumento.RG);
                                    break;
                                case 3:
                                    clienteEncontrado.Documentos[index].setTipo(TipoDocumento.Passaporte);
                                    break;
                                default:
                                    console.log('Tipo de documento inválido.');
                                    return; 
                            }
                            clienteEncontrado.Documentos[index].setNumero(novoNumero);
                        } else {
                            console.log('Índice de documento inválido.')
                        }
                    } else {
                        console.log('Este clienteEncontrado não possui um documento para atualizar.')
                    }
                    break;                    
            }
            console.log('Cadastro do cliente atualizado com sucesso!');
        } else {
            console.log('Cliente não encontrado.');
        }
    }
}
