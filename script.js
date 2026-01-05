let clickCount = 0;
const clicksDisplay = document.getElementById("clicks");
function btnPressed() {
    clickCount++;
    clicksDisplay.textContent = clickCount
}