
document.querySelector('button[data-action="increment"]').addEventListener('click', increment);
document.querySelector('button[data-action="decrement"]').addEventListener('click', decrement);

let counterValue = 0;

function counter(arg){
    counterValue += arg;
    document.querySelector('#value').textContent = counterValue;
}

function increment(){
    counter(1)
}

function decrement(){
    counter(-1)
}