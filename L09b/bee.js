"use strict";
var L09b;
(function (L09b) {
    class Bee {
        constructor(_pos) {
            this.position = _pos;
            this.velocity = new L09b.Vector(0, 0);
            this.velocity.random(50, 70);
        }
        draw() {
            L09b.crc2.save();
            L09b.crc2.translate(this.position.x, this.position.y);
            L09b.crc2.lineWidth = 2;
            L09b.crc2.strokeStyle = "black";
            L09b.crc2.fillStyle = "yellow";
            L09b.crc2.fill(L09b.bees);
            L09b.crc2.stroke(L09b.bees);
            L09b.crc2.filter = "blur(2px)";
            L09b.crc2.lineWidth = 8;
            L09b.crc2.strokeStyle = "white";
            L09b.crc2.stroke(L09b.wings);
            L09b.crc2.filter = "blur(0px)";
            L09b.crc2.restore();
        }
        move(_timeslice) {
            let offset = new L09b.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09b.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09b.crc2.canvas.height;
            if (this.position.x > L09b.crc2.canvas.width)
                this.position.x -= L09b.crc2.canvas.width;
            if (this.position.y > L09b.crc2.canvas.height)
                this.position.y -= L09b.crc2.canvas.height;
        }
    }
    L09b.Bee = Bee;
})(L09b || (L09b = {}));
//# sourceMappingURL=bee.js.map