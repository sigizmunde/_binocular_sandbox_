const imgInput = document.getElementById('imageInput');
imgInput.addEventListener('change', function (e) {
  if (e.target.files) {
    let imageFile = e.target.files[0]; //here we get the image file
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = function (e) {
      let myImage = new Image(); // Creates image object
      myImage.src = e.target.result; // Assigns converted image to image object
      myImage.onload = function (ev) {
        let virtualCanvas = document.createElement('canvas'); // Creates a canvas object
        let virtualContext = virtualCanvas.getContext('2d'); // Creates a contect object
        virtualCanvas.width = myImage.width; // Assigns image's width to canvas
        virtualCanvas.height = myImage.height; // Assigns image's height to canvas
        virtualContext.drawImage(myImage, 0, 0); // Draws the image on canvas
        // let imgData = virtualCanvas.toDataURL('image/jpeg', 0.75); // Assigns image base64 string in jpeg format to a variable

        let myCanvas = document.getElementById('myCanvas'); // Creates a canvas object
        // let myContext = myCanvas.getContext('2d'); // Creates a contect object
        // myContext.drawImage(newImage, 0, 0); // Draws the image on canvas
        resizeImage(virtualCanvas, myCanvas, 20);
      };
    };
  }
});

function resizeImage(canvas, newCanvas, newWidth) {
  const canvasContext = canvas.getContext('2d');
  const newCanvasContext = newCanvas.getContext('2d');
  // 1. Count the amount of pixels in a block
  const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
  console.log('imageData = ', imageData);
  const oldWidth = imageData.width;
  const oldHeight = imageData.height;
  const blockWidth = Math.floor(oldWidth / newWidth) || 1;
  const newHeight = Math.floor(oldHeight / blockWidth);
  console.log('block width = ', blockWidth);
  console.log('new dimensions = ', newWidth, 'x', newHeight);
  // 2. Read block by coords
  const newData = new ImageData(newWidth, newHeight);
  const { data } = newData;
  for (let i = 0; i < newWidth; i += 1) {
    for (let j = 0; j < newHeight; j += 1) {
      const averageColor = [0, 0, 0, 0];
      for (let x = i * blockWidth; x < (i + 1) * blockWidth; x += 1) {
        for (let y = j * blockWidth; y < (j + 1) * blockWidth; y += 1) {
          const pixel = getPixelColors(x, y, imageData);
          // 3. Count average color of block}
          let component = 0;
          while (component < 4) {
            averageColor[component] += pixel[component] / blockWidth ** 2;
            component += 1;
          }
        }
      }
      let component = 0;
      while (component < 4) {
        data[i * 4 + j * newWidth * 4 + component] = Math.round(averageColor[component]);
        component += 1;
      }
    }
  }

  console.log(newData);
  // 4. Draw image
  newCanvas.width = newWidth;
  newCanvas.height = newHeight;
  newCanvasContext.putImageData(newData, 0, 0);
}

function getPixelColors(x, y, imageData) {
  const coordR = y * (imageData.width * 4) + x * 4;
  const red = imageData.data[coordR];
  const green = imageData.data[coordR + 1];
  const blue = imageData.data[coordR + 2];
  const alpha = imageData.data[coordR + 3];
  return [red, green, blue, alpha];
}
