# Etch-a-Sketch Game

## Description

The Etch-a-Sketch game is a web-based drawing pad that allows users to draw on a grid of square divs. The grid can be dynamically resized based on user input and each grid item will change to a random color when hovered over. This project demonstrates the use of HTML, CSS, and JavaScript to create an interactive drawing tool with flexbox.

## Features

- **Dynamic Grid**: Create a 16x16 grid of square divs initially, which can be resized to any number of squares per side.

- **Responsive Design**: The grid size adjusts to fit within a fixed container width of 960px.

## Explanation

- The button triggers a prompt for the new grid size.

- The div with id="grid-container" will hold the grid items.

- The #grid-container uses Flexbox to align grid items.

- .grid-item styles each grid cell, setting the border and hover effects.

- createGrid(size): Creates a grid based on the provided size, adjusting each cell's dimensions to fit within the container.

- resizeButton Event Listener: Prompts the user for a new grid size, validates the input, and regenerates the grid.
