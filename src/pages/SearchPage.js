import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

function SearchPage() {
	const [{ term }, dispatch] = useStateValue();
	return (
		<Div>
			<div className="searchPage__header">first div</div>

			<div className="searchPage__results">second div</div>
		</Div>
	);
}

export default SearchPage;

const Div = styled.div``;
