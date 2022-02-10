function verificar() {

   var data = new Date() //ano atual
    var ano = data.getFullYear() //Ano completo
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[erro] Verifique se os dados estão corretos')
    } else{
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
               img.setAttribute('src', 'bebemenino.png')
            } else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50){
                //Adulto
              img.setAttribute('src', 'adultohomem.png')

            } else{
                //IDOSO
                img.setAttribute('src', 'idosohomem.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher' 
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'jovemulher.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adultomulher.png')
            } else{
                //IDOSO
                img.setAttribute('src', 'Idosamulher.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}