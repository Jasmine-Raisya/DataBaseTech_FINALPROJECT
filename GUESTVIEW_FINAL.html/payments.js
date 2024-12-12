document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const checkInDate = document.getElementById('checkIn').value;
    const checkOutDate = document.getElementById('checkOut').value;
    const roomPrice = parseFloat(document.getElementById('roomPrice').value);
    const totalPriceElement = document.getElementById('totalPrice');

    // Validate that both dates are selected
    if (!checkInDate || !checkOutDate) {
        alert("Please select both check-in and check-out dates.");
        return;
    }

    // Create Date objects
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    
    // Ensure check-out date is after check-in date
    if (checkOut <= checkIn) {
        alert("Check-out date must be after check-in date.");
        return;
    }

    // Calculate the number of nights
    const nights = (checkOut - checkIn) / (1000 * 60 * 60 * 24); // Convert milliseconds to days

    if (nights <= 0) {
        alert("Please select a valid check-in and check-out date.");
        return;
    }

    const totalPrice = nights * roomPrice; // Calculate total price
    totalPriceElement.textContent = totalPrice.toFixed(2); // Update total price display

    // Simulate payment processing
    const cardNumber = document.getElementById('cardNumber').value;
    const expDate = document.getElementById('expDate').value;
    const cvv = document.getElementById('cvv').value;

    // Simulate a payment process
    if (cardNumber && expDate && cvv) {
        // Here you can add more validation for card details if needed
        alert(`Payment successful! Total amount: $${totalPrice.toFixed(2)}`);
        document.getElementById('reservationStatus').textContent = "Reservation Status: Confirmed";
    } else {
        alert("Please fill in all payment details.");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('paymentForm');
    console.log(paymentForm); // Check if the form is found

    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting the traditional way
        });
    } else {
        console.error("Payment form not found!");
    }
});

