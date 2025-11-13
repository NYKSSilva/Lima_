let res = document.getElementById(r)
let azul = "#836FFF";
let vermelho = "#FF0000"
let conferencia = true;
res.addEventListener("click",()=>{
    if (conferencia === true){
        res.style.backgroundColor = vermelho
        conferencia=false
    }else {
        res.style.backgroundColor=azul
        conferencia = true
    }
})
