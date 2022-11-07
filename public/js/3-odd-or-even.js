const odd_or_even = () => {
    let val = document.getElementById('number')
    if (val.value !== '') {
        let valNum = parseInt(val.value)
        if (valNum % 2 === 0) {
            alert(`${valNum} is an EVEN Number`, 'success')
            val.value = ''
        }
        else if (valNum % 2 !== 0) {
            alert(`${valNum} is an ODD Number`, 'warning')
            val.value = ''
        }
    } else
        val.style.border = 'red 1px solid'
}
document.getElementById('verifier').onclick = odd_or_even
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
        alertPlaceholder.removeChild(alertPlaceholder.firstChild)
    }, 5000);
}