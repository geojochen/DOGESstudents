// Function to open the modal and display the clicked image
function openModal(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    const captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
}

// Function to close the modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Close modal if user clicks anywhere outside the image
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}