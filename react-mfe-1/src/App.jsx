import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { Counter } from "./components/Counter";

const App = () => (
	<div className="container">
		<div>Name: react-mfe-1</div>
		<Counter />
	</div>
);

// export default App;
ReactDOM.render(<App />, document.getElementById("app"));
