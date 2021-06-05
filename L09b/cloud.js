"use strict";
var L09b;
(function (L09b) {
    class Cloud {
        constructor(_pos) {
            this.position = _pos;
        }
        draw() {
            let radius = 50;
            let gradient = L09b.crc2.createRadialGradient(0, 0, 0, 0, 0, radius);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L09b.crc2.save();
            L09b.crc2.translate(this.position.x, this.position.y);
            let wolke = new Path2D();
            wolke.arc(0, 0, radius, 0, 2 * Math.PI);
            L09b.crc2.fillStyle = gradient;
            L09b.crc2.fill(wolke);
            L09b.crc2.restore();
        }
        move(_timeslice) {
            let offset = new L09b.Vector(-15, 0);
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
    L09b.Cloud = Cloud;
})(L09b || (L09b = {}));
//# sourceMappingURL=cloud.js.map