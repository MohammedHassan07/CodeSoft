console.log('index.js')

const buttons = document.querySelectorAll('button')
let string = ''
let span;
buttons.forEach((button) => {

    button.addEventListener('click', (event) => {

        try {
            if (event.target.innerHTML == '=') {

                span = document.getElementById('error').style.display = 'none'
                let result = eval(string)
                console.log(string)
                document.querySelector('input').value = result
                string = ''

            } else if (event.target.innerHTML == 'AC') {

                span = document.getElementById('error').style.display = 'none'
                document.querySelector('input').value = ''
                string = ''
            } else if (event.target.innerHTML == 'X') {

                span = document.getElementById('error').style.display = 'none'
                string = string.slice(0, -1)
                document.querySelector('input').value = string
            } else {

                span = document.getElementById('error').style.display = 'none'
                display.value = string
                string = string + event.target.innerHTML
                document.querySelector('input').value = string
            }
        } catch (error) {
            console.log(error.message)
            span = document.getElementById('error').style.display = 'block'

        }
    })
})