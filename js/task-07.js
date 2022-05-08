const inputEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onScrollInput);
function onScrollInput (){
const size = inputEl.value;

textEl.style.fontSize = size + 'px';

}
