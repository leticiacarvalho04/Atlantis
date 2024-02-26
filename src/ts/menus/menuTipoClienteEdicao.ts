import Menu from "../interfaces/menu";

export default class MenuTipoClienteEdicao implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual tipo de cliente deseja editar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Titulares`)
        console.log(`| 2 - Dependentes`)
        console.log(`----------------------`)
    }
}