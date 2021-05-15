"use strict";
var L08b;
(function (L08b) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let canvas;
    //Für Blumencoordinaten
    function flowerX() {
        let xFlower = (Math.floor(Math.random() * 550));
        return xFlower;
    }
    function flowerY() {
        let yFlower = (Math.floor(Math.random() * 220 + 330));
        return yFlower;
    }
    function handleLoad(_event) {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        skyColor();
        mountains();
        clouds();
        landscape("#567956", true);
        sunFlower(20);
        roseFlower(20);
        bundleFlower(10);
    }
    function skyColor() {
        //Hintergrundfarbe
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.51, "orange");
        gradient.addColorStop(1, "red");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function landscape(_grasColor, _withlight) {
        let gras = new Path2D();
        gras.moveTo(0, 300);
        gras.bezierCurveTo(150, 250, 450, 250, 600, 300);
        gras.lineTo(600, 600);
        gras.lineTo(0, 600);
        gras.lineTo(0, 300);
        gras.moveTo(550, 290);
        gras.bezierCurveTo(712, 220, 874, 220, 1200, 250);
        gras.lineTo(1200, 600);
        gras.lineTo(550, 600);
        gras.closePath();
        let overline = new Path2D();
        overline.moveTo(0, 300);
        overline.bezierCurveTo(150, 250, 450, 250, 600, 300);
        overline.moveTo(550, 290);
        overline.bezierCurveTo(712, 220, 874, 220, 1200, 250);
        //Graslandschaft erstellt
        crc2.strokeStyle = _grasColor;
        crc2.fillStyle = _grasColor;
        crc2.fill(gras);
        crc2.stroke(gras);
        //Sonnenlicht bzw. Dämmerung ja oder nein
        if (_withlight == true) {
            crc2.strokeStyle = _grasColor;
            crc2.fillStyle = "orange";
            crc2.filter = "blur(40px)";
            crc2.fill(overline);
            crc2.stroke(overline);
            crc2.filter = "blur(0px)";
        }
        bush();
        river();
    }
    function sunFlower(_entry) {
        let stiel = new Path2D();
        stiel.moveTo(27.5, 20);
        stiel.lineTo(27.5, 45);
        let flower = new Path2D();
        flower.moveTo(25, 20);
        flower.arc(20, 20, 5, 0, 2 * Math.PI);
        flower.moveTo(30, 25);
        flower.arc(25, 25, 5, 0, 2 * Math.PI);
        flower.moveTo(35, 25);
        flower.arc(30, 25, 5, 0, 2 * Math.PI);
        flower.moveTo(40, 20);
        flower.arc(35, 20, 5, 0, 2 * Math.PI);
        flower.moveTo(30, 15);
        flower.arc(25, 15, 5, 0, 2 * Math.PI);
        flower.moveTo(30, 15);
        flower.arc(30, 15, 5, 0, 2 * Math.PI);
        //Sonnenblumen mit zwei Farben per Zufall angelegt
        for (let i = 0; i < _entry; i++) {
            crc2.translate(flowerX(), flowerY());
            crc2.lineWidth = 2;
            crc2.strokeStyle = "darkgreen";
            crc2.stroke(stiel);
            crc2.lineWidth = 1.5;
            if (i < _entry / 2) {
                crc2.strokeStyle = "#8904B1"; //pink
                crc2.fillStyle = "red";
            }
            else {
                crc2.strokeStyle = "#D7DF01"; //red
                crc2.fillStyle = "#FE9A2E";
            }
            crc2.fill(flower);
            crc2.stroke(flower);
            crc2.resetTransform();
        }
    }
    function roseFlower(_entry) {
        let stiel2 = new Path2D();
        stiel2.moveTo(27.5, 20);
        stiel2.lineTo(27.5, 45);
        let flower2 = new Path2D();
        flower2.arc(27.5, 17, 10, -0.5, Math.PI + 0.5);
        flower2.bezierCurveTo(22, 3, 28, 16, 36, 11); //17.5, 10 ---- 37.5, 10
        flower2.bezierCurveTo(20, 2, 28, 16, 36, 11);
        //Rosen mit zwei Farben per Zufall angelegt
        for (let i = 0; i < _entry; i++) {
            crc2.translate(flowerX(), flowerY());
            crc2.strokeStyle = "darkgreen";
            crc2.lineWidth = 2;
            crc2.stroke(stiel2);
            if (i < _entry / 2) {
                crc2.fillStyle = "#B40404";
                crc2.strokeStyle = "#610B0B";
            }
            else {
                crc2.fillStyle = "#0489B1";
                crc2.strokeStyle = "#084B8A";
            }
            crc2.fill(flower2);
            crc2.lineWidth = 1;
            crc2.stroke(flower2);
            crc2.resetTransform();
        }
    }
    function bundleFlower(_entry) {
        let bundle = new Path2D();
        bundle.moveTo(30, 40);
        bundle.lineTo(30, 5);
        bundle.moveTo(30, 40);
        bundle.bezierCurveTo(24, 24, 25, 20, 17, 15);
        bundle.moveTo(30, 40);
        bundle.bezierCurveTo(36, 24, 35, 20, 43, 15);
        let knosp = new Path2D();
        knosp.moveTo(25, 20);
        knosp.arc(22, 20, 4, 0, 2 * Math.PI);
        knosp.moveTo(42, 20);
        knosp.arc(38, 20, 4, 0, 2 * Math.PI);
        knosp.moveTo(34, 12);
        knosp.arc(30, 12, 4, 0, 2 * Math.PI);
        //Pusteblumen per Zufall angelegt
        for (let i = 0; i < _entry; i++) {
            crc2.translate(flowerX(), flowerY());
            crc2.strokeStyle = "#3B170B";
            crc2.lineWidth = 1;
            crc2.stroke(bundle);
            crc2.fillStyle = "#F6E3CE";
            crc2.fill(knosp);
            crc2.resetTransform();
        }
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
        crc2.translate(70, 250); //min240 max280
        crc2.filter = "blur(1px)";
        crc2.fillStyle = "#0B6121";
        crc2.lineWidth = 0.4;
        crc2.fill(busch);
        crc2.stroke(busch);
        crc2.translate(100, 20);
        crc2.fill(busch);
        crc2.stroke(busch);
        crc2.translate(70, -30);
        crc2.fill(busch);
        crc2.stroke(busch);
        crc2.translate(-240, 30);
        crc2.fill(busch);
        crc2.stroke(busch);
        crc2.translate(350, -10);
        crc2.fill(busch);
        crc2.stroke(busch);
        crc2.translate(100, -15);
        crc2.fill(busch);
        crc2.stroke(busch);
        crc2.resetTransform();
    }
    function river() {
        let width = 0;
        let river = new Path2D();
        river.moveTo(630, 250);
        river.bezierCurveTo(600, 400, 700, 500, 650, 615);
        for (width; width < 10; width++) {
            crc2.translate(5, -1.3);
            crc2.strokeStyle = "blue";
            crc2.filter = "blur(3px)";
            crc2.lineWidth = 4;
            crc2.stroke(river);
        }
        crc2.filter = "blur(0px)";
    }
    function mountains() {
        // y = max150 y = min250
        let x = 0;
        crc2.beginPath();
        crc2.moveTo(0, 250);
        do {
            x += (Math.floor(Math.random() * 50 + 50));
            let y = (Math.floor(Math.random() * 100 + 150));
            crc2.lineTo(x, y);
            console.log(x);
            console.log(y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 350);
        crc2.lineTo(0, 350);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#FFFFFF");
        gradient.addColorStop(0.4, "#E6E6E6");
        gradient.addColorStop(1, "#848484");
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.strokeStyle = gradient;
        crc2.lineWidth = 30;
        crc2.lineJoin = "round";
        crc2.stroke();
    }
    function clouds() {
        let xParticles = 70;
        let radius = 50;
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radius);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        let wolke = new Path2D();
        wolke.arc(0, 0, radius, 0, 2 * Math.PI);
        crc2.fillStyle = gradient;
        for (let i = 0; i < xParticles; i++) {
            let x = (Math.floor(Math.random() * 600 + 500));
            let y = (Math.floor(Math.random() * 130 + 50));
            crc2.translate(x, y);
            crc2.fill(wolke);
            crc2.resetTransform();
        }
    }
})(L08b || (L08b = {}));
//# sourceMappingURL=blumen.js.map