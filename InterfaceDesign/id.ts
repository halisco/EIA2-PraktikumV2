
window.addEventListener("click", handleLoad);

let soundsArray: String[] = [];
let soundsArrayNumber: number[] = [];
let numberArray: number[] = [1, 2, 3, 4];
let soundHtml: HTMLElement[] = [];
let maniac: String[] = ["man1", "man2", "man3", "man4"];
let pausieren: boolean = true;

function handleLoad(): void {

    if (pausieren == true) {
    let btt: NodeListOf<HTMLElement> = document.querySelectorAll(".sound");
    console.log(btt);
    for (let i: number = 0; i < 16; i++) {
        btt[i].addEventListener("click", playit);
    }
    }
}

function playit(_event: Event): void {
    pausieren = false;
    let btt: NodeListOf<HTMLElement> = document.querySelectorAll(".sound");
    for (let i: number = 0; i < 16; i++) {
        btt[i].removeEventListener("click", playit);
    }

    let elem: HTMLElement = <HTMLElement>_event.target;
    soundHtml.push(elem);
    let idOf: String = String(elem.getAttribute("id"));
    let numberOf: number = Number(elem.getAttribute("name"));
    let roleOf: String = String(elem.getAttribute("role"));
    console.log(numberOf);
    console.log(idOf);
    soundsArray.push(idOf);
    soundsArrayNumber.push(numberOf);
    console.log(soundsArray);
    
    if (numberOf == soundsArrayNumber[0] || numberOf == soundsArrayNumber[soundsArrayNumber.length - 2] + 1) {
        console.log("right");
        let marker: HTMLElement = <HTMLElement>document.getElementById(roleOf + "BT");
        marker.style.backgroundColor = "red";
    } else {
        let marker1: HTMLElement = <HTMLElement>document.getElementById("sound1BT");
        let marker2: HTMLElement = <HTMLElement>document.getElementById("sound2BT");
        let marker3: HTMLElement = <HTMLElement>document.getElementById("sound3BT");
        let marker4: HTMLElement = <HTMLElement>document.getElementById("sound4BT");
        marker1.style.backgroundColor = "white";
        marker2.style.backgroundColor = "white";
        marker3.style.backgroundColor = "white";
        marker4.style.backgroundColor = "white";
        console.log("wrong");
        soundsArray = [];
        soundsArrayNumber = [];
        soundHtml = [];
        console.log(soundsArray);
    }

    // numberArray.push(numberArray[0]);
    // let stelle: HTMLElement = <HTMLElement>document.getElementById("stelle");
    // stelle.innerHTML = numberArray[0] + ". Stelle";
    // stelle.style.textAlign = "center";
    // numberArray.splice(0, 1);
    
    let music: HTMLAudioElement = <HTMLAudioElement>document.getElementById(idOf + "a");
    console.log(music);
    music.play();
    console.log("played");

    let display: HTMLElement = <HTMLElement>document.querySelector(".waves");
    let wave: HTMLElement = document.createElement("img");
    wave.setAttribute("src", "wave.gif");
    wave.setAttribute("id", "wavy");
    wave.style.width = "100px";
    wave.style.height = "100px";
    wave.style.marginLeft = "150px";
    wave.style.marginTop = "40px";
    display.insertBefore(wave, display.firstChild);

    
    if (idOf == "man1" || idOf == "never1" || idOf == "take1" || idOf == "brother1") {
        let div: HTMLElement = <HTMLElement>document.querySelector("#vid1");
        let video: HTMLVideoElement = document.createElement("video");
        video.setAttribute("src", "vids/" + idOf + ".mp4" );
        video.setAttribute("id", "shorts");
        video.style.width = "132px";
        video.style.height = "300px";
        div.appendChild(video);
        video.play();
    } else if (idOf == "man2" || idOf == "never2" || idOf == "take2" || idOf == "brother2") {
        let div: HTMLElement = <HTMLElement>document.querySelector("#vid2");
        let video: HTMLVideoElement = document.createElement("video");
        video.setAttribute("src", "vids/" + idOf + ".mp4" );
        video.setAttribute("id", "shorts");
        video.style.width = "132px";
        video.style.height = "300px";
        div.appendChild(video);
        video.play();
    } else if (idOf == "man3" || idOf == "never3" || idOf == "take3" || idOf == "brother3") {
        let div: HTMLElement = <HTMLElement>document.querySelector("#vid3");
        let video: HTMLVideoElement = document.createElement("video");
        video.setAttribute("src", "vids/" + idOf + ".mp4" );
        video.setAttribute("id", "shorts");
        video.style.width = "132px";
        video.style.height = "300px";
        div.appendChild(video);
        video.play();     
    } else {
        let div: HTMLElement = <HTMLElement>document.querySelector("#vid4");
        let video: HTMLVideoElement = document.createElement("video");
        video.setAttribute("src", "vids/" + idOf + ".mp4" );
        video.setAttribute("id", "shorts");
        video.style.width = "132px";
        video.style.height = "300px";
        div.appendChild(video);
        video.play();   
    }

    if (idOf == "take1" || idOf == "take2" || idOf == "take3" || idOf == "take4") {
    setTimeout(waveGone, 700);
    } else if (idOf == "never1" || idOf == "never3" || idOf == "never4" || idOf == "brother1" || idOf == "brother2" || idOf == "brother3" || idOf == "brother4") {
    setTimeout(waveGone, 2000);
    } else {
    setTimeout(waveGone, 1500);    
    }


    if (soundsArray.length == 4) {
        checkSound();
        soundsArray = [];
        soundsArrayNumber = [];
        soundHtml = [];
        console.log(soundsArray);
    }
}


let ident: string;
function checkSound(): void {

    let identTemp: String = soundsArray[0];
    ident = identTemp.substr(0, identTemp.length - 1) + "Full";
    console.log(ident);

    if (soundsArray[0] == "man1" && soundsArray[1] == "man2" && soundsArray[2] == "man3" && soundsArray[3] == "man4") {
        soundHtml[0].style.background = "yellow";
        soundHtml[1].style.background = "yellow";
        soundHtml[2].style.background = "yellow";
        soundHtml[3].style.background = "yellow";
        setTimeout(rightSound, 1500);
    } else if (soundsArray[0] == "take1" && soundsArray[1] == "take2" && soundsArray[2] == "take3" && soundsArray[3] == "take4") {
        soundHtml[0].style.background = "blue";
        soundHtml[1].style.background = "blue";
        soundHtml[2].style.background = "blue";
        soundHtml[3].style.background = "blue";
        setTimeout(rightSound, 1200);
    } else if (soundsArray[0] == "never1" && soundsArray[1] == "never2" && soundsArray[2] == "never3" && soundsArray[3] == "never4") {
        soundHtml[0].style.background = "violet";
        soundHtml[1].style.background = "violet";
        soundHtml[2].style.background = "violet";
        soundHtml[3].style.background = "violet";
        setTimeout(rightSound, 2600);
    } else if (soundsArray[0] == "brother1" && soundsArray[1] == "brother2" && soundsArray[2] == "brother3" && soundsArray[3] == "brother4") {
        soundHtml[0].style.background = "green";
        soundHtml[1].style.background = "green";
        soundHtml[2].style.background = "green";
        soundHtml[3].style.background = "green";
        setTimeout(rightSound, 2600); 
    }
    
}

function rightSound(): void {

    pausieren = false;
    let btt: NodeListOf<HTMLElement> = document.querySelectorAll(".sound");
    console.log(btt);
    for (let i: number = 0; i < 16; i++) {
        btt[i].removeEventListener("click", playit);
    }
    
    let music: HTMLAudioElement = <HTMLAudioElement>document.getElementById(ident);     //...Full.wav  (id)
    music.addEventListener("ended", stop);
    console.log(music);
    music.play();
    window.addEventListener("click", stop);

    let display: HTMLElement = <HTMLElement>document.querySelector(".display");
    let cover: HTMLElement = document.createElement("img");
    cover.setAttribute("src", "pics/" + ident + ".jpg");        //...Full.jpg  (src)
    cover.setAttribute("id", ident + "pic");
    cover.style.width = "300px";
    cover.style.height = "300px";
    cover.style.marginLeft = "50px";
    cover.style.marginTop = "-50px";
    display.appendChild(cover);

    let marker1: HTMLElement = <HTMLElement>document.getElementById("sound1BT");
    let marker2: HTMLElement = <HTMLElement>document.getElementById("sound2BT");
    let marker3: HTMLElement = <HTMLElement>document.getElementById("sound3BT");
    let marker4: HTMLElement = <HTMLElement>document.getElementById("sound4BT");
    marker1.style.display = "none";
    marker2.style.display = "none";
    marker3.style.display = "none";
    marker4.style.display = "none";

    let body: HTMLElement = <HTMLElement>document.querySelector("#body");
    let confeti: HTMLElement = document.createElement("img");
    confeti.setAttribute("src", "pics/confetti.gif");        
    confeti.setAttribute("id", "confetti");
    confeti.style.position = "absolute";
    confeti.style.width = "100%";
    body.insertBefore(confeti, body.firstChild);

    let div1: HTMLElement = <HTMLElement>document.querySelector("#vid1");
    let videoNeverFull: HTMLVideoElement = <HTMLVideoElement>document.createElement("video");
    videoNeverFull.setAttribute("src", "vids/NeverFullVid.mp4");
    videoNeverFull.setAttribute("id", "Neverlong");
    videoNeverFull.style.width = "132px";
    videoNeverFull.style.height = "300px";
    div1.appendChild(videoNeverFull);
    videoNeverFull.play();
    videoNeverFull.loop = true;

    let div2: HTMLElement = <HTMLElement>document.querySelector("#vid2");
    let videoManiacFull: HTMLVideoElement = <HTMLVideoElement>document.createElement("video");
    videoManiacFull.setAttribute("src", "vids/ManiacFullVid.mp4");
    videoManiacFull.setAttribute("id", "Maniaclong");
    videoManiacFull.style.width = "132px";
    videoManiacFull.style.height = "300px";
    div2.appendChild(videoManiacFull);
    videoManiacFull.play();
    videoManiacFull.loop = true;

    let div3: HTMLElement = <HTMLElement>document.querySelector("#vid3");
    let videoBrotherFull: HTMLVideoElement = <HTMLVideoElement>document.createElement("video");
    videoBrotherFull.setAttribute("src", "vids/BrotherFullVid.mp4");
    videoBrotherFull.setAttribute("id", "Brotherlong");
    videoBrotherFull.style.width = "132px";
    videoBrotherFull.style.height = "300px";
    div3.appendChild(videoBrotherFull);
    videoBrotherFull.play();
    videoBrotherFull.loop = true;

    let div4: HTMLElement = <HTMLElement>document.querySelector("#vid4");
    let videoTakeFull: HTMLVideoElement = <HTMLVideoElement>document.createElement("video");
    videoTakeFull.setAttribute("src", "vids/TakeFullVid.mp4");
    videoTakeFull.setAttribute("id", "Takelong");
    videoTakeFull.style.width = "132px";
    videoTakeFull.style.height = "300px";
    div4.appendChild(videoTakeFull);
    videoTakeFull.play();
    videoTakeFull.loop = true;
   
}

function stop(): void {
    console.log("thanks!");
    let cover: HTMLElement = <HTMLElement>document.getElementById(ident + "pic");
    cover.remove();
    let confeti: HTMLElement = <HTMLElement>document.getElementById("confetti");
    confeti.remove();

    let videoNeverFull: HTMLVideoElement = <HTMLVideoElement>document.getElementById("Neverlong");
    videoNeverFull.remove();
    let videoManiacFull: HTMLVideoElement = <HTMLVideoElement>document.getElementById("Maniaclong");
    videoManiacFull.remove();
    let videoBrotherFull: HTMLVideoElement = <HTMLVideoElement>document.getElementById("Brotherlong");
    videoBrotherFull.remove();
    let videoTakeFull: HTMLVideoElement = <HTMLVideoElement>document.getElementById("Takelong");
    videoTakeFull.remove();

    let music: HTMLAudioElement = <HTMLAudioElement>document.getElementById(ident);
    music.pause();

    let marker1: HTMLElement = <HTMLElement>document.getElementById("sound1BT");
    let marker2: HTMLElement = <HTMLElement>document.getElementById("sound2BT");
    let marker3: HTMLElement = <HTMLElement>document.getElementById("sound3BT");
    let marker4: HTMLElement = <HTMLElement>document.getElementById("sound4BT");
    marker1.style.backgroundColor = "white";
    marker2.style.backgroundColor = "white";
    marker3.style.backgroundColor = "white";
    marker4.style.backgroundColor = "white";
    marker1.style.display = "inline";
    marker2.style.display = "inline";
    marker3.style.display = "inline";
    marker4.style.display = "inline";

    pausieren = true;
    let btt: NodeListOf<HTMLElement> = document.querySelectorAll(".sound");
    for (let i: number = 0; i < 16; i++) {
        btt[i].addEventListener("click", playit);
    }
}

function waveGone(): void {
    let wave: HTMLElement = <HTMLElement>document.getElementById("wavy");
    wave.remove();
    let video: HTMLVideoElement = <HTMLVideoElement>document.getElementById("shorts");
    video.remove();

    pausieren = true;
    let btt: NodeListOf<HTMLElement> = document.querySelectorAll(".sound");
    for (let i: number = 0; i < 16; i++) {
        btt[i].addEventListener("click", playit);
    }
}

function random(): number {
    let x: number = (Math.floor(Math.random() * 4 + 1));
    return x;
}

