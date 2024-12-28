const passwordBox = document.getElementById("Password");
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!@#$%^&*()_+-={}[]:<>?"

const allChars = upperCase + number + symbol + lowerCase;

function creatPassword() {

    let password ="";
    password+= upperCase[Math.floor(Math.random()*upperCase.length)];
    password+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+= number[Math.floor(Math.random()*number.length)];
    password+= symbol[Math.floor(Math.random()*symbol.length)];

    while (password.length < length) {

        password += allChars[Math.floor(Math.random()*allChars.length)];        
    }

    passwordBox.value = password;
    
    
}

function copyPassword() {
    const password = passwordBox.value;
    if (password) {
        navigator.clipboard.writeText(password)
            .then(() => {
                alert("Password copied to clipboard!");
            })
            .catch(err => {
                alert("Failed to copy password: " + err);
            });
    } else {
        alert("No password to copy!");
    }
}
