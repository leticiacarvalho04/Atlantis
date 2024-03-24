import React, { Component } from "react";
import Header from "../componentes/header";

interface State {
    selectedOption: string;
    titular: string;
    titularEncontrado: boolean;
}

export default class CadastroDependente extends Component<{}, State>{
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedOption: "",
            titular: "",
            titularEncontrado: false,
        };
    }

    handleTitularChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ titular: event.target.value });
    }

    buscarTitular = () => {
        let regex;
        switch (this.state.selectedOption) {
            case "cpf":
                regex = /^[0-9]{11}/; 
                break;
            case "rg":
                regex = /^[0-9]{9}$/; 
                break;
            case "passaporte":
                regex = /^.{6,}$/; 
                break;
            default:
                alert("Selecione uma opção válida");
                return;
        }

        if (!regex.test(this.state.titular)) {
            alert("Formato inválido");
            return;
        }
        const titularEncontrado = this.verificarTitular();
        this.setState({ titularEncontrado });
    }

    verificarTitular = () => {
        return true;
    }

    handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
                <div className="flex flex-col items-center justify-center mt-14 pt-5 w-full">
                    <h1 className="mb-10 text-3xl font-light italic" style={{ fontFamily: "'Zilla Slab'" }}>Cadastro de dependentes</h1>
                    <label className="flex flex-col w-2/6 mb-2">
                        <h3>Buscar titular por:</h3>
                    </label>
                    <select className="flex w-2/6 border border-zinc-800/50 rounded-md h-18 mt-2 pl-1" onChange={this.handleSelectChange}>
                        <option value=""></option>
                        <option value="cpf">CPF</option>
                        <option value="rg">RG</option>
                        <option value="passaporte">Passaporte</option>
                    </select>
                    {this.state.selectedOption === "cpf" && (
                        <>
                            <label className="flex flex-col w-2/6 mt-12 mb-5">
                                Digite o número do CPF:
                                <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1" type="text" name="cpf" placeholder="123456789101" onChange={this.handleTitularChange} />
                            </label>
                            <button className="flex flex-col bg-blue-100 border border-blue-300 rounded-xl mt-2 mb-3 w-1/12 h-full text-center items-center" onClick={this.buscarTitular}>Buscar Titular</button>
                        </>
                    )}
                    {this.state.selectedOption === "rg" && (
                        <>
                            <label className="flex flex-col w-2/6 mt-12 mb-5">
                                Digite o número do RG:
                                <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1" type="text" name="rg" placeholder="123456789" onChange={this.handleTitularChange} />
                            </label>
                            <button className="flex flex-col bg-blue-100 border border-blue-300 rounded-xl mt-2 mb-3 w-1/12 h-full text-center items-center" onClick={this.buscarTitular}>Buscar Titular</button>
                        </>
                    )}
                    {this.state.selectedOption === "passaporte" && (
                        <>
                            <label className="flex flex-col w-2/6 mt-12 mb-5">
                                Digite o número do Passaporte:
                                <input className="border border-zinc-800/50 rounded-md h-18 mt-2 pl-1" type="text" name="passaporte" onChange={this.handleTitularChange} />
                            </label>
                            <button className="flex flex-col bg-blue-100 border border-blue-300 rounded-xl mt-2 mb-3 w-1/12 h-full text-center items-center" onClick={this.buscarTitular}>Buscar Titular</button>
                        </>
                    )}
                    {this.state.titularEncontrado && (
                        <div className="flex flex-col items-center w-full">
                            <form className="flex flex-col items-center justify-center w-full">
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
                            <button className="flex flex-col bg-blue-100 border border-blue-300 rounded-xl mt-5 mb-3 w-1/12 h-full text-center items-center" onClick={this.handleSubmit}>Cadastrar</button>
                        </div>
                    )}
                </div>
            </>
        );
    }
}
