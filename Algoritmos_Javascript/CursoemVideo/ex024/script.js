function precoViagem(){
    let distanciaViagem = Number(prompt("Digite a distância que deseja percorrer em KM: "))
    let res = window.document.querySelector("div#res")
    if(distanciaViagem <= 200){
        distanciaViagem = distanciaViagem * 0.50
        res.innerHTML = `<p>Será cobrado R$0,50 por km rodado.</p>
        <p>O valor da viagem será de R$${distanciaViagem}.</p>`
    }else{
        distanciaViagem = distanciaViagem * 0.45
        res.innerHTML = `<p>Será cobrado R$0,45 por km rodado.</p>
        <p>O valor da viagem será de R$${distanciaViagem}.</p>`
    }
    
}