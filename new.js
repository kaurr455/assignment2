const contactButton = document.getElementById('contact-button');

contactButton.addEventListener('click', function() {
  // Option 1: Redirect to next page with URL
  window.location.href = "contact-form.html"; // Replace with your actual next page URL

  // Option 2: Scroll to contact form within current page
  // document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
});
