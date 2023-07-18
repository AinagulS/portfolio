	const btn = document.querySelector('#btnOpen');
	const navig = document.querySelector('#navig');
	const head = document.querySelector('#head');

	btn.addEventListener('click', openHeader);
	function openHeader(e) {
		e.preventDefault();
		navig.classList.toggle('open');
		head.classList.toggle('open');
		btn.classList.toggle('open');
	}

	window.addEventListener('scroll', function() {
  		navig.classList.remove('open');
		head.classList.remove('open');
		btn.classList.remove('open');
	});

	// Функция для плавного скролла страницы к указанному элементу
function scrollToElement(element) {
  window.scrollTo({
    behavior: 'smooth',
    top: element.offsetTop
  });
}

// Получение ссылок, на которые будет осуществляться скролл
const links = document.querySelectorAll('a[href^="#"]');

// Обработчик события клика по ссылке
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Получение ID элемента, к которому нужно скроллить
    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    // Вызов функции скролла к элементу
    scrollToElement(targetElement);
  });
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.purple_inner');

for (let elm of elements) {
  observer.observe(elm);
}


function toggleMode() {
  var siteBody = document.getElementsByTagName("body")[0];
  var moon = document.querySelector('.moon');
  var sun = document.querySelector('.sun');
  
  if (siteBody.classList.contains("day-mode")) {
    // Переключаемся на ночной режим
    siteBody.classList.remove("day-mode");
    siteBody.classList.add("night-mode");
    sun.style.display = 'block';
    moon.style.display = 'none';
  } else {
    // Переключаемся на дневной режим
    siteBody.classList.remove("night-mode");
    siteBody.classList.add("day-mode");
    moon.style.display = 'block';
    sun.style.display = 'none';
  }
}
