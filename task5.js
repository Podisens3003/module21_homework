const form = document.querySelector('#task5-form');
const userId = document.querySelector('input');
const list = document.querySelector('ol');

form.onsubmit = (e) => {
    e.preventDefault();
    getTodosList();
}

const getTodosList = () => {
    const request = fetch(
        `https://jsonplaceholder.typicode.com/users/${userId.value}/todos`,
        { method: 'GET' }
    )

    request
        .then(res => res.json())
        .then(res => renderList(res))
}

const renderList = (todos) => {
    if (!todos.length) {
        return list.innerText = `Пользователь с указанным id ${userId.value} не найден`;
    }

    todos.forEach((todo) => {
        list.innerHTML += `<li ${todo.completed ? 'style="text-decoration: line-through;"' : ""}>${todo.title}</li>`
    });
}