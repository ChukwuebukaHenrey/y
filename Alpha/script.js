const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const signupButton = document.getElementById("signupButton");
const signInButton = document.getElementById("signInButton");
const messages = document.querySelector('.messages');




form.addEventListener('submit',e => {
    e.preventDefault();
    const signupButton = form.querySelector('#signUpButton');
    signupButton.disabled = true;
    signUpFormValidation();
    setTimeout (()=> {
        signupButton.disabled = false;
    }, 3000);
});

function signUpFormValidation() {
    messages.classList.remove('error');
    messages.style.opacity = '0';
    messages.innerHTML = '';
    let showErrow = "";

    if (
        firstname.value.trim()=== "" ||
        email.value.trim()=== "" ||
        password.value.trim()=== ""||
        confirmPassword.value.trim()=== ""
    ) {
        showErrow = "Please fill all fields";
        return;
    };

    if (firstname.length < 0) {
        showErrow = ("Firstname must be at least 3 characters");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        showErrow ("Please enter a valid email address");
        return;
    }

    if (password.length < 8) {
        showErrow("Password must be at least 8");
        return;
    }

    if (confirmPassword.value !== password.value) {
        showErrow("Passwords do not match");
        return;
    }

    console.log("Sign Up Successful");
    form.reset();

};

function showErrorMessages(message) {
    messages.classList.add('.error');
    messages.style.opacity = "1";
    messages.innerHTML = message;
    setTimeout(() => {
        messages.classList.remove('error');
        messages.style.opacity = '0';
        messages.innerHTML = "";
    }, 3000);
}







