"use strict";
window.addEventListener("click", handleLoad);
let soundsArray = [];
let numberArray = [1, 2, 3, 4];
let soundHtml = [];
let maniac = ["man1", "man2", "man3", "man4"];
let pausieren = true;
function handleLoad() {
    if (pausieren == true) {
        let btt = document.querySelectorAll(".sound");
        console.log(btt);
        for (let i = 0; i < 20; i++) {
            btt[i].addEventListener("click", playit);
        }
    }
}
function playit(_event) {
    pausieren = false;
    let btt = document.querySelectorAll(".sound");
    for (let i = 0; i < 20; i++) {
        btt[i].removeEventListener("click", playit);
    }
    let elem = _event.target;
    soundHtml.push(elem);
    let idOf = String(elem.getAttribute("id"));
    console.log(idOf);
    soundsArray.push(idOf);
    console.log(soundsArray);
    numberArray.push(numberArray[0]);
    let stelle = document.getElementById("stelle");
    stelle.innerHTML = numberArray[0] + " Stelle";
    stelle.style.textAlign = "center";
    numberArray.splice(0, 1);
    let music = document.getElementById(idOf + "a");
    console.log(music);
    music.play();
    console.log("played");
    let display = document.querySelector(".display");
    let wave = document.createElement("img");
    wave.setAttribute("src", "wave.gif");
    wave.setAttribute("id", "wavy");
    wave.style.width = "300px";
    wave.style.height = "300px";
    wave.style.marginLeft = "50px";
    display.appendChild(wave);
    let div = document.querySelector("#vid" + random());
    let video = document.createElement("video");
    video.setAttribute("src", "vids/dance1.mp4");
    video.setAttribute("id", "shorts");
    video.style.width = "132px";
    video.style.height = "300px";
    div.appendChild(video);
    video.play();
    if (idOf == "take1" || idOf == "take2" || idOf == "take3" || idOf == "take4") {
        setTimeout(waveGone, 700);
    }
    else if (idOf == "never1" || idOf == "never3" || idOf == "never4") {
        setTimeout(waveGone, 2000);
    }
    else {
        setTimeout(waveGone, 1500);
    }
    if (soundsArray.length == 4) {
        checkSound();
        soundsArray = [];
        soundHtml = [];
        console.log(soundsArray);
    }
}
let ident;
function checkSound() {
    let identTemp = soundsArray[0];
    ident = identTemp.substr(0, identTemp.length - 1) + "Full";
    console.log(ident);
    if (soundsArray[0] == "man1" && soundsArray[1] == "man2" && soundsArray[2] == "man3" && soundsArray[3] == "man4") {
        soundHtml[0].style.background = "yellow";
        soundHtml[1].style.background = "yellow";
        soundHtml[2].style.background = "yellow";
        soundHtml[3].style.background = "yellow";
        setTimeout(rightSound, 1500);
    }
    else if (soundsArray[0] == "take1" && soundsArray[1] == "take2" && soundsArray[2] == "take3" && soundsArray[3] == "take4") {
        soundHtml[0].style.background = "blue";
        soundHtml[1].style.background = "blue";
        soundHtml[2].style.background = "blue";
        soundHtml[3].style.background = "blue";
        setTimeout(rightSound, 1200);
    }
    else if (soundsArray[0] == "never1" && soundsArray[1] == "never2" && soundsArray[2] == "never3" && soundsArray[3] == "never4") {
        soundHtml[0].style.background = "violet";
        soundHtml[1].style.background = "violet";
        soundHtml[2].style.background = "violet";
        soundHtml[3].style.background = "violet";
        setTimeout(rightSound, 2600);
    }
}
function rightSound() {
    pausieren = false;
    let btt = document.querySelectorAll(".sound");
    console.log(btt);
    for (let i = 0; i < 20; i++) {
        btt[i].removeEventListener("click", playit);
    }
    let music = document.getElementById(ident); //...Full.wav  (id)
    music.addEventListener("ended", stop);
    console.log(music);
    music.play();
    let display = document.querySelector(".display");
    let cover = document.createElement("img");
    cover.setAttribute("src", "pics/" + ident + ".jpg"); //...Full.jpg  (src)
    cover.setAttribute("id", ident + "pic");
    cover.style.width = "300px";
    cover.style.height = "300px";
    cover.style.marginLeft = "50px";
    display.appendChild(cover);
    let body = document.querySelector("#body");
    let confeti = document.createElement("img");
    confeti.setAttribute("src", "pics/confetti.gif");
    confeti.setAttribute("id", "confetti");
    confeti.style.position = "absolute";
    confeti.style.width = "100%";
    body.insertBefore(confeti, body.firstChild);
    let div = document.querySelector("#vid" + random());
    let testVideo = document.createElement("video");
    testVideo.setAttribute("src", "vids/danceFull1.mp4");
    testVideo.setAttribute("id", "long");
    testVideo.style.width = "132px";
    testVideo.style.height = "300px";
    div.appendChild(testVideo);
    testVideo.play();
    testVideo.loop = true;
}
function stop() {
    console.log("thanks!");
    let cover = document.getElementById(ident + "pic");
    cover.remove();
    let confeti = document.getElementById("confetti");
    confeti.remove();
    let testVideo = document.getElementById("long");
    testVideo.remove();
    pausieren = true;
    let btt = document.querySelectorAll(".sound");
    for (let i = 0; i < 20; i++) {
        btt[i].addEventListener("click", playit);
    }
}
function waveGone() {
    let wave = document.getElementById("wavy");
    wave.remove();
    let video = document.getElementById("shorts");
    video.remove();
    pausieren = true;
    let btt = document.querySelectorAll(".sound");
    for (let i = 0; i < 20; i++) {
        btt[i].addEventListener("click", playit);
    }
}
function random() {
    let x = (Math.floor(Math.random() * 4 + 1));
    return x;
}
//# sourceMappingURL=id.js.map