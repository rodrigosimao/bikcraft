const btn = document.querySelector('.btn');
const dark = document.querySelector('.dark');

btn.onclick = function () {
  this.classList.toggle('active');
  dark.classList.toggle('active');
};
