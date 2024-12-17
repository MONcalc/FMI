const safes = document.querySelectorAll(".safe");
const book = document.querySelector(".book")
console.log(opened);
var cnt = 0;

for(let i = 0; i < safes.length; i++)
    if(!opened[i]) del(document.getElementById(i), 1);
    else cnt++;

if(tried != null){
    const correct_code = safes[tried].getAttribute("cod");
    const that_safe = document.getElementById(tried)
    console.log("incercam cod");
    if(correct_code == their_code){
      
      poof = document.createElement("img");
      let linie = parseInt(tried); linie /= 3; linie = Math.floor(linie);
      var offset; linie <= 1 ? offset = 230 * linie : offset = 470;

      poof.style.position = "absolute";
      poof.src = "smoke.gif?buster=" + cnt;
      poof.style.left = that_safe.offsetLeft - 130 + 'px';
      poof.style.top = that_safe.style.top - 140 + offset + 'px';
      poof.style.zIndex = 8;

      that_safe.parentElement.appendChild(poof);
      
      console.log("facem poof");
      del(that_safe), opened[tried] = 1;
      
      setTimeout(() => {
      poof.remove(); delete poof; }, 2000);  
    }

    else {
      that_safe.classList.add("Shake");
      setTimeout(() => {
        that_safe.classList.remove("Shake");
      }, 300);
    }
}

localStorage.setItem("opened", JSON.stringify(opened));

safes.forEach(safe => {
  safe.addEventListener("click", () => {
    const ego =  safe.getAttribute("id");
    
    localStorage.setItem("tried", ego);
    window.location.href = "keypad.html";
  });
})

book.addEventListener("click", () => {
    window.location.href = "problems.html"
});