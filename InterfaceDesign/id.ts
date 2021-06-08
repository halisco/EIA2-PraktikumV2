
window.addEventListener("click", handleLoad);
let soundsArray: String[] = [];
let numberArray: number[] = [1, 2, 3, 4];
let soundHtml: HTMLElement[] = [];
let maniac: String[] = ["man1", "man2", "man3", "man4"];

function handleLoad(): void {

    let btt: NodeListOf<HTMLElement> = document.querySelectorAll(".sound");
    console.log(btt);
    for (let i: number = 0; i < 20; i++) {
        btt[i].addEventListener("click", playit);
    }
}

function playit(_event: Event): void {
    let elem: HTMLElement = <HTMLElement>_event.target;
    soundHtml.push(elem);
    let idOf: String = String(elem.getAttribute("id"));
    console.log(idOf);
    soundsArray.push(idOf);
    console.log(soundsArray);

    numberArray.push(numberArray[0]);
    let stelle: HTMLElement = <HTMLElement>document.getElementById("stelle");
    stelle.innerHTML = numberArray[0] + " Stelle";
    stelle.style.textAlign = "center";
    numberArray.splice(0, 1);
    
    let music: HTMLAudioElement = <HTMLAudioElement>document.getElementById(idOf + "a");
    console.log(music);
    music.play();
    console.log("played");

    let display: HTMLElement = <HTMLElement>document.querySelector(".display");
    let wave: HTMLElement = document.createElement("img");
    wave.setAttribute("src", "wave.gif");
    wave.setAttribute("id", "wavy");
    wave.style.width = "300px";
    wave.style.height = "300px";
    wave.style.marginLeft = "50px";
    display.appendChild(wave);
    setTimeout(waveGone, 1500);


    if (soundsArray.length == 4) {
        checkSound();
        soundsArray = [];
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
        setTimeout(rightSound, 1500);
    }
    
}

function rightSound(): void {
    
    let music: HTMLAudioElement = <HTMLAudioElement>document.getElementById(ident);     //...Full.wav  (id)
    music.addEventListener("ended", stop);
    console.log(music);
    music.play();

    let display: HTMLElement = <HTMLElement>document.querySelector(".display");
    let cover: HTMLElement = document.createElement("img");
    cover.setAttribute("src", "pics/" + ident + ".jpg");        //...Full.jpg  (src)
    cover.setAttribute("id", ident + "pic");
    cover.style.width = "300px";
    cover.style.height = "300px";
    cover.style.marginLeft = "50px";
    display.appendChild(cover);
}

function stop(): void {
    console.log("thanks!");
    let cover: HTMLElement = <HTMLElement>document.getElementById(ident + "pic");
    cover.remove();
}

function waveGone(): void {
    let wave: HTMLElement = <HTMLElement>document.getElementById("wavy");
    wave.remove();
}