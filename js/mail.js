document.getElementById('contactForm').addEventListener('submit', function(event) {
  

  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

  
    const mailtoLink = `mailto:yosr.sellami.33@gmail.com?subject=${encodeURIComponent(subject)}&body=Nom: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;


    window.location.href = mailtoLink;
});
