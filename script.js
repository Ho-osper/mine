const images = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg"
  ];
  
  let current = 0;
  const imgEl = document.getElementById("slideshow-img");
  
  setInterval(() => {
    current = (current + 1) % images.length;
    imgEl.src = images[current];
  }, 3000);
  
