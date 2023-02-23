const form = document.querySelector('.login-form');

form.addEventListener('submit', formHandler);

function formHandler(event){
    event.preventDefault();
    
    const {
        elements: {email, password}
    } = event.currentTarget;

    if (email.value === '' || password.value === ''){
        return alert('All fields must be filled.');
    } else {
        console.log({email: email.value, password: password.value});
        event.currentTarget.reset();
    }
    // console.log('mail:', event.currentTarget.elements.email.value);
    // console.log('pass:', event.currentTarget.elements.password.value);
}