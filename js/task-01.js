const itemEl = document.querySelectorAll(".item");
console.log(`Number of categories:`, itemEl.length);
const titleEl = document.querySelectorAll('h2');
const itemOneEl = Array.from(document.querySelector('#categories').children);
for (let elem of itemOneEl) {
    let category = elem.firstElementChild.textContent;   
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Category: ${category}`);
    console.log(`Elements: ${quantityElem}`);
    
};


