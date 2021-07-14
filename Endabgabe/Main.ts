namespace end {
    
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    export let homeColor: String = "#FFFFFF";
    export let awayColor: String = "#0000FF";
    export let pace: number = 0.08;
    export let shotMin: number = 0.8;
    export let shotMax: number = 1.2;
    

    let numbers: number[] = [1, 3, 4, 5, 8, 6, 10, 22, 14, 9, 7, 1, 4, 2, 3, 6, 11, 7, 10, 17, 9, 21];
    export let name: String[][] = [["Neuer", "TW", "de"], ["Hummels", "IV", "de"], ["Virgil", "IV", "nl"], ["Chiellini", "IV", "it"], ["Gnabry", "RM", "de"], ["Veratti", "ZDM", "it"], ["Sane", "LM", "de"], ["Sancho", "ZOM", "en"], ["Hazard", "LF", "be"], ["Bale", "RF", "wl"], ["Ronaldo", "ST", "pr"], ["Sommer", "TW", "sw"], ["Ramos", "IV", "sp"], ["Alaba", "IV", "oe"], ["Varan", "IV", "fr"], ["Kimmich", "ZDM", "de"], ["De Bruyne", "ZOM", "be"], ["Pogba", "ZM", "fr"], ["Insigne", "LM", "it"], ["Rashford", "RM", "en"], ["Mbappe", "ST", "fr"], ["Kane", "ST", "en"]];
    let pos: number [][] = [[50, 260], [120, 125], [160, 245], [90, 375], [240, 425], [320, 325], [390, 195], [430, 395], [620, 125], [690, 405], [560, 295], [755, 260], [570, 415], [660, 330], [720, 165], [540, 195], [420, 295], [480, 85], [250, 75], [100, 455], [180, 345], [220, 225] ];
    let posReff: number [][] = [[10, 0], [750, 470], [420, 210]];
    let reffName: string[] = ["LS", "RS", " S"];
    
    export let persons: Person[] = [];
    export let ball: Ball;
    let playerOnBall: Player;
    let imageData: ImageData;
    
    

    function handleLoad(): void {
        canvas = document.querySelector("canvas")!;                                 //canvas erstellen
        crc2 = canvas.getContext("2d")!;

        pitch();                                                                    //Feld generieren
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);           //Bild vom Feld abspeichern 
        
        let forms: HTMLElement = document.getElementById("form")!;
        forms.addEventListener("change", handleChange);
        let starter: HTMLElement = document.getElementById("starter")!;
        starter.addEventListener("click", los);
    }

    
    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        if (target.id == "Trikotfarbe1") {
            homeColor = target.value;
        }
        if (target.id == "Trikotfarbe2") {
            awayColor = target.value;
        }
        if (target.id == "Pace") {
            pace = Number(target.value);
        }
        if (target.id == "minimum") {
            shotMin = Number(target.value);    
        }
        if (target.id == "maximum") {
            shotMax = Number(target.value);
        }
        
    }

    function los(_event: Event): void {

        let starter: HTMLElement = document.getElementById("starter")!;
        starter.innerHTML = "reload";
        starter.addEventListener("click", function(): void { window.location.reload(); });
        
        
        generatePlayer();                                                           //Player, Schiri und Ball generieren
        
        canvas.addEventListener("click", shotBall);                                 //Dem Ball den Click Listener geben

        let cardButton1: HTMLElement = document.getElementById("next1")!;           //Spielerinfo button (1. Team) mit Click Listener anlegen
        cardButton1.addEventListener("click", nextCard);                            //Spielerinfo Inhalte (1. Team) generieren
        let cardButton2: HTMLElement = document.getElementById("next2")!;           //Spielerinfo button (2. Team) mit Click Listener anlegen
        cardButton2.addEventListener("click", nextCard);                            //Spielerinfo Inhalte (2. Team) generieren
  
        //console.log(ball.position.x, ball.position.y);
        window.setInterval(animate, 50);                                           //Spieler und Ball animieren
        
        
    }


    function generatePlayer(): void {

        for (let i: number = 0; i <= 21; i++) {
        let player: Player = new Player(new Vector(pos[i][0], pos[i][1]), numbers[i], name[i][0]);
        player.draw();
        persons.push(player);
        }
        console.log(persons);

        for (let i: number = 0; i <= 2; i++) {
        let reff: Reff = new Reff(new Vector(posReff[i][0], posReff[i][1]), reffName[i]);
        reff.draw();
        persons.push(reff);
        }

        let fotball: Ball = new Ball(new Vector(canvas.width / 2, canvas.height / 2));
        fotball.draw();
        ball = fotball;   
    }




    function isPlayerOnBall(): boolean {
        
        for (let person of persons) {
            if (person.isOnBall()) {
                playerOnBall = person;
                if (playerOnBall.team == "home") {
                    let span1: HTMLElement = document.getElementById("homeName")!;
                    span1.innerHTML = playerOnBall.name.toString();
                    span1.style.backgroundColor = playerOnBall.color;
                    span1.style.textShadow = "2px 2px 5px black";
                } else {
                    let span2: HTMLElement = document.getElementById("awayName")!;
                    span2.innerHTML = playerOnBall.name.toString();
                    span2.style.backgroundColor = playerOnBall.color;
                    span2.style.textShadow = "2px 2px 5px black";
                }
                return true;
            }
        }
        return false;
    }

    function animate(): void {
       
        
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);
        
        if (ball.isMoving == false && isPlayerOnBall() == false) {
            for (let person of persons) {
                person.move();
                person.draw();
            }
        } else {
            for (let person of persons) {
                person.draw();
            }
        }
        

        ball.move();
        ball.draw();
   
    }

    function shotBall(_event: MouseEvent): void {
        if (isPlayerOnBall() == false || ball.isMoving) {
            console.log("no Shot!");
            return;
        } 
        let rect: DOMRect = canvas.getBoundingClientRect();
        let x: number = _event.clientX - rect.left;
        let y: number = _event.clientY - rect.top;
        x *= playerOnBall.balance;
        y *= playerOnBall.balance;
        console.log(playerOnBall);
        ball.shot(new Vector(x, y));
    }

    export let spieler1: number = 0;
    export let spieler2: number = 11;
    
    function nextCard(_event: Event): void {
        let elem: HTMLElement = <HTMLElement>_event.target;
        let searchButton: string = String(elem.getAttribute("id"));

        if (searchButton == "next1") {
            
            if (spieler1 >= 1) {
            persons[spieler1 - 1].opacity = 1;
            }
            if (spieler1 == 11) {
                spieler1 = 0;
            }
            persons[spieler1].playerCard(1);
            spieler1++;
        } else {
            if (spieler2 >= 1) {
                persons[spieler2 - 1].opacity = 1;
            }
            if (spieler2 == 22) {
                spieler2 = 11;
            }
            persons[spieler2].playerCard(2);
            spieler2++;
        }
    }

    
    
    
    




}