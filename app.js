let gameseq=[];
let userseq=[];

let btns = ["yellow", "red", "purple", "green"];


let started = false;
let level =0;
let h2 = document.querySelector("h2")
document.addEventListener("keypress", function(){
    if (started == false){
        console.log("game started");
        started = true;

        levelup();
    }
    
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random()*3);
    let randcolor = btns[randIdx];
    let randBtn =document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function checkAns(){
    // console.log("cur level :", level);
    let idx = level-1;
    if(userseq[idx]== gameseq[idx]){
        if (userseq.length == gameseq.length){
            setTimeout(levelup, 1000);
        }
    }else{
        h2.innerHTML = `Game over! your score was <b>${level}</b> <br>press any key to start.`;
        document.querySelector("body").style.backgroundcolor = "red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundcolor = "white";
        }, 150);
        reset();
    }
}

function btnpress (){
    // console.log(this)
    let btn = this;
    userFlash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started= false;
    gameseq=[];
    userseq=[];
    level=0;
}