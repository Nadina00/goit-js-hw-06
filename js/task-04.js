const counterEl = document.querySelector("#counter");
console.log(counterEl);
const btnDecrement = document.querySelector(`[data-action="decrement"]`);
console.log(btnDecrement);
const btnIncrement = document.querySelector(`[data-action="increment"]`);
console.log(btnIncrement);
let valueNum = Number(document.querySelector("#value").textContent);
console.log(valueNum);
let valueEl = document.querySelector("#value");
console.log(valueEl);
btnDecrement.addEventListener("click", event => {
    valueNum -=1;
    valueEl.innerText = valueNum;
   }
);
btnIncrement.addEventListener("click", event => {
    valueNum +=1;
    valueEl.innerText = valueNum;
   }
);

