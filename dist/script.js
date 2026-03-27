function domLoaded() {
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', addBtnClick);
}

function addBtnClick() {
    const taskInput = document.getElementById('newTask');
    const newTask = taskInput.value.trim();
    
    if (newTask) {
        addTask(newTask);
        taskInput.value = '';
    }
}

function addTask(task) {
    
    //Call document.createElement() to create a new <li> element.
    const newListItem = document.createElement('li');
    
    //Set the new <li> element's innerHTML to the following string where NEW TASK is the addTask() parameter:
    //<span class="task-text">NEW TASK</span><button class="done-btn">&#10006;</button>
    newListItem.innerHTML = `<span class="task-text">${task}</span><button class="done-btn">&#10006;</button>`;
    
    //Call document.querySelector() to find the <ol> DOM node.
    const orderedList = document.querySelector('ol');
    
    //Call appendChild() on the <ol> DOM node with the new <li> element to append the <li> to the ordered list.
    orderedList.appendChild(newListItem);
}

document.addEventListener('DOMContentLoaded', domLoaded);