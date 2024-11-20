const safes = document.querySelectorAll('.safe');
const tried = localStorage.getItem('tried');
const their_code = localStorage.getItem('their_code');

if(!opened)
    opened = new Array(safes.length).fill(0);

if(tried){
  console.log("tried = true" + tried);
  const goodsafe = document.querySelector('.safe[id="tried"]')
  const correct_code = safes[tried].getAttribute('code');
  console.log(goodsafe);
  if(their_code == correct_code)
    opened[tried] = 1, safes[tried].style.display = "none";

}

safes.forEach(safe => {
  safe.addEventListener('click', () => {
    localStorage.setItem('tried', safe.getAttribute('id'));
    console.log("Tried in base" + safe.getAttribute('id'));
    window.location.href = "keypad.html";
  });
})