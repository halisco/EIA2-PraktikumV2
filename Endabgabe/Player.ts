namespace end {
    export class Player extends Person {
        position: Vector;
        speed: number;
        direction: number;
        color: string;

        constructor(_pos: Vector) {
            super(_pos);
            this.position = _pos;

            if (players.length <= 10) {
                this.color = "red";
            } else {
                this.color = "blue";
            }
        }

        draw(): void {
            crc2.translate(this.position.x - 20, this.position.y - 25); //Um Verschiebung beim zeichnen auszugleichen
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

        move(): void {
            //console.log(ball.position.x, this.position.x);
            let vergX: number = ball.position.x - this.position.x;
            let realX: number = vergX;
            let vergY: number = ball.position.y - this.position.y;
            let realY: number = vergY;

            if (vergX <= 0) {
                vergX = vergX * (-1);
            }
            if (vergY <= 0) {
                vergY = vergY * (-1);
            }

            
            if (vergX <= 50 && vergY <= 105) {
                if (vergX > 20 || vergY > 20) {

                    if (realX > 0) {
                        this.position.x += + 0.5; //austauschen mit FormElement
                    } else if (realX < 0) {
                        this.position.x += - 0.5; //austauschen mit FormElement
                    }
                    if (realY > 0) {
                        this.position.y += + 0.5; //austauschen mit FormElement
                    } else if (realY < 0) {
                        this.position.y += - 0.5; //austauschen mit FormElement
                    }

                } else {
                    console.log("Stop!");
                    stop = true; 
                }
                
            }
        }

        
    }
}