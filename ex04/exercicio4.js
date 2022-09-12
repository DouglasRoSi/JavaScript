function gerar() {
    numero =  document.getElementById('numero')
    n = Number(numero.value)
    tabuada = document.getElementById('tabuada')
    if(numero.value.length == 0){
        window.alert('Por favor, digite em numero!')
    } else{
        tabuada.innerHTML = ''
         for(c=1; c<=10; c++){
        item = document.createElement('option')   
        res = c * n
        item.text = `${n} X ${c} = ${res}`
        tabuada.appendChild(item)
        //tabuada.innerHTML += `${n} X ${c} = ${res}`

    }
    }
   

}