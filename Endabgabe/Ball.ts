namespace end {
    export class Ball {
        position: Vector;
        speed: number = 0.1;
        newPos: Vector;
        balance: Vector;
        isMoving: boolean = false;
        movementThreshold: number = 2;
        scoreHome: number = 0;
        scoreAway: number = 0;

        constructor(_pos: Vector) {
            this.position = _pos.copy();
            console.log("create ball");
            this.newPos = _pos.copy();
        }

        draw(): void {
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.lineWidth = 1;
            crc2.fillStyle = "violet";
            crc2.strokeStyle = "black";
            crc2.fill();
            crc2.stroke();
            crc2.resetTransform();
        }

        shot(_pos: Vector): void {
            this.newPos = _pos.copy();
        }

        move(): void {
            let directionX: number = this.newPos.x - this.position.x;
            let directionY: number = this.newPos.y - this.position.y;
            let direction: Vector = new Vector(directionX, directionY);
            if (direction.length() <= this.movementThreshold) {
                this.isMoving = false;
            } else {
                this.isMoving = true;
            }
            direction.scale(this.speed);
            this.position.add(direction);
            
            let span1: HTMLElement = document.getElementById("homeScore")!;
            let span2: HTMLElement = document.getElementById("awayScore")!;
            //HeimTor Koordinaten
            if (this.position.x <= 10 && this.position.y >= (canvas.height / 2) - 22 && this.position.y <= (canvas.height / 2) + 22 ) {
                this.scoreHome++;
                span1.innerHTML = this.scoreHome.toString();
                console.log(String(this.scoreHome));
                alert("GOAL!  " + span1.innerHTML + "-" + span2.innerHTML);
                this.newPos = new Vector(canvas.width / 2, canvas.height / 2);
            }
            //AuswärtsTor Koordinaten
            if (this.position.x >= canvas.width - 10 && this.position.y >= (canvas.height / 2) - 22 && this.position.y <= (canvas.height / 2) + 22 ) {
                this.scoreAway++;
                span2.innerHTML = this.scoreAway.toString();
                console.log(String(this.scoreAway));
                alert("GOAL!  " + span1.innerHTML + "-" + span2.innerHTML);
                this.newPos = new Vector(canvas.width / 2, canvas.height / 2);
            }
            //Aus hinter den Torlinien
            if (this.position.y <= (canvas.height / 2) - 22 || this.position.y >= (canvas.height / 2) + 22 ) {
                if (this.position.x <= 5) {
                this.newPos = new Vector(90, canvas.height / 2);
                }
                if (this.position.x >= canvas.width - 5) {
                    this.newPos = new Vector(712, canvas.height / 2);
                }
            }
            //Aus an den Seitenlinien
            if (this.position.y <= 5) {
                this.newPos.y += 10;
            }
            if (this.position.y >= canvas.height - 5) {
                this.newPos.y -= 10;
            }
            
        }

    }
}