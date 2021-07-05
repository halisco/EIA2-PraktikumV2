"use strict";
var end;
(function (end) {
    class Ball {
        constructor(_pos) {
            this.position = _pos.copy();
            console.log("create ball");
        }
        draw() {
            end.crc2.translate(this.position.x, this.position.y);
            end.crc2.moveTo(7, 0);
            end.crc2.arc(0, 0, 7, 0, 2 * Math.PI);
            end.crc2.lineWidth = 1;
            end.crc2.fillStyle = "violet";
            end.crc2.strokeStyle = "black";
            end.crc2.fill();
            end.crc2.stroke();
            end.crc2.resetTransform();
            console.log("testball");
        }
        shot(_pos) {
            if (end.stop == true) {
                //let x: number = _pos.screenX;
                //let y: number = _pos.screenY;
                //console.log(x, y);
                //this.position.x = x;
                //this.position.y = y;
                this.position = _pos.copy();
            }
        }
    }
    end.Ball = Ball;
})(end || (end = {}));
//# sourceMappingURL=Ball.js.map