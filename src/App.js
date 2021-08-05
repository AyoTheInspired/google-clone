import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/search" component={SearchPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
