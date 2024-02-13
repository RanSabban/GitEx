'use strict'

function onBallClick(ballEl,maxDiameter){
    var size = ballEl.offsetWidth
    if (size >= maxDiameter) {
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