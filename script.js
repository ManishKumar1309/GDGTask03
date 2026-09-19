let player=document.querySelector(".player");
let enemy=document.querySelector(".enemy");
let moveX=100;
var moveY=0;
document.addEventListener("keydown",function(move){
    if(move.key==="ArrowRight" || move.key==="d"){
        moveX+=20;
        player.style.left=`${moveX}px`;
    }
    else if(move.key==="ArrowLeft" || move.key==="a"){
        moveX-=20;
        player.style.left=`${moveX}px`;
    }
    else if(move.key==="ArrowUp" || move.key==="w"){
        moveY+=200;
        player.style.bottom=`${moveY}px`;
    }
});
document.addEventListener("keyup",function(relese){
    moveY=0;
    player.style.bottom=`${0}px`;
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
            if(distance<150){
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
            enemyImg.src="assets/Enemy/Hit/Hit_05.png";
        },400);

        setTimeout(function(){
            enemyImg.src="assets/Enemy/Hit/Hit_06.png";
        },500);
        setTimeout(function(){
            enemyImg.src="assets/Enemy_Idle (1).svg";
        },600);

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
        },200);

        setTimeout(function(){
            playerImg.src="assets/Player/Jump/Jump_04.png";
        },300);

        setTimeout(function(){
            playerImg.src="assets/Player/Jump/Jump_05.png";
        },400);
        setTimeout(function(){
            playerImg.src="assets/Player_Idle.svg";
        },500);
        
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
            playerImg.src="assets/Player/Walk/Walk_07.png";
        },600);
        setTimeout(function(){
            playerImg.src="assets/Player_Idle.svg";
        },700);
        
    }
});

