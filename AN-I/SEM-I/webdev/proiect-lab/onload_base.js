const opened_string = localStorage.getItem('opened');
let opened = JSON.parse(opened_string);
console.log(localStorage.getItem('tried'));

if(opened){
for(let i = 0; i < opened.length; i++)
	if(opened[i])
		document.getElementById(i).style.display = "none";
}