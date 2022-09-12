function carregar(){
   //var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data =  new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'fotos/manha.jpg'
        document.body.style.background = "#ae8557"
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'fotos/tarde.jpg'
        document.body.style.background = "#e7dcd8"
    }else {
        //boa noite
        img.src = 'fotos/noite.jpg'
        document.body.style.background = "#154899"
    }

}

