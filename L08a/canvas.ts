namespace L08a {

    window.addEventListener("load", handleLoad);
    
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
        crc2.fillStyle = "#B3A3DF";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        document.getElementById("button1")?.addEventListener("click", handleDance);
 
        for ( let i: number = 0; i <= 800; i += 200) {
            let formen1: Path2D = new Path2D();
            formen1.rect(i, 10, 100, 100);
            formen1.moveTo(i + 100, 60);
            formen1.arc(i + 150, 60, 50, 1 * Math.PI, 3 * Math.PI);


            let formen2: Path2D = new Path2D();
            formen2.arc(i + 50, 60, 50, 1 * Math.PI, 3 * Math.PI);
            formen2.moveTo(i + 100, 60);
            formen2.rect(i + 100, 10, 100, 100);

            crc2.strokeStyle = "#4400FF";
            crc2.stroke(formen1);
            crc2.translate(0, 120);
            crc2.strokeStyle = "#350575";
            crc2.stroke(formen2);
            crc2.translate(0, 120);
            crc2.strokeStyle = "#4400FF";
            crc2.stroke(formen1);
            crc2.translate(0, 120);
            crc2.strokeStyle = "#350575";
            crc2.stroke(formen2);
            crc2.resetTransform();    
        }
    }


    let min: number = 0;

    function mathX(): number {
        let maxX: number = 735;
        let ranX: number = Math.floor(Math.random() * (maxX - min + 1)) + min;
        return ranX;
    }

    function mathY(): number {
        let maxY: number = 400;
        let ranY: number = Math.floor(Math.random() * (maxY - min + 1)) + min;
        return ranY;
    }


    function handleDance(_event: Event): void {
        let btt: HTMLElement = document.getElementById("button1")!;
        btt.removeEventListener("click", handleDance);
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
        let person: Path2D = new Path2D();
        person.moveTo(25, 100);
        person.lineTo(45, 80);
        person.lineTo(45, 40);
        person.moveTo(45, 80);
        person.lineTo(65, 100);
        person.moveTo(25, 65);
        person.lineTo(65, 50);
        person.moveTo(57, 27);
        person.arc(45, 27, 12, 0, 2 * Math.PI);

        let person2: Path2D = new Path2D();
        person2.moveTo(25, 100);
        person2.lineTo(45, 80);
        person2.lineTo(45, 40);
        person2.moveTo(45, 80);
        person2.lineTo(65, 100);
        person2.moveTo(65, 65);
        person2.lineTo(25, 50);
        person2.moveTo(57, 27);
        person2.arc(45, 27, 12, 0, 2 * Math.PI);

        for (let n: number = 0; n < 10; n++) {
        crc2.translate(mathX(), mathY());
        crc2.strokeStyle = "green";
        crc2.lineWidth = 3;
        crc2.stroke(person);
        crc2.resetTransform();
        crc2.translate(mathX(), mathY());
        crc2.strokeStyle = "red";
        crc2.lineWidth = 3;
        crc2.stroke(person2);
        crc2.resetTransform();
        }
        let txt: HTMLElement = document.getElementById("text")!;
        txt.innerHTML = "Re-load Page and try again!";

    }




}
