const btnLoginSubmit = document.getElementById("btnLoginSubmit")
const btnForgotCreds = document.getElementById("btnForgotCreds")
const username = document.getElementById("username")
const password = document.getElementById("password")

btnLoginSubmit.addEventListener("click", evento)
btnForgotCreds.addEventListener("click", showCreds)

const userCreds = {
    username: "Juan",
    password: "1234"
}

async function evento() {
    const credentials = {username: username.value, password: password.value};
    const res = await fetch("http://127.0.0.1:3000/login", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(credentials)
    });
    const data = await res.json();
    console.log(data);
    if(data.isLogin === true) {
        window.location = "./profile.html";
    } else {
        alert("Wrong credentials, try again");
        sessionStorage.setItem("id", data.user.id);
    }
}

// function sendCreds() {
//     const usernameValue = username.value;
//     const passwordValue = password.value;

//     if (usernameValue == userCreds.username && passwordValue == userCreds.password) {
//         window.location.href = "profile.html";
//     }
//     else if (usernameValue != userCreds.username || passwordValue != userCreds.password) {
//         alert("Wrong credentials, try again");
//     }
// }

function showCreds() {
    alert(`You can login with this ;)\n
        Username: ${userCreds.username}
        Password: ${userCreds.password}`)
}