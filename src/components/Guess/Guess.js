import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
	const lettersAndStatus = checkGuess(guess, answer) || range(5);

	return (
		<>
			{lettersAndStatus.map(({ letter, status }, index) => (
				<span className={`cell ${status || ""}`} key={index}>
					{letter}
				</span>
			))}
		</>
	);
}

export default Guess;
