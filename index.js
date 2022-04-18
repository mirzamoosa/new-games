let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for(button of buttons){
    
    button.addEventListener('click' , (e)=>{
        buttonText = e.target.innerText;
        console.log('buttonText is' , buttonText);

       if (buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText =="="){
            screen.value = eval(screen.value);   
        }
        else{   
            screen.value += buttonText;
            //screen.value = screenValue;
        }    
    })
}

function calculate(event){
    event.preventDefault();
    screen.value = eval(screen.value);
    console.log(screen.value);
}