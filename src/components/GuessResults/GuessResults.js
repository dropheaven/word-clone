import React from "react";

import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ listOfGuesses, answer }) {
	const rows = range(NUM_OF_GUESSES_ALLOWED);

	return (
		<div className="guess-results">
			{rows.map((row) => (
				<p className="guess" key={row}>
					<Guess guess={listOfGuesses[row]} answer={answer} />
				</p>
			))}
		</div>
	);
}

export default GuessResults;
