
function openNav() {
    document.getElementById("myNav").style.width = "25%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


// Carrucel
let currentIndex = 0;
const carouselContainer = document.getElementById('carousel-container');
const carouselImages = carouselContainer.getElementsByTagName('img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const intervalTime = 5000; //Un intervalo de tiempo

function showImage(index) {
    const imageWidth = carouselImages[0].offsetWidth;
    carouselContainer.style.transform = `translateX(-${index * imageWidth}px)`;
}

function nextImage() {
    currentIndex = currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = currentIndex === o ? carouselImages.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

prevBtn.addEventListener('click', () => {
    prevImage();
});

nextBtn.addEventListener('click', () => {
    nextImage();
});

function autoNextSlide() {
    setInterval(() => {
        nextImage();
    }, intervalTime)
}

autoNextSlide();
showImage(currentIndex);
