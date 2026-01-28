document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".slider .slide");
  const nextBtn = document.querySelector(".slider .next");
  const prevBtn = document.querySelector(".slider .prev");

  if (slides.length === 0) return;

  let current = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);

  showSlide(current);
});


document.addEventListener("DOMContentLoaded", function () {

  const track = document.querySelector(".spa-slider-track");
  const slides = document.querySelectorAll(".spa-slide");
  const next = document.querySelector(".spa-next");
  const prev = document.querySelector(".spa-prev");

  if(!track || slides.length === 0){
    console.log("Slider elements missing");
    return;
  }

  let index = 0;

  function slideMove(){
    track.style.transform = "translateX(-" + (index * 100) + "%)";
  }

  next.addEventListener("click", function(){
    index++;
    if(index >= slides.length){ index = 0; }
    slideMove();
  });

  prev.addEventListener("click", function(){
    index--;
    if(index < 0){ index = slides.length - 1; }
    slideMove();
  });

  // auto slide
  setInterval(function(){
    index++;
    if(index >= slides.length){ index = 0; }
    slideMove();
  }, 5000);

});


  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");
  const dropdown = document.querySelector(".dropdown");

  menuToggle.onclick = () => {
    navbar.classList.toggle("active");
  };

  dropdown.onclick = () => {
    dropdown.classList.toggle("active");
  };


