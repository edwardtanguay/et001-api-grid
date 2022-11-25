const contentElem = document.querySelector('.content');

const numberOfBooks = 999;
const randomizeItems = true;

(async () => {
	const response = await fetch(
		'https://edwardtanguay.vercel.app/share/techBooks.json'
	);
	const rawBooks = await response.json();
	let books = [];
	if (randomizeItems) {
		books = randomizeArray(rawBooks);
	} else {
		books = [...rawBooks];
	}
	contentElem.innerHTML = `
	<div class="books">
		${books
			.filter((m, i) => i < numberOfBooks)
			.map((book) => {
				return `
		<div class="book">
			<img src="https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg" />
			<div class="info">
				<div class="title">${book.title}</div>
				<div class="description">${book.description}</div>
			</div>
		</div>
			`;
			})
			.join('')}
	</div>
	`;
})();

function randomizeArray(arr) {
	let currentIndex = arr.length,
		randomIndex;
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[arr[currentIndex], arr[randomIndex]] = [
			arr[randomIndex],
			arr[currentIndex]
		];
	}
	return arr;
}
