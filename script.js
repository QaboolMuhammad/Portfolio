

const cards = document.querySelectorAll(
  '.skill-card, .project-card, .exp-card'
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

});

cards.forEach((card) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.8s";

  observer.observe(card);

});

const slider = document.getElementById("slider");

const images = [

  "Images/Profile4.jpeg",
  "Images/Profile2.jpeg",
  "Images/Profile3.jpeg"

];

let index = 0;

function changeImage() {

  slider.style.opacity = 0;

  setTimeout(() => {

    index++;

    if (index >= images.length) {
      index = 0;
    }

    slider.src = images[index];

    slider.style.opacity = 1;

  }, 500);

}


setInterval(changeImage, 5000);



slider.addEventListener("click", changeImage);





function setTheme(theme){

  document.body.classList.remove(
    "light-theme",
    "mature-theme"
  );

  if(theme === "light"){

    document.body.classList.add("light-theme");

  }

  else if(theme === "mature"){

    document.body.classList.add("mature-theme");

  }

}
const typingText = document.querySelector(".typing");

const words = [
  "Frontend Developer",
  "Web Designer",
  "UI/UX Enthusiast",
  "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  let currentWord = words[wordIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingText.textContent = currentWord.substring(0, charIndex++);
  }

  let speed = isDeleting ? 80 : 120;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1500;
    isDeleting = true;
  } 
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();




const hero = document.querySelector(".hero");
const heroText = document.querySelector(".hero-text");
const heroImage = document.querySelector(".hero-image img");
const circle = document.querySelector(".circle");

hero.addEventListener("mousemove", (e) => {

  let x = (window.innerWidth / 2 - e.pageX) / 25;
  let y = (window.innerHeight / 2 - e.pageY) / 25;

  heroText.style.transform = `translate(${x}px, ${y}px)`;

  heroImage.style.transform = `translate(${-x}px, ${-y}px) scale(1.02)`;

  circle.style.transform = `translate(${x * 2}px, ${y * 2}px)`;

});

hero.addEventListener("mouseleave", () => {
  heroText.style.transform = `translate(0px, 0px)`;
  heroImage.style.transform = `translate(0px, 0px) scale(1)`;
  circle.style.transform = `translate(0px, 0px)`;
});


// ================= MAGNETIC BUTTON EFFECT =================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  
  btn.addEventListener("mousemove", (e) => {
    
    const rect = btn.getBoundingClientRect();
    
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;

  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0px, 0px) scale(1)";
  });

});