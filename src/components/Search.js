import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
	const [input, setInput] = useState("");

	const [{}, dispatch] = useStateValue();

	const history = useHistory();

	const search = (e) => {
		e.preventDefault();

		dispatch({
			type: actionTypes.SET_SEARCH_TERM,
			term: input,
		});

		history.push("/search");
	};

	return (
		<Form>
			<div className="search__input">
				<SearchIcon className="search__inputIcon" />
				<input value={input} onChange={(e) => setInput(e.target.value)} />
				<MicIcon />
			</div>

			{!hideButtons ? (
				<div className="search__buttons">
					<Button type="submit" variant="outlined" onClick={search}>
						Google Search
					</Button>
					<Button variant="outlined">I'm Feeling Lucky</Button>
				</div>
			) : (
				<div className="search__buttons">
					<Button
						className="search__buttonsHidden"
						type="submit"
						variant="outlined"
						onClick={search}>
						Google Search
					</Button>
					<Button className="search__buttonsHidden" variant="outlined">
						I'm Feeling Lucky
					</Button>
				</div>
			)}
		</Form>
	);
}

export default Search;

const Form = styled.form`
	.search__input {
		display: flex;
		align-items: center;
		border: 1px solid lightgray;
		height: 30px;
		padding: 10px 20px;
		border-radius: 999px;
		width: 75vw;
		margin: 0 auto;
		margin-top: 40px;
		max-width: 560px;

		input {
			flex: 1;
			padding: 10px 20px;
			font-size: medium;
			border: none;

			&:focus {
				outline-width: 0;
			}
		}

		.search__inputIcon {
			color: gray;
		}
	}

	.search__buttons {
		margin-top: 30px;
		display: flex;
		justify-content: center;

		button {
			margin: 5px;
			padding: 7px 15px;
			background-color: #f8f8f8;
			border: 1px solid #fff;
			text-transform: inherit;
			color: #5f6368;
			transition: var(--sht-trans);

			&:hover {
				box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
				background-image: --webkit-linear-gradient(top, #f8f8f8, #f1f1f1);
				background-color: #f8f8f8;
				border: 1px solid #c6c6c6;
				color: #222;
			}
		}
	}

	.search__buttonsHidden {
		display: none !important;
	}
`;
