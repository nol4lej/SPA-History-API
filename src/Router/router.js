import { Home } from "../views/Home.js"

export const Router = () => {
    const path = window.location.pathname
    const root = document.getElementById("root")
    root.innerHTML = ""

    if(path === "/"){
        const html = Home()
        root.innerHTML = html.innerHTML
    }

    if(path === "/about"){
        root.innerHTML = "Estoy en About"
    }
}



const ManejadorBotones = () => {
    const botones = document.querySelectorAll("a[data-link]")
    botones.forEach(boton => {
        boton.addEventListener("click", (evento) => {
            evento.preventDefault()
            const url = evento.target.href

            // Metodo que actualiza la URL sin actualizar la página actual.
            history.pushState(null, null, url)
            Router()
        })
    })
}
ManejadorBotones()