'use strict'

function onBallClick(ballEl){
    var size = ballEl.offsetWidth + 50
    ballEl.style.width = size + 'px'
    ballEl.style.height = size + 'px'
    ballEl.innerText = size
}