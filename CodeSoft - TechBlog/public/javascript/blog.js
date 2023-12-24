console.log('blog.js')

btnPrev = document.getElementById('btn-prev')
btnNext = document.getElementById('btn-next')

const id = btnPrev.getAttribute('data')
if (id == 1) {

    btnPrev.setAttribute('disabled', 'true')
    btnPrev.classList.remove(':hover')      // needs to update -- not working
}else if (id == 100) {              // needs to update for last index

    btnNext.setAttribute('disabled', 'true')
}
btnPrev.addEventListener('click', () => {

    console.log('prev')
    const result = fetchData(id)
    
})

const fetchData = async (id) => {

    const url = `http://localhost:3000/blog-content-id?id="${id}"`
    // console.log(blogData)

    const response = await fetch(url, {

        method: 'GET'
    })

    const res = await response.json()
    const result = res.result
    return result
}
