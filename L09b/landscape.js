"use strict";
var L09b;
(function (L09b) {
    function landscape(_grasColor, _withlight) {
        skyColor();
        mountains();
        let gras = new Path2D();
        gras.moveTo(0, 300);
        gras.bezierCurveTo(150, 250, 450, 250, 600, 300);
        gras.lineTo(600, 600);
        gras.lineTo(0, 600);
        gras.lineTo(0, 300);
        gras.moveTo(550, 290);
        gras.bezierCurveTo(712, 220, 874, 220, L09b.crc2.canvas.width, 250); //1200
        gras.lineTo(L09b.crc2.canvas.width, 600); //1200
        gras.lineTo(550, 600);
        gras.closePath();
        let overline = new Path2D();
        overline.moveTo(0, 300);
        overline.bezierCurveTo(150, 250, 450, 250, 600, 300);
        overline.moveTo(550, 290);
        overline.bezierCurveTo(712, 220, 874, 220, L09b.crc2.canvas.width, 250); //1200
        //Graslandschaft erstellt
        L09b.crc2.strokeStyle = _grasColor;
        L09b.crc2.fillStyle = _grasColor;
        L09b.crc2.fill(gras);
        L09b.crc2.stroke(gras);
        //Sonnenlicht bzw. Dämmerung ja oder nein
        if (_withlight == true) {
            L09b.crc2.strokeStyle = _grasColor;
            L09b.crc2.fillStyle = "orange";
            L09b.crc2.filter = "blur(40px)";
            L09b.crc2.fill(overline);
            L09b.crc2.stroke(overline);
            L09b.crc2.filter = "blur(0px)";
        }
        bush();
        river();
        beeNest();
    }
    L09b.landscape = landscape;
    function skyColor() {
        //Hintergrundfarbe
        let gradient = L09b.crc2.createLinearGradient(0, 0, 0, L09b.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.51, "orange");
        gradient.addColorStop(1, "red");
        L09b.crc2.fillStyle = gradient;
        L09b.crc2.fillRect(0, 0, L09b.crc2.canvas.width, L09b.crc2.canvas.height);
    }
    function bush() {
        let busch = new Path2D();
        busch.arc(40, 40, 10, 0, 2 * Math.PI);
        busch.moveTo(60, 50);
        busch.arc(50, 47, 10, 0, 2 * Math.PI);
        busch.moveTo(60, 30);
        busch.arc(50, 32, 10, 0, 2 * Math.PI);
        busch.moveTo(68, 45);
        busch.arc(58, 45, 10, 0, 2 * Math.PI);
        busch.moveTo(80, 48);
        busch.arc(70, 48, 10, 0, 2 * Math.PI);
        busch.moveTo(90, 43);
        busch.arc(80, 43, 10, 0, 2 * Math.PI);
        busch.moveTo(85, 33);
        busch.arc(75, 33, 10, 0, 2 * Math.PI);
        busch.moveTo(77, 32);
        busch.arc(64, 30, 10, 0, 2 * Math.PI);
        //Büsche statisch angelegt
        L09b.crc2.translate(70, 250); //min240 max280
        L09b.crc2.filter = "blur(1px)";
        L09b.crc2.fillStyle = "#0B6121";
        L09b.crc2.lineWidth = 0.4;
        L09b.crc2.fill(busch);
        L09b.crc2.stroke(busch);
        L09b.crc2.translate(100, 20);
        L09b.crc2.fill(busch);
        L09b.crc2.stroke(busch);
        L09b.crc2.translate(70, -30);
        L09b.crc2.fill(busch);
        L09b.crc2.stroke(busch);
        L09b.crc2.translate(-240, 30);
        L09b.crc2.fill(busch);
        L09b.crc2.stroke(busch);
        L09b.crc2.translate(330, -10);
        L09b.crc2.fill(busch);
        L09b.crc2.stroke(busch);
        L09b.crc2.translate(80, -15);
        L09b.crc2.fill(busch);
        L09b.crc2.stroke(busch);
        L09b.crc2.resetTransform();
    }
    function river() {
        let width = 0;
        let river = new Path2D();
        river.moveTo(L09b.crc2.canvas.width - 350, 275); //-350
        river.bezierCurveTo(L09b.crc2.canvas.width - 320, 448, L09b.crc2.canvas.width - 380, 620, L09b.crc2.canvas.width - 380, L09b.crc2.canvas.height + 20); //-320, -380, -380
        for (width; width < 10; width++) {
            L09b.crc2.translate(5, -2);
            L09b.crc2.strokeStyle = "blue";
            L09b.crc2.filter = "blur(3px)";
            L09b.crc2.lineWidth = 4;
            L09b.crc2.stroke(river);
        }
        L09b.crc2.filter = "blur(0px)";
    }
    function mountains() {
        // y = max150 y = min250
        let x = 0;
        L09b.crc2.beginPath();
        L09b.crc2.moveTo(0, 250);
        do {
            x += (Math.floor(Math.random() * 50 + 50));
            let y = (Math.floor(Math.random() * 100 + 150));
            L09b.crc2.lineTo(x, y);
        } while (x < L09b.crc2.canvas.width);
        L09b.crc2.lineTo(x, 350);
        L09b.crc2.lineTo(0, 350);
        L09b.crc2.closePath();
        let gradient = L09b.crc2.createLinearGradient(0, 0, 0, L09b.crc2.canvas.height);
        gradient.addColorStop(0, "#FFFFFF");
        gradient.addColorStop(0.4, "#E6E6E6");
        gradient.addColorStop(1, "#848484");
        L09b.crc2.fillStyle = gradient;
        L09b.crc2.fill();
        L09b.crc2.strokeStyle = gradient;
        L09b.crc2.lineWidth = 30;
        L09b.crc2.lineJoin = "round";
        L09b.crc2.stroke();
    }
    function beeNest() {
        L09b.crc2.beginPath();
        L09b.crc2.moveTo(630, 390);
        L09b.crc2.lineTo(630, 490);
        L09b.crc2.lineTo(730, 490);
        L09b.crc2.lineTo(730, 390);
        L09b.crc2.lineTo(680, 340);
        L09b.crc2.closePath();
        L09b.crc2.fillStyle = "#583C04";
        L09b.crc2.fill();
        L09b.crc2.lineTo(730, 390);
        L09b.crc2.lineTo(630, 490);
        L09b.crc2.moveTo(630, 390);
        L09b.crc2.lineTo(730, 490);
        L09b.crc2.lineTo(730, 590);
        L09b.crc2.lineTo(720, 590);
        L09b.crc2.lineTo(720, 490);
        L09b.crc2.moveTo(630, 490);
        L09b.crc2.lineTo(630, 590);
        L09b.crc2.lineTo(640, 590);
        L09b.crc2.lineTo(640, 490);
        L09b.crc2.closePath();
        L09b.crc2.fillStyle = "#583C04";
        L09b.crc2.fill();
        L09b.crc2.lineWidth = 2;
        L09b.crc2.strokeStyle = "#A27314";
        L09b.crc2.stroke();
        let circle = new Path2D();
        circle.moveTo(705, 440);
        circle.arc(680, 440, 25, 0, 2 * Math.PI);
        L09b.crc2.fillStyle = "black";
        L09b.crc2.fill(circle);
        L09b.crc2.stroke(circle);
    }
})(L09b || (L09b = {}));
//# sourceMappingURL=landscape.js.map