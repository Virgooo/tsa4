function openPopup(title, description, imageSrc) {
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-desc").textContent = description;
    document.getElementById("popup-image").src = imageSrc; // Set the image source

    document.getElementById("popup").style.display = "flex"; // Show the pop-up
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
