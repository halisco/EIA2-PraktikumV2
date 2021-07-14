"use strict";
var end;
(function (end) {
    class Ball {
        constructor(_pos) {
            this.speed = 0.1;
            this.isMoving = false;
            this.movementThreshold = 2;
            this.scoreHome = 0;
            this.scoreAway = 0;
            this.position = _pos.copy();
            console.log("create ball");
            this.newPos = _pos.copy();
        }
        draw() {
            end.crc2.translate(this.position.x, this.position.y);
            end.crc2.beginPath();
            end.crc2.arc(0, 0, 7, 0, 2 * Math.PI);
            end.crc2.lineWidth = 1;
            end.crc2.fillStyle = "violet";
            end.crc2.strokeStyle = "black";
            end.crc2.fill();
            end.crc2.stroke();
            end.crc2.resetTransform();
        }
        shot(_pos) {
            this.newPos = _pos.copy();
        }
        move() {
            let directionX = this.newPos.x - this.position.x;
            let directionY = this.newPos.y - this.position.y;
            let direction = new end.Vector(directionX, directionY);
            if (direction.length() <= this.movementThreshold) {
                this.isMoving = false;
            }
            else {
                this.isMoving = true;
            }
            direction.scale(this.speed);
            this.position.add(direction);
            let span1 = document.getElementById("homeScore");
            let span2 = document.getElementById("awayScore");
            //HeimTor Koordinaten
            if (this.position.x <= 10 && this.position.y >= (end.canvas.height / 2) - 22 && this.position.y <= (end.canvas.height / 2) + 22) {
                this.scoreHome++;
                span1.innerHTML = this.scoreHome.toString();
                console.log(String(this.scoreHome));
                alert("GOAL!  " + span1.innerHTML + "-" + span2.innerHTML);
                this.newPos = new end.Vector(end.canvas.width / 2, end.canvas.height / 2);
            }
            //AuswärtsTor Koordinaten
            if (this.position.x >= end.canvas.width - 10 && this.position.y >= (end.canvas.height / 2) - 22 && this.position.y <= (end.canvas.height / 2) + 22) {
                this.scoreAway++;
                span2.innerHTML = this.scoreAway.toString();
                console.log(String(this.scoreAway));
                alert("GOAL!  " + span1.innerHTML + "-" + span2.innerHTML);
                this.newPos = new end.Vector(end.canvas.width / 2, end.canvas.height / 2);
            }
            //Aus hinter den Torlinien
            if (this.position.y <= (end.canvas.height / 2) - 22 || this.position.y >= (end.canvas.height / 2) + 22) {
                if (this.position.x <= 5) {
                    this.newPos = new end.Vector(90, end.canvas.height / 2);
                }
                if (this.position.x >= end.canvas.width - 5) {
                    this.newPos = new end.Vector(712, end.canvas.height / 2);
                }
            }
            //Aus an den Seitenlinien
            if (this.position.y <= 5) {
                this.newPos.y += 10;
            }
            if (this.position.y >= end.canvas.height - 5) {
                this.newPos.y -= 10;
            }
        }
    }
    end.Ball = Ball;
})(end || (end = {}));
//# sourceMappingURL=Ball.js.map