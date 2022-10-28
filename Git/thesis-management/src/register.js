const user = document.getElementById("username");
const pass = document.getElementById("password");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const verification = document.getElementById("verification");
const status = document.getElementById("status");
const form = document.getElementById("loginForm");



form.addEventListener("submitButton", (e) => {

let messages = []

if(user.value === " " || user.value == null) {

messages.push("Name is required!")

}


if(messages.length > 0) {

    e.preventDefault();
    errorElement.innerText = messages.join(",")

}



})

function submitRegistration() {   



}


