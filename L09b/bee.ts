namespace L09b {
    export class Bee {
        public position: Vector;
        public velocity: Vector;
        

        constructor(_pos: Vector) {
            this.position = _pos;
            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 70);
        }

        draw() {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            

            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.fillStyle = "yellow";
            crc2.fill(bees);
            crc2.stroke(bees);
            crc2.filter = "blur(2px)";
            crc2.lineWidth = 8;
            crc2.strokeStyle = "white";
            crc2.stroke(wings);
            crc2.filter = "blur(0px)";

            crc2.restore();
        }

        move(_timeslice: number) {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
        
    }
}