"use strict";
var end;
(function (end) {
    window.addEventListener("load", handleLoad);
    end.homeColor = "#FFFFFF";
    end.awayColor = "#0000FF";
    end.pace = 0.08;
    end.shotMin = 0.8;
    end.shotMax = 1.2;
    let numbers = [1, 3, 4, 5, 8, 6, 10, 22, 14, 9, 7, 1, 4, 2, 3, 6, 11, 7, 10, 17, 9, 21];
    end.name = [["Neuer", "TW", "de"], ["Hummels", "IV", "de"], ["Virgil", "IV", "nl"], ["Chiellini", "IV", "it"], ["Gnabry", "RM", "de"], ["Veratti", "ZDM", "it"], ["Sane", "LM", "de"], ["Sancho", "ZOM", "en"], ["Hazard", "LF", "be"], ["Bale", "RF", "wl"], ["Ronaldo", "ST", "pr"], ["Sommer", "TW", "sw"], ["Ramos", "IV", "sp"], ["Alaba", "IV", "oe"], ["Varan", "IV", "fr"], ["Kimmich", "ZDM", "de"], ["De Bruyne", "ZOM", "be"], ["Pogba", "ZM", "fr"], ["Insigne", "LM", "it"], ["Rashford", "RM", "en"], ["Mbappe", "ST", "fr"], ["Kane", "ST", "en"]];
    let pos = [[50, 260], [120, 125], [160, 245], [90, 375], [240, 425], [320, 325], [390, 195], [430, 395], [620, 125], [690, 405], [560, 295], [755, 260], [570, 415], [660, 330], [720, 165], [540, 195], [420, 295], [480, 85], [250, 75], [100, 455], [180, 345], [220, 225]];
    let posReff = [[10, 0], [750, 470], [420, 210]];
    let reffName = ["LS", "RS", " S"];
    end.persons = [];
    let playerOnBall;
    let imageData;
    function handleLoad() {
        end.canvas = document.querySelector("canvas"); //canvas erstellen
        end.crc2 = end.canvas.getContext("2d");
        end.pitch(); //Feld generieren
        imageData = end.crc2.getImageData(0, 0, end.canvas.width, end.canvas.height); //Bild vom Feld abspeichern 
        let forms = document.getElementById("form");
        forms.addEventListener("change", handleChange);
        let starter = document.getElementById("starter");
        starter.addEventListener("click", los);
    }
    function handleChange(_event) {
        let target = _event.target;
        if (target.id == "Trikotfarbe1") {
            end.homeColor = target.value;
        }
        if (target.id == "Trikotfarbe2") {
            end.awayColor = target.value;
        }
        if (target.id == "Pace") {
            end.pace = Number(target.value);
        }
        if (target.id == "minimum") {
            end.shotMin = Number(target.value);
        }
        if (target.id == "maximum") {
            end.shotMax = Number(target.value);
        }
    }
    function los(_event) {
        let starter = document.getElementById("starter");
        starter.innerHTML = "reload";
        starter.addEventListener("click", function () { window.location.reload(); });
        generatePlayer(); //Player, Schiri und Ball generieren
        end.canvas.addEventListener("click", shotBall); //Dem Ball den Click Listener geben
        let cardButton1 = document.getElementById("next1"); //Spielerinfo button (1. Team) mit Click Listener anlegen
        cardButton1.addEventListener("click", nextCard); //Spielerinfo Inhalte (1. Team) generieren
        let cardButton2 = document.getElementById("next2"); //Spielerinfo button (2. Team) mit Click Listener anlegen
        cardButton2.addEventListener("click", nextCard); //Spielerinfo Inhalte (2. Team) generieren
        //console.log(ball.position.x, ball.position.y);
        window.setInterval(animate, 50); //Spieler und Ball animieren
    }
    function generatePlayer() {
        for (let i = 0; i <= 21; i++) {
            let player = new end.Player(new end.Vector(pos[i][0], pos[i][1]), numbers[i], end.name[i][0]);
            player.draw();
            end.persons.push(player);
        }
        console.log(end.persons);
        for (let i = 0; i <= 2; i++) {
            let reff = new end.Reff(new end.Vector(posReff[i][0], posReff[i][1]), reffName[i]);
            reff.draw();
            end.persons.push(reff);
        }
        let fotball = new end.Ball(new end.Vector(end.canvas.width / 2, end.canvas.height / 2));
        fotball.draw();
        end.ball = fotball;
    }
    function isPlayerOnBall() {
        let spanOnBall1 = document.getElementById("onBall1");
        //let spanOnBall2: HTMLElement = document.getElementById("onBall2")!;
        for (let person of end.persons) {
            if (person.isOnBall()) {
                playerOnBall = person;
                if (playerOnBall.team == "home") {
                    let span1 = document.getElementById("homeName");
                    span1.innerHTML = playerOnBall.name.toString();
                    span1.style.backgroundColor = playerOnBall.color;
                    span1.style.textShadow = "2px 2px 5px black";
                    //spanOnBall2.innerHTML = "";
                    spanOnBall1.innerHTML = "on Ball!";
                    spanOnBall1.style.color = "red";
                    spanOnBall1.style.marginLeft = "auto";
                    spanOnBall1.style.marginRight = "15%";
                }
                else {
                    let span2 = document.getElementById("awayName");
                    span2.innerHTML = playerOnBall.name.toString();
                    span2.style.backgroundColor = playerOnBall.color;
                    span2.style.textShadow = "2px 2px 5px black";
                    spanOnBall1.innerHTML = "on Ball!";
                    spanOnBall1.style.color = "red";
                    spanOnBall1.style.marginLeft = "15%";
                    spanOnBall1.style.marginRight = "auto";
                    //spanOnBall1.innerHTML = "";
                    //spanOnBall2.innerHTML = "on Ball!";
                    //spanOnBall2.style.color = "red";
                }
                return true;
            }
        }
        return false;
    }
    function animate() {
        end.crc2.fillRect(0, 0, end.crc2.canvas.width, end.crc2.canvas.height);
        end.crc2.putImageData(imageData, 0, 0);
        if (end.ball.isMoving == false && isPlayerOnBall() == false) {
            for (let person of end.persons) {
                person.move();
                person.draw();
            }
        }
        else {
            for (let person of end.persons) {
                person.draw();
            }
        }
        end.ball.move();
        end.ball.draw();
    }
    function shotBall(_event) {
        if (isPlayerOnBall() == false || end.ball.isMoving) {
            console.log("no Shot!");
            return;
        }
        let rect = end.canvas.getBoundingClientRect();
        let x = _event.clientX - rect.left;
        let y = _event.clientY - rect.top;
        x *= playerOnBall.balance;
        y *= playerOnBall.balance;
        console.log(playerOnBall);
        end.ball.shot(new end.Vector(x, y));
    }
    end.spieler1 = 0;
    end.spieler2 = 11;
    function nextCard(_event) {
        let elem = _event.target;
        let searchButton = String(elem.getAttribute("id"));
        if (searchButton == "next1") {
            if (end.spieler1 >= 1) {
                end.persons[end.spieler1 - 1].opacity = 1;
            }
            if (end.spieler1 == 11) {
                end.spieler1 = 0;
            }
            end.persons[end.spieler1].playerCard(1);
            end.spieler1++;
        }
        else {
            if (end.spieler2 >= 1) {
                end.persons[end.spieler2 - 1].opacity = 1;
            }
            if (end.spieler2 == 22) {
                end.spieler2 = 11;
            }
            end.persons[end.spieler2].playerCard(2);
            end.spieler2++;
        }
    }
})(end || (end = {}));
//# sourceMappingURL=Main.js.map