var forward=document.getElementById('forward')
var left=document.getElementById('left')
var right=document.getElementById('right')
var bottom=document.getElementById('bottom')
var goPlanet=document.querySelector('#goPlanet')
var visible=document.getElementById('visible')
var invisible=document.getElementById('invisible')
var img = document.querySelector('img')
var normal=document.getElementById('normal')
var grow=document.getElementById('grow')
var shrink=document.getElementById('shrink')
var normalTwo=document.getElementById('normalTwo')
var stretch =document.getElementById('stretch')
var playMusic=document.getElementById('playMusic')
var audio= new Audio("superman.mp3")
var stopMusic=document.getElementById('stopMusic')
















playMusic.onclick=function(){
     audio.play()
}
stopMusic.onclick=function(){
    audio.pause()
}

grow.onclick=function(){
    img.style.transform='scale(2)'
    img.style.transition='1s'
}
normal.onclick=function(){
    img.style.transform='scale(1)'
    img.style.transition='1s'
}
shrink.onclick=function(){
    img.style.transform='scale(0.5)'
    img.style.transition='1s'
}
normalTwo.onclick=function(){
    img.style.transform='skew(0)'
}
stretch.onclick=function(){
    img.style.transform='skew(15deg, 15deg)'
}


forward.onclick=function(){
    $('img').animate({
        top:'-=80px'
    },'fast')
}
left.onclick=function(){
    $('img').animate({
        left:'-=80px'
    },'fast')
}
right.onclick=function(){
    $('img').animate({
        left:'+=80px'
    },'fast')
}
bottom.onclick=function(){
    $('img').animate({
        top:'+=80px'
    },'fast')
}
goPlanet.onclick=function(){
    img.style.top="300px",
    img.style.left="1040px",
    img.style.height="200px",
    img.style.width="200px",
    img.style.position="absolute"
}
visible.onclick=function(){
 img.style.display='block'
}
invisible.onclick=function(){
    img.style.display='none'
   }
