function contar(){
    let txtinicio = window.document.getElementById("txtinicio")
    let txtfim = window.document.getElementById("txtfim")
    let txtpasso = window.document.getElementById("txtpasso")
    let res = window.document.getElementById("res")

    
    
    if(txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
        alert('[ERRO] tente novamente')
    }else{
        let inicio = Number(txtinicio.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)
        res.innerHTML = '<p>Contando...</p>'
        if(passo == 0){
            alert('passo invalido! considerando passo 1')
            passo = 1
        }

        if(inicio < fim){
            while(inicio <= fim){
                res.innerHTML += `${inicio} &#x1F449;`
                inicio += passo  
                if(inicio == fim){
                    res.innerHTML += '&#x1F3C1;'
                }
            }
        }else{
            while(inicio >= fim){
                res.innerHTML += `${inicio} &#x1F449; `
                inicio -= passo  
                if(inicio == fim){
                    res.innerHTML += '&#x1F3C1;'
                }
            }
        }
    }



    
    
}