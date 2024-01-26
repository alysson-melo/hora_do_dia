window.onload = function () {
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    msg.innerHTML = `Agora são: ${hora} horas e ${min} minutos.`

    if (hora >= 0 && hora < 12) {
        img.src = 'imgs/manha.jpg'
        document.body.style.background = '#F2BF5E'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imgs/tarde.jpg'
        document.body.style.background = '#F25C05'
    } else {
        img.src = 'imgs/noite.jpg'
        document.body.style.background = '#3C4C59'
    }
}

