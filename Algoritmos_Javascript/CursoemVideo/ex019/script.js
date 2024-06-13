function situacao(){
    let nota1 = Number(prompt("Digite a primeira nota do aluno: "))
    let nota2 = Number(prompt("Digite a segunda nota do aluno: "))
    let media = (nota1 + nota2) / 2
    let res = window.document.querySelector("div#res")
    res.innerHTML = ""
    if(media < 7){
        res.innerHTML = `
        <p>A média do aluno foi: ${media}</p>
        <p>O aluno não teve um bom aproveitamento.</p>
        `
    }else{
        res.innerHTML = `
        <p>A média do aluno foi: ${media}</p>
        <p>O aluno teve um bom aproveitamento.</p>
        `
    }
}