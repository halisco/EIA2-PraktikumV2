namespace L09b {
    export class Cloud {
        public position: Vector;
        

        constructor(_pos: Vector) {
            this.position = _pos;
        }

        draw() {
            let radius: number = 50;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radius);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            
            crc2.save()
            crc2.translate(this.position.x, this.position.y);
            let wolke: Path2D = new Path2D();
            wolke.arc(0, 0, radius, 0, 2 * Math.PI);
            crc2.fillStyle = gradient;
            crc2.fill(wolke);
            crc2.restore();
        }

        move(_timeslice: number) {
            let offset: Vector = new Vector(-15, 0);
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