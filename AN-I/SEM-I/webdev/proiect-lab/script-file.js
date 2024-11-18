console.log("starting js");
const safes = document.querySelectorAll('.safe');

safes.forEach(safe => {
  safe.addEventListener('click', () => {
    alert('Be ready!');
    prompt("are you readty?")
    knwcheck("38545");
  
  });
})

function knwcheck(ans){
  //window.location.href = "keypad.html"
  const his = prompt("whats the code?");
  if(his == ans)
    alert("Majorbagalert");
  else alert("Ick");
}