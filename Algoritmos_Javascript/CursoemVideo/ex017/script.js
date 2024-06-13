function multa(){
    let velocidade = Number(prompt("A qual velocidade você está dirigindo?: "));
    let res = window.document.getElementById("res");
    res.innerHTML = "";
    if(velocidade > 80){
        res.innerHTML = `
        <p>Sua velocidade média é de: ${velocidade} km/h.</p>
        <p>Você ultrapassou a velocidade média de 80 km/h, vosmecê será multado!</p>
        <p>Você terá que pagar R$${(velocidade-80)*5} de multa.</p>
        `
    }else{
        res.innerHTML = `
        <p>Sua velocidade média é de: ${velocidade} km/h.</p>
        <p>Continue dirigindo com segurança.</p>`
    }

    
    
    

}