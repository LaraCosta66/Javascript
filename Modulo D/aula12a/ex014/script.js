function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas`


    if( hora >= 00 && hora < 12){
        // bom dia!!
        img.src = 'imagens/Manha.png'
        document.body.style.background = '#d9ab1c'
    }else if( hora >= 12 && hora <=18){
       //Boa tarde!!
       img.src = 'imagens/tarde.png'
       document.body.style.background = '#fcba83'
    } else{
        //Boa noite!!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#1e2736'
    }
}