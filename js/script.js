// loading animation
document.addEventListener("DOMContentLoaded", function(){
    let image = document.querySelector("#profile");
    let loading = document.querySelector(".loader-container");

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

function lightDark() {
    let image = document.querySelector("#profile");
    let header = document.querySelector("#header");
    let name = document.querySelector("#name");
    let btn = document.querySelector("#workTogetherBtn");

    header.classList.toggle("dark-text");
    name.classList.toggle("dark-text");
    document.body.classList.toggle("dark");
}
