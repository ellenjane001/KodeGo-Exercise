let todo_array = ['Learn Javascript', 'Learn API', 'Connect to API', 'Create a Website']
let ol = document.getElementById('todo-list')
let todo_input = document.getElementById('to-do')

const fetch_todo = () => {
    let i = 0
    do {
        var li = document.createElement("li")
        li.classList.add('p-2')
        li.classList.add('border')
        li.classList.add('m-1')
        li.appendChild(document.createTextNode(todo_array[i++]))
        ol.appendChild(li)
    }
    while (i < todo_array.length)
}

const add_todo = (i = 0) => {



    do {
        if (todo_input.value !== '') {
            var li = document.createElement("li")
            li.classList.add('p-2')
            li.classList.add('border')
            li.classList.add('m-1')
            li.appendChild(document.createTextNode(todo_input.value))
            ol.appendChild(li)
            var wrapper = document.getElementById("wrapper");
            wrapper.scrollTop = wrapper.scrollHeight;
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
