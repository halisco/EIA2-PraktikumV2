namespace end {
    export class Player extends Person {
        position: Vector;
        oldPosition: Vector;
        speed: number = 0;      //mindesten 0.02 schnell maximal eintrag von pace schnell
        balance: number = 0;      //Nummer von 70 bis 100 über Form, verwenden in Ball.move() bei newPos.x und y
        color: string;
        colorOfNumber: string = "#FFFFFF";
        opacity: number = 1;
        number: number;
        name: String;
        team: String;
        

        constructor(_pos: Vector, _num: number, _name: String) {
            super(_pos);
            this.name = _name;
            this.speed = Math.random() * (pace - 0.02) + 0.02;       //mindesten 0.02 schnell maximal eintrag von pace schnell
            this.balance = Math.random() * (shotMax - shotMin) + shotMin;        //Nummer von 70 bis 100 über Form, verwenden in Ball.move() bei newPos.x und y
            this.oldPosition = _pos.copy();
            this.number = _num;
            console.log(this.speed);

            if (persons.length <= 10) {
                this.color = homeColor.toString();
                this.team = "home";
            } else {
                this.color = awayColor.toString();
                this.team = "away"; 
            }
            
        }

        draw(): void {
            crc2.translate(this.position.x - 20, this.position.y - 25); //Um Verschiebung beim zeichnen auszugleichen
            let player: Path2D = new Path2D();
            player.moveTo(20, 25);
            player.lineTo(20, 55);
            player.lineTo(60, 55);
            player.lineTo(60, 25);
            player.lineTo(75, 25);
            player.lineTo(75, 15);
            player.lineTo(60, 5);
            player.moveTo(20, 25);
            player.lineTo(5, 25);
            player.lineTo(5, 15);
            player.lineTo(20, 5);
            player.lineTo(60, 5);
            crc2.lineWidth = 4;
            crc2.strokeStyle = "black";
            crc2.fillStyle = this.color;
            crc2.globalAlpha = this.opacity;
            crc2.save();
            crc2.scale(0.5, 0.5);
            crc2.stroke(player);
            crc2.fill(player);
            crc2.restore();
            crc2.fillStyle = this.colorOfNumber;
            crc2.font = "10px Arial";
            if (this.number >= 10) {
            crc2.strokeText(this.number.toString(), 14, 21);
            crc2.fillText(this.number.toString(), 14, 21);
            } else {
            crc2.strokeText(" " + this.number.toString(), 14, 21);
            crc2.fillText(" " + this.number.toString(), 14, 21);
            }
            crc2.globalAlpha = 1;
            crc2.resetTransform();
        }

        move(): void {
            
            let vergX: number = ball.position.x - this.position.x;
            let vergY: number = ball.position.y - this.position.y;
            let direction: Vector = new Vector(vergX, vergY);

            if (vergX <= 0) {
                vergX = vergX * (-1);
            }
            if (vergY <= 0) {
                vergY = vergY * (-1);
            }

            if (vergX <= 80 && vergY <= 105) {
                if (vergX > 10 || vergY > 10) {

                    direction.scale(this.speed);
                    this.position.add(direction);
                } 
                
            } else {
                this.moveBack();
            }
        }

        isOnBall(): boolean {
           
            let vergX: number = ball.position.x - this.position.x;
            let vergY: number = ball.position.y - this.position.y;
        
            if (vergX <= 0) {
                vergX = vergX * (-1);
            }
            if (vergY <= 0) {
                vergY = vergY * (-1);
            }

            if (vergX > 10 || vergY > 10) {
                return false;
            } else {
                return true;
            }
        }

        moveBack(): void {
            
            let directionX: number = this.oldPosition.x - this.position.x;
            let directionY: number = this.oldPosition.y - this.position.y;
            let direction: Vector = new Vector(directionX, directionY);
            direction.scale(this.speed);
            this.position.add(direction);
            
        }

        playerCard(_vergleich: number): void {
            if (_vergleich == 1) {
            this.opacity = 0.5;
            let div: HTMLElement = document.getElementById("card1")!;
            div.innerHTML = "";
            div.style.backgroundColor = homeColor.toString();
            let cardNumber: HTMLElement = document.createElement("h3");
            cardNumber.innerHTML = this.number.toString();
            cardNumber.style.textShadow = "2px 2px 5px black";
            div.appendChild(cardNumber);
            let cardName: HTMLElement = document.createElement("h3");
            cardName.innerHTML = this.name.toString();
            cardName.style.textShadow = "2px 2px 5px black";
            div.appendChild(cardName);
            let cardPos: HTMLElement = document.createElement("h5");
            cardPos.innerHTML = name[spieler1][1].toString();
            cardPos.style.textShadow = "2px 2px 5px black";
            div.appendChild(cardPos);
            let cardImg: HTMLElement =  document.createElement("img");
            cardImg.setAttribute("src", "Flags/" + name[spieler1][2].toString() + ".png");
            cardImg.setAttribute("class", "flag");
            cardImg.style.width = "30px";
            cardImg.style.height = "20px";
            cardPos.appendChild(cardImg);
            let cardSpeed: HTMLElement =  document.createElement("p");
            cardSpeed.innerHTML = "Pace: " + Math.floor(this.speed * 1000);
            cardSpeed.style.textShadow = "2px 2px 5px black";
            div.appendChild(cardSpeed);
            let cardBalance: HTMLElement =  document.createElement("p");
            cardBalance.innerHTML = "Shot: " + Math.round(this.balance * 100) / 100;
            cardBalance.style.textShadow = "2px 2px 5px black";
            div.appendChild(cardBalance);
            let cardImg2: HTMLElement =  document.createElement("img");
            cardImg2.setAttribute("src", "Players/" + name[spieler1][0].toString() + ".png");
            cardImg2.setAttribute("class", "player");
            cardImg2.style.width = "161px";
            cardImg2.style.height = "189px";
            div.appendChild(cardImg2);
        
            } else {

                this.opacity = 0.5;
                let div: HTMLElement = document.getElementById("card2")!;
                div.innerHTML = "";
                div.style.backgroundColor = awayColor.toString();
                let cardNumber: HTMLElement = document.createElement("h3");
                cardNumber.innerHTML = this.number.toString();
                cardNumber.style.textShadow = "2px 2px 5px black";
                div.appendChild(cardNumber);
                let cardName: HTMLElement = document.createElement("h3");
                cardName.innerHTML = this.name.toString();
                cardName.style.textShadow = "2px 2px 5px black";
                div.appendChild(cardName);
                let cardPos: HTMLElement = document.createElement("h5");
                cardPos.innerHTML = name[spieler2][1].toString();
                cardPos.style.textShadow = "2px 2px 5px black";
                div.appendChild(cardPos);
                let cardImg: HTMLElement =  document.createElement("img");
                cardImg.setAttribute("src", "Flags/" + name[spieler2][2].toString() + ".png");
                cardImg.setAttribute("class", "flag");
                cardImg.style.width = "30px";
                cardImg.style.height = "20px";
                cardPos.appendChild(cardImg);
                let cardSpeed: HTMLElement =  document.createElement("p");
                cardSpeed.innerHTML = "Pace: " + Math.floor(this.speed * 1000);
                cardSpeed.style.textShadow = "2px 2px 5px black";
                div.appendChild(cardSpeed);
                let cardBalance: HTMLElement =  document.createElement("p");
                cardBalance.innerHTML = "Shot: " + Math.round(this.balance * 100) / 100;
                cardBalance.style.textShadow = "2px 2px 5px black";
                div.appendChild(cardBalance);
                let cardImg2: HTMLElement =  document.createElement("img");
                cardImg2.setAttribute("src", "Players/" + name[spieler2][0].toString() + ".png");
                cardImg2.setAttribute("class", "player");
                cardImg2.style.width = "161px";
                cardImg2.style.height = "189px";
                div.appendChild(cardImg2);
            }
        }

        
    }
}