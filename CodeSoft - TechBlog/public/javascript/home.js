console.log('home.js')


const row = document.getElementById('row')

row.addEventListener('click', async (e) => {

    const card = e.target.closest('.card')

    if (card) {
        const title = card.querySelector('h3').innerText
        console.log('clicked', title)

        const url = `http://localhost:3000/blog-content?q=${title}`
        window.open(url, '_blank')
    }
})


const author = document.getElementById('author')

author.addEventListener('change', async () => {


    row.innerHTML = ''
    const authorName = author.value
    console.log(authorName)

    const res = await getDataByAuthor(authorName)
    console.log(res)


    res.response.forEach(element => {

        const card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = `
            <div>

                <div class="author">
                    <p>${element.Authors}</p>
                </div>

                <div>
                    <img id="card-img" src="${element.ImgURL}" alt="Images">
                </div>

                <div class="card-body">
                    <h3 class="mt-2">${element.blogTitle}</h3>

                    <p id="blog-content" class="mt-4">${element.smallPara}</p>
                </div>
            </div>
            
        `
        row.appendChild(card)

    })

})

async function getDataByAuthor(authorName) {

    const url = `http://localhost:3000/author/blog-content?author=${authorName}`

    const response = await fetch(url, {

        method: 'GET',

    })

    const res = await response.json()
    return res
}