let myform = document.forms.myform;
let name = myform.elements.nameEnter;
let email = myform.elements.emailEnter;
let password = myform.elements.passEnter;
const submit = myform.elements.submitBtn;
const alert1 = document.querySelector('.alert1');
const alert2 = document.querySelector('.alert2');
const alert3 = document.querySelector('.alert3');
const message = document.querySelector('.message');

submit.addEventListener('click',checkAttribute);
   
function noDisplay(){
    name.style.display = "none";
    email.style.display = "none";
    password.style.display = "none";
    submit.style.display = "none";
}
function displayNone(){
    alert1.style.display = "none";
    alert2.style.display = "none";
    alert3.style.display = "none";
}
function checkAttribute(event){
    event.preventDefault();
    displayNone();
    if(name.value == ''){
        alert1.style.display = "block";
    }
    if(email.value == ''){
        alert2.style.display = "block";
    }
    if(password.value == ''){
        alert3.style.display = "block";
    }
    if((name.value)&&(email.value)&&(password.value)){
        displayNone();
        noDisplay();
        message.textContent = `You are ${name.value} Your email is ${email.value} and password is ${password.value}`
        message.style.display = "block";
    }
}