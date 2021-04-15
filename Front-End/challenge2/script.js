/* eslint-disable linebreak-style */
/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
const display = document.getElementById('display');

function calculate(n1, operator, n2) {
	let result = '';
	const num1 = parseInt(n1, 10);
	const num2 = parseInt(n2, 10);
	switch (operator) {
	case 'add':
		result = num1 + num2;
		break;
	case 'subtrack':
		result = num1 - num2;
		break;
	case 'multiplication':
		result = num1 * num2;
		break;
	case 'division':
		result = num1 / num2;
		break;
	default:
		break;
	}
	/* if (operator === 'add') {
		result = num1 + num2;
	} else if (operator === 'subtrack') {
		result = num1 - num2;
	} else if (operator === 'multiplication') {
		result = num1 * num2;
	} else if (operator === 'division') {
		result = num1 / num2;
	} */
	return result;
}

document.body.addEventListener('click', (e) => {
	if (e.target.matches('button')) {
		const key = e.target;
		const keyContent = key.textContent;
		const databody = document.body.dataset;
		const displayContent = display.textContent;
		let secondValue;

		if (key.className !== 'operation-btn') {
			if (displayContent === '0' || databody.previousKeyType === 'operator' || databody.previousKeyType === 'calculate') {
				display.textContent = keyContent;
			} else {
				display.textContent = `${displayContent}${keyContent}`;
			}
			databody.previousKeyType = 'number';
		} else if (key.id === 'clear') {
			display.textContent = '0';
			databody.firstValue = '';
			databody.operator = '';
			databody.secondValue = '';
			databody.prevResult = '';
		} else if (key.id === 'equals') {
			const { firstValue, operator, prevResult } = databody;
			secondValue = displayContent;
			let calculatedValue;
			if (prevResult) {
				calculatedValue = calculate(prevResult, operator, secondValue);
			} else {
				calculatedValue = calculate(firstValue, operator, secondValue);
			}
			display.textContent = calculatedValue;
			databody.previousKeyType = 'calculate';
			databody.result = calculatedValue;
			databody.firstValue = calculatedValue;
			databody.prevResult = '';
		} else if (key.id !== 'equals' && key.id !== 'clear') {
			if (databody.firstValue && databody.previousKeyType !== 'calculate') {
				if (databody.secondValue) {
					const { prevResult } = databody;
					databody.firstValue = prevResult;
				}
				databody.secondValue = displayContent;
				const result = calculate(databody.firstValue, databody.operator, databody.secondValue);
				databody.prevResult = result;
				display.textContent = result;
			}
			databody.firstValue = displayContent;
			databody.previousKeyType = 'operator';
			databody.operator = key.id;
		}
	}
});
