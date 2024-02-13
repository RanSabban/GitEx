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

function onFourthdBallClick(){
    var rdmnewSize1 = getRandomIntInclusive(20,60)
    var rdmnewSize2 = getRandomIntInclusive(20,60)
    const ballEl1 = document.querySelector('.ball')
    const ballEl2 = document.querySelector('.ball2')
    const sizeBall1 = ballEl1.offsetWidth - rdmnewSize1
    const sizeBall2 = ballEl2.offsetWidth - rdmnewSize2
    console.log(sizeBall1,sizeBall2);
    if (sizeBall1 > 100){
        ballEl1.style.width = sizeBall1 + 'px'
        ballEl1.style.height = sizeBall1 + 'px'
        ballEl1.innerText = sizeBall1
    }
    if (sizeBall2 > 100){
        ballEl2.style.width = sizeBall2 + 'px'
        ballEl2.style.height = sizeBall2 + 'px' 
        ballEl2.innerText = sizeBall2
    }
}

