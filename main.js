(async () => {
	const response = await fetch(
		'https://edwardtanguay.vercel.app/share/techBooks.json'
	);
	const books = await response.json();
})();
