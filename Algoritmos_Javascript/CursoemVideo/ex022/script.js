function alistamento(){
    let anoNascimento = Number(prompt("Digite o ano de nascimento: "));
    let anoAtual = Number(prompt("Digite o ano atual: "));
    let res = document.querySelector("div#res");
    let idade = anoAtual - anoNascimento;
    if(idade < 18){
        res.innerHTML = `<p>Você está com ${idade} anos de idade.</p>
        <p>faltam ${18-idade} anos para o alistamento.</p>
        `
    }else{
        res.innerHTML = `<p>Você está com ${idade} anos de idade.</p>
        <p>já se passaram ${idade-18} anos desde o alistamento.</p>
        `
    }
}