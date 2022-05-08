const form = document.querySelector("#validation-input");
const dataLength = form.dataset.length;
console.log(dataLength);
const input = document.querySelector('input');
form.addEventListener('change', e => {
const text = e.target.value;
if (text.length === +dataLength) {
    form.classList.add('valid');
    form.classList.remove('invalid');
  } else {
    form.classList.remove('valid');
    form.classList.add('invalid');
  }
});
