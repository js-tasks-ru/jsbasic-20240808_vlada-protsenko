function initCarousel() {
  let arrowRight = document.querySelector(".carousel__arrow_right");
  let arrowLeft = document.querySelector(".carousel__arrow_left");

  let widthSlide = document.querySelector(".carousel__slide").offsetWidth;
  let carouselFrame = document.querySelector(".carousel__inner");
  let position = 0;

  arrowLeft.style.display = "none";

  arrowRight.addEventListener("click", function () {
      position += widthSlide;
      carouselFrame.style.transform = `translateX(-${position}px)`;
      arrowLeft.style.display = "";
      if (position == 3 * widthSlide) {
        arrowRight.style.display = "none";
      } else if (position == 0){
        arrowLeft.style.display = "none";
      } else {
        arrowRight.style.display = "";
        arrowLeft.style.display = "";
      }
    }
  )

  arrowLeft.addEventListener("click", function () {
      carouselFrame.style.transform = `translateX(-${(position - widthSlide)}px)`;
      position -= widthSlide;
      if (position == 3 * widthSlide) {
        arrowRight.style.display = "none";
      } else if (position == 0){
        arrowLeft.style.display = "none";
      } else {
        arrowRight.style.display = "";
        arrowLeft.style.display = "";
      }
    }
  )
}  
