const colorInput= document.querySelector('#colorInput');
const colorOutput = document.querySelector('#colorOutput');

colorInput.addEventListener('input', (event) => {
    const newcolor = event.target.value;
    colorOutput.style.backgroundColor = newcolor;
    if( newcolor === true){
        document.querySelector('h2').classList.toggle('hidden')
    } else{
        document.querySelector('h2').classList.toggle('hidden')
    }
});