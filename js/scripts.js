document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        alert('Thank you for contacting us, ' + form.name.value + '!');

        form.reset();
    });
});
