const taskSixInput = document.querySelector('#validation-input');
taskSixInput.addEventListener('change', inputValidator);

function inputValidator(event){  
    const dataLength = event.currentTarget.getAttribute('data-length');
    
    if(taskSixInput.value.length !== +dataLength){
        taskSixInput.classList.remove('valid');
        taskSixInput.classList.add('invalid');
    } else if (taskSixInput.value.length === +dataLength){
        taskSixInput.classList.remove('invalid');
        taskSixInput.classList.add('valid')
    }
}