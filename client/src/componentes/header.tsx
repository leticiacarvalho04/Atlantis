import React, { Component } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

type State = {
    showOptions: boolean;
    showClientes: boolean;
};

export default class Header extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            showOptions: false,
            showClientes: false
        };
    }

    toggleOptions = () => {
        this.setState(prevState => ({
            showOptions: !prevState.showOptions
        }));
    }

    toggleClientes = () => {
        this.setState(prevState => ({
            showClientes: !prevState.showClientes
        }));
    }

    render() {
        return (
            <header className="bg-blue-100">
                <nav className="flex w-full h-16 border-b border-zinc-800 mb-25"> 
                    <h1 className="flex font-bold ml-10 text-3xl mt-2"><a href="/home">Atlantis</a></h1>
                    <ul className="mt-2">
                        <li>
                            <div className="flex flex-row items-center ml-5 mt-2 space-x-7">
                                <div className="flex">
                                    <button onClick={this.toggleClientes} className="flex items-center cursor-pointer">Clientes<RiArrowDropDownLine /></button>
                                    {this.state.showClientes && (
                                        <ul className="absolute flex flex-col items-center rounded-sm bg-blue-100 border border-zinc-800 border-t-0 top-full">
                                            <li>Titulares</li>
                                            <li className="border border-b-0 border-l-0 border-r-0 border-zinc-800">Dependentes</li>
                                            <li className="border border-b-0 border-l-0 border-r-0 border-zinc-800">Dependentes de um Titular</li>
                                        </ul>
                                    )}
                                </div>
                                <div className="relative flex">
                                    <button onClick={this.toggleOptions} className="flex items-center cursor-pointer">Cadastro<RiArrowDropDownLine /></button>
                                    {this.state.showOptions && (
                                        <ul className="absolute flex flex-col items-center rounded-sm bg-blue-100 border border-zinc-800 border-t-0 top-full">
                                            <li><a href="/cadastro/titular">Titular</a></li>
                                            <li className="border border-b-0 border-l-0 border-r-0 border-zinc-800"><a href="/cadastro/dependente">Dependente</a></li>
                                        </ul>
                                    )}
                                </div>
                                <div className="flex">
                                    <p>Acomodações</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
