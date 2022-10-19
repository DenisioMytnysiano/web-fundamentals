const resizeFraction = 0.15
const secondElement = document.getElementById("secondElement")
const elementAfterSecondElement = document.querySelector("#secondElement + p")

const addButton = document.getElementById("add")
const smallerButton = document.getElementById("smaller")
const biggerButton = document.getElementById("bigger")
const removeButton = document.getElementById("delete")
const fileInput = document.getElementById("uploadFile")

secondElement.addEventListener("click", () => changeSecondElementColour())
elementAfterSecondElement.addEventListener("click", () => changeElementAfterSecondColour())

addButton.addEventListener("click", () => triggerFileSelection())
fileInput.addEventListener("change", (e) => addNewImage(e.target.files[0]))
smallerButton.addEventListener("click", () => makeLastImageSmaller())
biggerButton.addEventListener("click", () => makeLastImageBigger())
removeButton.addEventListener("click", () => deleteLastImage())

function triggerFileSelection(){
    fileInput.click()
}

function getLastImage(){
    var images = document.querySelectorAll("#images-holder img")
    return images[images.length - 1]
}

function changeSecondElementColour(){
    secondElement.style.color = "#" + getRandomColor()
    secondElement.style.backgroundColor = "#" + getRandomColor()
}

function changeElementAfterSecondColour(){
    elementAfterSecondElement.style.color = "#" + getRandomColor()
    elementAfterSecondElement.style.backgroundColor = "#" + getRandomColor()
}

function getRandomColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}

function makeLastImageSmaller(){
    const lastImage = getLastImage()
    const newHeight = lastImage.clientHeight * (1 - resizeFraction)
    const newWidth = lastImage.clientWidth * (1 - resizeFraction)
    lastImage.setAttribute("height", newHeight)
    lastImage.setAttribute("width", newWidth)
}

function makeLastImageBigger(){
    const lastImage = getLastImage()
    const newHeight = lastImage.clientHeight * (1 + resizeFraction)
    const newWidth = lastImage.clientWidth * (1 + resizeFraction)
    lastImage.setAttribute("height", newHeight)
    lastImage.setAttribute("width", newWidth)
}

function addNewImage(fileName){
    var imageHolder = document.getElementById("images-holder")

    var newImage = document.createElement("img")
    imageHolder.appendChild(newImage)

    var fr=new FileReader();
    fr.readAsDataURL(fileName);
    fr.onload = function(e) { newImage.src = fr.result; };
}

function deleteLastImage(){
    const lastImage = getLastImage()
    lastImage.remove()
}