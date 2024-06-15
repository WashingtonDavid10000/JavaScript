function trianguloTipo(){
    let a = Number(prompt("Digite a 1° reta: "))
    let b = Number(prompt("Digite a 2º reta: "))
    let c = Number(prompt("Digite a 3º reta: "))
    let res = window.document.querySelector("div#res")
    if((a < b+c) && (b < a+c) && (c < a+b)){
        if(a == b && a == c){
            res.innerHTML = `
            <p>Tipo de triangulo: Equilátero </p>
            `
        }else if((a == b && a != c) || (b == c && b != a) || (c == a && c != b)){
            res.innerHTML = `
            <p>Tipo de triangulo: Isósceles</p> 
            `
        }else if(a != b && a != c && b != c){
            res.innerHTML = `
            <p>Tipo de triangulo: Escaleno</p>
            `
        }
    }else{
        res.innerHTML = `
        <p>Não é possível formar um triângulo. </p>
        `
    }
    
}