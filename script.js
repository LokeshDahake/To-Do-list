document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(input.value);
        input.value = '';
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.addEventListener('click', () => {
            li.classList.toggle('done');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
