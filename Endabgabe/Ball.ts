namespace end {
    export class Ball {
        position: Vector;
        speed: number;

        constructor(_pos: Vector) {
            this.position = _pos.copy();
        }

        draw(): void {
            crc2.translate(this.position.x, this.position.y);
            crc2.moveTo(7, 0);
            crc2.arc(0, 0, 7, 0, 2 * Math.PI);
            crc2.lineWidth = 1;
            crc2.fillStyle = "violet";
            crc2.strokeStyle = "black";
            crc2.fill();
            crc2.stroke();
            crc2.resetTransform();
            console.log("testball");
        }

        shot(_pos: Vector): void {
            if (stop == false) {
            //let x: number = _pos.screenX;
            //let y: number = _pos.screenY;
            //console.log(x, y);
            //this.position.x = x;
            //this.position.y = y;
            this.position = _pos.copy();
            }
           
        }

    }
}