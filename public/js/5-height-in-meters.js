let foot = document.getElementById('foot')
let inches = document.getElementById('inches')
const height_converter = () => {
    // formula d(m) = d(ft) × 0.3048 + d(in) × 0.0254 
    if (foot.value !== '' || inches.value !== '') {
        // boostrap alert
        alert(`${foot.value} foot and ${inches.value} inches is ${Math.round(parseFloat(foot.value * 0.3048 + inches.value * 0.0254)).toFixed(2)} in Meters`, 'info')
    }

}
document.getElementById('convert').onclick = height_converter
const alertPlaceholder = document.getElementById('result')
// bootstrap alert
const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')
    alertPlaceholder.append(wrapper)
    setTimeout(function () {
        alertPlaceholder.removeChild(alertPlaceholder.firstElementChild)
    }, 5000);
}
let elements = document.querySelectorAll(".form-control");
elements.forEach(e => {
    e.addEventListener('focus', function handleClick(event) {
        event.target.value = ''
    });
});
const clear_value = (container, value) => {
    if (value === '' || value === 0)
        document.getElementById(`${container}`).value = 0
}

foot.onblur = (e) => clear_value('foot', e.target.value)
inches.onblur = (e) => clear_value('inches', e.target.value)