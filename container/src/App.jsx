import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "lit_mfe_1/Header";
import { Counter } from "react_mfe_1/Counter";
import { Element } from "lit_mfe_1/Element";
import Wrapper from "./wrapper/wrapper";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShadowWrapper from "./wrapper/shadow-wrapper";

console.log("Header", Header);
console.log("Counter", Counter);
const App = () => (
	<BrowserRouter>
		<div className="container">
			<div className="sidebar">
				<div className="menuItem">
					<a href="/">Home</a>
				</div>
				<div className="menuItem">
					<a href="/react-mfe-1">React Mfe</a>
				</div>
				<div className="menuItem">
					<a href="/lit-mfe-1">Lit Element Mfe</a>
				</div>
				<div className="menuItem">
					<a href="/react-mfe-2">React Mfe 2</a>
				</div>
				<div className="menuItem">
					<a href="/lit-mfe-2">Lit Mfe 2</a>
				</div>
				<div className="menuItem">
					<a href="/lit-mfe-3">Lit Mfe 3</a>
				</div>
			</div>
			<div className="content">
				<div>Container App</div>
				<Routes>
					<Route exact path="/" element={<div>Home page</div>} />
					<Route exact path="/react-mfe-2" element={<Counter />} />
					{/* <Route
						exact
						path="/lit-mfe-2"
						element={
							<Wrapper
								importName="lit_mfe_1"
								elementName="app-header"
							/>
						}
					/> */}
					<Route
						exact
						path="/lit-mfe-2"
						element={<app-header />}
					/>
					<Route exact path="/lit-mfe-3" element={<Element />} />
					<Route
						exact
						path="/lit-mfe-1"
						element={
							<ShadowWrapper
								importName="lit_mfe_1"
								elementName="app-container"
							/>
						}
					/>
					{/* <Route
						exact
						path="/react-mfe-1"
						element={
							<ShadowWrapper
								importName="react-mfe-1"
								elementName="react-module-root"
							/>
						}
					/> */}
				</Routes>
			</div>

			{/* <Counter /> */}
			{/* <Header /> */}
			{/* <Krypton/> */}
			{/* Micro frontend app */}
			{/* <web-components></web-components> */}
		</div>
	</BrowserRouter>
);
// ReactDOM.render(<AppMain />, document.getElementById("app"));

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
