var formContainer = document.getElementById("form-task-container")
const nameInput = document.getElementById("nameInput")
const variantInput = document.getElementById("variantInput")
const groupInput = document.getElementById("groupInput")
const phoneInput = document.getElementById("phoneInput")
const idCardInput = document.getElementById("idCardInput")
const studentform = document.getElementById("studentForm")

studentform.addEventListener("submit", e => {
    e.preventDefault()
    const isValidform = validateForm()
    if (isValidform) {
        showStudentProfile()
    }
})

function validateForm() {
    return validateNameInput()
        & validateVariantInput()
        & validateGroupInput()
        & validatePhoneInput()
        & validateIdCardInput()
}

function showStudentProfile() {
    var existingStudentProfile = document.getElementById("student-profile")
    existingStudentProfile?.remove()

    const profile = document.createElement("div")
    profile.classList.add("form-container")
    profile.setAttribute("id", "student-profile")
    formContainer.appendChild(profile)

    const name = document.createElement("p")
    name.innerText = `ПІБ: ${nameInput.value}`
    profile.appendChild(name)

    const variant = document.createElement("p")
    variant.innerText = `Варіант: ${variantInput.value}`
    profile.appendChild(variant)

    const group = document.createElement("p")
    group.innerText = `Група: ${groupInput.value}`
    profile.appendChild(group)

    const phone = document.createElement("p")
    phone.innerText = `Телефон: ${phoneInput.value}`
    profile.appendChild(phone)

    const idCard = document.createElement("p")
    idCard.innerText = `ID картка: ${idCardInput.value}`
    profile.appendChild(idCard)
}

function validateNameInput() {
    const name = nameInput.value;
    var validationResult = validateName(name)
    validationResult ? indicateValidInput(nameInput) : indicateErrorInput(nameInput);
    return validationResult;
}

function validateVariantInput() {
    const variant = variantInput.value;
    var validationResult = validateVariant(variant)
    validationResult ? indicateValidInput(variantInput) : indicateErrorInput(variantInput);
    return validationResult;
}

function validateGroupInput() {
    const group = groupInput.value;
    const validationResult = validateGroup(group);
    validationResult ? indicateValidInput(groupInput) : indicateErrorInput(groupInput);
    return validationResult;
}

function validatePhoneInput() {
    const phone = phoneInput.value;
    const validationResult = validatePhone(phone);
    validationResult ? indicateValidInput(phoneInput) : indicateErrorInput(phoneInput);
    return validationResult;
}

function validateIdCardInput() {
    const idCard = idCardInput.value;
    const validationResult = validateIdCard(idCard);
    validationResult ? indicateValidInput(idCardInput) : indicateErrorInput(idCardInput);
    return validationResult;
}

function validateName(name) {
    const nameRegex = new RegExp("^\\w+ .\\..\\.$")
    return nameRegex.test(name)
}

function validateVariant(variant) {
    const variantRegex = new RegExp("^\\d{2}$")
    return variantRegex.test(variant)
}

function validateGroup(group) {
    const groupRegex = new RegExp("^\\w{2}-\\d{2}$")
    return groupRegex.test(group)
}

function validatePhone(phone) {
    const phoneRegex = new RegExp("^\\(\\d{3}\\)-\\d{3}-\\d{2}-\\d{2}$")
    return phoneRegex.test(phone)
}

function validateIdCard(idCard) {
    const idCardRegex = new RegExp("^\\w{2} №\\d{6}$");
    return idCardRegex.test(idCard)
}

function indicateErrorInput(element) {
    element.classList.add("error")
}

function indicateValidInput(element) {
    element.classList.remove("error")
}