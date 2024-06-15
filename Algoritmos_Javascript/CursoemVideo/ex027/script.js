function notaMedia(){
    let nota1 = Number(prompt("Digite a 1º nota: "))
    let nota2 = Number(prompt("Digite a 2º nota: "))
    let media = (nota1 + nota2) / 2
    let res = window.document.getElementById("res")
    if(media < 5){
        res.innerHTML = `
        <p>Média: ${media}</p>
        <p>Situação: Reprovado</p>
        `
    }else if(media > 5 && media < 7){
        res.innerHTML = `
        <p>Média: ${media}</p>
        <p>Situação: Recuperação</p>
        `
    }else{
        res.innerHTML = `
        <p>Média: ${media}</p>
        <p>Situação: Aprovado</p>
        `
    }
}