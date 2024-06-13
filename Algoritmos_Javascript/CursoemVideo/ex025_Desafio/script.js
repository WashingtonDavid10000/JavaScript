function triangulo(){
    let a = Number(prompt("Digite o valor da 1º reta: "))
    let b = Number(prompt("Digite o valor da 2º reta: "))
    let c = Number(prompt("Digite o valor da 3º reta: "))
    let res = window.document.getElementById("res")
    if((a < (b+c)) && (b < (a+c)) && (c < (a+b))){
        res.innerHTML = "<p>É possível formar um triângulo.</p>"
    }else{
        res.innerHTML = "<p>Não é possível formar um triângulo.</p>"
    }
}