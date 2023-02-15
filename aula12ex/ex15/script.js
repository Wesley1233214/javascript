function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menino-pq.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-pq.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem-pq.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-pq.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menina-pq.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'moca-pq.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher-pq.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa-pq.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}