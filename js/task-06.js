const taskSixInput = document.querySelector('#validation-input');
taskSixInput.addEventListener('change', inputValidator);

function inputValidator(){  
    if(taskSixInput.value.length !== 6){
        taskSixInput.classList.remove('valid');
        taskSixInput.classList.add('invalid');
    } else if (taskSixInput.value.length === 6){
        taskSixInput.classList.remove('invalid');
        taskSixInput.classList.add('valid')
    }
}