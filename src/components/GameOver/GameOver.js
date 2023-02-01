import React from "react";

function GameOver({ answer, listOfGuesses, numOfGuessesAllowed, gameEnded }) {
	let result;

	if (answer === listOfGuesses.at(-1)) {
		result = "win";
		gameEnded();
	} else if (
		listOfGuesses.length >= numOfGuessesAllowed &&
		answer !== listOfGuesses.at(-1)
	) {
		result = "lose";
		gameEnded();
	}

	return (
		<>
			{result === "win" && (
				<div className="happy banner">
					<p>
						<strong>Congratulations!</strong> Got it in{" "}
						<strong>{listOfGuesses.length} guesses</strong>.
					</p>
				</div>
			)}
			{result === "lose" && (
				<div className="sad banner">
					<p>
						Sorry, the correct answer is <strong>{answer}</strong>.
					</p>
				</div>
			)}
		</>
	);
}

export default GameOver;
