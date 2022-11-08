document.getElementById('greet').onclick = () => {
    let greetings = document.getElementById('greetings')
    let date = document.getElementById('date')
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    if (date.value) {
        let g = ''
        switch (date.value.toUpperCase()[0] + date.value.substring(1)) {
            case week[0]:
                g = `Sending you my warmest greetings of <strong>${week[0]}</strong>, mate. Have a great day! `
                /* quotes from (https://www.wishesmsg.com/sunday-wishes-messages/#:~:text=Happy%20Sunday!,laughter%2C%20joy%2C%20and%20happiness.)*/
                date.value = ''
                break
            case week[1]:
                g = `Have a marvelous <strong>${week[1]}</strong> and a wonderful week!`
                /* quotes from (https://allwording.com/have-a-great-monday/#:~:text=Hope%20your%20week%20gets%20off,most%20of%20the%20week%20ahead!)*/
                break
            case week[2]:
                g = `<strong>${week[2]}</strong> merely means that you made it through Monday, which is an accomplishment. To you, have a happy <strong>${week[2]}</strong>.`
                /* quotes from (https://www.143greetings.com/tuesday-messages.html)*/
                break
            case week[3]:
                g = `Happy <strong>${week[3]}</strong>! Cheer up! there are still two days left until the weekend.`
                /* quotes from (https://www.wishesmsg.com/wednesday-wishes-messages/)*/
                break
            case week[4]:
                g = `Focus on what you want in life rather than what you have achieved. Happy ${week[4]}!`
                /* quotes from (https://www.wedskenya.com/thursday-wishes-messages/)*/
                break
            case week[5]:
                g = `Good morning and happy ${week[5]}. Expect greatness today.`
                /* quotes from (https://poemore.com/daily-messages/friday-wishes-messages/)*/
                break
            case week[6]:
                g = `Wish you have a blissful weekend. Happy ${week[6]}!`
                break
            default:
                g = 'Invalid day'
        }
        greetings.innerHTML = g
    }
}