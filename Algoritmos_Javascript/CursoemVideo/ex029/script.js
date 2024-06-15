function reajusteSalarial(){
    let nome = prompt("Digite o nome do funcionário: ")
    let salario = Number(prompt(`Digite o salário de ${nome}: `))
    let anosNaEmpresa = Number(prompt("Há quantos anos trabalha na empresa?: "))
    let res = window.document.getElementById("res")
    if(anosNaEmpresa < 3){
        salario = salario*1.03
        res.innerHTML = `
        <p>Reajuste Salarial: +3%</p>
        <p>Novo Salário: R$${salario}</p>
        `
    }else if(anosNaEmpresa >= 3 && anosNaEmpresa < 10){
        salario = salario*1.125
        res.innerHTML = `
        <p>Reajuste Salarial: +12.5%</p>
        <p>Novo Salário: R$${salario}</p>
        `
    }else{  
        salario = salario*1.20
        res.innerHTML = `
        <p>Reajuste Salarial: +20%</p>
        <p>Novo Salário: R$${salario}</p>
        `
    }
}