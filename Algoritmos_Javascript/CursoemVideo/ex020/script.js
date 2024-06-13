function ParImpar(){
    let num = Number(prompt("Digite um número: "))
    let res = window.document.querySelector("div#res")
    res.innerHTML = ""
    if(num % 2 == 0){
        res.innerHTML = `
        <p>O número ${num} é par!</p>
        `
    }else{
        res.innerHTML = `
        <p>O número ${num} é ímpar!</p>
        `
    }
}