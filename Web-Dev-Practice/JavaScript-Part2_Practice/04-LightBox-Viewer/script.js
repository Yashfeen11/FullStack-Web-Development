let img = document.querySelectorAll(".gallery-item");
let container = document.querySelector(".lightbox");
let largeImage = document.querySelector("#lightbox-image");
let closeBtn = document.querySelector("#close-btn");

// Phase 2: Open mechanism
img.forEach(function(image) {
  image.addEventListener("click", () => {
    container.style.display = "flex";
    
    let newSrc = image.src.replace("-thumbnail", "");
    
    largeImage.src = newSrc;
  });
});

// Phase 3: Close mechanism
closeBtn.addEventListener("click", () => {
  container.style.display = "none";
});

container.addEventListener("click", (e) => {
  // This ensures clicking the dark background closes the lightbox, 
  // but clicking the image itself does nothing.
  if (e.target !== largeImage) {
    container.style.display = "none";
  }
});