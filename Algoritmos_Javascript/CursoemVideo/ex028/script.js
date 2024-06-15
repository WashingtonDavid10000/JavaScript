function area(){
    let largura = Number(prompt("Digite a largura do terreno: "))
    let comprimento = Number(prompt("Digite o comprimento do terreno: "))
    let area = largura * comprimento
    let res = window.document.getElementById("res")
    if(area < 100){
        res.innerHTML = `
        <p>Classificação do Terreno: Terreno Popular</p>
        `
    }else if(area >= 100 && area < 500){
        res.innerHTML = `
        <p>Classificação do Terreno: Terreno Master</p>
        `
    }else{
        res.innerHTML = `
        <p>Classificação do Terreno: Terreno VIP</p>
        `
    }
}