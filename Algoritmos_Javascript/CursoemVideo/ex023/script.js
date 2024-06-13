function diaDaMulher(){
    let nome = prompt("Digite o nome: ")
    let sexo = prompt("Digite o sexo[m/h]: ")
    let valorCompras = Number(prompt("Digite o valor das compras: "))
    let res = window.document.getElementById("res")
    
    if(sexo == "m"){
        valorCompras = valorCompras*0.87
        res.innerHTML = `<p>${nome} é mulher e recebeu um desconto de 13%.</p>
        <p>no final pagou R$${valorCompras}.</p>`
    }else if(sexo == "h"){
        valorCompras = valorCompras*0.95
        res.innerHTML = `<p>${nome} é homem e recebeu um desconto de 5%.</p>
        <p>no final pagou R$${valorCompras}.</p>`
    }
    
}