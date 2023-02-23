const experiencia =document.getElementById ("experiencia");
const habilidades =document.getElementById ("habilidades");
const pagina2 = document.getElementById("pagina2");
const volver = document.getElementById("volver");

experiencia.addEventListener("click", ()=>{
    pagina2.classList.add("mover");
});

habilidades.addEventListener("click", ()=>{
    pagina2.classList.add("mover");
});


volver.addEventListener("click", ()=>{
    pagina2.classList.remove("mover");
})




