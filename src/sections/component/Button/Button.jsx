/* eslint-disable react/prop-types */
import "./Button.module.css"

export const Button = ({ children, onClick, style, classes }) => (
	<button
		onClick={onClick || null}
		style={{ ...style }}
		className={classes || null}
	>
		{children}
	</button>
)
