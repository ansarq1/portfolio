// loading animation
document.addEventListener("DOMContentLoaded", function(){
    let image = document.querySelector("#profile");
    let loading = document.querySelector(".loader-container");

    function hideLoader() {
        loading.style.display = "none";
        image.style.display = "block";
    }

    // Check if the image is already loaded
    if (image.complete) {
        hideLoader();
    } else {
        image.onload = hideLoader;
    }
});

//smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})


function lightDark() {
    let image = document.querySelector("#profile");
    let header = document.querySelector("#header");
    let name = document.querySelector("#name");
    let contactMe = document.querySelector('#contact-me');
    let bio = document.querySelector('#bio-text');
    let aboutMeh1 = document.querySelector(".about-me-section");
    let btn = document.querySelector("#workTogetherBtn");
    let darkModeButton = document.querySelector('#checkbox-dark-mode')

    if (darkModeButton.checked) {
        header.classList.add("dark-text");
        name.classList.add("dark-text");
        document.body.classList.add("dark");
        bio.classList.add("dark-text");
        aboutMeh1.classList.add("dark-text");
    } else {
        header.classList.remove("dark-text");
        name.classList.remove("dark-text");
        document.body.classList.remove("dark");
        bio.classList.remove("dark-text");
        aboutMeh1.classList.remove("dark-text");
    }
}

function changeBioImage(){
    let image = document.querySelector("#profile");
    let imageList = [
        'images/me.png',
        'images/ansar.png'
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
