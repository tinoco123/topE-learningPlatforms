let button = document.querySelectorAll(".button");

button.forEach(function (button) {
    button.addEventListener("click", function (ev){
        ev.preventDefault();

        let container = document.querySelector(".center-container");
        container.classList.remove("animate__animated");
        container.classList.remove("animate__fadeInDown");

        container.classList.add("animate__animated");
        container.classList.add("animate__fadeOutUp");

        setTimeout(function () {
            location.href = "/topE-learningPlatforms/index.html";
        }, 700);
        return false;
    });
});