export default function validateContactForm(event) {
    
    // Prevent form submission
    event.preventDefault();

    // Reset validation messages/styles (for when multiple submissions occur in a row)
    const form = document.getElementById("contact-form");
    resetValidation(form);
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation
    let isValid = true;

    // NAME
    // Check if empty
    if (name == "") {
        showInvalidMessage("name", "Please enter your name.");
        isValid = false;
    } else {
        showValidMessage("name");
    }

    // EMAIL
    let pattern = /^\w+@\w+\.\S+$/;
    // Check if empty
    if (email == "") {
        showInvalidMessage("email", "Please enter your email address.");
        isValid = false;
    // Check format
    } else if (!pattern.test(email)) {
        showInvalidMessage("email", "Email address must be in the form \'name@domain.com\'.");
        isValid = false;
    } else {
        showValidMessage("email");
    }

    // MESSAGE
    // Check if empty
    if (message == "") {
        showInvalidMessage("message", "Please enter a message.");
        isValid = false;
    } else {
        showValidMessage("message");
    }

    // Submit form
    if (isValid) {
        form.submit();
    }
}

function bookingContactIsValid() {

    // Reset validation messages/styles (for when multiple submissions occur in a row)
    const form = document.getElementById("booking-form");
    resetValidation(form);
    
    // Get form values
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const mob = document.getElementById('mob').value.trim();
    const addr1 = document.getElementById('addr1').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const postcode = document.getElementById('postcode').value.trim();

    // Validation
    let isValid = true;

    // NAME
    // Check if empty
    if (fname == "") {
        showInvalidMessage("fname", "Please enter your first name.");
        isValid = false;
    } else {
        showValidMessage("fname");
    }
    if (lname == "") {
        showInvalidMessage("lname", "Please enter your last name.");
        isValid = false;
    } else {
        showValidMessage("lname");
    }

    // EMAIL
    let pattern = /^\w+@\w+\.\S+$/;
    // Check if empty
    if (email == "") {
        showInvalidMessage("email", "Please enter your email address.");
        isValid = false;
    // Check format
    } else if (!pattern.test(email)) {
        showInvalidMessage("email", "Email address must be in the form \'name@domain.com\'.");
        isValid = false;
    } else {
        showValidMessage("email");
    }

    // PHONE
    pattern = /^(?:0\d{9}|\+61\d{9})\s*$/;
    // If number entered
    if (phone != "") {
        // Check format
        if (!pattern.test(phone)) {
            showInvalidMessage("phone", "Must be a valid number starting with \'0X\' or \'+61\'");
            isValid = false;
        } else {
            showValidMessage("phone");
        }
    }
    // MOBILE
    // If number entered
    if (mob != "") {
        // Check format
        if (!pattern.test(mob)) {
            showInvalidMessage("mob", "Must be a valid number starting with \'0X\' or \'+61\'");
            isValid = false;
        } else {
            showValidMessage("mob");
        }
    }

    // ADDRESS
    // Check if empty
    if (addr1 == "") {
        showInvalidMessage("addr1", "Please enter your address.");
        isValid = false;
    } else {
        showValidMessage("addr1");
    }
    if (city == "") {
        showInvalidMessage("city", "Please enter your city.");
        isValid = false;
    } else {
        showValidMessage("city");
    }
    if (state == "") {
        showInvalidMessage("state", "Please select your state.");
        isValid = false;
    } else {
        showValidMessage("state");
    }
    pattern = /^[0-9]{4}$/;
    if (postcode == "") {
        showInvalidMessage("postcode", "Please enter your postcode.");
        isValid = false;
    } else if (!pattern.test(postcode)) {
        showInvalidMessage("postcode", "Postcode must be 4 digits.");
        isValid = false;
    } else {
        showValidMessage("postcode");
    }

    return isValid; 
}

function bookingPaymentIsValid() {

    // Reset validation messages/styles (for when multiple submissions occur in a row)
    const form = document.getElementById("booking-form");
    resetValidation(form);
    
    // Get form values
    const name = document.getElementById('cc-name').value.trim();
    const number = document.getElementById('cc-number').value.trim();
    const expiration = document.getElementById('cc-expiration').value.trim();
    const cvv = document.getElementById('cc-cvv').value.trim();

    // Validation
    let isValid = true;

    // NAME
    // Check if empty
    if (name == "") {
        showInvalidMessage("cc-name", "Please enter your name.");
        isValid = false;
    } else {
        showValidMessage("cc-name");
    }

    // NUMBER
    let pattern = /^[0-9]{13,19}$/;
    // Check if empty
    if (number == "") {
        showInvalidMessage("cc-number", "Please enter your card number.");
        isValid = false;
    // Check format
    } else if (!pattern.test(number)) {
        showInvalidMessage("cc-number", "Invalid card number. Please enter a valid number.");
        isValid = false;
    } else {
        showValidMessage("cc-number");
    }

    // EXPIRATION
    pattern = /^[0-9]{2}\/[0-9]{2}$/;
    if (expiration == "") {
        showInvalidMessage("cc-expiration", "Please enter an expiration date.");
        isValid = false;
    } else if (!pattern.test(expiration)) {
        showInvalidMessage("cc-expiration", "Expiry must be in the form \'XX/XX\'.");
        isValid = false;
    } else {
        showValidMessage("cc-expiration");
    }

    // CCV
    pattern = /^[0-9]{3}$/;
    if (cvv == "") {
        showInvalidMessage("cc-cvv", "Please enter your CVV.");
        isValid = false;
    } else if (!pattern.test(cvv)) {
        showInvalidMessage("cc-cvv", "CVV must be 3 digits.");
        isValid = false;
    } else {
        showValidMessage("cc-cvv");
    }

    return isValid; 
}

function showValidMessage(id) {
    // Style the corresponding input box
    document.getElementById(id).classList.add("is-valid");
    // Get the message div
    const msgDiv = document.getElementById(id + "-msg");
    // Add and style the validation text
    msgDiv.innerText = "Valid";
    msgDiv.classList.add("text-success");
}

function showInvalidMessage(id, message) {
    // Style the corresponding input box
    document.getElementById(id).classList.add("is-invalid");
    // Get the message div
    const msgDiv = document.getElementById(id + "-msg");
    // Add and style the validation text
    msgDiv.innerText = message;
    msgDiv.classList.add("text-danger");
}

function resetValidation(form) {
    // Clear form control styling
    const controls = form.getElementsByClassName("form-control");
    for (let control of controls) {
        control.classList.remove("is-valid");
        control.classList.remove("is-invalid");
    }

    // Clear form select styling
    const selects = form.getElementsByClassName("form-select");
    for (let select of selects) {
        select.classList.remove("is-valid");
        select.classList.remove("is-invalid");
    }

    // Clear messages
    const messageDivs = form.getElementsByClassName("validation-msg");
    for (let msgDiv of messageDivs) {
        msgDiv.classList.remove("text-success");
        msgDiv.classList.remove("text-danger");
        msgDiv.innerText = "";
    }
}