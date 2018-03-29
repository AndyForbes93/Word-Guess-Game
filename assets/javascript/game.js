//Array for names to guess

var hockeyNames = ["stamkos", "crosby", "mcdavid", "getzlaf", "chara", "giordano", "faulk", "staal", "toews", "landeskog", "folingo", "benn",
    "zetterburg", "mackenzie", "kopitar", "koivu", "pacioretty", "greene", "josi", "giroux", "tavares", "karlsson", "pietrangelo", "pavelski", "sedin", "ovechkin", "wheeler"
];

//empty array to fill up with guessed letters
var usedLetters = [];
//variable to count down incorrect guesses
var livesLeft = 9;

//array for picked name to go into to match letters when user inputs them
var chosenPlayer = [];

//picks a random name within hockeyNames array
var randomHockeyName = hockeyNames[Math.floor(Math.random() * hockeyNames.length)];

//moves chosen player into own array
chosenPlayer.push(randomHockeyName);

//an array to fit inderscores or correct letters 

var answerArray = [];

// function to show underscores and word

//for loop to replace the the chocen name with underscores
for (var i = 0; i < randomHockeyName.length; i++) {

    //shows letters in name as underscore for each letter
    answerArray[i] = "_";

}

var balance = answerArray.length;


//Display underscores
document.getElementById("answerArray").innerHTML = answerArray;

//show lives
document.getElementById("livesLeft").innerHTML = livesLeft;

//split single value in array in multiple values
var splitName = chosenPlayer[0];
var splitNameArr = splitName.split("");



console.log(randomHockeyName);




// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    //pushes users guess into array to track
    usedLetters.push(userGuess);

    console.log(userGuess + " ");

    //for loop that checks if key input is equal to any of the letters in the word chosen
    for (var j = 0; j < answerArray.length; j++) {
        if (splitNameArr[j] == userGuess) {
            console.log("Yes");

            //I want to add the letter to the answerArray if it matches at chosenPlayer[0].charAt(i)
            answerArray[j] = userGuess;

        }
        //if letter not in name i want to display them on the side and remove one life from player
       if (splitNameArr[j] !== userGuess)
       {
          var remainingLives = livesLeft-1;
          remainingLives + (answerArray.length -1);
       }
    }
    console.log(remainingLives);
    remainingLives + (answerArray.length -1);
    

//update html underscores, loves, and letters guessed

    document.getElementById("answerArray").innerHTML = answerArray;

    document.getElementById("livesLeft").innerHTML = remainingLives;

    document.getElementById("lettersGuessed").innerHTML = usedLetters;

    console.log(answerArray);

    console.log(answerArray.length);

    console.log(livesLeft);
}


//I still need to find a way to make the lives subtract correctly, right now they only take one life regardless if your right or wrong
//and remove the commas in the answerArry on the HTML, and finally mak the image and actual hangman image and have it update with incorrect guesses