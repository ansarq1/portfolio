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

function lightDark() {
    let image = document.querySelector("#profile");
    let header = document.querySelector("#header");
    let name = document.querySelector("#name");
    let btn = document.querySelector("#workTogetherBtn");

    header.classList.color = "black";
    name.style.color = "black";
    document.body.classList.toggle("dark");
}
