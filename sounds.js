
const buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const sound = new Audio("sounds/" + this.innerHTML + ".mp3");
        sound.play().then(r => null);
    });
}

//RickRoll Audio

function play() {
    var audio = new Audio('https://docs.google.com/file/d/0B-klwLEjaXWcZHR5SmJJWEwtYnc/edit?resourcekey=0-D33DYWMxjVde0g1m7qsoZw');
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
