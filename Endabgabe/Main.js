"use strict";
var end;
(function (end) {
    window.addEventListener("load", handleLoad);
    let pos = [[50, 260], [120, 125], [160, 245], [320, 325], [430, 395], [620, 125], [690, 405], [90, 375], [560, 295], [390, 195], [240, 425], [755, 260], [540, 195], [570, 415], [660, 330], [720, 165], [420, 295], [250, 75], [180, 345], [480, 85], [100, 455], [220, 225]];
    let posReff = [[10, 0], [750, 470], [420, 210]];
    let reffs = [];
    end.players = [];
    end.stop = true;
    let imageData;
    function handleLoad() {
        end.canvas = document.querySelector("canvas");
        end.crc2 = end.canvas.getContext("2d");
        end.pitch();
        imageData = end.crc2.getImageData(0, 0, end.canvas.width, end.canvas.height);
        generatePlayer();
        let field = document.getElementById("can");
        field.addEventListener("click", end.ball.shot);
        console.log(end.ball.position.x, end.ball.position.y);
        window.setInterval(animate, 50);
    }
    function generatePlayer() {
        for (let i = 0; i <= 21; i++) {
            let player = new end.Player(new end.Vector(pos[i][0], pos[i][1]));
            player.draw();
            end.players.push(player);
            console.log(player.position.x);
        }
        console.log(end.players);
        for (let i = 0; i <= 2; i++) {
            let reff = new end.Reff(new end.Vector(posReff[i][0], posReff[i][1]));
            reff.draw();
            reffs.push(reff);
        }
        let fotball = new end.Ball(new end.Vector(380, end.canvas.height / 2));
        fotball.draw();
        end.ball = fotball;
    }
    function animate() {
        if (end.stop == true) {
            //requestAnimationFrame(animate);
            end.crc2.fillRect(0, 0, end.crc2.canvas.width, end.crc2.canvas.height);
            end.crc2.putImageData(imageData, 0, 0);
            for (let player of end.players) {
                player.move();
                player.draw();
            }
            for (let reff of reffs) {
                reff.draw();
            }
        }
        end.ball.draw();
    }
})(end || (end = {}));
//# sourceMappingURL=Main.js.map