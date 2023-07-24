//Скрипт для инпутов 
	const input = document.querySelector("#input");
	const label = document.querySelector('#label');
	const input2 = document.querySelector("#input2");
	const label2 = document.querySelector('#label2');
	const input3 = document.querySelector("#input3");
	const label3 = document.querySelector('#label3');
	const handleChange = event => {
		input.classList.toggle(".has-value", event.target.value);
		labelOut();
	};

	function labelOut() {
		label.style.translate = "0 -46px";
		label.style.color = "#8f44fd";
		label.style.backgroundColor = "white";
		input.style.borderColor = "#8f44fd";
	};

	const handleChange2 = event => {
		input2.classList.toggle(".has-value", event.target.value);
		labelOut2();
	};

	function labelOut2() {
		label2.style.translate = "0 -46px";
		label2.style.color = "#8f44fd";
		label2.style.backgroundColor = "white";
		input2.style.borderColor = "#8f44fd";
	};

	const handleChange3 = event => {
		input3.classList.toggle(".has-value", event.target.value);
		labelOut3();
	};

	function labelOut3() {
		label3.style.translate = "0 -46px";
		label3.style.color = "#8f44fd";
		label3.style.backgroundColor = "white";
		input3.style.borderColor = "#8f44fd";
	};



const connectme = document.querySelector("#connectme");
const connect = document.querySelector('#connect');
const form = document.querySelector('#form');

connect.addEventListener('click', openForm);
function openForm(e) {
e.preventDefault();
form.style.opacity = '0'; // устанавливаем начальную прозрачность формы
form.style.display = 'block'; // отображаем форму
fadeIn(form, 0); // запускаем плавное появление формы
}


function fadeIn(element, opacity) {
if (opacity < 1) {
opacity += 0.1; // увеличиваем прозрачность на 0.1
element.style.opacity = opacity; // устанавливаем новую прозрачность
setTimeout(function () {
fadeIn(element, opacity); // вызываем рекурсивно функцию, пока прозрачность не достигнет 1
}, 10); // устанавливаем задержку перед вызовом функции
}
}

function fadeOut(element, opacity) {
if (opacity > 0) {
opacity -= 0.1; // уменьшаем прозрачность на 0.1
element.style.opacity = opacity; // устанавливаем новую прозрачность
setTimeout(function () {
fadeOut(element, opacity); // вызываем рекурсивно функцию, пока прозрачность не достигнет 0
}, 10); // устанавливаем задержку перед вызовом функции
} else {
element.style.display = 'none'; // скрываем форму после ее исчезновения
}
}


connectme.addEventListener('click', openFormme);
function openFormme(e) {
e.preventDefault();
form.style.opacity = '0'; // устанавливаем начальную прозрачность формы
form.style.display = 'block'; // отображаем форму
fadeIn(form, 0); // запускаем плавное появление формы
}

const send = document.querySelector('#send');
const closeImg =document.querySelector('#closeImg');

send.addEventListener('click', function () {
fadeOut(form, 1); // запускаем плавное исчезновение формы
});


closeImg.addEventListener('click',  function () {
fadeOut(form, 1); // запускаем плавное исчезновение формы
});


