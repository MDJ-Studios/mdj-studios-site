(() => {
    // State Variables and Constants

    // Cached Element References
    const sideNavElems = document.querySelectorAll('.sidenav');
    const contactForm = document.querySelector('form');

    // Event Listeners
    contactForm.addEventListener('submit', handleSubmit);

    // Functions
    function handleSubmit(e) {
        const form = e.target;
        form.style.display = 'none'; // Hide the form

        // Perform the form submission to Netlify
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(new FormData(form)).toString()
        })
            .then(() => {
                document.querySelector('#contact-us').innerHTML += '<p>Thank you for contacting us, we\'ll follow up with you shortly.</p>';
                setTimeout(() => {
                    form.style.display = ''; // Show the form again
                    form.reset(); // Optional: Reset the form fields
                    document.querySelector('#contact-us p').remove(); // Remove the thank-you message
                }, 3000); // Display the thank-you message for 3 seconds
            })
            .catch((error) => alert('Error: ' + error));

        return false; // Prevent traditional form submission
    }


    // Util Functions from Materialize
    M.Sidenav.init(sideNavElems);
})();