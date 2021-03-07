import { useState } from 'react';

function useForm(initialValues) {
	const [values, updateValue] = useState(initialValues);
	return [
		values,
		(e) =>
			updateValue({
				...values,
				[e.target.name]: e.target.value
			})
	];
}

const formFields = {
	name: {
		type: 'text',
		defaultValue: ''
	},
	email: {
		type: 'email',
		defaultValue: ''
	},
	password: {
		type: 'password',
		defaultValue: ''
	}
};

function Form() {
	const formFieldKey = Object.keys(formFields);
	const initialValues = {};
	formFieldKey.forEach(
		(key) => (initialValues[key] = formFields[key]?.defaultValue)
	);
	const [values, updateValue] = useForm(initialValues);

	return (
		<div style={{ marginTop: '1rem' }}>
			{formFieldKey.map((key) => (
				<div key={key}>
					<input
						type={formFields[key].type}
						name={key}
						value={values[key]}
						placeholder={`Enter ${key} Name`}
						onChange={updateValue}
					/>
				</div>
			))}
		</div>
	);
}
export default Form;
