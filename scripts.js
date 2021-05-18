

function carregar() {
   
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas, ${minuto} minutos e ${segundo} segundos.`
    
    setInterval(carregar, 1000);


    if (hora >= 0 && hora < 12) {
        img.src = 'https://cdn.pixabay.com/photo/2015/09/30/22/50/day-966186_960_720.jpg'
        document.body.style.background = '#8ec8ff'
        //Bom dia
    } else if (hora >= 12 && hora < 18) {
        img.src = 'https://cdn.mensagenscomamor.com/content/images/p000027761.jpg'
        document.body.style.background = '#fdc356'
        //Boa tarde
    } else {
        img.src = 'http://s2.glbimg.com/skxBKuKwnvrDx_dQJ603JYzfDLQ=/s.glbimg.com/og/rg/f/original/2013/08/23/querosaber_noiteescura__606x455jpg.jpg'
        document.body.style.background = '#432283'
        //Boa noite
    } 
}
