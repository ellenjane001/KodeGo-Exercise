let celsius = document.getElementById('celsius-temp')
let fahrenheit = document.getElementById('fahrenheit-temp')

celsius.oninput = (e) => {
    if (e.target.value !== '')
        fahrenheit.value = parseFloat((parseFloat(e.target.value) * 1.8) + 32).toFixed(2)
    else if (e.target.value === '' || e.target.value === 0)
        fahrenheit.value = 0
}
fahrenheit.oninput = (e) => {
    if (e.target.value !== '')
        celsius.value = parseFloat((parseFloat(e.target.value) - 32) / 1.8).toFixed(2)
    else if (e.target.value === '' || e.target.value === 0)
        celsius.value = 0
}

fahrenheit.onblur = (e) => {
    if (e.target.value === 0 || e.target.value === '') {
        e.target.value = 0
        celsius.value = 0
    }
}
celsius.onblur = (e) => {
    if (e.target.value === 0 || e.target.value === '') {
        e.target.value = 0
        fahrenheit.value = 0
    }
}
let elements = document.querySelectorAll(".form-control");

elements.forEach(e => {
    e.addEventListener('click', function handleClick(event) {
        event.target.value = ''
    });
});
