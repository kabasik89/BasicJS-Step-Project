"use strict";

const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Бійцівський клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Дитячий клуб",
		category: "спеціаліст",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Тренажерний зал",
		category: "майстер",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Басейн",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];



const body = document.querySelector('body');
let preloader = document.createElement('div');
preloader.classList.add('loader-wrapper');
preloader.innerHTML = `
<div class="loader"></div>`
body.prepend(preloader);

function showPreloader() {
	preloader.style.display = 'flex';
}

function hidePreloader() {
	preloader.style.display = 'none';
}


const original = JSON.parse(JSON.stringify(DATA))
const coachCard = document.querySelector('.trainers-cards__container');
const sorting = document.querySelector('.sorting');
const sortBtn = document.querySelectorAll('.sorting button');
const sidebar = document.querySelector('.sidebar');
let currentDATA =[...DATA];

let currentDirection = null;
let currentCategory = null;
let currentSort = null;


function showCoachCard(arr = DATA){
	currentDATA = arr;
	showPreloader();
	coachCard.innerHTML = '';
	for (let i = 0; i < arr.length; i++) {
		let coach = arr[i];
		let template = document.querySelector('#trainer-card').content.cloneNode(true);
		template.querySelector('img').setAttribute('src', coach.photo);
		template.querySelector('p').innerText = `${coach["first name"]} ${coach["last name"]}`;

		let btnCoachCard = template.querySelector('.trainer__show-more');
		btnCoachCard.addEventListener('click', () => {
			let templateModal = document.querySelector('#modal-template').content.cloneNode(true);
			let modal = templateModal.querySelector('.modal');
			modal.querySelector('img').setAttribute('src', coach.photo);
			modal.querySelector('.modal__name').innerText = `${coach["last name"]} ${coach["first name"]}`;
			modal.querySelector('.modal__point--category').innerText = `'Категорія: ${coach.category}'`;
			modal.querySelector('.modal__point--experience').innerText = `'Досвід: ${coach.experience}'`;
			modal.querySelector('.modal__point--specialization').innerText = `'Напрям тренера: ${coach.specialization}'`;
			modal.querySelector('.modal__text').innerText = coach.description;

			modal.style.display = 'block';
			document.body.style.overflowY = "hidden";

			const closeBtn = modal.querySelector('.modal__close');
			closeBtn.addEventListener('click', () => {
				modal.remove();
				document.body.style.overflowY = "visible";
			});

			document.body.append(modal);
		})
		coachCard.append(template)
	}

	setTimeout(() => {
		sorting.removeAttribute('hidden');
		sidebar.removeAttribute('hidden');
		hidePreloader()
	}, 1000)

}

function sortFilterCoach(direction, category, sortType) {
	let result = [...original];

	result = result.filter(coach => {
		let directionCheck = true;
		let categoryCheck = true;


		if (direction === 'gym') {
			directionCheck = coach.specialization === "Тренажерний зал"
		} else if (direction === 'fight club') {
			directionCheck = coach.specialization === "Бійцівський клуб"
		} else if (direction === 'kids club') {
			directionCheck = coach.specialization === "Дитячий клуб"
		} else if (direction === 'swimming pool') {
			directionCheck = coach.specialization === "Басейн"
		}

		if (category === 'master') {
			categoryCheck = coach.category === "майстер"
		} else if (category === 'specialist') {
			categoryCheck = coach.category === "спеціаліст"
		} else if (category === 'instructor') {
			categoryCheck = coach.category === "інструктор"
		}

		return directionCheck && categoryCheck;

	});

	if (sortType === 'ЗА ПРІЗВИЩЕМ') {
		result.sort((a, b) => {
			return a["last name"].localeCompare(b["last name"], 'uk');
		});
	} else if (sortType === 'ЗА ДОСВІДОМ') {
		result.sort((a, b) => {
			let numA = parseInt(a.experience);
			let numB = parseInt(b.experience);

			if (numA > numB) {
				return -1;
			}
			if (numA < numB) {
				return 1
			}
			return 0;
		});
	}

	return result;
}

function removeSort() {
	sortBtn.forEach(btn => {
		btn.classList.remove('sorting__btn--active');
	})
}


let sortingKey = 'sort';

const saveSort = localStorage.getItem(sortingKey);
const saveDirection = localStorage.getItem('filterDirection');
const saveCategory = localStorage.getItem('filterCategory');

currentDirection = saveDirection;
currentCategory = saveCategory;
currentSort = saveSort;

if (currentDirection) {
	const directionInput = document.querySelector(`input[name="direction"][value="${saveDirection}"]`);
	if (directionInput) directionInput.checked = true;
}

if (currentCategory) {
	const categoryInput = document.querySelector(`input[name="category"][value="${saveCategory}"]`);
	if (categoryInput) categoryInput.checked = true;
}

if (currentSort) {
	sortBtn.forEach(btn => {
		if (btn.innerText === currentSort) {
			btn.classList.add('sorting__btn--active');
		}
	});
}

const filteredSortedData = sortFilterCoach(currentDirection, currentCategory, currentSort);
showCoachCard(filteredSortedData);

localStorage.removeItem('filterDirection');
localStorage.removeItem('filterCategory');
localStorage.removeItem('sort');



sorting.addEventListener('click', (e) => {
	if (e.target.matches('.sorting__btn')) {
		removeSort();
		e.target.classList.add('sorting__btn--active');
		coachCard.innerHTML = '';

		currentSort = e.target.innerText;
		localStorage.setItem(sortingKey, currentSort)

		let newDATA = sortFilterCoach(currentDirection, currentCategory, currentSort);
		showCoachCard(newDATA);
	}
})

let filtrField = document.querySelectorAll('fieldset');

filtrField[0].setAttribute('id', 'direction');
filtrField[1].setAttribute('id', 'category');

sidebar.addEventListener('submit', (e) => {
	e.preventDefault()

	currentDirection = document.querySelector('input[name="direction"]:checked').value;
	currentCategory = document.querySelector('input[name="category"]:checked').value;

	localStorage.setItem('filterDirection', currentDirection);
	localStorage.setItem('filterCategory', currentCategory);

	let newData = sortFilterCoach(currentDirection, currentCategory, currentSort);
	showCoachCard(newData);
})