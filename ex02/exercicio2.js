function verificar(){
    data = new Date()
    anoA = data.getFullYear()
    ano = document.getElementById('ano')
    res = document.getElementById('frase')
    
    if(ano.value.length == 0 || ano.value > anoA){
        window.alert('[Erro] Verifique os dados e tente novamente')
    } else{
        sexo = document.getElementsByName('radsex')
        idade = anoA - ano.value
        genero = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <10){
                //Crianca
                img.setAttribute('src', 'fotos/menino-crianca.jpg')
            } else if(idade < 21) {
                //Adolecente
                img.setAttribute('src', 'fotos/menino-adolecente.jpg')
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotos/homem-jovem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'fotos/idoso.jpg')
            }
        } else if(sexo[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                //Crianca
                img.setAttribute('src', 'fotos/menina-crianca.jpg')
            } else if(idade < 21) {
                //Adolecente
                img.setAttribute('src', 'fotos/menina-adolecente.jpg')
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotos/mulher-jovem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'fotos/idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}