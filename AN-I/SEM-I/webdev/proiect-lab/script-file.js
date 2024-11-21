const safes = document.querySelectorAll(".safe");
console.log(opened);

for(let i = 0; i < safes.length; i++)
    if(!opened[i]) del(document.getElementById(i), 1);

if(tried != null){
    const correct_code = safes[tried].getAttribute("cod");
    if(correct_code == their_code)
      del(document.getElementById(tried)), opened[tried] = 1;
}

localStorage.setItem("opened", JSON.stringify(opened));

safes.forEach(safe => {
  safe.addEventListener('click', () => {
    const ego =  safe.getAttribute('id');
    
    localStorage.setItem("tried", ego);
    window.location.href = "keypad.html";
  });
})