const questions = document.querySelectorAll(".question");
const box = document.querySelector(".statement-container");
const backButon = document.querySelector(".buton");
const menuButon = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const textObject = document.querySelector(".textObject");
const statement = document.querySelector(".problem-statement");
const path = "texts/problem";


document.addEventListener("click", () => {
    if(!box.classList.contains("hidden") && !box.contains(event.target))
    	box.classList.add("hidden");
}, true);

backButon.addEventListener("click", () => {
    window.location.href = "base.html"
});

menuButon.addEventListener("click", () => {
    if(!box.classList.contains("hidden"))
    	return;
    if(menu.style.left === "0vw")
    	menu.style.left = "-25vw";
    else menu.style.left = "0vw";
});

questions.forEach(question => {
  question.addEventListener("click", () => {
  		if(menu.style.left === "0vw")
  			return;
  		box.classList.remove("hidden");
  		const want = path + question.id + ".html";
  		
  		fetch(want)
		  .then(response => response.text())
		  .then(textData => {
		  		console.log(textData);
		    	box.innerHTML = textData;
		  });

		console.log(box);
  	});
});







