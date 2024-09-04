// Select the body element to attach event listener
const bodyEl = document.querySelector("body");

// Event listener for mouse movements
bodyEl.addEventListener("mousemove", (event) => {
    // Get the mouse position
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    // Create a new span element to represent the heart
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px"; // Set the horizontal position
    spanEl.style.top = yPos + "px"; // Set the vertical position

    // Randomly size the heart element
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    // Add the heart element to the body
    bodyEl.appendChild(spanEl);

    // Remove the heart element after 3 seconds
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});
