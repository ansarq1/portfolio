// loading animation
document.addEventListener("DOMContentLoaded", function(){
    let image = document.querySelector("#profile");
    let loading = document.querySelector(".loader");

    function hideLoader() {
        loading.style.display = "none";
        image.style.display = "block";
    }

    // Check if the image is already loaded (from cache)
    if (image.complete) {
        hideLoader();
    } else {
        image.onload = hideLoader;
    }
});
