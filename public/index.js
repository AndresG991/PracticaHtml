const btnLoginSubmit = document.getElementById("btnLoginSubmit")
const btnForgotCreds = document.getElementById("btnForgotCreds")
const username = document.getElementById("username")
const password = document.getElementById("password")

btnLoginSubmit.addEventListener("click", sendCreds)
btnForgotCreds.addEventListener("click", showCreds)

const userCreds = {
    username: "Juan",
    password: "1234"
}

function sendCreds() {
    const usernameValue = username.value
    const passwordValue = password.value

    if (usernameValue == userCreds.username && passwordValue == userCreds.password) {
        window.location.href = "profile.html"
    }
    else if (usernameValue != userCreds.username || passwordValue != userCreds.password) {
        alert("Wrong credentials, try again")
    }
}

function showCreds() {
    alert(`This are the credentials ;)\n
        Username: ${userCreds.username}
        Password: ${userCreds.password}`)
}