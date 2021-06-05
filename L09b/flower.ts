namespace L09b {
    export class Flower {
        public position: Vector;
        public type: String;
        public fillcolor: string;
        public strokecolor: string;
    
        constructor(_type: String, _pos: Vector) {
            this.position = _pos;
            this.type = _type;
            console.log(_type);

            let i: number = (Math.floor(Math.random() * 2));
            let z: number = (Math.floor(Math.random() * 2));

            if (this.type == "rose") {
                
                if (i == 0) {
                    this.fillcolor = "#B40404";
                    this.strokecolor = "#610B0B";
                } else {
                    this.fillcolor = "#0489B1";
                    this.strokecolor = "#084B8A";
                }
               

            } else if (this.type == "sun") {
                if (z == 0) {
                    this.fillcolor = "#8904B1";       
                    this.strokecolor = "red";
                } else {
                    this.fillcolor = "#D7DF01";       
                    this.strokecolor = "#FE9A2E";
                }
            } else {
                this.strokecolor = "#3B170B";
                this.fillcolor = "#F6E3CE";
            
            }
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            if (this.type == "rose" || this.type == "sun") {
            crc2.strokeStyle = "darkgreen";
            crc2.lineWidth = 2;
            crc2.stroke(stiel); }

            crc2.fillStyle = this.fillcolor;
            crc2.strokeStyle = this.strokecolor;

            if (this.type == "rose") {
                
                crc2.fill(rose);
                crc2.lineWidth = 1;
                crc2.stroke(rose);

            } else if (this.type == "sun") {
                
                crc2.fill(sun);
                crc2.lineWidth = 1;
                crc2.stroke(sun);

            } else {
                
                crc2.lineWidth = 1;
                crc2.stroke(bundle);
                crc2.fill(knosp);
           
            }

            crc2.restore();
            
        }
    }
}