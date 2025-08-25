document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const validUser = "admin";
    const validPass = "1234";

    if (username === validUser && password === validPass) {
        alert("Login successful!");
        window.location.href = "welcome.html";
    } else {
        alert("Invalid username or password. Try again.");
    }
    });
});
