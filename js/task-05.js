const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
    // input.value === '' ? 'Anonymous' : output.textContent = event.currentTarget.value;
    if(input.value === ''){
        output.textContent = 'Anonymous';
    } else {
        output.textContent = event.currentTarget.value;
    }
});