// Mobile View
const tabAcc = document.getElementsByClassName("tabs-mob");
let i;

for (i = 0; i < tabAcc.length; i++) {
  tabAcc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Desktop View
const content1 = document.querySelector('#tab-1');
content1.addEventListener('click', (e) => {
  document.querySelector('.dropdown-1').classList.toggle('hide');
  document.querySelector('.dropdown-2').classList.remove('hide');
  document.querySelector('.dropdown-3').classList.remove('hide');
  document.querySelector('.fitguide').classList.toggle('darkBG');
  document.querySelector('.fitguide a').classList.toggle('lightText');
  // fitguide.onclick = () => {
  //   switcher = !switcher;
  //  fitguide.style.backgroundColor = switcher ? "black" : "white";
  // }
});

const content2 = document.querySelector('#tab-2');
content2.addEventListener('click', (e) => {
  document.querySelector('.dropdown-2').classList.toggle('hide');
  document.querySelector('.dropdown-1').classList.remove('hide');
  document.querySelector('.dropdown-3').classList.remove('hide');
  document.querySelector('.care').classList.toggle('darkBG');
  document.querySelector('.care a').classList.toggle('lightText');
});

const content3 = document.querySelector('#tab-3');
content3.addEventListener('click', (e) => {
  document.querySelector('.dropdown-3').classList.toggle('hide');
  document.querySelector('.dropdown-1').classList.remove('hide');
  document.querySelector('.dropdown-2').classList.remove('hide');
  document.querySelector('.materials').classList.toggle('darkBG');
  document.querySelector('.materials a').classList.toggle('lightText');
});
