const advice = {
    adviceNumber: document.querySelector('#advice-number'),
    adviceText: document.querySelector('#advice-text')
}

const buttonChange = document.querySelector('#buttonChange')

const url = "https://api.adviceslip.com/advice"

const changeAdvice = () => {
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(body =>{
            advice.adviceNumber.innerHTML = `#${body.slip.id}`
            advice.adviceText.innerHTML = `"${body.slip.advice}"`
        })
}

buttonChange.addEventListener('click', changeAdvice)