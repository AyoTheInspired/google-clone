import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

function Search() {
	return (
		<Div>
			<div className="search__input">
				<SearchIcon className="search__inputIcon" />
				<input />
				<MicIcon />
			</div>

			<div className="search__buttons"></div>
		</Div>
	);
}

export default Search;

const Div = styled.div`
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
`;
