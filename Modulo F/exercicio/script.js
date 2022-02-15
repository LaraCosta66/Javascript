let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function numero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
         return true
    } else{
    return false
   }

}
function inlista(n, l){
    if(l.indexOf(Number(n)) !=  -1){
        return true
    }else{
        return false
    }
}


function adicionar() {
    if(numero(num.value) && !inlista(num.value)){
        valores.push(Number(num.value))
        
    }else{
        window.alert('Valor invalido ou ja adicionado')
    }
    
}
function finalizar() {
    
}