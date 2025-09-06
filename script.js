// Link manipulation
document.getElementById("glink").onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = "https://www.google.com";

    // Open link in a new tab
    window.open("https://www.google.com", "_blank");
}
// Input field interaction
document.getElementById("myinput").oninput = function() {
    console.log("Input changed to: " + this.value);
}
// To Uppercase
document.getElementById("fname").onchange = function() {
    this.value = this.value.toUpperCase();
}
// onload event
window.onload = function() {
    alert("Welcome to my website!");
}
// addEventListener
let textarea = document.getElementById("textarea");
textarea.addEventListener("input", function() {
    console.log("Textarea changed to: " + this.value);
});
textarea.addEventListener("focus", function() {
    console.log("Textarea focused");
});
textarea.addEventListener("blur", function() {
    console.log("Textarea lost focus");
});
// Form Validation
document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission}
    // fetch form values
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim(); // value.trim() removes whitespace from both ends of a string

    //clear previous errors
    document.getElementById("usernameError").innerText = " ";
    document.getElementById("emailError").innerText = " ";
    document.getElementById("passwordError").innerText = " ";

    let isValid = true;

    // validate username
    if (username === "") {
        document.getElementById("usernameError").innerText = "Username is required.";
        isValid = false;

    } else if (username.length < 3) {
        document.getElementById("usernameError").innerText = "Username must be at least 3 characters.";
        isValid = false;
    }

    // validate email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

    // validate password
    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; // 6-16 characters, at least one number and one special character
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
        isValid = false;
    }

    if(isValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset(); // Reset form fields
    }
}