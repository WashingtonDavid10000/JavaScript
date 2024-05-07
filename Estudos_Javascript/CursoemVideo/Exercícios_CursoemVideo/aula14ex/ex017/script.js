function tabuada(){
    let txtnum = window.document.querySelector('input#txtnum')
    let tab = window.document.querySelector('select#sel_tab')
    if(txtnum.value.length == 0){
        alert('Por favor, digite um número!')
    }else{
        let num = Number(txtnum.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}