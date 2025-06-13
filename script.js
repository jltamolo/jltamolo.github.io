
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzq97bwRhQ-jYnq3O__ozXM-2DDlG2hJeeFYzqI_71nzh_uE03ej8iHcMVnD_HaBicQrw/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById('msg')
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML= "Message sent successfully! I will contact you soon."
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            
            })
            .catch(error => console.error('Error!', error.message))
        })


// FAQ Accordion Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggle.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      toggle.classList.remove('active');
    });
  });
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});