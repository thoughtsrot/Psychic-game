// Define array of word solutions (answers) //

var wordCocktails = ["mai tai", "whiskey sour", "gin and tonic", "white russian", "singapore sling", "blood and sand", "hot toddy", "mint julip", "mojito", "martini", "moscow mule", "gin fizz"]

//Empty array for collecting letters as user make guesses//
var usedLetters = [];

// Empty array for placeholder values
var placeholders = [];
// Return random selection from array wordCocktails //
// variable that generates a random INDEX based on wordCocktails array//
var randomCocktail = Math.floor(Math.random() * wordCocktails.length);

var $guessRemain = 10;
var $wins = 0;
var $losses = 0;

//function that selects new Cocktail from array based on the INDEX value of variable randomCocktail //
function newCocktail() {

  // Attaches to id applied in html doc to insert random string from array  //
  document.getElementById("cocktailText").innerHTML = wordCocktails[randomCocktail];

  for (i = 0; i < wordCocktails[randomCocktail].length; i++) {


    placeholders.push(" _ ");

    document.getElementById("cocktailText").innerHTML = placeholders.join(" ");

  }
}
// Execute function to generate random wordCocktail and insert in html//
// function newGame () {

//   if (guesses === 0) {}

newCocktail()





//Detects and returns user keystrokes//
document.onkeyup = function (event) {
  // Defines user key input as variable
  var userInput = event.key;

  // Checks if key entered is NOT (!) already included in usedLetters array //
  if (!usedLetters.includes(userInput)) {

    //THEN checks IF keycode is a letter... 
    if (event.which >= 65 && event.which <= 90) {

      // THEN checks IF key entered is included in current puzzle...
      if (wordCocktails[randomCocktail].includes(userInput)) {

        placeholders[i].replace(/_/g, userInput);

        document.getElementById("gameAlerts").innerHTML = ("Looks good to me. Add it in!");
      }

      else {
        // ...push user keystrokes as values to usedLetters array
        usedLetters.push(userInput);
        // and write array and alert to html //
        document.getElementById("userGuesses").innerHTML = ("Wrong ingredients: " + (usedLetters.join(" ")));
        document.getElementById("gameAlerts").innerHTML = "Oops! That's not in this recipe. Try again."

        // and decrease guesses by one and alert to html //
        $guessRemain --;
        document.getElementById("guessRemain").innerHTML = ("Ingredients left: " + $guessRemain);

      }
    }
    // Else alerts user that they must choose a letter //
    else {
      document.getElementById("gameAlerts").innerHTML = "Sorry! Not an ingredient. Try adding a letter."
    }

  }

  else {
    document.getElementById("gameAlerts").innerHTML = "We used that ingredient. Try something else!"
  }
  //log input
  console.log(userInput);
  // log array
  console.log(usedLetters);

}

// Write a for loop that captures user keystroke and use if/else to determine if value is a letter, and if yes, then if letter is in solution, and if yes then add to solution, if letter is not in solution, then add to guessed letters bank and decrement guesses left, and if not a letter, then prompt to enter a letter






  //Keeping score//


//   var html =

//   "<p>Perfect Mix: " + wins + "</p>" +
//   "<p>Impotable: " + losses + "</p>" +

// // Set the inner HTML contents of the #game div to our html string
// document.querySelector("#game").innerHTML = html;



