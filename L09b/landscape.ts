namespace L09b {

    export function landscape(_grasColor: string, _withlight: boolean): void {
        skyColor();
        mountains();

        
        let gras: Path2D = new Path2D();
        gras.moveTo(0, 300);
        gras.bezierCurveTo(150, 250, 450, 250, 600, 300);
        gras.lineTo(600, 600);
        gras.lineTo(0, 600);
        gras.lineTo(0, 300);
        gras.moveTo(550, 290);
        gras.bezierCurveTo(712, 220, 874, 220, crc2.canvas.width, 250);  //1200
        gras.lineTo(crc2.canvas.width, 600);                            //1200
        gras.lineTo(550, 600);
        gras.closePath();

        let overline: Path2D = new Path2D();
        overline.moveTo(0, 300);
        overline.bezierCurveTo(150, 250, 450, 250, 600, 300);
        overline.moveTo(550, 290);
        overline.bezierCurveTo(712, 220, 874, 220, crc2.canvas.width, 250);   //1200

        //Graslandschaft erstellt
        crc2.strokeStyle = _grasColor;
        crc2.fillStyle = _grasColor;
        crc2.fill(gras);
        crc2.stroke(gras);

        //Sonnenlicht bzw. Dämmerung ja oder nein
        if (_withlight == true) {
        crc2.strokeStyle = _grasColor;
        crc2.fillStyle = "orange";
        crc2.filter = "blur(40px)";
        crc2.fill(overline);
        crc2.stroke(overline);
        crc2.filter = "blur(0px)";
        }

        bush();
        river();
        beeNest();
        
    }

    function skyColor(): void {
        //Hintergrundfarbe
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.51, "orange");
        gradient.addColorStop(1, "red");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function bush(): void {

        let busch: Path2D = new Path2D();
        busch.arc(40, 40, 10, 0, 2 * Math.PI);
        busch.moveTo(60, 50);
        busch.arc(50, 47, 10, 0, 2 * Math.PI);
        busch.moveTo(60, 30);
        busch.arc(50, 32, 10, 0, 2 * Math.PI);
        busch.moveTo(68, 45);
        busch.arc(58, 45, 10, 0, 2 * Math.PI);
        busch.moveTo(80, 48);
        busch.arc(70, 48, 10, 0, 2 * Math.PI);
        busch.moveTo(90, 43);
        busch.arc(80, 43, 10, 0, 2 * Math.PI);
        busch.moveTo(85, 33);
        busch.arc(75, 33, 10, 0, 2 * Math.PI);
        busch.moveTo(77, 32);
        busch.arc(64, 30, 10, 0, 2 * Math.PI);

        //Büsche statisch angelegt
        crc2.translate(70, 250);             //min240 max280
        crc2.filter = "blur(1px)";
        crc2.fillStyle = "#0B6121";
        crc2.lineWidth = 0.4;
        crc2.fill(busch);
        crc2.stroke(busch);
        crc2.translate(100, 20);
        crc2.fill(busch); 
        crc2.stroke(busch);
        crc2.translate(70, -30);
        crc2.fill(busch); 
        crc2.stroke(busch);
        crc2.translate(-240, 30);
        crc2.fill(busch); 
        crc2.stroke(busch);
        crc2.translate(330, -10);
        crc2.fill(busch); 
        crc2.stroke(busch);
        crc2.translate(80, -15);
        crc2.fill(busch); 
        crc2.stroke(busch);
        crc2.resetTransform();
        
    }

    function river(): void {
        let width: number = 0;
        let river: Path2D = new Path2D();
        river.moveTo(crc2.canvas.width - 350, 275);   //-350
        river.bezierCurveTo(crc2.canvas.width - 320, 448, crc2.canvas.width - 380, 620, crc2.canvas.width - 380, crc2.canvas.height + 20); //-320, -380, -380

        for (width; width < 10; width++) {
        crc2.translate(5, -2);
        crc2.strokeStyle = "blue";
        crc2.filter = "blur(3px)";
        crc2.lineWidth = 4;
        crc2.stroke(river); 
        }
        crc2.filter = "blur(0px)";
    }

    function mountains(): void {

        // y = max150 y = min250
        let x: number = 0;
        
        crc2.beginPath();
        crc2.moveTo(0, 250);

        do {
            x += (Math.floor(Math.random() * 50 + 50));
            let y: number = (Math.floor(Math.random() * 100 + 150));

            crc2.lineTo(x, y);
           
        } while (x < crc2.canvas.width); 

        crc2.lineTo(x, 350);
        crc2.lineTo(0, 350);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#FFFFFF");
        gradient.addColorStop(0.4, "#E6E6E6");
        gradient.addColorStop(1, "#848484");
        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.strokeStyle = gradient;
        crc2.lineWidth = 30;
        crc2.lineJoin = "round";
        crc2.stroke();
    }



    function beeNest(): void {

        
        crc2.beginPath();
        crc2.moveTo(630, 390);
        crc2.lineTo(630, 490);
        crc2.lineTo(730, 490);
        crc2.lineTo(730, 390);
        crc2.lineTo(680, 340);
        crc2.closePath();
        crc2.fillStyle = "#583C04";
        crc2.fill();
        crc2.lineTo(730, 390);
        crc2.lineTo(630, 490);
        crc2.moveTo(630, 390);
        crc2.lineTo(730, 490);
        crc2.lineTo(730, 590);
        crc2.lineTo(720, 590);
        crc2.lineTo(720, 490);
        crc2.moveTo(630, 490);
        crc2.lineTo(630, 590);
        crc2.lineTo(640, 590);
        crc2.lineTo(640, 490);
        crc2.closePath();

        crc2.fillStyle = "#583C04";
        crc2.fill();
        crc2.lineWidth = 2;
        crc2.strokeStyle = "#A27314";
        crc2.stroke();

        let circle: Path2D = new Path2D();
        circle.moveTo(705, 440);
        circle.arc(680, 440, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill(circle);
        crc2.stroke(circle);        
    }





}