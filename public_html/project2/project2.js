
var cardsArray = [ {
    'name' : 'A' ,
    'img' : 'img/A.png',
}, {'name' : 'Ac' ,
    'img' : 'img/Ac.png',
}, {'name' : 'B' ,
    'img' : 'img/B.png',
}, {'name' : 'Bc' ,
    'img' : 'img/Bc.png',
}, {'name' : 'C' ,
    'img' : 'img/C.png',
}, {'name' : 'Cc' ,
    'img' : 'img/Cc.png',
}, {'name' : 'D' ,
    'img' : 'img/D.png',
}, {'name' : 'Dc' ,
    'img' : 'img/Dc.png',
}, {'name' : 'E' ,
    'img' : 'img/E.png',
}, {'name' : 'Ec' ,
    'img' : 'img/Ec.png',
}, {'name' : 'F' ,
    'img' : 'img/F.png'
}, {'name' : 'Fc' ,
    'img' : 'img/Fc.png',
},]
var soundeffect1 = new Audio("sound/1.mp3")
var soundeffect2 = new Audio("sound/2.mp3")
var soundeffect3 = new Audio("sound/3.mp3")
var soundeffect4 = new Audio("sound/4.mp3")


var count = 0
var counter = 0
var firstCard = ''
var secondCard = ''
var nextCard = null
var n=0

//random
var gameGrid= cardsArray.sort(() => 0.5 - Math.random());

///////////////////Add to html//////////////////
var game = document.getElementById('game');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

//////////////////show image//////////////////////
gameGrid.forEach(function (item) {
  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = item.name;
  card.style.backgroundImage = 'url(${item.img})';
  grid.appendChild(card);
});

//////////////////main function memorize//////////////
grid.addEventListener('click', memorize); 
function memorize(){
    
    var chose = event.target;

    if (chose.nodename ==="section"){ 
        return;
    }
    if (chose.nodeName === 'section' || chose === nextCard) {
        return;
    }
    if (count<2){
        count++;
        chose.classList.add('chosen')
        if (count === 1){
            firstCard=chose.dataset.name;
            chose.classList.add('chosen');  
        }
        else{
            secondCard = chose.dataset.name;
            chose.classList.add('chosen');
        }

        if (firstCard !='' && secondCard !=''){
            if (firstCard === secondCard + 'c' || secondCard + 'c' === firstCard){
                setTimeout(match,500);
                setTimeout(round2,500);
                setTimeout(showproof,499);
                n++
                setTimeout(gameover,1000)

            }
            else{
                soundeffect2.play();
                setTimeout(round2,1000);

            }
            nextCard = chose;
        }
        soundeffect1.play();   
    }
}

function match() {
    var chosen = document.querySelectorAll('.chosen');
    chosen.forEach(card => {
        card.classList.add('match');
    });
    soundeffect3.play();
};

function round2() {
    firstCard ='';
    secondCard ='';
    count = 0;
    nextCard = null;


    var chosen = document.querySelectorAll('.chosen');
    chosen.forEach(card => {
        card.classList.remove('chosen');
    });
};

////////////////////////////About timer//////////////////////////////
var timer
var sec = 0
var min = 0
var hour = 0
var time = document.getElementById('timer')
function timer() {
    sec++;
    soundeffect4.play()
    if (sec===60){
        sec=0
        min++
    }
    if (min===60){
        min=0
        hour++
    }
    showtime()
}

function showtime(){
    time.innerHTML = "Timer : " + hour + ":" + min + ":" + sec
}

var start = document.getElementById("start")
start.addEventListener('click', function(){
    timer = setInterval(timer,1000);
})

var stop
function stop(){
    timer=clearInterval(timer)
}

var reset = document.getElementById("reset")
reset.addEventListener('click', function(){
    location.reload()
    timer = clearInterval(timer);
    sec=0;
    min=0;
    hour=0;
    time.innerHTML="Timer : 0:0:0"
    

})

///////////////////if match show the link of proof///////////////
document.getElementById("cos").style.visibility="hidden"
document.getElementById("sin").style.visibility="hidden"
document.getElementById("exp").style.visibility="hidden"
document.getElementById("x").style.visibility="hidden"
document.getElementById("ln").style.visibility="hidden"
document.getElementById("arctan").style.visibility="hidden"


function showproof(){
    if (firstCard === 'A' || firstCard === 'Ac'){
        document.getElementById("x").style.visibility="visible"
    }
    if (firstCard === 'B' || firstCard === 'Bc'){
        document.getElementById("exp").style.visibility="visible"
    }
    if (firstCard === 'C' || firstCard === 'Cc'){
        document.getElementById("cos").style.visibility="visible"
    }
    if (firstCard === 'D' || firstCard === 'Dc'){
        document.getElementById("sin").style.visibility="visible"
    }
    if (firstCard === 'E' || firstCard === 'Ec'){
        document.getElementById("ln").style.visibility="visible"
    }
    if (firstCard === 'F' || firstCard === 'Fc'){
        document.getElementById("arctan").style.visibility="visible"
    }
}

function gameover(){
    if (n===6){
        document.getElementById("over").style.visibility="visible";
        document.getElementById("gameover").style.visibility="visible";
        document.getElementById("text").style.visibility="visible";

        stop()
    }
}

var exit = document.getElementById("hide")
function hide(){
    document.getElementById("gameover").style.visibility="hidden";
    document.getElementById("over").style.visibility="hidden";
    document.getElementById("text").style.visibility="hidden";


}
