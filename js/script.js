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

function changeBioImage(){
    let image = document.querySelector("#ansar-pic");
    let imageList = [
        '../images/me.png',
        '../images/ansar.png'
    ]
    let index = 0;

    setInterval(() => {
        image.src = `${imageList[index]}`;
        image.style.animation = "none";
        void image.offsetWidth;
        image.style.animation = "imageTransition 1s";
        index = (index + 1) % imageList.length;
    }, 3000);
}

window.onload = function() {
    changeBioImage();
}
