document.getElementById('greet').onclick = () => {
    let greetings = document.getElementById('greetings')
    let date = document.getElementById('date')
    let week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    if (date.value) {
        let g = ''
        switch (date.value.toLowerCase()) {
            case week[0]:
                g = `Sending you my warmest greetings of <strong>${week[0].toUpperCase()[0] + week[0].substring(1)}</strong>, mate. Have a great day! `
                /* quotes from (https://www.wishesmsg.com/sunday-wishes-messages/#:~:text=Happy%20Sunday!,laughter%2C%20joy%2C%20and%20happiness.)*/
                date.value = ''
                break
            case week[1]:
                g = `Have a marvelous <strong>${week[1].toUpperCase()[0] + week[1].substring(1)}</strong> and a wonderful week!`
                /* quotes from (https://allwording.com/have-a-great-monday/#:~:text=Hope%20your%20week%20gets%20off,most%20of%20the%20week%20ahead!)*/
                date.value = ''
                break
            case week[2]:
                g = `<strong>${week[2].toUpperCase()[0] + week[2].substring(1)}</strong> merely means that you made it through Monday, which is an accomplishment. To you, have a happy <strong>${week[2].toUpperCase()[0] + week[2].substring(1)}</strong>.`
                /* quotes from (https://www.143greetings.com/tuesday-messages.html)*/
                date.value = ''
                break
            case week[3]:
                g = `Happy <strong>${week[3].toUpperCase()[0] + week[3].substring(1)}</strong>! Cheer up! there are still two days left until the weekend.`
                /* quotes from (https://www.wishesmsg.com/wednesday-wishes-messages/)*/
                date.value = ''
                break
            case week[4]:
                g = `Focus on what you want in life rather than what you have achieved. Happy <strong>${week[4].toUpperCase()[0] + week[4].substring(1)}</strong>!`
                /* quotes from (https://www.wedskenya.com/thursday-wishes-messages/)*/
                date.value = ''
                break
            case week[5]:
                g = `Good morning and happy <strong>${week[5].toUpperCase()[0] + week[5].substring(1)}</strong>. Expect greatness today.`
                /* quotes from (https://poemore.com/daily-messages/friday-wishes-messages/)*/
                date.value = ''
                break
            case week[6]:
                g = `Wish you have a blissful weekend. Happy <strong>${week[6].toUpperCase()[0] + week[6].substring(1)}</strong>!`
                /* quotes from https://www.wishesmsg.com/saturday-wishes-messages/ */
                date.value = ''
                break
            default:
                g = 'Invalid day'
                date.value = ''
                break
        }
        greetings.innerHTML = g
    } else {
        date.style.border = 'red 1px solid'
    }
}