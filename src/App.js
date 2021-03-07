import Counter from './counter';
import Form from './form';

function App() {
	return (
		<div className="App">
			{/* example to use useState */}
			<Counter />

			{/* example to create a customHook */}
			<Form />
		</div>
	);
}

export default App;
