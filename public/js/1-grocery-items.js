let groceries_array = ['Milk', 'Bread', 'Pasta', 'Soy Sauce', 'Tomato', 'String Beans', 'Fish', 'Softdrinks', 'Toothpaste', 'Vinegar', 'Tomato Sauce', 'Laundry Detergent', 'Shampoo', 'Conditioner', 'Laundry Powder', 'Potato Chips', 'Chocolate Bar', 'Bottled Water', 'Beef Meat', 'Chicken']
let count = groceries_array.length
var ul = document.getElementById('root')
const fetch_groceries = () => {
    for (let i = 0; i < groceries_array.length; i++) {
        var li = document.createElement("li")
        li.classList.add('list-group-item')
        li.appendChild(document.createTextNode(groceries_array[i]))
        ul.appendChild(li)
    }
    document.getElementById('count').textContent = `Items count : ${groceries_array.length}`
}
document.getElementById('add-item').onclick = () => {
    let item = document.getElementById('grocery-item')
    if (item.value !== '') {
        groceries_array.push(item.value)
        var li = document.createElement("li")
        li.classList.add('list-group-item')
        li.appendChild(document.createTextNode(groceries_array[count++]))
        ul.appendChild(li)
        item.value = ''
        document.getElementById('count').textContent = `Items count : ${count}`
        var wrapper = document.getElementById("list-wrapper");
        wrapper.scrollTop = wrapper.scrollHeight;
    } else {
        item.style.border = 'red solid 1px'
    }
}