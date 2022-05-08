const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
console.log(outputEl);
inputEl.addEventListener("focus", onInputFocus)
function onInputFocus(){
    
}
inputEl.addEventListener("input", event => {      
outputEl.textContent = event.currentTarget.value; 
    
})
inputEl.addEventListener("blur",onInputBlur);
function onInputBlur(event){
    if(event.currentTarget.value === ""){
        outputEl.textContent = "Anonymous";
         
     }    
}
console.log(inputEl.value);