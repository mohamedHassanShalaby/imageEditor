let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hue_rotate = document.getElementById("hue-rotate");
let upload = document.getElementById("upload");
let imgBox = document.querySelector(".img_box");
let img = document.getElementById("img");
let download = document.getElementById("download");
let reset = document.querySelector("span");
let canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function resetValue() {
  img.style.filter = "none";
  saturate.value = "100";
  contrast.value = "100";
  brightness.value = "100";
  sepia.value = "0";
  grayscale.value = "0";
  blur.value = "0";
  hue_rotate.value = "0";
}

window.onload = function () {
  download.style.display = "none";
  reset.style.display = "none";
  imgBox.style.display = "none";
};
upload.onchange = function () {
  resetValue();
  download.style.display = "block";
  reset.style.display = "block";
  imgBox.style.display = "block";
  let file = new FileReader(); // class read files
  file.readAsDataURL(upload.files[0]); // class read files
  file.onload = function () {
    img.src = file.result;
  };
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.style.display = "none";
  };
};

// saturate.addEventListener("input", function () {
//   img.style.saturate = `saturate(${saturate.value}%)`;
// });  wrong one filter work
let filters = document.querySelectorAll("ul li input");
filters.forEach((filter) => {
  filter.addEventListener("input", function () {
    context.filter = `
         saturate(${saturate.value}%)
         contrast(${contrast.value}%)
         brightness(${brightness.value}%)
         sepia(${sepia.value}%)
         grayscale(${grayscale.value})
         blur(${blur.value}px)
         hue-rotate(${hue_rotate.value}deg)
         `;
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
  });
});
download.onclick = function () {
  //   download.href = img.src;  // هيحمل الصوره الاصليه
  download.href = canvas.toDataURL();
};
