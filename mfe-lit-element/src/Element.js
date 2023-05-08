// import "@webcomponents/webcomponentsjs";
// import { html } from "lit";

// import "./Header";

// export const Element = () => {
// 	return (
// 		<div class="app-container">
// 			{/* <app-header></app-header> */}
// 			<h1 class="app-title">App title</h1>
// 			<p class="app-body">
// 				Testing App Lorem ipsum dolor, sit amet consectetur adipisicing
// 				elit. Magnam numquam in ipsa optio cumque architecto quisquam,
// 				at repellendus facere iusto consequatur animi inventore possimus
// 				quas, sint sunt quidem maxime libero?
// 			</p>
// 		</div>
// 	);
// };

import "@webcomponents/webcomponentsjs";
import { html } from "lit";

import "./Header";

export const Element =()=> {
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
