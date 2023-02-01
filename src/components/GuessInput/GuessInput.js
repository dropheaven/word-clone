import React, { useState } from "react";

function GuessInput({ handleGuesses, isDisabled }) {
	const [guess, setGuess] = useState("");

	return (
		<form
			className="guess-input-wrapper"
			onSubmit={(event) => {
				event.preventDefault();

				if (guess.length !== 5) {
					alert("Guess should be exactly 5 characters long.");
					return;
				}

				handleGuesses(guess);
				setGuess("");
			}}
		>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				required
				minLength={5}
				maxLength={5}
				disabled={isDisabled}
				value={guess}
				onChange={(event) => {
					setGuess(event.target.value.toUpperCase());
				}}
			/>
		</form>
	);
}

export default GuessInput;
