
const buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const sound = new Audio("sounds/" + this.innerHTML + ".mp3");
        sound.play().then(r => null);
    });
}

//RickRoll Audio

function play() {
    var audio = new Audio('https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Never+Gonna+Give+You+Up-+Original&filename=mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3');
    audio.play();
}


  //Click Counter Function (Not a sound, ik, but still is JS)

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        i++;
        var cowClick = document.getElementById("counter").innerHTML = "Bib Counter = " + i;
    })
};