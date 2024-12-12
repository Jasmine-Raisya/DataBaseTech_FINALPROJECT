//SIGN UP DETAILS -- GUEST DETAILS

// Handle form submission
// Handle form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('dob').value;

    //Basic validation (you can expand this as needed)
    if (!firstName || !lastName || !email || !phone || !address || !dob) {
        document.getElementById('message').textContent = "Please fill in all fields.";
        return;
    }

    // Show a success message
    alert("Sign-up successful! Welcome, " + firstName + "!");

    // Redirect to the select hotels page after the alert is acknowledged
    window.location.href = "select_hotels.html"; // Redirect to select hotels page
});