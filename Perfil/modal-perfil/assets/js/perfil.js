const input = document.getElementById("input-file");
const preview = document.getElementById("preview-image");

input.addEventListener("change", () => {
  const file = input.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    preview.src = reader.result;
    preview.style.display = "block";
  }
});
