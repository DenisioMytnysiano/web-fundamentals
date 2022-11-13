const usersCount = 3;
const downloadButton = document.getElementById("download-button")
const userContainer = document.getElementById("people-container")

downloadButton.addEventListener("click", async () => await getUsers())

async function getUsers() {
    const userData = await fetchData()
    userData.forEach(user => {
        displayUser(user)
    });
}

async function fetchData() {
    try {
        var response = await fetch(`https://randomuser.me/api/?results=${usersCount}`)
        var responseObject = await response.json()
        return responseObject.results
    } catch (ex) {
        console.error(ex)
    }
}

function displayUser(user) {
    const userElement = createUserElement(user)
    userContainer.appendChild(userElement)
}

function createUserElement(user) {

    var userElement = document.createElement("div")
    userElement.classList.add("people-display")

    var pictureElement = document.createElement("img")
    pictureElement.classList.add("people-image")
    pictureElement.setAttribute("src", user.picture.large)

    var nameElement = document.createElement("div")
    nameElement.innerText = `Name: ${user.name.first} ${user.name.last}
    ` 
    var cellElement = document.createElement("div")
    cellElement.innerText = `Cell: ${user.cell}
    `
    var cityElement = document.createElement("div")
    cityElement.innerText = `City: ${user.location.city}`

    var countryElement = document.createElement("div")
    countryElement.innerText = `Country: ${user.location.country}`

    userElement.appendChild(pictureElement)
    userElement.appendChild(nameElement)
    userElement.appendChild(cellElement)
    userElement.appendChild(cityElement)
    userElement.appendChild(countryElement)

    return userElement
}
