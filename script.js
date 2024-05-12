// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Sticky navbar
  window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  };
  
  // Animate skill progress bars
//   window.addEventListener('load', function() {
//     const skillBars = document.querySelectorAll('.skill-bar');
//     skillBars.forEach(skillBar => {
//       const skillValue = skillBar.getAttribute('data-skill');
//       skillBar.style.width = `${skillValue}%`;
//     });
//   });

//   window.addEventListener('load', function() {
//     const skillBars = document.querySelectorAll('.skill-bar');
//     skillBars.forEach(skillBar => {
//       const skillValue = skillBar.getAttribute('data-skill');
//       skillBar.style.width = `${skillValue}%`;
//       skillBar.style.backgroundSize = `${skillValue}% 100%`;
//     });
//   });
window.addEventListener('load', function() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(skillBar => {
      const skillValue = skillBar.getAttribute('data-skill');
      const skillColor = generateRandomColor();
  
      skillBar.style.width = `${skillValue}%`;
      skillBar.style.backgroundColor = skillColor;
    });
  });
  
  function generateRandomColor() {
    const colorPalettes = [
      // Define your color palettes here
      ['#F94144', '#F3722C', '#F8961E', '#F9844A', '#F9C74F'],
      ['#90BEDE', '#4D908E', '#577590', '#277DA1', '#1A659E'],
      ['#F94144', '#F3722C', '#F8961E', '#F9844A', '#F9C74F'],
      ['#43AA8B', '#90BEDE', '#F9C74F', '#F8961E', '#F3722C'],
      ['#F94144', '#F3722C', '#F8961E', '#90BEDE', '#577590'],
      ['#CFD4C5','#EECFD4','#EECFD4','#E6ADEC','#C287E8']
    ];
  
    const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    return randomPalette[Math.floor(Math.random() * randomPalette.length)];
  }
  
  // Example usage
  console.log(generateRandomColor()); // Outputs a random color from one of the defined palettes
  
  // Form submission handler
  const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });

    form.reset();
    alert('Thank you for your message!');
  });

  const themeSwitch = document.getElementById('themeSwitch');
  const body = document.body;
  
  themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    }
  });



  