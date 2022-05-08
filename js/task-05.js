const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
console.log(outputEl);
inputEl.addEventListener("focus", onInputFocus)
function onInputFocus(){
    console.log(`input on focus`);
}
inputEl.addEventListener("input", event => {
             
    outputEl.textContent = event.currentTarget.value; 
    
})
inputEl.addEventListener("blur",onInputBlur);
function onInputBlur(){
   
}
console.log(inputEl.value);