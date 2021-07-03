"use strict";
var end;
(function (end) {
    window.addEventListener("load", handleLoad);
    let pos = [[30, 235], [100, 100], [140, 220], [300, 300], [410, 370], [600, 100], [670, 380], [70, 350], [540, 270], [340, 140], [220, 400], [735, 235], [520, 170], [550, 390], [640, 305], [700, 140], [400, 270], [230, 50], [160, 320], [460, 60], [80, 430], [200, 200]];
    end.players = [];
    function handleLoad() {
        end.canvas = document.querySelector("canvas");
        end.crc2 = end.canvas.getContext("2d");
        end.pitch();
        generatePlayer();
        end.ball();
    }
    function generatePlayer() {
        for (let i = 0; i <= 21; i++) {
            let player = new end.Player(new end.Vector(pos[i][0], pos[i][1]));
            player.draw();
            end.players.push(player);
        }
        let leftReff = new end.Reff(new end.Vector(10, 0));
        leftReff.draw();
        let rightReff = new end.Reff(new end.Vector(750, 470));
        rightReff.draw();
        let mainReff = new end.Reff(new end.Vector(420, 210));
        mainReff.draw();
    }
})(end || (end = {}));
//# sourceMappingURL=Main.js.map