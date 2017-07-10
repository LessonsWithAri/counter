// index.js
let counter = Number(localStorage.counter);

document.getElementById('count').innerText = String(counter);

document.getElementById('upcount').onclick = function() {
	counter = counter + 1;
	localStorage.counter = counter;
	document.getElementById('count').innerText = String(counter);
};

var num = 255;

num.toString(16).split(''); // = ['F', 'F']
num.toString(10).split(''); // = ['2', '5', '5']
