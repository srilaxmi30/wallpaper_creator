const canvas = document.getElementById("wallpaperCanvas");
const ctx = canvas.getContext("2d");

const bgColorInput = document.getElementById("bgColor");
const textInput = document.getElementById("textInput");
const imageInput = document.getElementById("imageInput");

function drawWallpaper(image = null) {
  // Background color
  ctx.fillStyle = bgColorInput.value;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add uploaded image
  if (image) {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  }

  // Add text
  ctx.font = "40px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(textInput.value, canvas.width / 2, canvas.height / 2);
}

// Initial draw
drawWallpaper();

// Update on input change
bgColorInput.addEventListener("input", () => drawWallpaper());
textInput.addEventListener("input", () => drawWallpaper());

// Image upload
imageInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const img = new Image();
  img.onload = () => drawWallpaper(img);
  img.src = URL.createObjectURL(file);
});

// Download function
function downloadWallpaper() {
  const link = document.createElement("a");
  link.download = "my_wallpaper.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
  
      