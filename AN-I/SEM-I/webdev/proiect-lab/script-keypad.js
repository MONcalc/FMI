const btns = document.querySelectorAll('.btn');
console.log("Tried safe" + localStorage.getItem('tried'));

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    
    const value = btn.getAttribute("val");
    const scrn = document.querySelector('*[name="kscreen"]')
    const lim = scrn.getAttribute('maxlength');

    if(scrn.value.length + value.length <= lim)
      scrn.value += value;
  
    scrn.focus();
  });
});

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        const scrn = document.querySelector('*[name="kscreen"]');
        localStorage.setItem("their_code", scrn.value);
        scrn.value = ''; window.location.href = "base.html";
    }
});