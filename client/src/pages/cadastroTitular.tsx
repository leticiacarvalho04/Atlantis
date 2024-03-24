import React, { Component } from "react";
import Header from "../componentes/header";

interface State {
    selectedOption: string;
}

export default class CadastroTitular extends Component<{}, State>{
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedOption: "",
        };
    }

    handleSelectChange = (event:any) => {
        this.setState({ selectedOption: event.target.value });
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(this.state);
        alert('Cadastrado com sucesso!');
    }

    render(){
        return(
            <>
                <Header />
                <div className="flex flex-col items-center w-full">
                    <h1 className="mt-10 pt-5 text-3xl font-light italic" style={{ fontFamily: "'Zilla Slab'" }}>Cadastro de titular</h1>
                    <form className="flex flex-col items-center justify-center mt-5 pt-5 w-full">
                        <label className="flex flex-col w-2/6 mb-5">
                            Nome:
                            <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1" type="text" name="nome" />
                        </label>
                        <label className="flex flex-col w-2/6 mb-5">
                            Nome Social:
                            <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1" type="text" name="nomeSocial" />
                        </label>
                        <label className="flex flex-col w-2/6 mb-5">
                            Data nascimento:
                            <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1" type="date" name="email"  />
                        </label>
                    </form>

                    <form className="flex flex-col items-center justify-center mt-5 pt-5 w-full">
                        <label className="flex flex-col w-2/6 mb-5">
                            <h3 className="text-lg font-semibold">Endereço</h3>
                        </label>
                        <label className="flex flex-col w-2/6 mb-5">
                            Rua:
                            <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1" type="text" name="nome" />
                        </label>
                        <label className="flex flex-col w-2/6 mb-5">
                            Bairro:
                            <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1" type="text" name="nome" />
                        </label>
                        <label className="flex flex-col w-2/6 mb-5">
                            Cidade:
                            <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1" type="text" name="nome" />
                        </label>
                        <label className="flex flex-col w-2/6 mb-5">
                            Estado:
                            <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1" type="text" name="nome" />
                        </label>
                        <label className="flex flex-col w-2/6 mb-5">
                            País:
                            <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1" type="text" name="nome" />
                        </label>
                        <label className="flex flex-col w-2/6 mb-5">
                            Código Postal:
                            <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1" type="text" name="nome" />
                        </label>
                    </form>

                    <form className="flex flex-col items-center justify-center mt-5 pt-5 w-full">
                        <label className="flex flex-col w-2/6 mb-5">
                            <h3 className="text-lg font-semibold">Telefone</h3>
                        </label>
                        <label className="flex flex-col w-2/6 mb-5">
                            DDD:
                            <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1" type="tel" placeholder="12" name="nome" />
                        </label>
                        <label className="flex flex-col w-2/6 mb-5">
                            Número:
                            <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1" type="tel" placeholder="12345-6789" pattern="[0-9]{2}-(0-9){2}-[0-9]{3}" required name="nome" />
                        </label>
                    </form>

                    <div className="flex flex-col items-center justify-center mt-5 pt-5 w-full">
                            <label className="flex flex-col w-2/6 mb-2">
                                <h3>Tipo documento a cadastrar:</h3>
                            </label>
                            <select className="flex w-2/6 border border-zinc-800/50 rounded-md h-18 mt-2 pl-1" onChange={this.handleSelectChange}>
                                <option value=""></option>
                                <option value="cpf">CPF</option>
                                <option value="rg">RG</option>
                                <option value="passaporte">Passaporte</option>
                            </select>

                            {this.state.selectedOption === 'cpf' && (
                                <>
                                <label className="flex flex-col w-2/6 mt-2">
                                    <h3>Digite o número do CPF:</h3>
                                </label>
                                <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1 w-1/3" type="text" placeholder="123456789101" />
                                <label className="flex flex-col w-2/6 mt-2">
                                    <h3>Data de expedição:</h3>
                                </label>
                                <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1 w-1/3" type="date" placeholder="Data de Expedição" />
                                </>
                            )}

                            {this.state.selectedOption === 'rg' && (
                                <>
                                    <label className="flex flex-col w-2/6 mt-2">
                                        <h3>Digite o número do RG:</h3>
                                    </label>
                                    <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1 w-1/3" type="text" placeholder="123456789" />
                                    <label className="flex flex-col w-2/6 mt-2">
                                        <h3>Data de expedição:</h3>
                                    </label>
                                    <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1 w-1/3" type="date" placeholder="Data de Expedição" />
                                </>
                            )}

                            {this.state.selectedOption === 'passaporte' && (
                                <>
                                    <label className="flex flex-col w-2/6 mt-2">
                                        <h3>Digite o número do Passaporte:</h3>
                                    </label>
                                    <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1 w-1/3" type="text" placeholder="Digite seu Passaporte" />
                                    <label className="flex flex-col w-2/6 mt-2">
                                        <h3>Data de expedição:</h3>
                                    </label>
                                    <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1 w-1/3" type="date" placeholder="Data de Expedição" />
                                </>
                            )}
                    </div>

                    <button className="flex flex-col bg-blue-100 border border-blue-300 rounded-xl mt-5 mb-10 w-1/12 h-full text-center items-center" onClick={this.handleSubmit}>Enviar</button>    
                </div>
            </>
        )
    }
}