
const buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const sound = new Audio("sounds/" + this.innerHTML + ".mp3");
        sound.play().then(r => null);
    });
}

