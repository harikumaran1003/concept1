/* ===============================
   PRODUCT DETAILS MODAL
================================ */
function openProduct(title, description, image) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("modalImage").src = image;

  document.getElementById("productModal").style.display = "flex";
}

function closeProduct() {
  document.getElementById("productModal").style.display = "none";
}

/* Close modal on outside click */
window.addEventListener("click", (e) => {
  const modal = document.getElementById("productModal");
  if (e.target === modal) {
    closeProduct();
  }
});
