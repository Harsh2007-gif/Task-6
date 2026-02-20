const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let valid = true;

    if (name === "") {
        nameError.textContent = "Name is required";
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter valid email";
        valid = false;
    }

    if (message === "") {
        messageError.textContent = "Message cannot be empty";
        valid = false;
    }

    if (valid) {
        successMessage.textContent = "Form submitted successfully!";
    }

});