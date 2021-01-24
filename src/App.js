import { useState } from 'react';
import ModifierButton from "./ModifierButton/index";

function App() {
	const [count, counter] = useState(0);

	return (
		<div className="App">
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
		</div>
	);
}

export default App;
