

const converter = (equivalent, value) => {
    if (value !== '') {
        switch (equivalent) {
            case 'celsius':
                document.getElementById(`${equivalent}-temp`).value = parseFloat((parseFloat(value) - 32) / 1.8).toFixed(2)
                break
            case 'fahrenheit':
                document.getElementById(`${equivalent}-temp`).value = parseFloat((parseFloat(value) * 1.8) + 32).toFixed(2)
                break
        }
    }
    else if (value === '' || value === 0) {
        document.getElementById(`${equivalent}-temp`).value = 0
    }


}
let celsius = document.getElementById('celsius-temp')
let fahrenheit = document.getElementById('fahrenheit-temp')

celsius.oninput = e => converter('fahrenheit', e.target.value)
fahrenheit.oninput = e => converter('celsius', e.target.value)

const clear_value = (equivalent, container, value) => {
    if (value === 0 || value === '') {
        document.getElementById(`${container}-temp`).value = 0
        document.getElementById(`${equivalent}-temp`).value = 0
    }
}

fahrenheit.onblur = (e) => clear_value('celsius', 'fahrenheit', e.target.value)
celsius.onblur = (e) => clear_value('fahrenheit', 'celsius', e.target.value)


let elements = document.querySelectorAll(".form-control");
elements.forEach(e => {
    e.addEventListener('focus', function handleClick(event) {
        event.target.value = ''
    });
});
