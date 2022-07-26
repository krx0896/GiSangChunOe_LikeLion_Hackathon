let textEls = document.querySelectorAll('.subtext p')
console.log(textEls)
textEls.forEach(textElement => {
  textElement.style.display="none";
});
function textShow(textEl){
  textEls.forEach(textElement => {
    textElement.style.display="none";
  });
  textEl.style.display="block";
}

setInterval(() => textShow(textEls[Math.floor(Math.random()*3)]), 1000);