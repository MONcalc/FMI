const btns = document.querySelectorAll('.btn');
const scrn = document.querySelector('*[name="kscreen"]');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    
    const value = btn.getAttribute("val");
    const lim = scrn.getAttribute('maxlength');

    if(scrn.value.length + value.length <= lim)
      scrn.value += value;
  
    scrn.focus();
  });
});

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) 
        window.location.href = "base.html?" + scrn.value; 
});

scrn.addEventListener('input', () => {
  scrn.value = scrn.value.replace(/\D/g, '');
});