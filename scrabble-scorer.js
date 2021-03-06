// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

//my code:
const vowelBonusPointStructure = {
  1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X' ,'Y', 'Z'],
  3: ['A', 'E', 'I', 'O', 'U']
};

function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "";
 let totalPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
		//	letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      totalPoints += Number(pointValue);
		 }
	  }
	}
	//return letterPoints;
  return totalPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   word = input.question("Let's play some scrabble! " + "\n\n" + "Enter a word: ")
};

//my code:
let simpleScore = function(word) {
  word = word.toUpperCase();
  let simplePoints = 0;

  for (i = 0; i < word.length; i++) {
    simplePoints += 1;
    
  }
  return simplePoints;
  
}

let vowelBonusScore = function(word) {
  word = word.toUpperCase();
  let vowelPoints = 0;

  for (i = 0; i < word.length; i++) {
    for (const pointValue in vowelBonusPointStructure) {
      if (vowelBonusPointStructure[pointValue].includes(word[i])) {
        vowelPoints += Number(pointValue);
      }
    }
  }
  //return console.log(`Points for '${word}': ${vowelPoints}\n`)
  return vowelPoints;
}

/*
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
		//	letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      totalPoints += Number(pointValue);
		 }
	  }
	}
	//return letterPoints;
  return totalPoints;
 }
*/

let scrabbleScore = function(word) {
  word = word.toLowerCase();
  let totalPoints = 0;
  
  for (i = 0; i < word.length; i++) {
    //for (letter in newPointStructure) {
      //if (newPointStructure[letter] === )) {
        let letter = word[i];
        totalPoints += newPointStructure[letter];
  
  }
  return totalPoints;
}
 


const scoringAlgorithms = [
  {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scoringFunction: simpleScore
  },
  {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: vowelBonusScore
  },
  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    //scoringFunction: oldScrabbleScorer
    scoringFunction: scrabbleScore
  }
];

function scorerPrompt() {
  let userSelection = input.question("Which scoring algorithm would you like to use?\n\n" + "0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ");
  scorerChoice = Number(userSelection);
 
  if (scorerChoice === 0) {
    //console.log("algorithm name: ", scoringAlgorithms[0].name);
    console.log(`Score for '${word}':`, scoringAlgorithms[0].scoringFunction(word));
  }
  else if (scorerChoice === 1) {
    //console.log("algorithm name: ", scoringAlgorithms[1].name);
    console.log(`Score for '${word}':`, scoringAlgorithms[1].scoringFunction(word));
  }
  else if (scorerChoice === 2) {
    //console.log("algorithm name: ", scoringAlgorithms[2].name);
    console.log(`Score for '${word}':`, scoringAlgorithms[2].scoringFunction(word));
  }
  else if ((scorerChoice => 3) || (scorerChoice < 0)) {
    console.log("That is not a valid entry.");
  }
}

/* REFERENCE FROM INSTRUCTIONS
console.log("Letters with score '4':", oldPointStructure['4']);
console.log("3rd letter within the key '4' array:", oldPointStructure['4'][2]);

let letters = oldPointStructure['8'];
console.log("Letters with score '8':", letters);
console.log("2nd letter within the key '8' array:", letters[1]);
*/



function transform(oldPointStructure) {
  let newPointPlaceholder = {};
  for (pointValue in oldPointStructure) {
    for (i = 0; i < oldPointStructure[pointValue].length; i++) {
      //[oldPointStructure[pointValue][i]] = pointValue;
      let letterValue = oldPointStructure[pointValue][i];
      letterValue = letterValue.toLowerCase();
     // newPointPlaceholder[`${letterValue}`] = pointValue;
      newPointPlaceholder[letterValue] = Number(pointValue);
    }
  }
  return newPointPlaceholder;
  //return console.log(newPointPlaceholder);
};


let newPointStructure = transform(oldPointStructure);

function runProgram() {
  initialPrompt();
  // console.log(oldScrabbleScorer(word));
   //console.log(simpleScore(word));
   //console.log(vowelBonusScore(word));
   scorerPrompt(word);
   //console.log(scrabbleScore(word));
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

