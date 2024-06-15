function comparacao(){
    let a = Number(prompt("Digite o 1º valor: "))
    let b = Number(prompt("Digite o 2º valor: "))
    let res = window.document.querySelector("div#res")
    if(a > b){
        res.innerHTML = `<p>O primeiro valor é maior.</p>`
    }else if(a < b){
        res.innerHTML = `<p>O segundo valor é maior.</p>`
    }else{
        res.innerHTML = `<p>Não existe valor maior, os dois são iguais.</p>`
    }
}