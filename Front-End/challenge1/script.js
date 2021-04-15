/* eslint-disable linebreak-style */
// Modify this file only
const counter = document.getElementById('counter');
let count = parseInt(document.getElementById('counter').innerHTML, 10);
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

const increase = () => {
	count += 1;
	counter.innerHTML = count;
};
const decrease = () => {
	count -= 1;
	counter.innerHTML = count;
};


increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);
