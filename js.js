let toDoList = [];

function taskAddingToArray() {
    let task = document.querySelector('.task-input').value;
    let task_date = document.querySelector('.task-input-date').value;
    toDoList.push({name: task, date: task_date});
    console.log(toDoList);
    document.querySelector('.task-input').value = '';
    renderToDOList()
}

function renderToDOList() {
    let to_do_html = '';
    for (let x in toDoList) {
        let todo_object = `<div class="task-row"> <div>${toDoList[x].name}</div><div> ${toDoList[x].date}</div><div><button class="delete-button" type="button" onclick="deleteTask(${x})">Delete</button></div></div>`
        to_do_html = to_do_html + todo_object
    }
    return document.querySelector('.todo-task-grid').innerHTML = to_do_html;
}

function deleteTask(index) {
    toDoList.splice(index, 1);
    renderToDOList();
}