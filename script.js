function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        if (fsex [0].checked) {
            genero = 'Homem'
            if (idade >0 && idade <10) {
                //criança
                img.setAttribute('src', 'menino.jpg')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'Hjovem.jpg')
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto.jpg')
            } else if ( idade) {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >0 && idade <10) {
                //criança
                img.setAttribute('src', 'menina.jpg')
            } else if ( idade <21) {
                //jovem
                img.setAttribute('src','Mjovem.jpg')
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', 'adulta.jpg')
            } else if ( idade) {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

