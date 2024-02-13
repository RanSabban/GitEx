'use strict'

function onBallClick(ballEl){
    var size = ballEl.offsetWidth + 50
    if (size === 450) size = 100
    ballEl.style.width = size + 'px'
    ballEl.style.height = size + 'px'
    ballEl.innerText = size
}