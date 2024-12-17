const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function() {
    //get a random number between 0 - 3 to access any element of the array
    const randomNo = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNo];
    color.textContent = colors[randomNo];
})

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}
