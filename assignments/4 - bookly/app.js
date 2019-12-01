const ul = document.querySelector('.ul');
var addBook = document.querySelector('.add_book_inp');
const addButton = document.querySelector('.add-btn');
const checker_hide = document.querySelector('.check_hide');
const delButton = document.querySelector('.cross');
const searchBox = document.querySelector('.search_book_inp');
let id = function(){return "qwerty".split("").sort(() => Math.random()-0.5).join('')+"_"+Math.floor(Math.random()*100)};
let state = JSON.parse(localStorage.getItem("bookstore")) || [];


function delete_book_fun(event){
    state = state.filter(elem => elem.id != event.target.dataset.id);
    localStorage.setItem('bookstore',JSON.stringify(state)); 
    createUI(state);
}
function createUI(booksdata){
    ul.innerHTML = "";
    booksdata.forEach(book => {
        var li = document.createElement('li');
        var book_info = document.createElement('p');
        book_info.textContent = book.BookName;
        let del_btn = document.createElement('button');
        del_btn.classList.add('cross');
        del_btn.innerText = 'Delete'; 
        del_btn.setAttribute("data-id",book.id);
        li.append(book_info,del_btn);
        ul.append(li);
        del_btn.addEventListener('click', delete_book_fun);

        var new_input = document.createElement('input');
        book_info.addEventListener('dblclick',makeEdit);
        function makeEdit(event){
            book_info.parentElement.replaceChild(new_input, book_info);
            new_input.value = book.BookName;
            new_input.focus();
            new_input.addEventListener('keyup',(event) =>{
                if(event.keyCode == 13){
                    book.BookName = new_input.value;
                    // book_info.textContent = book.BookName;
                    createUI(state);
                    localStorage.setItem('bookstore',JSON.stringify(state))
                }
        })
        new_input.addEventListener('blur',event => {
                    book.BookName = new_input.value;
                    // book_info.textContent = book.BookName;
                    createUI(state);
                    localStorage.setItem('bookstore',JSON.stringify(state))

        })
        localStorage.setItem('bookstore',JSON.stringify(state));
     }
    });
    localStorage.setItem('bookstore',JSON.stringify(state));
}

createUI(state);
function addBookFun(event){
    event.preventDefault();
    if(addBook.value){
        state.push({
            BookName:addBook.value,
            id: id()
        });
        createUI(state);
        addBook.value = '';
    }
}

function show_or_hide(event)    {
    if(checker_hide.checked == true){
        arr = [];
        createUI(arr);

    }
    else{
        createUI(state);
    }
}

function searchfun(event){
    event.preventDefault();
    var searchBook = state.filter(elem => elem.BookName.toLowerCase().includes(searchBox.value.toLowerCase()));
    createUI(searchBook);
    // localStorage.setItem('bookstore',JSON.stringify(state));
}

addButton.addEventListener('click',addBookFun);
addButton.addEventListener('keyup',addBookFun);
checker_hide.addEventListener('click', show_or_hide);
searchBox.addEventListener('keyup', searchfun);
createUI(state);