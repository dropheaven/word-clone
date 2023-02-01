import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import GameOver from "../GameOver/GameOver";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [listOfGuesses, setListOfGuesses] = useState([]);
	let isDisabled = false;

	function handleGuesses(guess) {
		setListOfGuesses([...listOfGuesses, guess]);
	}

	function gameEnded() {
		isDisabled = true;
	}

	return (
		<>
			<GuessResults listOfGuesses={listOfGuesses} answer={answer} />
			<GameOver
				answer={answer}
				listOfGuesses={listOfGuesses}
				numOfGuessesAllowed={NUM_OF_GUESSES_ALLOWED}
				gameEnded={gameEnded}
			/>
			<GuessInput handleGuesses={handleGuesses} isDisabled={isDisabled} />
		</>
	);
}

export default Game;
