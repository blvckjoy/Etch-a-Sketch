const resizeBtn = document.querySelector("button");
const container = document.querySelector("#grid-container");
const containerSize = 960;
const gridSize = 16;

function createGrid(size) {
  // clear the grid
  container.innerHTML = "";

  // calc size of each grid
  const itemSize = containerSize / size;

  // create grid items
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.style.height = `${itemSize}px`;
    div.style.width = `${itemSize}px`;
    container.appendChild(div);
  }
}
createGrid(gridSize);

resizeBtn.addEventListener("click", () => {
  let newSize = Number(
    prompt("Enter the number of squares per side for the new grid.")
  );

  if (isNaN(newSize) || newSize < 0) {
    alert("Invalid input: Please enter a valid positive number.");
    return;
  } else if (newSize > 100) {
    alert("Number is too big. Value of 100 will be used instead");
    createGrid(100);
  } else createGrid(newSize);
});
