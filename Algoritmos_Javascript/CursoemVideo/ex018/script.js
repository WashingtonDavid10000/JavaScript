function votar(){
    let anoNascimento = Number(prompt("Qual o seu ano de nascimento?: "));
    let anoAtual = Number(prompt("Qual o ano atual?: "));
    let idade = anoAtual - anoNascimento;
    let res = window.document.getElementById("res")
    res.innerHTML = ""
    if(idade > 18){
        res.innerHTML = `
        <p>Sua idade: ${idade}</p>
        <p>Você já tem idade o suficiente para votar!</p>
        `
    }else{
        res.innerHTML = `
        <p>Sua idade: ${idade}</p>
        <p>Você ainda não tem idade suficiente para votar!</p>
        `
    }
}