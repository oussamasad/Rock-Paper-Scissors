let humanscore = 0;
let computerscore =0;

function getComputerChoice(){
    let computerChpoice ='';
    let probebli =Math.floor(Math.random()*100)+1;
    if (probebli <=30){
        computerChpoice ='paper';
    }
    else if(probebli >30 && probebli<=60){
        computerChpoice ='scissors';
    }
    else {
        computerChpoice ='rock';
    }
    return computerChpoice;
}
function getHumaenChoice(){
    let HumaenChoice =prompt('enter your choice').toLowerCase();
    return HumaenChoice;
}
function playRound(HumaenChoice,computerChpoice){
    if (HumaenChoice === computerChpoice){
        console.log('Draw in This Round');
        console.log('_________________________________________________');
    }
    else if(HumaenChoice ==='rock' && computerChpoice ==='scissors'){
        humanscore =humanscore +1;
        console.log('you win This Round! rock beats scissors') ;
        console.log('_________________________________________________');
    }
    else if(HumaenChoice ==='paper' && computerChpoice ==='rock'){
        humanscore =humanscore +1;
        console.log('you win This Round! rock beats scissors') ;
        console.log('_________________________________________________');
    }
    else if(HumaenChoice ==='scissors' && computerChpoice ==='paper'){
        humanscore =humanscore +1;
        console.log('you win This Round! scissors beats paper') ;
        console.log('_________________________________________________');
    }
    else {
        console.log(`you loss This Round! ${computerChpoice} beats ${HumaenChoice}`) ;
        computerscore+=1;
        console.log('_________________________________________________');
    }
}
function playGame(){
    for(let i = 1 ; i <= 5 ;i++){
        playRound(getHumaenChoice(),getComputerChoice())
    }
    if (humanscore > computerscore){
        console.log('You Win This Gzame');
    }else if(humanscore === computerscore){
        console.log('Draw in This Game');
    }
    else{
        console.log('You Loss This Game');
    }
    console.log(`your score ${humanscore}`);
    console.log(`computer score : ${computerscore}`);
}
playGame()
