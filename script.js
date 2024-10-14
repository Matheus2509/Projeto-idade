function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("#txtano")
    var res = document.querySelector("#resp")
    if (fano.value.length == 0 || fano.value > ano){
        alert("Preencha os dados corretos!!!")
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'img/menino-removebg-preview.png')
            }
            else if(idade < 20){
                img.setAttribute('src', 'img/jovem-homem-removebg-preview.png')
            }
            else if(idade < 50){
                img.setAttribute('src', 'img/homem-removebg-preview.png')
            }
            else{
                img.setAttribute('src', 'img/idoso-removebg-preview.png')
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 12){
                img.setAttribute('src', 'img/menina-removebg-preview.png')
            }
            else if(idade < 20){
                img.setAttribute('src', 'img/jovem-mulher-removebg-preview.png')
            }
            else if(idade < 50){
                img.setAttribute('src', 'img/mulher-removebg-preview.png')
            }
            else{
                img.setAttribute('src', 'img/idosa-removebg-preview.png')
            }
        }

        res.innerHTML = `Você é ${genero} e tem ${idade} anos.`
        res.appendChild(img)
    }
}
