"use strict";
var end;
(function (end) {
    class Reff extends end.Person {
        constructor(_pos, _name) {
            super(_pos);
            this.speed = 0.02;
            this.name = _name;
        }
        draw() {
            end.crc2.translate(this.position.x, this.position.y);
            let reff = new Path2D();
            reff.moveTo(20, 25);
            reff.lineTo(20, 55);
            reff.lineTo(60, 55);
            reff.lineTo(60, 25);
            reff.lineTo(75, 25);
            reff.lineTo(75, 15);
            reff.lineTo(60, 5);
            reff.moveTo(20, 25);
            reff.lineTo(5, 25);
            reff.lineTo(5, 15);
            reff.lineTo(20, 5);
            reff.lineTo(60, 5);
            end.crc2.lineWidth = 4;
            end.crc2.strokeStyle = "white";
            end.crc2.fillStyle = "black";
            end.crc2.save();
            end.crc2.scale(0.5, 0.5);
            end.crc2.stroke(reff);
            end.crc2.fill(reff);
            end.crc2.restore();
            end.crc2.fillStyle = "white";
            end.crc2.font = "10px Arial";
            end.crc2.fillText(this.name, 14, 21);
            end.crc2.resetTransform();
        }
        move() {
            if (this.name == "LS") {
                if (end.ball.position.x <= 300) {
                    let directionX = end.ball.position.x - this.position.x;
                    directionX *= this.speed;
                    this.position.x += directionX;
                }
            }
            else if (this.name == "RS") {
                if (end.ball.position.x >= 500) {
                    let directionX = end.ball.position.x - this.position.x;
                    directionX *= this.speed;
                    this.position.x += directionX;
                }
            }
            else {
                let directionX = end.ball.position.x - this.position.x;
                directionX *= this.speed;
                this.position.x += directionX;
            }
        }
    }
    end.Reff = Reff;
})(end || (end = {}));
//# sourceMappingURL=Reff.js.map