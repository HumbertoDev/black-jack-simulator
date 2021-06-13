//DOM Variables..i will get the value in the next steps
let username = document.getElementById('username');
let betAmount = document.getElementById('bet-amount');
let firstCardBox = document.getElementById('first-card')
let secondCardBox = document.getElementById('second-card')
let betPrinting = document.getElementById('bet-printing')
let sendBet = document.getElementById('send-bet')
let yourCardsHeading = document.getElementById('your-cards')
let giveMe = document.getElementById('give-me')
let winner = document.getElementById('winner')
let stop = document.getElementById('stop')

//Calculation variables
let firstCard = 0;
let secondCard = 0;
let playerResult = 0;

let opFirstCard = 0;
let opSecondCard = 0;
let opResult = 0

// Hidding the cards until the start
firstCardBox.style.display = "none";
secondCardBox.style.display = "none";
yourCardsHeading.style.display = "none";
betPrinting.style.display = "none";

function start(){
 /* This function do:
 1. print the bet in the bet-printing span
 2. Assing 2 random numbers between 2 and 11 to the players cards
 3. Show the 2 user cards
 */
  //Printing 
  betPrinting.append(username.value + " You Can Win " + parseInt(betAmount.value)*2 + " US$")
  //Player cards
  firstCard = Math.floor(Math.random()* (12-1)+1) //max excluded
  secondCard = Math.floor(Math.random() * (11-1+1)+1) //max included
  playerResult = firstCard + secondCard;
  console.log(playerResult)
  firstCardBox.append(firstCard)
  secondCardBox.append(secondCard)
  //Opponet Cards
  opFirstCard = Math.floor(Math.random()* (12-1)+1) //max excluded
  opSecondCard = Math.floor(Math.random() * (11-1+1)+1) //max included
  opResult = opFirstCard + opSecondCard;
  //Showing the cards
  firstCardBox.style.display = "flex"
  secondCardBox.style.display = "flex"
  yourCardsHeading.style.display = "flex";
  betPrinting.style.display = "flex";
  //hidding start elements
  username.style.display = "none";
  betAmount.style.display= "none";
  sendBet.style.display = "none";
}



function randomCard(){
  /*
  1. validate if te user is able to ask for another card using a control structure
  2. Assign a brand new card and print it in the DOM
  */
  //Player script
  if (playerResult > 21){
    alert('You Lost The Game 🥺')
    winner.innerHTML = "<span class='op-won'> The House is the Winner 😥</span>"
    setTimeout(function(){document.location.href=""},2000)
  }else if (playerResult < 21) {
    let otherCard = Math.floor(Math.random() * (11-1+1)+1)
    let otherCardBox = document.querySelector(".cards-container")
    otherCardBox.innerHTML += "<div id='other-card' class='card-style'>"+otherCard +"</div>"
    playerResult += otherCard

    if (playerResult == 21) {
      alert('CONGRATULATIONS!! You Reached The 21. Show your Hand!')
      giveMe.style.display = "none"
    }else if(playerResult > 21){
      alert('You Lost The Game 🥺. The last card was a ' + otherCard + " .You got a " + playerResult)
      winner.innerHTML = "<span class='op-won'> The House is the Winner 😥</span>"  
      giveMe.style.display = "none"
      stop.style.display = "none"
      setTimeout(function(){document.location.href = ""},2000)
    }
  }
  // Opponet script
  let poss = Math.round(Math.random())
  console.log(poss)
  if (poss == 0) {
      return;
      }else if(poss == 1) {
        let otherOpCard = Math.floor(Math.random() * (11-1+1)+1)
        opResult += otherOpCard 
  }
  if (opResult > 21) {
      alert('CONGRATULATIONS!! The Opponet Lost 🤞')
      giveMe.style.display = "none"
      stop.style.display = "none"
      winner.innerHTML = "<span class='player-won'>" + username.value + " is the Winner 😱🎉</span>"
      setTimeout(function(){document.location.href=""},2000)
  }
}


function compare(){
  if (playerResult == opResult) {
    winner.innerHTML = "<span class='tie'><b>Its a TIE 🔥</b></span>"
  }else if(playerResult > opResult){
    winner.innerHTML = "<span class='player-won'>" + username.value + " is the Winner 😱🎉</span>"
  }else if (playerResult < opResult){
    winner.innerHTML = "<span class='op-won'> The House is the Winner 😥</span>"
  }
}

function restart(){
 document.location.href="" 
}