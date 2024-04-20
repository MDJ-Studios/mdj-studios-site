(() => {
    // State Variables and Constants

    // Cached Element References
    const sideNavElems = document.querySelectorAll('.sidenav');
    const contactForm = document.querySelector('form');

    // Event Listeners
    contactForm.addEventListener('submit', handleSubmit);

    // Functions
    function handleSubmit(e) {
        e.preventDefault(); 
        const form = e.target;
        form.style.display = 'none'; 
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(new FormData(form)).toString()
        })
            .then(() => {
                document.querySelector('#contact-us').innerHTML += '<p>Thank you for contacting us, we\'ll follow up with you shortly.</p>';
                setTimeout(() => {
                    form.style.display = ''; 
                    form.reset(); 
                    document.querySelector('#contact-us p').remove(); 
                }, 3000); 
            })
            .catch((error) => alert('Error: ' + error));

        return false; 
    }


    // Util Functions from Materialize
    M.Sidenav.init(sideNavElems);
})();