function randomVarible() {
    let random_Varible = Math.floor(Math.random() * 13) + 1; //ranges random number from 1 to 6
    if(random_Varible > 10) {
        return 10;
    }
    else if(random_Varible === 1) {
        return 11;
    }
    return random_Varible;
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let player = {
    name: "Person",
    chips: 145
}

document.getElementById("playerCredits").textContent = player.name + ": $" + player.chips;

function startGame() {
    //re-assigining the values so that purely random values are generated only when the game is started
    isAlive = true;
    let firstCard = randomVarible();
    let secondCard = randomVarible();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    //
    renderGame();
}

function renderGame() {
    if (sum <= 20) {
        message = "Wanna draw another card?";
    } 
    else if (sum === 21) {
        message = "wohoo! You got a blackjack";
        hasBlackJack = true;
    } 
    else {
        message = "You lose.";
        isAlive = false;
    }
    document.getElementById("BeginningMsg").textContent = message;
    document.getElementById("cardsElement").textContent = "Cards : ";
    for(let i=0; i<cards.length; i++) {
        document.getElementById("cardsElement").textContent += cards[i]+" ";
    }
    //document.getElementById("sumofCards").textContent = "Total Sum : "+sum;
    // can you can also use the below given query selector
    // here the hashtag represents that we have passed an ID inside the query selector
    document.querySelector("#sumofCards").textContent = "Total Sum : "+sum;
}
function newcard() {
    if(isAlive === true && hasBlackJack === false) {
        let thirdcard = randomVarible();
        sum += thirdcard;
        cards.push(thirdcard);
        console.log(cards);
        renderGame();
    }
}

/*let arr = ["my","name","is","utkarsh"];

for(let i=0; i<arr.length; i++){
    document.getElementById("greeting").textContent += arr[i]+" ";
}
*/
