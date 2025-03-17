// Log the value of the username input instead of the DOM element
console.log(document.getElementById("username").value, "Hey Naman");

function handleLogin(e) {
    console.log("Event triggered");

    // Prevent the form from submitting
    e.preventDefault();

    // Get the username input value
    let username = document.getElementById("username").value;

    // Check if username is provided
    if (username) {
        // Hide the login section and display the user section
        const loginSection = document.getElementsByClassName("login-section")[0];
        const userSection = document.getElementsByClassName("user-section")[0];
        
        if (loginSection && userSection) {
            loginSection.style.display = "none";
            userSection.style.display = "block";
            document.getElementById("user-name").textContent = username;
        } else {
            console.error("Login or user section not found.");
        }
    }

    // Log the username to confirm it's captured
    console.log(username, "Hey, I am clicked!");
}

// Add event listener to handle form submission
document.getElementById("login-form").addEventListener("submit", handleLogin);
