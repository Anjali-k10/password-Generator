const passwordBox = document.getElementById("password")

function createPassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*()_+~|}{[]></-=";
    const length = 12;
    let password = "";
    for (let i = 0, n = characters.length; i < length; ++i) {
        password += characters.charAt(Math.floor(Math.random() * n));
    }
    passwordBox.value = password;
    passwordBox.innerHTML="password";
}

