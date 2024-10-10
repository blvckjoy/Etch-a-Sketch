const container = document.querySelector("#grid-container");
const createGridBtn = document.querySelector("#create-grid-btn");
const resetBtn = document.querySelector("#reset-btn");
const containerSize = 960;
const gridSize = 16;

function createGrid(size) {
   // clear the grid
   container.innerHTML = "";

   // calculate each grid item size
   const itemSize = containerSize / size;

   let isDrawing = false;

   // Add mousedown, mousemove, and mouseup event listeners to the container
   container.addEventListener("mousedown", () => (isDrawing = true));
   container.addEventListener("mouseup", () => (isDrawing = false));
   container.addEventListener("mouseleave", () => (isDrawing = false));

   // create grid items
   for (let i = 0; i < size * size; i++) {
      const div = document.createElement("div");
      div.classList.add("grid-item");
      div.style.height = `${itemSize}px`;
      div.style.width = `${itemSize}px`;
      div.style.backgroundColor = "white"; // Set initial background color

      // Add mousemove event listener to each grid item
      div.addEventListener("mousemove", (e) => {
         if (isDrawing) {
            e.target.style.backgroundColor = getRandomColor();
         }
      });

      container.appendChild(div);
   }
}
createGrid(gridSize);

// generate random color
function getRandomColor() {
   const r = Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);

   return `rgb(${r}, ${g}, ${b})`;
}

// click event handler
createGridBtn.addEventListener("click", () => {
   const newSize = Number(
      prompt("Enter a number to represent each grid sides")
   );
   if (isNaN(newSize) || newSize < 0) {
      alert("Please enter a valid and positive number");
   } else if (newSize > 100) {
      alert("Number is greater than 100, we will use 100 instead :)");
      createGrid(100);
   } else createGrid(newSize);
});

// Reset button event handler
resetBtn.addEventListener("click", () => {
   createGrid(16);
   const gridItems = document.querySelectorAll(".grid-item");
   gridItems.forEach((item) => {
      item.style.backgroundColor = "white";
   });
});
