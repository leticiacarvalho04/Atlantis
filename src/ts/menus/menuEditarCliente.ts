import Menu from "../interfaces/menu";

export default class MenuEditarCliente implements Menu {
    mostrar(): void {
        console.log(`****************************`)
        console.log(`| Por favor, selecione uma opção...`)
        console.log(`----------------------`)
        console.log(`| Opções para cliente:`)
        console.log(`----------------------`)
        console.log(`| 1 - Editar nome`)
        console.log(`| 2 - Editar nome social`)
        console.log(`| 3 - Editar data de nascimento`)
        console.log(`| 4 - Editar endereço`)
        console.log(`| 5 - Editar telefone(s)`)
        console.log(`| 6 - Editar documentos`)
    }
}