var agora = new Date()
var horas = agora.getHours()

var h = window.document.getElementById('horas')
var img = window.document.getElementById('imagens')

h.innerHTML = `Agora são as ${horas} horas.`

if (horas >= 6 && horas < 12) {
    img.innerHTML = '<img class="imagem" id="imagens" src="imagens/manhã.jpg" alt="manha">'
}else if (horas >= 12 && horas < 18) {
    img.innerHTML = '<img class="imagem" id="imagens" src="imagens/tarde.jpg" alt="tarde">'
}else {
    img.innerHTML = '<img class="imagem" id="imagens" src="imagens/noite.jpg" alt="noite">'
}