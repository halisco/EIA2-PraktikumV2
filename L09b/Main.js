"use strict";
var L09b;
(function (L09b) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let flowerArray = [];
    let cloudArray = [];
    let beeArray = [];
    let imageData;
    function handleLoad(_event) {
        canvas = document.querySelector("canvas");
        L09b.crc2 = canvas.getContext("2d");
        //Generate First seen Picture
        L09b.landscape("#567956", true);
        generateFlower(50);
        imageData = L09b.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Start of animate process
        generateClouds(70);
        generateBees(7);
        window.setInterval(animate, 200);
    }
    function generateFlower(_entry) {
        let flowerTyps = ["rose", "sun", "bundle"];
        for (_entry; _entry > 0; _entry--) {
            let flow = new L09b.Flower(flowerTyps[typs()], new L09b.Vector(flowerX(), flowerY()));
            flow.draw();
            flowerArray.push(flow);
        }
    }
    function generateBees(_entry) {
        for (_entry; _entry > 0; _entry--) {
            let bees = new L09b.Bee(new L09b.Vector(680, 400));
            bees.draw();
            beeArray.push(bees);
        }
    }
    function generateClouds(_particels) {
        for (_particels; _particels > 0; _particels--) {
            let cloud = new L09b.Cloud(new L09b.Vector(cloudX(), cloudY()));
            cloud.draw();
            cloudArray.push(cloud);
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        L09b.crc2.fillRect(0, 0, L09b.crc2.canvas.width, L09b.crc2.canvas.height);
        L09b.crc2.putImageData(imageData, 0, 0);
        for (let cloud of cloudArray) {
            cloud.move(0.005);
            cloud.draw();
        }
        for (let bees of beeArray) {
            bees.move(0.003);
            bees.draw();
        }
    }
    //Zufallswerte
    function flowerX() {
        let xFlower = (Math.floor(Math.random() * 500 - 40));
        return xFlower;
    }
    function flowerY() {
        let yFlower = (Math.floor(Math.random() * 220 + 330));
        return yFlower;
    }
    function typs() {
        let typ = (Math.floor(Math.random() * 3));
        return typ;
    }
    function cloudX() {
        let x = (Math.floor(Math.random() * 400 + 400));
        return x;
    }
    function cloudY() {
        let y = (Math.floor(Math.random() * 130 + 50));
        return y;
    }
})(L09b || (L09b = {}));
//# sourceMappingURL=Main.js.map