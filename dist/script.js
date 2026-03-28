function domLoaded() {
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', addBtnClick);
    
    // keyup event handler for the textbox that has an event parameter.
    // call addBtnClick() if the event.key is "Enter".
    const taskInput = document.getElementById('newTask');
    taskInput.addEventListener('keyup', function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });
}

function addBtnClick() {
    const taskInput = document.getElementById('newTask');
    const newTask = taskInput.value.trim();
    
    if (newTask !== "") {
        addTask(newTask);
        // Clear the textbox's value property
        taskInput.value = '';
        // put the focus back on the textbox.
        taskInput.focus();
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

    //search the DOM for all buttons that use the done-btn class
    const doneButtons = document.querySelectorAll('.done-btn');
    
    //Register removeTask() as the last done button's click event handler
    const lastDoneButton = doneButtons[doneButtons.length - 1];

    lastDoneButton.addEventListener('click', removeTask);
}

function removeTask(event) {
    // assign a variable with event.target's parent node
    const listItem = event.target.parentNode;
    const orderedList = listItem.parentNode;
    
    // Remove <li> element
    orderedList.removeChild(listItem);
}

document.addEventListener('DOMContentLoaded', domLoaded);