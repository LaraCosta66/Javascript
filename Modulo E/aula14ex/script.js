function contar() {
    let inc = document.getElementById('initial')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if(inc.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO]Verifique se as informacoes estao corretas')
    } else{
        res.innerHTML = 'Contando: <br> '
        let i = Number(inc.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <=0){
            window.alert('Passo invalido! Considerando passo 1')
            p = 1
        }
        if( i < f) //contagem crescente
        for(let c = 1; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
        } else{// Contagem regressiva
            for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
        }
    }

}