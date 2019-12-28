function createArticle() {
	let input = document.getElementById("createTitle");
	let textArea = document.getElementById("createContent");
	let articles = document.getElementById("articles");
	
	if (input === null || textArea === null || articles === null) {
		throw new Error("Something is wrong...");
	}

	let article = document.createElement("article");
	let h3 = document.createElement("h3");
	let p = document.createElement("p");

	articles.appendChild(article);

	article.appendChild(h3);
	article.appendChild(p);

	h3.innerHTML = input.value;
	p.innerHTML = textArea.value;

	input.value = "";
	textArea.value = "";
}