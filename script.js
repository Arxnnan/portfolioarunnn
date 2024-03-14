document.addEventListener('DOMContentLoaded', function () {
    const section1Img = document.querySelector('.homeimg');
  
    // Automatically zoom in when the page loads
    section1Img.classList.add('zoomed');
  
    section1Img.addEventListener('click', function () {
      section1Img.classList.toggle('zoomed');
    });
  });
      document.addEventListener("DOMContentLoaded", function () {
        const homeLink = document.querySelector('a[href="#home"]');
        const aboutLink = document.querySelector('a[href="#about"]');
        const workLink = document.querySelector('a[href="#work"]');
        const achievementLink = document.querySelector('a[href="#achievement"]');
        const SkillsLink = document.querySelector('a[href="#skills"]');

  
        const sections = document.querySelectorAll('.section');
    
        homeLink.addEventListener('click', function (event) {
          event.preventDefault();
          sections[0].scrollIntoView({ behavior: 'smooth' });
        });
    
        aboutLink.addEventListener('click', function (event) {
          event.preventDefault();
          sections[1].scrollIntoView({ behavior: 'smooth' });
        });
        workLink.addEventListener('click', function (event) {
          event.preventDefault();
          sections[3].scrollIntoView({ behavior: 'smooth' });
        }); 
        achievementLink.addEventListener('click', function (event) {
          event.preventDefault();
          sections[4].scrollIntoView({ behavior: 'smooth' });
        });
        SkillsLink.addEventListener('click', function (event) {
            event.preventDefault();
            sections[2].scrollIntoView({ behavior: 'smooth' });
          });
      });
      document.addEventListener('DOMContentLoaded', function () {
        const greetings = document.querySelectorAll('.greeting');
      
        // Show greetings on page load
        greetings.forEach((greeting) => {
          greeting.classList.remove('greeting-hidden');
        });
      
        // Hide greetings after a few seconds
        setTimeout(() => {
          greetings.forEach((greeting) => {
            greeting.classList.add('greeting-hidden');
          });
        }, 3000);
      });
      document.addEventListener('DOMContentLoaded', function () {
        const nccSection = document.querySelector('.ncc');
      
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              nccSection.classList.add('active');
            } else {
              nccSection.classList.remove('active');
            }
          });
        }, { threshold: 0.5 }); // Adjust the threshold as needed
      
        observer.observe(nccSection);
      });
      // Helper function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle the animation for NCC and IEEE sections
  function handleSectionAnimation(sectionClass) {
    var section = document.querySelector(sectionClass);
  
    if (isInViewport(section)) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  }
  
  // Event listener to handle scroll events
  document.addEventListener('scroll', function () {
    handleSectionAnimation('.ncc');
    handleSectionAnimation('.IEEE');
    
  });
  
  // Initial check for section visibility
  handleSectionAnimation('.ncc');
  handleSectionAnimation('.IEEE');
  
  

      
      