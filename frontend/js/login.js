document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");
    loginButton.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username && password) {
            alert("Login successful");
        } else {
            alert("Please fill out all fields");
        }
    });
});
