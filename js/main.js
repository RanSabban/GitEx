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

function onThirdBallClick(){
    const ballEl1 = document.querySelector('.ball')
    const ballEl2 = document.querySelector('.ball2')
    const ballComputedStyle1 = window.getComputedStyle(ballEl1)
    const ballComputedStyle2 = window.getComputedStyle(ballEl2)
    const ballColor1 = ballComputedStyle1.backgroundColor
    const ballColor2 = ballComputedStyle2.backgroundColor
    ballEl1.style.backgroundColor = ballColor2
    ballEl2.style.backgroundColor = ballColor1
    const ballSize1 = ballEl1.offsetWidth
    const ballSize2 = ballEl2.offsetWidth
    ballEl1.style.width = ballSize2 + 'px'
    ballEl1.style.height = ballSize2 + 'px'
    ballEl1.innerText = ballSize2
    ballEl2.style.width = ballSize1 + 'px'
    ballEl2.style.height = ballSize1 + 'px'
    ballEl2.innerText = ballSize1

}