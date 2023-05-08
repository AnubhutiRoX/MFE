import React from "react";
import styles from "./wrapper.module.css";

export function Wrapper(props) {
	const { elementName, importName } = props;
	// const element = React.createElement(elementName);

	

	const getElement = () => {
		// const elem = window.lit_mfe_1.get('./Header');
		// console.log(elem);
		// let item;
		// elem.then((renderElem) => {
		// 	console.log('renderElem');
		// 	return document.createElement(renderElem);
		// });
		return (<app-header></app-header>);
	}
	return (
		<div className={styles["wrapper"]}>
			{getElement()}
		</div>
	)
}

export default Wrapper;