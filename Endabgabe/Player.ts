namespace end {
    export class Player {
        position: Vector;
        speed: number;
        direction: number;
        color: string;

        constructor(_pos: Vector) {
            this.position = _pos;

            if(players.length <= 10) {
                this.color = "red";
            } else {
                this.color = "blue";
            }
        }

        draw() {
            crc2.translate(this.position.x, this.position.y);
            let player: Path2D = new Path2D();
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
            crc2.lineWidth = 4;
            crc2.strokeStyle = "black";
            crc2.fillStyle = this.color;
            crc2.save();
            crc2.scale(0.5, 0.5);
            crc2.stroke(player);
            crc2.fill(player);
            crc2.restore();
            crc2.fillStyle = "white";
            crc2.font = "10px Arial";
            crc2.fillText(" 4", 14, 21);
            crc2.resetTransform();
        }
    }
}