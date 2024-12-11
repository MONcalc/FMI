const safes = document.querySelectorAll(".safe");
console.log(opened);

for(let i = 0; i < safes.length; i++)
    if(!opened[i]) del(document.getElementById(i), 1);

if(tried != null){
    const correct_code = safes[tried].getAttribute("cod");
    const that_safe = document.getElementById(tried)
    if(correct_code == their_code)
      del(that_safe), opened[tried] = 1;
    else {
      that_safe.classList.add("Shake");
      setTimeout(() => {
        safe.classList.remove("Shake");
      }, 300);
    }
}

localStorage.setItem("opened", JSON.stringify(opened));

safes.forEach(safe => {
  safe.addEventListener('click', () => {
    const ego =  safe.getAttribute('id');
    
    localStorage.setItem("tried", ego);
    window.location.href = "keypad.html";
  });
})