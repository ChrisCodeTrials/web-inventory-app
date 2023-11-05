# Movies-R-Us Inventory Website

Welcome to the **Movies-R-Us Inventory Website**, where you can manage your movie inventory. This simple web application allows you to add new movies to your inventory, view existing movies, and update their availability status. Whether you're a movie enthusiast or managing a movie rental store, this website helps you keep track of your movie collection.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add a Movie:** Easily add new movies to your inventory by providing movie details such as:
* If a value is required, the field MUST be filled in *

 **Title** = (the name of the movie), **required**

 **Director** = (name of the director), **required**

 ****Release date** = (the original date for public viewing), **required**

 **Cover image** = (the movie poster for the film **if one is not provided, a default "Movies-R-Us" logo will be set by default**),

 **Genre** = (the genre of the movie), **required**

 **IMDB rating** = (the rating on IMDB's website ), **required**

 **Price** = (how much we charge for the movie), **required**

 **Availability Status** = (whether it is in-stock or unavailable **if it is entered incorrectly/availability changes, you can click on the button to update its status**) **required**

- **View All Movies:** Browse and manage your entire movie inventory with detailed information for each movie.

- **Remove Movies:** If you need to remove a movie from your inventory, use the "Remove Movie" button for quick disposal.

- **Reset Fields** This option lets you clear anything typed in the lines so you can make a new movie.

## Getting Started

1. **Clone the Repository:** To get started, clone this repository to your local machine using the following command:

```git clone <repository-url>```


2. **Open the Website:** In order to access the Movies-R-Us Inventory Website, open the repo file in through your terminal by following these commands:
```
// cd into the folder you would like to house the application, for this example will be starting from the homescreen and opening it through "VSCode"

~
~cd Documents
~Documents git clone "link"
web-inventory-app x (main):
web-inventory-app x (main): code .

```

## Usage

- **Adding a Movie:**
1. In the "Add a Movie" section, fill out the required information for the movie you want to add.
2. Click the "Add Movie" button to add the movie to your inventory.
3. The form will reset to allow you to add more movies.

- **Managing Movie Availability:**
- For each movie in the inventory, you can toggle its availability status by clicking the "In Stock" or "Out Of Stock" button.

- **Removing a Movie:**
- If you wish to remove a movie from your inventory, click the "Remove Movie" button within the movie entry.

## Customization

- You can customize the visual style of the website by modifying the `style.css` file to match your preferences.

- If you want to extend the functionality, you can add more features and interactivity to the website by working on the JavaScript code in `helpers.js` and `main.js`.

## Contributing

Contributions to this project are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request.
