document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for contacting us! We will get back to you shortly.');
        form.reset();
    });
});
