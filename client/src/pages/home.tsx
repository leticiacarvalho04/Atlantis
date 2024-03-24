import React, { Component } from "react";
import Header from "../componentes/header";

export default class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <h1 className="flex items-center justify-center h-10 m-10 text-xl italic mb-15">Bem vindos ao sistema Atlantis!</h1>
                
                <div className="w-full flex justify-center items-center mb-20">
                    <div className="w-full m-10 mt-0 mb-0 p-5 pt-0 pb-0 grid grid-cols-3 gap-10 flex-grow">

                        <div className="flex flex-col border border-zinc-800 rounded-xl aspect-w-1 aspect-h-1 relative">
                            <img src="/casal-simples.jpg" className="h-1/2 w-full object-cover rounded-xl rounded-b-none" alt="Casal Simples" />
                            <div className="mt-0 flex flex-col justify-center items-center">
                                <h3 className="flex font-bold mt-3 mb-0">Casal Simples</h3>
                                <p className="flex text-center m-5 mb-0">                                   
                                    Esta acomodação é ideal para casais, proporcionando conforto com cama de casal, climatização, suíte e garagem para uma estadia simples e agradável.
                                </p>
                                <button className="flex text-center justify-center items-center bg-slate-300 border border-zinc-500 h-10 w-28 m-5 rounded-lg">Ver mais</button>
                            </div>
                        </div>

                        <div className="flex flex-col border border-zinc-800 rounded-xl aspect-w-1 aspect-h-1 relative">
                            <img src="/familia-mais.jpg" className="h-1/2 w-full object-cover rounded-xl rounded-b-none" alt="Família mais" />
                            <div className="mt-0 flex flex-col justify-center items-center">
                                <h3 className="flex font-bold mt-3 mb-0">Família Mais</h3>
                                <p className="flex text-center m-5 mb-0">
                                    Esta acomodação é perfeita para grupos pequenos ou famílias, oferecendo conforto e praticidade com várias camas, climatização, garagem e suítes.                                </p>
                                <button className="flex text-center justify-center items-center bg-slate-300 border border-zinc-500 h-10 w-28 m-5 rounded-lg">Ver mais</button>
                            </div>
                        </div>
                        
                        <div className="flex flex-col border border-zinc-800 rounded-xl aspect-w-1 aspect-h-1 relative">
                            <img src="/familia-simples.jpeg" className="h-1/2 w-full object-cover rounded-xl rounded-b-none" alt="Familia simples" />
                            <div className="mt-0 flex flex-col justify-center items-center">
                                <h3 className="flex font-bold mt-3 mb-0">Família Simples</h3>
                                <p className="flex text-center m-5 mb-0">
                                    Esta acomodação oferece conforto e praticidade com cama de casal, duas camas de solteiro, climatização, garagem e suíte para uma estadia aconchegante.
                                </p>
                                <button className="flex text-center justify-center items-center bg-slate-300 border border-zinc-500 h-10 w-28 m-5 rounded-lg">Ver mais</button>
                            </div>
                        </div>

                        <div className="border border-zinc-800 rounded-xl aspect-w-1 aspect-h-1 relative">
                            <img src="/familia-super.jpeg" className="h-1/2 w-full object-cover rounded-xl rounded-b-none" alt="Familia super" />
                            <div className="mt-0 flex flex-col justify-center items-center">
                                <h3 className="flex font-bold mt-3 mb-0">Família Super</h3>
                                <p className="flex text-center m-5 mb-0">                                   
                                Esta acomodação espaçosa é perfeita para grupos maiores. Com múltiplas camas de casal e solteiro, climatização, garagem e suítes, oferece conforto e praticidade para uma estadia agradável.
                                </p>
                                <button className="flex text-center justify-center items-center bg-slate-300 border border-zinc-500 h-10 w-28 m-5 rounded-lg">Ver mais</button>
                            </div>
                        </div>

                        <div className="border border-zinc-800 rounded-xl aspect-w-1 aspect-h-1 relative">
                            <img src="/solteiro-simples.jpg" className="h-1/2 w-full object-cover rounded-xl rounded-b-none" alt="Solteiro simples" />                            
                            <div className="mt-0 flex flex-col justify-center items-center">
                                <h3 className="flex font-bold mt-3 mb-0">Solteiro Simples</h3>
                                <p className="flex text-center m-5 mb-0">                                    
                                    Esta acomodação individual oferece conforto e praticidade. Com uma cama de solteiro, climatização e uma suíte disponível, é ideal para uma estadia confortável e conveniente.                                </p>
                                <button className="flex text-center justify-center items-center bg-slate-300 border border-zinc-500 h-10 w-28 m-5 rounded-lg">Ver mais</button>
                            </div>
                        </div>

                        <div className="border border-zinc-800 rounded-xl aspect-w-1 aspect-h-1 relative">
                            <img src="/solteiro-mais.jpg" className="h-1/2 w-full object-cover rounded-xl rounded-b-none" alt="Solteiro mais" />
                            <div className="m-0 flex flex-col justify-center items-center">
                                <h3 className="flex font-bold mt-3 mb-0">Solteiro Mais</h3>
                                <p className="flex text-center m-5 mb-0">
                                    Esta acomodação é perfeita para uma estadia individual confortável. Com uma cama de solteiro, climatização e uma suíte disponível, oferece um ambiente agradável e conveniente para o hóspede.
                                </p>
                                <button className="flex text-center justify-center items-center bg-slate-300 border border-zinc-500 h-10 w-28 m-5 rounded-lg">Ver mais</button>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}
