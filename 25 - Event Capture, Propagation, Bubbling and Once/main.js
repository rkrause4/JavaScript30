const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);
  //   e.stopPropagation(); //Stop bubbling
}

// Capture: true makes it go on the way down. Ex. if clicked "3" it will log "1"

// Once will listen for a click once, then unbind itself. same as div.removeEventListener('click', logText)
// == Good if you want to make a button or element only clickable once for a reason (store checkouts)
divs.forEach(div =>
  div.addEventListener('click', logText, { capture: false, once: true })
);

document;
