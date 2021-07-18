"use strict";
var end;
(function (end) {
    class Player extends end.Person {
        constructor(_pos, _num, _name, _role, _nation) {
            super(_pos, _name);
            this.speed = 0; //mindesten 0.02 schnell maximal eintrag von pace schnell
            this.balance = 0; //Nummer von 70 bis 100 über Form, verwenden in Ball.move() bei newPos.x und y
            this.opacity = 1;
            this.speed = Math.random() * (end.pace - 0.02) + 0.02; //mindesten 0.02 schnell maximal eintrag von pace schnell
            this.balance = Math.random() * (end.shotMax - end.shotMin) + end.shotMin; //Nummer von 70 bis 100 über Form, verwenden in Ball.move() bei newPos.x und y
            this.oldPosition = _pos.copy();
            this.number = _num;
            this.role = _role;
            this.nation = _nation;
            //console.log(this.speed);
            if (end.persons.length <= 10) {
                this.color = end.homeColor.toString();
                this.team = "home";
            }
            else {
                this.color = end.awayColor.toString();
                this.team = "away";
            }
        }
        draw() {
            end.crc2.translate(this.position.x - 20, this.position.y - 25); //Um Verschiebung beim zeichnen auszugleichen
            let player = new Path2D();
            player.moveTo(20, 25);
            player.lineTo(20, 55);
            player.lineTo(60, 55);
            player.lineTo(60, 25);
            player.lineTo(75, 25);
            player.lineTo(75, 15);
            player.lineTo(60, 5);
            player.moveTo(20, 25);
            player.lineTo(5, 25);
            player.lineTo(5, 15);
            player.lineTo(20, 5);
            player.lineTo(60, 5);
            end.crc2.lineWidth = 4;
            end.crc2.strokeStyle = "black";
            end.crc2.fillStyle = this.color;
            end.crc2.globalAlpha = this.opacity;
            end.crc2.save();
            end.crc2.scale(0.5, 0.5);
            end.crc2.stroke(player);
            end.crc2.fill(player);
            end.crc2.restore();
            end.crc2.fillStyle = "white";
            end.crc2.font = "10px Arial";
            if (this.number >= 10) {
                end.crc2.strokeText(this.number.toString(), 14, 21);
                end.crc2.fillText(this.number.toString(), 14, 21);
            }
            else {
                end.crc2.strokeText(" " + this.number.toString(), 14, 21);
                end.crc2.fillText(" " + this.number.toString(), 14, 21);
            }
            end.crc2.globalAlpha = 1;
            end.crc2.resetTransform();
        }
        move() {
            let vergX = end.ball.position.x - this.position.x;
            let vergY = end.ball.position.y - this.position.y;
            let direction = new end.Vector(vergX, vergY);
            if (vergX <= 0) {
                vergX = vergX * (-1);
            }
            if (vergY <= 0) {
                vergY = vergY * (-1);
            }
            if (vergX <= 80 && vergY <= 105) {
                if (vergX > 10 || vergY > 10) {
                    direction.scale(this.speed);
                    this.position.add(direction);
                }
            }
            else {
                this.moveBack();
            }
        }
        isOnBall() {
            let vergX = end.ball.position.x - this.position.x;
            let vergY = end.ball.position.y - this.position.y;
            if (vergX <= 0) {
                vergX = vergX * (-1);
            }
            if (vergY <= 0) {
                vergY = vergY * (-1);
            }
            if (vergX > 10 || vergY > 10) {
                return false;
            }
            else {
                return true;
            }
        }
        moveBack() {
            let directionX = this.oldPosition.x - this.position.x;
            let directionY = this.oldPosition.y - this.position.y;
            let direction = new end.Vector(directionX, directionY);
            direction.scale(this.speed);
            this.position.add(direction);
        }
        playerCard(_vergleich) {
            if (_vergleich == 1) {
                this.opacity = 0.5;
                let div = document.getElementById("card1");
                div.innerHTML = "";
                div.style.backgroundColor = end.homeColor.toString();
                let cardNumber = document.createElement("h3");
                cardNumber.innerHTML = this.number.toString();
                cardNumber.style.textShadow = "2px 2px 5px black";
                div.appendChild(cardNumber);
                let cardName = document.createElement("h3");
                cardName.innerHTML = this.name.toString();
                cardName.style.textShadow = "2px 2px 5px black";
                div.appendChild(cardName);
                let cardPos = document.createElement("h5");
                cardPos.innerHTML = this.role.toString();
                cardPos.style.textShadow = "2px 2px 5px black";
                div.appendChild(cardPos);
                let cardImg = document.createElement("img");
                cardImg.setAttribute("src", "Flags/" + this.nation + ".png");
                cardImg.setAttribute("class", "flag");
                cardImg.style.width = "30px";
                cardImg.style.height = "20px";
                cardPos.appendChild(cardImg);
                let cardSpeed = document.createElement("p");
                cardSpeed.innerHTML = "Pace: " + Math.floor(this.speed * 1000);
                cardSpeed.style.textShadow = "2px 2px 5px black";
                div.appendChild(cardSpeed);
                let cardBalance = document.createElement("p");
                cardBalance.innerHTML = "Shot: " + Math.round(this.balance * 100) / 100;
                cardBalance.style.textShadow = "2px 2px 5px black";
                div.appendChild(cardBalance);
                let cardImg2 = document.createElement("img");
                cardImg2.setAttribute("src", "Players/" + this.name + ".png");
                cardImg2.setAttribute("class", "player");
                cardImg2.style.width = "161px";
                cardImg2.style.height = "189px";
                div.appendChild(cardImg2);
                let btt = document.createElement("button");
                btt.innerHTML = "change";
                btt.setAttribute("id", "changer1");
                btt.addEventListener("click", this.change.bind(this));
                div.appendChild(btt);
            }
            else {
                this.opacity = 0.5;
                let div = document.getElementById("card2");
                div.innerHTML = "";
                div.style.backgroundColor = end.awayColor.toString();
                let cardNumber = document.createElement("h3");
                cardNumber.innerHTML = this.number.toString();
                cardNumber.style.textShadow = "2px 2px 5px black";
                div.appendChild(cardNumber);
                let cardName = document.createElement("h3");
                cardName.innerHTML = this.name.toString();
                cardName.style.textShadow = "2px 2px 5px black";
                div.appendChild(cardName);
                let cardPos = document.createElement("h5");
                cardPos.innerHTML = this.role.toString();
                cardPos.style.textShadow = "2px 2px 5px black";
                div.appendChild(cardPos);
                let cardImg = document.createElement("img");
                cardImg.setAttribute("src", "Flags/" + this.nation + ".png");
                cardImg.setAttribute("class", "flag");
                cardImg.style.width = "30px";
                cardImg.style.height = "20px";
                cardPos.appendChild(cardImg);
                let cardSpeed = document.createElement("p");
                cardSpeed.innerHTML = "Pace: " + Math.floor(this.speed * 1000);
                cardSpeed.style.textShadow = "2px 2px 5px black";
                div.appendChild(cardSpeed);
                let cardBalance = document.createElement("p");
                cardBalance.innerHTML = "Shot: " + Math.round(this.balance * 100) / 100;
                cardBalance.style.textShadow = "2px 2px 5px black";
                div.appendChild(cardBalance);
                let cardImg2 = document.createElement("img");
                cardImg2.setAttribute("src", "Players/" + this.name + ".png");
                cardImg2.setAttribute("class", "player");
                cardImg2.style.width = "161px";
                cardImg2.style.height = "189px";
                div.appendChild(cardImg2);
                let btt = document.createElement("button");
                btt.innerHTML = "change";
                btt.setAttribute("id", "changer2");
                btt.addEventListener("click", this.change.bind(this));
                div.appendChild(btt);
            }
        }
        change(_event) {
            let elem = _event.target;
            let verg = String(elem.getAttribute("id"));
            if (end.ersatzPersons.length == 0) {
                elem.innerHTML = "no more changes!";
                return;
            }
            else {
                elem.parentNode?.removeChild(elem);
            }
            for (let i = 0; i < 3; i++) {
                let random = Math.floor(Math.random() * end.ersatzPersons.length);
                let div;
                if (verg == "changer1") {
                    div = document.getElementById("card1");
                }
                else {
                    div = document.getElementById("card2");
                }
                let fieldset = document.createElement("fieldset");
                fieldset.setAttribute("class", "changePlayer");
                let name = document.createElement("p");
                name.style.textShadow = "1px 1px 2px black";
                name.setAttribute("name", end.ersatzPersons[random].name.toString());
                name.innerHTML = end.ersatzPersons[random].number + " - " + end.ersatzPersons[random].name + " - " + end.ersatzPersons[random].role + " - P: " + Math.floor(end.ersatzPersons[random].speed * 1000) + " - S: " + Math.round(end.ersatzPersons[random].balance * 100) / 100;
                name.addEventListener("click", this.substitute.bind(this));
                fieldset.appendChild(name);
                div.appendChild(fieldset);
            }
        }
        substitute(_event) {
            let elem = _event.target;
            let nameOf = String(elem.getAttribute("name"));
            for (let i = 0; i < end.ersatzPersons.length; i++) {
                if (end.ersatzPersons[i].name == nameOf) {
                    this.name = end.ersatzPersons[i].name;
                    this.number = end.ersatzPersons[i].number;
                    this.balance = end.ersatzPersons[i].balance;
                    this.speed = end.ersatzPersons[i].speed;
                    this.role = end.ersatzPersons[i].role;
                    this.nation = end.ersatzPersons[i].nation;
                    end.ersatzPersons.splice(i, 1);
                }
            }
            let vergleich;
            if (this.team == "home") {
                vergleich = 1;
            }
            else {
                vergleich = 2;
            }
            this.playerCard(vergleich);
        }
    }
    end.Player = Player;
})(end || (end = {}));
//# sourceMappingURL=Player.js.map