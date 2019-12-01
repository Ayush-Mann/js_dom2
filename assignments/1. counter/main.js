let count = document.querySelector('.displayCounter');
let increm = document.querySelector('.inc');
let decrem = document.querySelector('.dec');
let reset = document.querySelector('.res');
let valueCount = JSON.parse(localStorage.getItem('counterValueLocal'))||0;
function createuI(valueCount){
    count.textContent = valueCount;
    
}
increm.addEventListener('click',incremental)
function incremental(event){
    valueCount = valueCount+1; 
    localStorage.setItem('counterValueLocal',JSON.stringify(valueCount));
    createuI(valueCount);
}
decrem.addEventListener('click',decremental)
function decremental(event){
    valueCount = valueCount-1;
    localStorage.setItem('counterValueLocal',JSON.stringify(valueCount));
    createuI(valueCount);
    // localStorage.setItem('counterValueLocal',JSON.stringify(state)); 
}
reset.addEventListener('click',resetAll)
function resetAll(event){
    valueCount = 0;
    localStorage.setItem('counterValueLocal',JSON.stringify(valueCount));
    createuI(valueCount);

}
