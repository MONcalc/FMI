const safeslen = 9;
const tried = localStorage.getItem('tried');
const opened_string = localStorage.getItem('opened');
let opened = JSON.parse(opened_string);
const their_code = getCode(window.location.href);

console.log("tried is" + tried, "code is " + their_code);

function getCode(url){
    for(i = 0; i < url.length; i++)
      if(url[i] == "?")
          return url.substr(i + 1, url.length);
}

function del(ele, rev){
	if(!ele) return;
	if(!rev) ele.classList.add("delted");
	else ele.classList.remove("delted");
}

console.log(opened);

if(opened){
for(let i = 0; i < opened.length; i++)
	if(opened[i]) del(document.getElementById(i));
	
}

else opened = new Array(9).fill(0);
