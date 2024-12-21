 // Greet Function
 function greetUser() {
    // Get name input
    const name = document.getElementById('nameInput').value;

    // Check if empty
    if (name.trim() === "") {
        document.getElementById('greeting').innerText = "Please enter a valid name.";
    } else {
        // Greet message
        document.getElementById('greeting').innerText = `Hello, ${name}! Welcome to bring it all together.`;
    }
}