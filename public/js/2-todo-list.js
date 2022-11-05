const add_todo = (i = 0) => {

    let ol = document.getElementById('todo-list')

    let todo_input = document.getElementById('to-do')

    do {
        if (todo_input.value !== '') {
            var li = document.createElement("li")
            li.classList.add('p-2')
            li.classList.add('border')
            li.classList.add('m-1')
            li.appendChild(document.createTextNode(todo_input.value))
            ol.appendChild(li)
            todo_input.value = ''
            i = 0
        } else {
            todo_input.style.border = 'red solid 1px'
            i = 0
        }
    } while (i == 1)

}
document.getElementById('add-todo').onclick = (e) => {
    add_todo(1)
}
