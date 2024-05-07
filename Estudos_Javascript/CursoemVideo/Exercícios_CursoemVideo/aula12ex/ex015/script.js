function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var F_ano = document.getElementById('txtnasc')
    var res = document.getElementById('res')
    if(F_ano.value == 0 || F_ano.value > ano || F_ano.value < 0){
        window.alert('Verifique os dados e tente novamente!')
    } else{
        var F_sex = document.getElementsByName('radsex')
        var idade = ano - Number(F_ano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(F_sex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.style.width = '200px'
                img.style.height = '200px'
                img.style.borderRadius = '50%'
                img.setAttribute('src', 'imagens/criança-M.jpg')
            }else if(idade >= 10 && idade < 21){
                //Adolescente
                img.style.width = '200px'
                img.style.height = '200px'
                img.style.borderRadius = '50%'
                img.setAttribute('src', 'imagens/adolescente-M.jpg')
            }else if(idade >= 21 && idade < 50){
                //Adulto
                img.style.width = '200px'
                img.style.height = '200px'
                img.style.borderRadius = '50%'
                img.setAttribute('src', 'imagens/adulto-M.jpg')
            }else{
                //Idoso
                img.style.width = '200px'
                img.style.height = '200px'
                img.style.borderRadius = '50%'
                img.setAttribute('src', 'imagens/idoso-M.jpg')
            }
        }else if(F_sex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.style.width = '200px'
                img.style.height = '200px'
                img.style.borderRadius = '50%'
                img.setAttribute('src', 'imagens/criança-F.jpg')
            }else if(idade >= 10 && idade < 21){
                //Adolescente
                img.style.width = '200px'
                img.style.height = '200px'
                img.style.borderRadius = '50%'
                img.setAttribute('src', 'imagens/adolescente-F.jpg')
            }else if(idade >= 21 && idade < 50){
                //Adulto
                img.style.width = '200px'
                img.style.height = '200px'
                img.style.borderRadius = '50%'
                img.setAttribute('src', 'imagens/adulto-F.jpg')
            }else{
                //Idoso
                img.style.width = '200px'
                img.style.height = '200px'
                img.style.borderRadius = '50%'
                
                img.setAttribute('src', 'imagens/idoso-F.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
        res.appendChild(img)
        
    }
}