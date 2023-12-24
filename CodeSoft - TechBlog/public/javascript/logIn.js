console.log('LogIn.js')

const btnLogIn = document.getElementById('btn-log-in')

btnLogIn.addEventListener('click', async (e) => {
    e.preventDefault()


    const Email = document.getElementById('email').value
    const Password = document.getElementById('password').value

    const res = await sendData(Email, Password)
    
    if (res.message === 'success') {

        console.log('success')
        window.location.href = 'http://localhost:3000/admin-panel'
        
    }
})

// function to send data
async function sendData(Email, Password) {

    const url = 'http://localhost:3000/author-log-in'

    const data = { Email: Email, Password: Password }

    const response = await fetch(url, {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)
    })

    const res = await response.json()

    return res
}