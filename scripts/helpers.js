function generateNewMovie (title, director, release, cover, stock){
    const li = movieTemplate(title, director, release, cover, stock)
    const ul = document.querySelector('ul')
    ul.append(li)
}

function movieTemplate(title, director, release, cover, stock){
    const li = document.createElement('li')
    li.classList.add("single-movie")

    const removeButton = document.createElement("button")
    removeButton.textContent = "Remove Movie"
    removeButton.addEventListener("click", (event)=>{
        event.target.closest('.single-movie').remove()
    })

    if (title && director && release && cover && stock){
        li.innerHTML = `<h3><img src="${cover}" width="200" alt="${title} Movie Cover"></h3>
        <p><strong>Movie Title: </strong>${title}</p>
        <p><strong>Directed By: </strong>${director}</p>
        <p><strong>Release Date: </strong> ${release}</p>
        <button class="stock-value">${stock}</button>`
        li.append(removeButton)
    }
    return li
}

const movieList = document.querySelectorAll("li .remove-movie")
for (movie of movieList ){
    movie.addEventListener("click", (event)=>{
        event.target.closest(".single-movie").remove()
    })
}