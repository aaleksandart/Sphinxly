//VARIABLES
const loginbutton = document.getElementById('btn-login')
const loginsection = document.getElementById('login-section')
const closelogin = document.getElementById('close-cross')
const submitlogin = document.getElementById('submit')

const navbar = document.getElementById('navbar')
const showcase = document.getElementById('showcase')
const headers = document.getElementById('headers')
const username = document.getElementById('user-name')
const nameinput = document.getElementById('name-input')
const loginform = document.getElementById('login-form')

const usernameList = [];
const storedUsers = JSON.parse(sessionStorage.getItem('user_list_storage'))
loginbutton.innerHTML = "LOGGA IN"


//FUNCTIONS
function findUserName(name) {
    const nameToUpper = name.toUpperCase()

    try {
        if (storedUsers.includes(nameToUpper) || usernameList.includes(nameToUpper)) {
            username.innerHTML = `VÄLKOMMEN TILLBAKA! DU ÄR INLOGGAD SOM ${nameToUpper}`
            noBlur()
        } else {
            usernameList[usernameList.length] = nameToUpper
            username.innerHTML = `DU ÄR INLOGGAD SOM ${nameToUpper}`
            sessionStorage.setItem("user_list_storage", JSON.stringify(usernameList))
            noBlur()
        }
    }
    catch {
        usernameList[usernameList.length] = nameToUpper
        username.innerHTML = `DU ÄR INLOGGAD SOM ${nameToUpper}`
        sessionStorage.setItem("user_list_storage", JSON.stringify(usernameList))
        noBlur()
    }
}

function blur() {
    loginsection.style.visibility = "visible"
    navbar.classList.add("blur-nav")
    headers.style.visibility = "hidden"
    document.getElementById('body').classList.add("blur")
}

function noBlur() {
    loginsection.style.visibility = "hidden"
    navbar.classList.remove("blur-nav")
    document.getElementById('body').classList.remove("blur")
    headers.style.visibility = "visible"
}


//EVENT LISTENERS
loginbutton.addEventListener('click', function (e) {
    e.preventDefault()
    if (loginbutton.innerHTML === "LOGGA UT") {
        loginbutton.innerHTML = "LOGGA IN"
        username.innerHTML = ""
    } else {
        blur()
    }
})

closelogin.addEventListener('click', function (e) {
    e.preventDefault()
    noBlur()
})

loginform.addEventListener('submit', function (e) {
    e.preventDefault();
    findUserName(nameinput.value)
    nameinput.value = ""
    loginbutton.innerHTML = "LOGGA UT"
    noBlur()
})