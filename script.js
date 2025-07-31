const images = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg"
  ];
  
  let current = 0;
  const imgEl = document.getElementById("slideshow-img");
  
  setInterval(() => {
    current = (current + 1) % images.length;
    imgEl.src = images[current];
  }, 3000);
  
