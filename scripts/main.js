const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const {title, director, release, cover, stock, genre, rating, price} = event.target
    generateNewMovie(title.value, director.value, release.value, cover.value, stock, genre.value, rating.value, price.value)

    form.reset()
})