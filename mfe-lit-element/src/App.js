// import "@webcomponents/webcomponentsjs";
// import { LitElement, html, css } from "lit";

// import "./Header";
// import { AppStyles } from "./App.styles";

// class App extends LitElement {
// 	static get styles() {
// 		return [css``, AppStyles];
// 	}

// 	render() {
// 		return html`
// 			<div class="app-container">
// 				<app-header></app-header>
// 				<h1 class="app-title">App title</h1>
// 				<p class="app-body">
// 					Testing App Lorem ipsum dolor, sit amet consectetur
// 					adipisicing elit. Magnam numquam in ipsa optio cumque
// 					architecto quisquam, at repellendus facere iusto consequatur
// 					animi inventore possimus quas, sint sunt quidem maxime
// 					libero?
// 				</p>
// 			</div>
// 		`;
// 	}
// 	constructor() {
// 		super();
// 	}
// }

// // const tagName = "app-container";

// // if (!window.customElements.get(tagName)) {
// // 	// prevent rerunning on hot module reloads
// // 	// register to be rendered in place of every <app-container> tag
// // 	window.customElements.define(tagName, App);
// // }

// customElements.define("app-container", App);


import { LitElement, css, html } from "lit";

export class Header extends LitElement {
	static get styles() {
		return [css``];
	}
	render() {
			return html`
			<div class="app-container">
				<app-header></app-header>
				<h1 class="app-title">App title</h1>
				<p class="app-body">
					Testing App Lorem ipsum dolor, sit amet consectetur
					adipisicing elit. Magnam numquam in ipsa optio cumque
					architecto quisquam, at repellendus facere iusto consequatur
					animi inventore possimus quas, sint sunt quidem maxime
					libero?
				</p>
			</div>
		`;
	}
	// static get properties() {
	// 	return {
	// 		eg: {
	// 			type: String,
	// 		},
	// 	};
	// }
	// constructor() {
	// 	super();
	// }
}
customElements.define("app-container", Header);

// export default Header;

