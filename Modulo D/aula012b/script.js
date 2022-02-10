function verificar() {

   var data = new Date()
    var ano = data.getFullYear()
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

    }
    /* if(fsex[0].checked){
        genero = 'Homem'
        if(idade >=0 && idade <10){
            //Crianca
            img.setAttribute('src','imagens/bebemenino.png') 
        }
        } else if(idade < 21){
            //Jovem
            img.setAttribute('src','imagens/jovemhomem.png') 
        }else if (idade < 50){
            //Adulto
            img.setAttribute('src','imagens/adultohomem.png')
        }else {
            //Idioso
            img.setAttribute('src', 'imagens/idosohomem.png')
        } if(fsex[1].checked){
            genero = 'Mulher'
             }if(idade >=0 && idade <10){
             //Crianca
             img.setAttribute('src','imagens/bebe.png')
            } else if(idade < 21){
            //Jovem
            img.setAttribute('src','imagens/jovemulher.png')

             }else if (idade < 50){
             //Adulto
             img.setAttribute('src','imagens/adultomulher.png')

            }else {
             //Idioso
             img.setAttribute('src','imagens/Idosamulher.png')

            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
            res.appendChild(img)` */
}  
//Atualizar e verificar ainda está dando erro.