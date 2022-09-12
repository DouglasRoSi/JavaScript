    numero = document.getElementById('numero')
    n = Number(numero.value)
    cxt = document.getElementById('cxt')
    cx = document.getElementById('cx')
    valor = []
    

function inLista(u, l){
    if (l.indexOf(u) != -1){
        return true
    } else {
        return false
    }

}

function adicionar() {
    if(numero.value.length == 0) {
        window.alert('[Erro]Digite um numero!')

    } else if(numero.value > 100 || 
        numero.value == 0 ) {
        window.alert('Por favor digitem um numero entre 1 e 100!')

    } else if (!inLista(numero.value, valor)){
        valor.push(numero.value)
        item = document.createElement('option')
        item.text = `Seu numero digitado foi ${numero.value}`
        cxt.appendChild(item)
        cx.innerHTML = ''
    }
    numero.value = ''
    numero.focus()
   
} 
function finalizar(){
        if(valor.length == 0 ) {
            window.alert("[ERRO]Ação invalida!")
        } else {
            tot = valor.length
            maior = valor[0]
            menor = valor[0]
            soma = 0
            media = 0
            for(let pos in valor){
                soma += Number(valor[pos])
                if (valor[pos] > maior)
                    maior = valor[pos]
                if (valor[pos] < menor)
                    menor = valor[pos]  
            }
            media = soma / tot
            cx.innerHTML = `Ao todo temos ${tot} elementos. O maior valor informado foi ${maior}. O menor valor informado foi ${menor}. Somando todos os valores, temos ${soma}. A media de todos os valores é ${media}.`
        }
    }

