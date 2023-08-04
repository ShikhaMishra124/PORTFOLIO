// Function to display an alert on form submission (you can customize this further)
function handleSubmit() {
    alert('Thank you for your message!');
}

// Event listener for form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    handleSubmit();
});
// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}