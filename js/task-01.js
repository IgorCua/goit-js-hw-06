'use strict'

document.querySelector('ul').firstElementChild.addEventListener('click', (event) => {
    listDetails();
});
function listDetails(){
    const itemsList = document.querySelectorAll('.item');
    
    console.log(`Number of categories: ${itemsList.length}`);
    console.log('');
    
    itemsList.forEach((e, i) => {
        console.log(`Category: ${e.firstElementChild.textContent}`);
        console.log(`Elements: ${e.lastElementChild.children.length}`);
        if(i !== itemsList.length - 1) console.log('');
    });
}
//console.log(document.querySelector('ul').firstElementChild)