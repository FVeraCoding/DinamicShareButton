document.addEventListener("DOMContentLoaded", () => {

    const botonCompartir = document.querySelector(".compartir");
    const imagenCompartir = document.querySelector("#imagen-compartir");

    const imagenRedes = document.querySelectorAll(".imagenRed");
    const redes = document.querySelector(".redes");
    console.log(imagenRedes);

    botonCompartir.addEventListener("click", (e) => {

        
        console.log(redes);

        if(botonCompartir.className === "compartir"){
            botonCompartir.classList.remove("compartir");
            botonCompartir.classList.add("compartir_activo");
            imagenCompartir.src = "images/icon-share-active.svg";
            imagenCompartir.alt = "share-active";
            redes.style.display = "flex"
        }else{
            const imagenRedesArray = Array.from(imagenRedes);

            if(e.target != redes && !imagenRedesArray.includes(e.target)){
                botonCompartir.classList.remove("compartir_activo");
                botonCompartir.classList.add("compartir");
                imagenCompartir.src = "images/icon-share.svg";
                imagenCompartir.alt = "share";
                redes.style.display = "none";
            }
            
        }
        
    })




})