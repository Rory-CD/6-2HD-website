document.addEventListener('DOMContentLoaded', () => {
        sessionStorage.setItem('page', 1);
        sessionStorage.setItem('pageLimit', 4);
    }
);

function getContentName(pageNum) {
    switch(pageNum) {
        case 4:
            return "book-confirm";
        case 3:
            return "book-payment";
        case 2:
            return "book-contact-details";
        default:
            return "book-select-room";
    }
}

function changePage(targetPage) {
    let currentPage = parseInt(sessionStorage.getItem('page'));
    let pageLimit = parseInt(sessionStorage.getItem('pageLimit'));
    
    // Set targetPage to integer if provided a string
    if (targetPage == "next") {
        targetPage = currentPage + 1;
    } else if (targetPage == "prev") {
        targetPage = currentPage - 1;
    } else {
        targetPage = parseInt(targetPage); // Convert to integer if it's a direct number
    }

    // Check required validation
    if (getContentName(currentPage) == "book-contact-details") {
        if (!bookingContactIsValid()) {
            return;
        }
    } else if (getContentName(currentPage) == "book-payment") {
        if (!bookingPaymentIsValid()) {
            return;
        }
    }

    // Update page if within limit
    if ((targetPage > 0) && (targetPage <= pageLimit)) {
        sessionStorage.setItem('page', targetPage);
        updatePageContent(getContentName(currentPage), getContentName(targetPage));
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'instant' });
    }
}

function updatePageContent(currentPage, targetPage) {
    let page = parseInt(sessionStorage.getItem('page'));
    let heading = document.getElementById("book-heading");

    switch(page) {
        case 4:
            // Update heading
            heading.innerHTML = "Confirmation";
            // Hide buttons
            document.getElementById("form-next-btn").classList.add("d-none");
            document.getElementById("form-prev-btn").classList.add("d-none");
            // Update progess bar
            document.getElementById("progress-bar").style.width = "100%";
            break;
        case 3:
            // Update heading
            heading.innerHTML = "Payment";
            // Update progess bar
            document.getElementById("progress-bar").style.width = "75%";
            // Update button text
            document.getElementById("form-next-btn").innerText = "CONFIRM";
            break;
        case 2:
            // Update heading
            heading.innerHTML = "Contact details";
            // Show prev button
            document.getElementById("form-prev-btn").classList.remove("d-none");
            // Update progess bar
            document.getElementById("progress-bar").style.width = "50%";
            break;
        default:
            // Update heading
            heading.innerHTML = "Find available rooms";
            // Update progess bar
            document.getElementById("progress-bar").style.width = "25%";
    }

    // Switch main content
    switchDivs(currentPage, targetPage);
}

function switchDivs(oldDiv, newDiv) {
    let divToHide = document.getElementById(oldDiv);
    let divToShow = document.getElementById(newDiv);

    divToHide.classList.toggle('d-none');
    divToShow.classList.toggle('d-none');
}