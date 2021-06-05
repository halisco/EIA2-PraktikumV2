"use strict";
var L09b;
(function (L09b) {
    class Flower {
        constructor(_type, _pos) {
            this.position = _pos;
            this.type = _type;
            console.log(_type);
            let i = (Math.floor(Math.random() * 2));
            let z = (Math.floor(Math.random() * 2));
            if (this.type == "rose") {
                if (i == 0) {
                    this.fillcolor = "#B40404";
                    this.strokecolor = "#610B0B";
                }
                else {
                    this.fillcolor = "#0489B1";
                    this.strokecolor = "#084B8A";
                }
            }
            else if (this.type == "sun") {
                if (z == 0) {
                    this.fillcolor = "#8904B1";
                    this.strokecolor = "red";
                }
                else {
                    this.fillcolor = "#D7DF01";
                    this.strokecolor = "#FE9A2E";
                }
            }
            else {
                this.strokecolor = "#3B170B";
                this.fillcolor = "#F6E3CE";
            }
        }
        draw() {
            L09b.crc2.save();
            L09b.crc2.translate(this.position.x, this.position.y);
            if (this.type == "rose" || this.type == "sun") {
                L09b.crc2.strokeStyle = "darkgreen";
                L09b.crc2.lineWidth = 2;
                L09b.crc2.stroke(L09b.stiel);
            }
            L09b.crc2.fillStyle = this.fillcolor;
            L09b.crc2.strokeStyle = this.strokecolor;
            if (this.type == "rose") {
                L09b.crc2.fill(L09b.rose);
                L09b.crc2.lineWidth = 1;
                L09b.crc2.stroke(L09b.rose);
            }
            else if (this.type == "sun") {
                L09b.crc2.fill(L09b.sun);
                L09b.crc2.lineWidth = 1;
                L09b.crc2.stroke(L09b.sun);
            }
            else {
                L09b.crc2.lineWidth = 1;
                L09b.crc2.stroke(L09b.bundle);
                L09b.crc2.fill(L09b.knosp);
            }
            L09b.crc2.restore();
        }
    }
    L09b.Flower = Flower;
})(L09b || (L09b = {}));
//# sourceMappingURL=flower.js.map