import React from "react";
import { Registry, registry } from "./registry";

export class ShadowWrapper extends React.Component {
	constructor(props) {
		super(props);
		const { elementName, importName } = props;
		this.element = document.createElement(elementName);
		console.log('this.element', this.element);
		this.importName = importName;
		this.elementName = elementName;
	}

	// componentDidMount() {
	// 	const importFn = () => import(`${this.importName}/${this.elementName}`);
	// 	// registry[this.importName];
	// 	importFn()
	// 		.then()
	// 		.catch((err) =>
	// 			console.error(`error loading ${this.importName}:`, err)
	// 		);
	// }

	attachShadow = (host) => {
		if (host) {
			const shadow = host.attachShadow({ mode: "open" });
			shadow.appendChild(this.element);
		}
	};
	render() {
		return <div ref={this.attachShadow}></div>;
	}
}

export default ShadowWrapper;
