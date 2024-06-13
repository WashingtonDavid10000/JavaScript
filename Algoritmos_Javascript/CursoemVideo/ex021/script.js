function anoBissexto(){
    let ano = Number(prompt("Digite o ano: "));
    let res = document.getElementById("res")
    if((ano%4==0 && ano%100!=0) || ano%400==0){
        res.innerHTML = `<p>${ano} é BISSEXTO</p>`
    }else{
        res.innerHTML = `<p>${ano} não é BISSEXTO</p>`
    }
}