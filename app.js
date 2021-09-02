let titleInput = document.querySelector('.titleInput');
let tagInput = document.querySelector('.tagInput');
let updateBtn = document.getElementById('saveBtn');
/// Todo Div 
// Parent element
let todoList = document.querySelector('.todo-list');

/// Event listners 

updateBtn.addEventListener('click', updateTask);
todoList.addEventListener("click", toogleBtn);


function updateTask(e) {
    e.preventDefault();
    // Parent Div
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('todo');
    // child of main Div
    let titleTask = document.createElement('li');
    titleTask.classList.add('todo-list-task');
    titleTask.innerText = titleInput.value;
    // child of main div - Tag
    let titleTag = document.createElement('li');
    titleTag.classList.add("todo-list-tag");
    titleTag.innerText = tagInput.value;
    // Append child to parent
    mainDiv.appendChild(titleTask);
    mainDiv.appendChild(titleTag);
    // Append child to Parent Element
    todoList.appendChild(mainDiv);
    // Rest value
    titleInput.value = "";
    tagInput.value = "";
    //  Complete Button 
    let compBtn = document.createElement('button');
    compBtn.classList.add('compbtn');
    compBtn.innerHTML = "Completed";
    mainDiv.appendChild(compBtn);
    // Delete Button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("deleteBtn");
    mainDiv.appendChild(deleteBtn)
}

function toogleBtn(e) {
    let items = e.target;
    if (items.classList[0] == 'deleteBtn') {
        let todo = items.parentElement;
        todo.remove();
    } else if (items.classList[0] == 'compbtn') {
        let todoItem = items.parentElement;
        todoItem.classList.add('compeleted');
    };
};