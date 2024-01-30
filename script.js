$(document).ready(function() {
    $('#contact-form').submit(function(event) {
      event.preventDefault();
  
      const name = $('#name').val();
      const email = $('#email').val();
      const message = $('#message').val();
  
      let isValid = true;
      if (!name.trim()) {
        $('#name-error').text('Please enter your name');
        isValid = false;
      } else {
        $('#name-error').text('');
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        $('#email-error').text('Please enter a valid email address');
        isValid = false;
      } else {
        $('#email-error').text('');
      }
      if (!message.trim()) {
        $('#message-error').text('Please enter your message');
        isValid = false;
      } else {
        $('#message-error').text('');
      }
  
      if (isValid) {
        alert('Your message has been sent!');
        $('#contact-form').trigger('reset');
      }
  
      return false;
    });
  });
  