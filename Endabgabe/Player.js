"use strict";
var end;
(function (end) {
    class Player {
        constructor(_pos) {
            this.position = _pos;
            if (end.players.length <= 10) {
                this.color = "red";
            }
            else {
                this.color = "blue";
            }
        }
        draw() {
            end.crc2.translate(this.position.x, this.position.y);
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
    }
    end.Player = Player;
})(end || (end = {}));
//# sourceMappingURL=Player.js.map