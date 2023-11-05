function generateNewMovie (title, director, release, cover, stock, genre, rating, price){
    const li = movieTemplate(title, director, release, cover, stock, genre, rating, price)
    const ul = document.querySelector('ul')
    ul.prepend(li)
}

function movieTemplate(title, director, release, cover, stock, genre, rating, price){
    const li = document.createElement('li')
    li.classList.add("single-movie")

    const removeButton = document.createElement("button")
    removeButton.textContent = "Remove Movie"
    removeButton.addEventListener("click", (event)=>{
        event.target.closest('.single-movie').remove()
    })
  
    if (title && director && release  && stock && genre && rating && price){
        let picture = "./storeLogo.png"
        if (cover) {
            picture = cover
        }
        li.innerHTML = `<h3><img src="${picture}" width="200"></h3>
        <p><strong>Movie Title: </strong>${title}</p>
        <p><strong>Directed By: </strong>${director}</p>
        <p><strong>Release Date: </strong> ${release}</p>
        <p><strong>Genre: </strong> ${genre} </p>
        <p><strong>IMDB Rating: </strong> ${rating}⭐️/10⭐️</p>
        <p><strong>Price: </strong> $${price}</p>
        <button class="stock-value">${stock.options[stock.selectedIndex].textContent}</button>`
        li.append(removeButton)
    }
    return li
}

const stockOptions = document.querySelectorAll("ul")

stockOptions.forEach((ul) => {
  ul.addEventListener("click", (event) => {
    if (event.target.classList.contains("stock-value")) {
      if (event.target.textContent === "In Stock") {
        event.target.textContent = "Out Of Stock"
      } else if (event.target.textContent === "Out Of Stock") {
        event.target.textContent = "In Stock"
      }
    }
  })
})


const movieList = document.querySelectorAll("li .remove-movie")
for (movie of movieList ){
    movie.addEventListener("click", (event)=>{
        event.target.closest(".single-movie").remove()
    })
}
