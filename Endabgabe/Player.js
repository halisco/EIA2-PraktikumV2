"use strict";
var end;
(function (end) {
    class Player extends end.Person {
        constructor(_pos) {
            super(_pos);
            this.position = _pos;
            if (end.players.length <= 10) {
                this.color = "red";
            }
            else {
                this.color = "blue";
            }
        }
        draw() {
            end.crc2.translate(this.position.x - 20, this.position.y - 25); //Um Verschiebung beim zeichnen auszugleichen
            let player = new Path2D();
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
            end.crc2.lineWidth = 4;
            end.crc2.strokeStyle = "black";
            end.crc2.fillStyle = this.color;
            end.crc2.save();
            end.crc2.scale(0.5, 0.5);
            end.crc2.stroke(player);
            end.crc2.fill(player);
            end.crc2.restore();
            end.crc2.fillStyle = "white";
            end.crc2.font = "10px Arial";
            end.crc2.fillText(" 4", 14, 21);
            end.crc2.resetTransform();
        }
        move() {
            //console.log(ball.position.x, this.position.x);
            let vergX = end.ball.position.x - this.position.x;
            let realX = vergX;
            let vergY = end.ball.position.y - this.position.y;
            let realY = vergY;
            if (vergX <= 0) {
                vergX = vergX * (-1);
            }
            if (vergY <= 0) {
                vergY = vergY * (-1);
            }
            if (vergX <= 50 && vergY <= 105) {
                if (vergX > 20 || vergY > 20) {
                    if (realX > 0) {
                        this.position.x += +0.5; //austauschen mit FormElement
                    }
                    else if (realX < 0) {
                        this.position.x += -0.5; //austauschen mit FormElement
                    }
                    if (realY > 0) {
                        this.position.y += +0.5; //austauschen mit FormElement
                    }
                    else if (realY < 0) {
                        this.position.y += -0.5; //austauschen mit FormElement
                    }
                }
                else {
                    console.log("Stop!");
                    end.stop = false;
                }
            }
        }
    }
    end.Player = Player;
})(end || (end = {}));
//# sourceMappingURL=Player.js.map