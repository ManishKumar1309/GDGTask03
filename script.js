let player=document.querySelector(".player");
let enemy=document.querySelector(".enemy");
let moveX=70;
var moveY=0;
document.addEventListener("keydown",function(move){
    if(move.key==="ArrowRight" || move.key==="d"){
        moveX+=50;
        player.style.left=`${moveX}px`;
    }
    else if(move.key==="ArrowLeft" || move.key==="a"){
        moveX-=50;
        player.style.left=`${moveX}px`;
    }
    else if(move.key==="ArrowUp" || move.key==="w"){
        moveY+=200;
        player.style.bottom=`${moveY}px`;
    }
});
document.addEventListener("keyup",function(relese){
    moveY=0;
    player.style.bottom=`${-10}px`;
});

var playerImg=document.querySelector(".player img");
document.addEventListener("keydown",function(attack){
    if(attack.key===" " || attack.key==="ArrowDown"){
        playerImg.src="assets/Player/Attack/Attack_01.png";
        setTimeout(function(){
            playerImg.src="assets/Player/Attack/Attack_02.png";
        },100);

        setTimeout(function(){
            playerImg.src="assets/Player/Attack/Attack_03.png";
        },200);

        setTimeout(function(){
            playerImg.src="assets/Player/Attack/Attack_04.png";
        },300);

        setTimeout(function(){
            playerImg.src="assets/Player/Attack/Attack_05.png";
        },400);

        setTimeout(function(){
            playerImg.src="assets/Player/Attack/Attack_06.png";
            checkHit();
        },500);
        setTimeout(function(){
            playerImg.src="assets/Player_Idle.svg";
        },600);
        
        function checkHit(){
            let playerPos=player.offsetLeft;
            let enemyPos=enemy.offsetLeft;
            let distance=Math.abs(playerPos-enemyPos);
            if(distance<200){
                damageEnemy();
                let enemyImg=document.querySelector(".enemy img");

                enemyImg.src="assets/Enemy/Hit/Hit_01.png";
            setTimeout(function(){
                enemyImg.src="assets/Enemy/Hit/Hit_02.png";
            },100);

            setTimeout(function(){
                enemyImg.src="assets/Enemy/Hit/Hit_03.png";
            },200);

            setTimeout(function(){
                enemyImg.src="assets/Enemy/Hit/Hit_04.png";
            },300);
            setTimeout(function(){
                enemyImg.src="assets/Enemy_Idle (1).svg";
            },400);
            }
        }

    }
});


document.addEventListener("keydown",function(jump){
    if(jump.key==="w" || jump.key==="ArrowUp"){
        playerImg.src="assets/Player/Jump/Jump_01.png";
        setTimeout(function(){
            playerImg.src="assets/Player/Jump/Jump_02.png";
        },100);

        setTimeout(function(){
            playerImg.src="assets/Player/Jump/Jump_03.png";
        },300);

        setTimeout(function(){
            playerImg.src="assets/Player/Jump/Jump_04.png";
        },500);

        setTimeout(function(){
            playerImg.src="assets/Player/Jump/Jump_05.png";
        },700);
        setTimeout(function(){
            playerImg.src="assets/Player_Idle.svg";
        },800);
        
    }
});

document.addEventListener("keydown",function(run){
    if(run.key==="s" || run.key==="Shift"){
        playerImg.src="assets/Player/Run/Run_01.png";
        setTimeout(function(){
            playerImg.src="assets/Player/Run/Run_02.png";
        },100);

        setTimeout(function(){
            playerImg.src="assets/Player/Run/Run_03.png";
        },200);

        setTimeout(function(){
            playerImg.src="assets/Player/Run/Run_04.png";
        },300);

        setTimeout(function(){
            playerImg.src="assets/Player/Run/Run_05.png";
        },400);

        setTimeout(function(){
            playerImg.src="assets/Player/Run/Run_06.png";
        },500);
        setTimeout(function(){
            playerImg.src="assets/Player_Idle.svg";
        },600);
        
    }
});

document.addEventListener("keydown",function(walk){
    if(walk.key==="d" || walk.key==="ArrowRight"){
        playerImg.src="assets/Player/Walk/Walk_01.png";
        setTimeout(function(){
            playerImg.src="assets/Player/Walk/Walk_02.png";
        },100);

        setTimeout(function(){
            playerImg.src="assets/Player/Walk/Walk_03.png";
        },200);

        setTimeout(function(){
            playerImg.src="assets/Player/Walk/Walk_04.png";
        },300);

        setTimeout(function(){
            playerImg.src="assets/Player/Walk/Walk_05.png";
        },400);

        setTimeout(function(){
            playerImg.src="assets/Player/Walk/Walk_06.png";
        },500);
        
        setTimeout(function(){
            playerImg.src="assets/Player_Idle.svg";
        },700);
        
    }
});

let enemyPos = 600;
setInterval(function(){
    if(paused || gameOver){
        return;
    }
    let random = Math.random();
    if(random < 0.3){
        enemyPos -= 20;
        enemy.style.left = `${enemyPos}px`;
    }
    else if(random < 0.6){
        enemyPos += 20;
        enemy.style.left = `${enemyPos}px`;
    }
    else if(random < 0.8){
        enemyImg.src="assets/Enemy_Idle (1).svg";
    }
    else{
        enemyAttack();
    }
}, 1000);

let enemyImg = document.querySelector(".enemy img");
function enemyAttack(){
    enemyImg.src="assets/Enemy/Attack/Attack_01.png";
    setTimeout(function(){
        enemyImg.src="assets/Enemy/Attack/Attack_02.png";
    },100);

    setTimeout(function(){
        enemyImg.src="assets/Enemy/Attack/Attack_03.png";
    },200);

    setTimeout(function(){
        enemyImg.src="assets/Enemy/Attack/Attack_04.png";
    },300);

    setTimeout(function(){
        enemyImg.src="assets/Enemy/Attack/Attack_05.png";
    },400);

    setTimeout(function(){
        enemyImg.src="assets/Enemy_Idle (1).svg";
        checkPlayerHit();
    },500)
}


function checkPlayerHit(){
    let playerPos=player.offsetLeft;
    let enemyPos=enemy.offsetLeft;
    let distance=Math.abs(playerPos-enemyPos);

    if(distance<200){
        damagePlayer();
            playerImg.src="assets/Player/Hit/Hit_01.png";
        setTimeout(function(){
            playerImg.src="assets/Player/Hit/Hit_02.png";
        },100);

        setTimeout(function(){
            playerImg.src="assets/Player/Hit/Hit_03.png";
        },200);

        setTimeout(function(){
            playerImg.src="assets/Player/Hit/Hit_04.png";
        },300);
        setTimeout(function(){
            playerImg.src="assets/Player/Hit/Hit_05.png";
        },400);
        setTimeout(function(){
            playerImg.src="assets/Player_Idle.svg";
        },500);
    }
}


let paused=false;
let pauseBtn=document.querySelector(".pause");
 
document.addEventListener("keydown",function(block){
    if(block.key==="p" || block.key==="Escape"){
        if(!gameOver){
            togglePause();
        }
        block.stopImmediatePropagation();
        return;
    }
    if(paused || gameOver){
        block.stopImmediatePropagation();
    }
},true);
 
function togglePause(){
    paused=!paused;
    pauseBtn.textContent=paused ? "Play" : "Pause";
}
 
pauseBtn.addEventListener("click",togglePause);
 
let score=0;
let scoreBox=document.querySelector(".score");
let enemyHits=0;
let enemyHearts=document.querySelectorAll(".enemyHP .heart");
 
function damageEnemy(){
    if(gameOver){
        return;
    }
    enemyHits++;
    score+=10;
    scoreBox.textContent="Score : "+score;
    if(enemyHits%3===0){
        enemyHearts[enemyHearts.length-enemyHits/3].classList.add("dead");
    }
    if(enemyHits===12){
        endGame("YOU WIN");
    }
}
 
let playerHits=0;
let playerHearts=document.querySelectorAll(".playerHP .heart");
 
function damagePlayer(){
    if(gameOver){
        return;
    }
    playerHits++;
    score=Math.max(0,score-5);
    scoreBox.textContent="Score : "+score;
    if(playerHits%3===0){
        playerHearts[playerHearts.length-playerHits/3].classList.add("dead");
    }
    if(playerHits===12){
        endGame("YOU LOSS");
    }
}
 
let gameOver=false;
let resultBox=document.querySelector(".result");
let resultText=document.querySelector(".resultText");
let restartBtn=document.querySelector(".restart");
 
function endGame(message){
    gameOver=true;
    resultText.textContent=message;
    resultBox.classList.add("show");
}
 
restartBtn.addEventListener("click",function(){
    location.reload();
});
 
function press(key){
    document.body.dispatchEvent(new KeyboardEvent("keydown",{key:key,bubbles:true}));
}
 
function release(){
    document.body.dispatchEvent(new KeyboardEvent("keyup",{key:"",bubbles:true}));
}
 
document.querySelector(".left").addEventListener("pointerdown",function(){
    press("ArrowLeft");
});
 
document.querySelector(".right").addEventListener("pointerdown",function(){
    press("ArrowRight");
});
 
document.querySelector(".jump").addEventListener("pointerdown",function(){
    press("ArrowUp");
});
document.querySelector(".jump").addEventListener("pointerup",release);
 
document.querySelector(".action").addEventListener("pointerdown",function(){
    press(" ");
});