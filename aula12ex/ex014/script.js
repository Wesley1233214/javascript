function carregar () {
    var msg = window.document.getElementById('msg') // Resgatar o id msg da div 
    var img = window.document.getElementById('imagem')// Resgatar o id img da div
    var data = new Date() // Resgatar a hora do sistema  (servidor)
    var hora = data.getHours() // Declarar variável hora com base no algoritimo data descrito logo acima
    msg.innerHTML = `Agora são ${hora} horas.` // troca a mensagem (Aqui vai aparecer a mensagem...) da div msg para (Agora são ${hora} horas.)
    if (hora >= 0 && hora < 12) { // caso a hora seja MAIOR que 0 E MENOR que 12 
        // Bom dia 
        img.src = 'fotomanha.png' // mostrar foto dia caso seja dia 
        document.body.style.background = '#6b9e6e' // mudar fundo do site caso seja dia 
    } else if (hora >= 12 && hora <= 18) { // caso a hora seja MAIOR ou IGUAL a 12 E MENOR ou IGUAL a 18
        // Boa tarde 
        img.src = 'fototarde.png' 
        document.body.style.background = '#6f3817'  
    } else { // O que restou foi a noite então não foi necessário funções 
        //Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#2f7bb6'
    }
}