'use strict'

function onBallClick(ballEl){
    var size = ballEl.offsetWidth
    if (size >= 400) {
        size = 100
        ballEl.style.width = size + 'px'
        ballEl.style.height = size + 'px'
        ballEl.innerText = size  
        ballEl.style.backgroundColor = getRandomColor() 
        return 
    }
    size += getRandomIntInclusive(20,60)
    ballEl.style.width = size + 'px'
    ballEl.style.height = size + 'px'
    ballEl.innerText = size
    ballEl.style.backgroundColor = getRandomColor() 
}