import { useState } from 'react';
import ModifierButton from './ModifierButton/index';

const initialValue = () => parseInt(Math.random() * 10);

function Counter() {
	const [count, counter] = useState(initialValue);

	return (
		<>
			<p>
				How much you guys like me: <b>{count}</b>
			</p>
			<div className="handlers">
				<ModifierButton
					handler={() => counter(count + 1)}
					style={{
						backgroundColor: 'green'
					}}
				>
					Like
				</ModifierButton>
				<ModifierButton
					handler={() => counter(count - 1)}
					style={{
						backgroundColor: 'red'
					}}
				>
					DisLike
				</ModifierButton>
			</div>
		</>
	);
}

export default Counter;
