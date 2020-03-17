function rpsGame(yourChoose){
    console.log(yourChoose);
    var humanChoice, botChoice;
    humanChoice=yourChoose.id;
    botChoice=numberToChoice(randToRpsInt()); 
   // rpsFrontEnd(yourChoose.id, botChoose,message);
   results=decideWinner(humanChoice,botChoice);
   message=finalMessage(results); 
   console.log(message);
}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissor'][number];
}

function decideWinner(yourChoose,computerChoice){
    var rpsDatabase={
        'rock':{'scissor':1,'rock':0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissor':0},
        'scissor':{'paper':1,'scissor':0.5,'rock':0}
    };
    var yourScore=rpsDatabase[yourChoose][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoose];
    return [yourScore, computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore===0){
        return{'message':'You lost!','color':'red'};
    }
    else if(yourScore===0.5){
        return{'message':'You tied!','color':'yellow'};
    }
    else{
        return {'message':'You win', 'color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imagesDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissor').remove();

        var humanDiv=document.createElement('div');
        var botDiv=document.createElement('div');
        var messageDiv=document.createElement('div');

        humanDiv.innerHTML="<img src='"+imagesDatabase[humanImageChoice]+"' height='150px width='150px>";
        messageDiv.innerHTML="<h1 style=color: "+finalMessage['color']+"; font-size=60px;padding=30px;'>"+finalMessage['message']+"</h1>";
        botDiv.innerHTML="<img src='"+imagesDatabase[botImageChoice]+"' height='150px width='150px>"
        document.getElementById('flex-box-rps-div').appendChild(humanDiv);
        document.getElementById('flex-box-rps-div').appendChild(messageDiv);
        document.getElementById('flex-box-rps-div').appendChild(botDiv);
        console.log("Ganja nadda bn");
}