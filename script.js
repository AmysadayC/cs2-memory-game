console.log("Script started");
//Variable to track guesses.
let guesses = 0;

//Bar to track first card pick. (Empty to start)
let firstCardId = "";
let secondCardId = "";

function flipCard(cardId) {
    //Print click to console to test that click works.
    console.log("click");
    //Gets the html card.
    let card= document.getElementById(cardId);
    //Changes color to flip card and reveal text.
    card.style.color = "rgb(32, 32, 32)";
    card.style.backgroundColor ="rgb(0, 255, 21)";

    // Check which pick it is.
    if (firstCardId == "") {
    //Store 1st card Id.
    firstCardId = cardId;
    console.log("first = " + firstCardId);
    }
    else {
        //Store 2nd card ID.
        secondCardId = cardId;
        //checkForMatch();
        setTimeout(checkForMatch, 1000);
        console.log("second = " + secondCardId);
    }

}

function checkForMatch() {
    //Get card elements.
    let firstCard = document.getElementById(firstCardId);
    let secondCard = document.getElementById(secondCardId);

    //Check if the text matches.
    if (firstCard.innerText == secondCard.innerText) {
        //White shows if the cards match.
        firstCard.style.backgroundColor = "rgb(255, 255, 255)";
        secondCard.style.backgroundColor = "rgb(248, 248, 248)";
    }
    else{
        //Cards don't match.
        firstCard.style.color = "rgb(43, 94, 46)";
        firstCard.style.backgroundColor = "rgb(43, 94, 46)";
        secondCard.style.color = "rgb(43, 94, 46)";
        secondCard.style.backgroundColor = "rgb(43, 94, 46)";
    }

    //Reset for next pick.
    firstCardId = "";
    secondCardId = "";
}