namespace end {

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let pos: number [][] = [[50, 260], [120, 125], [160, 245], [320, 325], [430, 395], [620, 125], [690, 405], [90, 375], [560, 295], [390, 195], [240, 425], [755, 260], [540, 195], [570, 415], [660, 330], [720, 165], [420, 295], [250, 75], [180, 345], [480, 85], [100, 455], [220, 225] ];
    let posReff: number [] [] = [[10, 0], [750, 470], [420, 210]];
    let reffs: Reff[] = [];
    export let players: Person[] = [];
    export let ball: Ball;
    export let stop: boolean = false;
    let imageData: ImageData;

    function handleLoad(): void {
        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        

        pitch();
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        generatePlayer();
        
        canvas.addEventListener("click", shotBall);
  
        console.log(ball.position.x, ball.position.y);
        window.setInterval(animate, 50);
    }

    function shotBall(_event: MouseEvent): void {
        let rect: DOMRect = canvas.getBoundingClientRect();
        let x: number = _event.clientX - rect.left;
        let y: number = _event.clientY - rect.top;
        console.log(x, y);
        ball.shot(new Vector(x, y));
        stop = false;
    }

    function generatePlayer(): void {

        for (let i: number = 0; i <= 21; i++) {
        let player: Player = new Player(new Vector(pos[i][0], pos[i][1]));
        player.draw();
        players.push(player);
        console.log(player.position.x);
        }
        console.log(players);

        for (let i: number = 0; i <= 2; i++) {
        let reff: Reff = new Reff(new Vector(posReff[i][0], posReff[i][1]));
        reff.draw();
        reffs.push(reff);
        }

        let fotball: Ball = new Ball(new Vector(380, canvas.height / 2));
        fotball.draw();
        ball = fotball;

        
        
        
        
        
    }

    function animate(): void {
       
         //requestAnimationFrame(animate);
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);

        for (let player of players) {
            if ( stop == false) {
             player.move();
            }
            player.draw();
             
         }
         

        for (let reff of reffs) {
             reff.draw();
         }

        ball.draw();
    }

    
    




}