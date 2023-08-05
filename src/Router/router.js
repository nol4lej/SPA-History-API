export const Router = () => {
    
}

const ManejadorBotones = () => {
    const botones = document.querySelectorAll("a[data-link]")
    
    botones.forEach(boton => {
        boton.addEventListener("click", (evento) => {
            evento.preventDefault()
            const url = evento.target.href

            // Metodo que actualiza la URL sin actualizar la página actual.
            history.pushState(null, null, url)
        })
    })

}
ManejadorBotones()