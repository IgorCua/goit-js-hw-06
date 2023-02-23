const input = document.querySelector('#font-size-control');

input.addEventListener('input', fontSizeChanger);


function fontSizeChanger(){
    document.querySelector('#text').style = `font-size: ${input.value}px`
    console.log(input.value);
}