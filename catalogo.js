import catalogo from "./bebidas.js";



const id = document.getElementById("main")

let htmlR = ``;

catalogo.bebidas.forEach((b) => {
    htmlR += `
    <article class="catalogo_articulo">
        <img src=${b.img} class="catalogo_img">
        <h4 class="catalogo_h4">${b.nombre}</h4>
        <p class="catalogo_p">${b.precio}</p>
    </article> 
`
})


id.innerHTML = htmlR


