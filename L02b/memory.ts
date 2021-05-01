namespace L02b {

    window.addEventListener("load", handleLoad);
    let activeCards: HTMLElement [] = [];                       //Array Zwischenspeicher zum Abfragen der Karten
    let doneCards: HTMLElement [] = [];                         //Wichtig für function congrats() Speicherort für alert
    let cardNr: number = 0;                                     // Eingabefeld prompt()
    let starter: any = window.prompt("Mit wie vielen Paaren möchtest du spielen? (1-15 möglich)"); //nur any war möglich...
    switch (starter) {
        case "15":
            cardNr = 15;
            break;
        case "14":
            cardNr = 14;
            break;
        case "13":
            cardNr = 13;
            break;
        case "12":
            cardNr = 12;
            break;
        case "11":
            cardNr = 11;
            break;
        case "10":
            cardNr = 10;
            break;
        case "9":
            cardNr = 9;
            break;
        case "8":
            cardNr = 8;
            break;
        case "7":
            cardNr = 7;
            break;
        case "6":
            cardNr = 6;
            break;
        case "5":
            cardNr = 5;
            break;
        case "4":
            cardNr = 4;
            break;
        case "3":
            cardNr = 3;
            break;
        case "2":
            cardNr = 2;
            break;
        case "1":
            cardNr = 1;
            break;
        default:
            alert("Invalid entry: Please try again.");
            break;
    }
    console.log(cardNr);
    


    function handleLoad(): void {
    //alle Karten
    let memoryArray1: string[] = ["pics/Bird.jpg", "pics/Book.jpg", "pics/Book2.jpg", "pics/Camera.jpg", "pics/Clothes.jpg", "pics/Cola.jpg", "pics/Food.jpg", 
    "pics/Food2.jpg", "pics/Lemon.jpg", "pics/Night.jpg", "pics/Night2.jpg", "pics/Paint.jpg", "pics/Space.jpg", "pics/Street.jpg", "pics/Thankyou.jpg"];
    let memoryArray2: string[] = ["pics/Bird.jpg", "pics/Book.jpg", "pics/Book2.jpg", "pics/Camera.jpg", "pics/Clothes.jpg", "pics/Cola.jpg", "pics/Food.jpg", 
    "pics/Food2.jpg", "pics/Lemon.jpg", "pics/Night.jpg", "pics/Night2.jpg", "pics/Paint.jpg", "pics/Space.jpg", "pics/Street.jpg", "pics/Thankyou.jpg"];
    //benutzerdefinierte Auswahl
    let customArray1: string[] = memoryArray1.slice(0, cardNr);
    console.log(customArray1.length);
    let customArray2: string[] = memoryArray2.slice(0, cardNr);
   
    
    for (let i: number = cardNr; i >= 1; i--) {
            let min: number = 0;
            let max: number = i - 1;
            let zufallBlock1: number = Math.floor(Math.random() * (max - min + 1)) + min;
            let zufallBlock2: number = Math.floor(Math.random() * (max - min + 1)) + min;

            let tempDiv: HTMLElement = document.createElement("div");
            let tempImg: HTMLElement = document.createElement("img");
            tempDiv.setAttribute("class", "divboxFront");
            tempDiv.appendChild(tempImg);
            tempImg.setAttribute("src", customArray1[zufallBlock1]);
            tempImg.setAttribute("class", "back");
            tempImg.setAttribute("name", customArray1[zufallBlock1]);
            tempImg.setAttribute("id", customArray1[zufallBlock1]);     //Grund wird unten genannt
            document.getElementById("box")?.appendChild(tempDiv);
            customArray1.splice(zufallBlock1, 1);

            let tempDiv2: HTMLElement = document.createElement("div");
            let tempImg2: HTMLElement = document.createElement("img");
            tempDiv2.setAttribute("class", "divboxFront");
            tempDiv2.appendChild(tempImg2);
            tempImg2.setAttribute("src", customArray2[zufallBlock2]);
            tempImg2.setAttribute("class", "back");
            tempImg2.setAttribute("name", customArray2[zufallBlock2]);
            tempImg2.setAttribute("id", customArray2[zufallBlock2]);    //Grund wird unten genannt
            document.getElementById("box")?.appendChild(tempDiv2);
            customArray2.splice(zufallBlock2, 1);
        }

    let pics: NodeListOf<HTMLElement> = document.querySelectorAll("img");
    console.log(pics);
    for (let i: number = 0; i < cardNr * 2; i++) {
        pics[i].addEventListener("click", Frontclass);
    }
    }

    let zeit: number = 0;
    setInterval(timer, 1000);
    
    function timer(): void {
        zeit++;
    }
    
    function Frontclass(_event: Event): void {
    let elem: HTMLElement = <HTMLElement>_event.target; //Hat mir später ne Menge Schwirigkeiten bereitet...
    if (activeCards.length < 2) {
    elem.classList.remove("back");
    elem.classList.add("front");
    elem.removeEventListener("click", Frontclass);
    activeCards.push(elem);         //Schwierigkeiten: Konnte den Einträge des Arrays in keine sinnvollen Namen geben, 
    }                               // Array vom Typ HTMLElement konnte weder class noch name zugeordnet werden
    console.log(activeCards[0]);
    
    if (activeCards.length == 2) {
    setTimeout(removeElement1, 800);
    setTimeout(Backclass, 1500);
    }
    }
    

    function Backclass(): void {
    for (let i: number = 0; activeCards.length > i; i++) {
    activeCards[i].classList.remove("front");
    activeCards[i].classList.add("back");
    activeCards[i].addEventListener("click", Frontclass);
    }
    activeCards = [];
    }
    

    function removeElement1(): void {                           //Dadurch ist das entstanden... nicht schön aber auch nicht gewollt.
        if (activeCards[0].id == activeCards[1].id) {           //Habe keine richtige Lösung gefunden, Id war das einzige was funktioniert hat.
                                                                
            let rem1: NodeListOf<HTMLElement> = document.getElementsByName(activeCards[0].id);
            console.log(rem1);
            rem1[0].classList.remove("front");
            rem1[0].classList.add("gone");
            rem1[0].parentElement?.classList.remove("divboxFront");
            rem1[0].classList.add("divboxBack");
            doneCards.push(rem1[0]);

            rem1[1].classList.remove("front");
            rem1[1].classList.add("gone");
            rem1[1].parentElement?.classList.remove("divboxFront");
            rem1[1].classList.add("divboxBack");
            doneCards.push(rem1[1]);

            console.log(doneCards.length);
            console.log(cardNr);
        }

        if (doneCards.length == cardNr * 2) {
            alert("You won! Your time was: " + zeit + " Seconds");
        }

    
    

    
    }    
}
