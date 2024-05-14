
const buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const sound = new Audio("sounds/" + this.innerHTML + ".mp3");
        sound.play().then(r => null);
    });
}

//RickRoll Audio

function play() {
    var audio = new Audio('https://dn720309.ca.archive.org/0/items/official-rickroll-download-pls-dont-give-me-copyright-strike/Official%20Rickroll%20Download%20(Pls%20don't%20give%20me%20copyright%20strike).mp3');
    audio.play();
}


  //Click Counter Function (Not a sound, ik, but still is JS)

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        i++;
        var cowClick = document.getElementById("counter").innerHTML = "Counter = " + i;
    })
};


//Close tab confirmation

function onBeforeUnload(e) {
    if (thereAreUnsavedChanges()) {
        e.preventDefault();
        e.returnValue = '';
        return;
    }

    delete e['returnValue'];
}

window.addEventListener('beforeunload', onBeforeUnload);
