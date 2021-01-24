import './style.css'

function ModifierButton({ handler, children, style }) {
	return (
		<button type="button" onClick={handler} style={{...style}}>
			{children}
		</button>
	);
}

export default ModifierButton;