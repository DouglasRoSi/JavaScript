function contar() {
    ini = document.getElementById('inicio')
    fim = document.getElementById('fim')
    passo = document.getElementById('passo')
    res = document.getElementById('resultado')

    if(ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){

        window.alert('Erro , faltam dados')
        res.innerHTML = 'Impossivel Contar'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(passo.value)
        if(p <= 0){
            window.alert("Passo Invalido")
            p = 1
        }
        if(i < f){
             for(c = i; c <= f ;c += p){
             res.innerHTML += ` ${c} \u{1F449}`

    }
        res.innerHTML += '\u{1F3C1}'
          } else {
                for(c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += '\u{1F3C1}'
        }

   
}

}