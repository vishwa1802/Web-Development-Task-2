
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    if (!email.includes("@")) {
        formMessage.style.color = "red";
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Message sent successfully!";
});
