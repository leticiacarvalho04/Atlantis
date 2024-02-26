import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";
import MenuEditarCliente from "../../menus/menuEditarCliente";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";
import Telefone from "../../modelos/telefone";

export default class EditarClienteDependente extends Processo {
    private clientes: Cliente[];

    private atualizarTelefone(index: number, indexDependente: number): void {
            if (this.clientes[index].Dependentes[indexDependente].Telefones.length > 0) {
                console.log('Telefones do dependente:');
                this.clientes[index].Dependentes[indexDependente].Telefones.forEach((telefone, index) => {
                    console.log(`${index + 1}. DDD: ${telefone.Ddd}, Número: ${telefone.Numero}`);
                });
                const telefoneIndex = this.entrada.receberNumero(`Digite o número correspondente ao telefone que deseja atualizar: `) - 1;
                const novoDdd = this.entrada.receberTexto(`Digite o novo ddd: `);
                const novoNumero = this.entrada.receberTexto(`Digite o novo número: `);
    
                if (telefoneIndex >= 0 && telefoneIndex < this.clientes[index].Dependentes[indexDependente].Telefones.length) {
                    this.clientes[index].Dependentes[indexDependente].Telefones[telefoneIndex] = new Telefone(novoDdd, novoNumero);
                } else {
                    console.log('Índice de telefone inválido.');
                }
            } else {
                console.log('Este dependente não possui um telefone para atualizar.');
            }
        }
    
        private atualizarDocumento(index: number, indexDependente: number): void {
            if (this.clientes[index].Dependentes[indexDependente].Documentos.length > 0) {
                console.log('Documentos do dependente:');
                this.clientes[index].Dependentes[indexDependente].Documentos.forEach((documento, index) => {
                    console.log(`${index + 1}. Tipo: ${documento.Tipo}, Número: ${documento.Numero}`);
                });
                const documentoIndex = this.entrada.receberNumero(`Digite o número correspondente ao documento que deseja atualizar: `) - 1;
                const novoTipo = this.entrada.receberNumero(`Digite o novo tipo de documento (1 - CPF, 2 - RG, 3 - Passaporte): `);
                const novoNumero = this.entrada.receberTexto(`Digite o novo número do documento: `);
    
                if (documentoIndex >= 0 && documentoIndex < this.clientes[index].Dependentes[indexDependente].Documentos.length) {
                    switch (novoTipo) {
                        case 1:
                            this.clientes[index].Dependentes[indexDependente].Documentos[documentoIndex].setTipo(TipoDocumento.CPF);
                            break;
                        case 2:
                            this.clientes[index].Dependentes[indexDependente].Documentos[documentoIndex].setTipo(TipoDocumento.RG);
                            break;
                        case 3:
                            this.clientes[index].Dependentes[indexDependente].Documentos[documentoIndex].setTipo(TipoDocumento.Passaporte);
                            break;
                        default:
                            console.log('Tipo de documento inválido.');
                            return;
                    }
                    this.clientes[index].Dependentes[indexDependente].Documentos[documentoIndex].setNumero(novoNumero);
                } else {
                    console.log('Índice de documento inválido.');
                }
            } else {
                console.log('Este dependente não possui um documento para atualizar.');
            }
        }

    constructor() {
        super();
        this.menu = new MenuEditarCliente();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        const cpf = this.entrada.receberTexto(`| Digite o número de CPF do cliente dependente que você deseja editar:`);
        var processo = false

        for (let index = 0; index < this.clientes.length; index++) {
            for (let indexDependente = 0; indexDependente < this.clientes[index].Dependentes.length; indexDependente++) {
                for (let indexDocumento = 0; indexDocumento < this.clientes[index].Dependentes[indexDependente].Documentos.length; indexDocumento++) {
                    if (cpf === this.clientes[index].Dependentes[indexDependente].Documentos[indexDocumento].Numero) {
                        processo = true
                        this.menu.mostrar();
                        const opcao = this.entrada.receberNumero(`| Selecione uma opção:`);
                        switch (opcao) {
                            case 1:
                                const novoNome = this.entrada.receberTexto(`| Digite novo nome do dependente: `);
                                this.clientes[index].Dependentes[indexDependente].Nome = novoNome;
                                break;
                            case 2:
                                const novoNomeSocial = this.entrada.receberTexto(`| Digite o novo nome do dependente: `);
                                this.clientes[index].Dependentes[indexDependente].NomeSocial = novoNomeSocial;
                                break;
                            case 3:
                                const rua = this.entrada.receberTexto(`| Digite a rua: `);
                                const bairro = this.entrada.receberTexto(`| Digite o bairro: `);
                                const cidade = this.entrada.receberTexto(`| Digite a cidade: `);
                                const estado = this.entrada.receberTexto(`| Digite o estado: `);
                                const pais = this.entrada.receberTexto(`| Digite o país: `);
                                const codigoPostal = this.entrada.receberTexto(`| Digite o código postal: `);
                                const novoEndereco = new Endereco(rua, bairro, cidade, estado, pais, codigoPostal);
                                this.clientes[index].Dependentes[indexDependente].Endereco = novoEndereco;
                                break;
                            case 4:
                                this.atualizarTelefone(index, indexDependente);
                                break;
                            case 5:
                                this.atualizarDocumento(index, indexDependente);
                                break;
                            case 0:
                                break;
                            default:
                                console.log('Opção inválida.');
                        }
                        console.log('Cadastro do cliente atualizado com sucesso!');
                    }
                }
            }
        }
    }
}