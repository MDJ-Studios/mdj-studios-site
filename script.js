(() => {
    // State Variables and Constants

    // Cached Element References
    const sideNavElems = document.querySelectorAll('.sidenav');
    const contactForm = document.querySelector('form');

    // Event Listeners
    contactForm.addEventListener('submit', handleSubmit);

    // Functions
    async function handleSubmit(e) {
        e.preventDefault(); 
        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(new FormData(contactForm)).toString()
            });
            contactForm.reset()
            M.toast({
                html: 'Thank you! We\'ll be in touch soon!',
                displayLength: 4000,
                classes: 'white-text green'
            })
        } catch (error) {
            M.toast({html: 'Something went wrong; please try again later'})
        }

        return false; 
    }


    // Util Functions from Materialize
    M.Sidenav.init(sideNavElems, {
        preventScrolling: true,
    });
})();