function generateNewMovie (title, director, release, cover, stock, genre, rating, price){
    const li = movieTemplate(title, director, release, cover, stock, genre, rating, price)
    const ul = document.querySelector('ul')
    ul.append(li)
}

function movieTemplate(title, director, release, cover, stock, genre, rating, price){
    const li = document.createElement('li')
    li.classList.add("single-movie")

    const removeButton = document.createElement("button")
    removeButton.textContent = "Remove Movie"
    removeButton.addEventListener("click", (event)=>{
        event.target.closest('.single-movie').remove()
    })

    if (title && director && release && cover && stock && genre && rating && price){
        li.innerHTML = `<h3><img src="${cover}" width="200" alt="${title} Movie Cover"></h3>
        <p><strong>Movie Title: </strong>${title}</p>
        <p><strong>Directed By: </strong>${director}</p>
        <p><strong>Release Date: </strong> ${release}</p>
        <p><strong>Genre: </strong> ${genre} </p>
        <p><strong>IMDB Rating: </strong> ${rating}⭐️/10⭐️</p>
        <p><strong>Price: </strong> $${price}</p>
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
