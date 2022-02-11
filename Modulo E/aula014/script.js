function tabuada() {
    let num = document.getElementById('txtn') //Variaveis
    let tab = document.getElementById('seltab') //Variaveis

    if(num.value.length == 0){ // Caso o Valor esteja vazio, isso nao permite que ele continue
        window.alert('Por favor, Digite um numero!!')
    }else{
        let n = Number(num.value) // conversao
        let c = 1  // Variavel de inicio
        tab.innerHTML = '' //Para aparecer limpo
        while(c <= 10){ // (Enquanto c for menor igual a 10)
            let item = document.createElement('option') // abre as opcoes do select
            item.text = `${n} x ${c} = ${n*c}` // resultado da multiplicacao
            item.value = `tab${c}` //bem mais usado em outras linguagens
            tab.appendChild(item) // Para aparecer no document
            c++ // c = c + 1
        }
    }

    
}