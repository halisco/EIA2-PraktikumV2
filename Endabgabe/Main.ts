namespace end {

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let pos: number [][] = [[30, 235], [100, 100], [140, 220], [300, 300], [410, 370], [600, 100], [670, 380], [70, 350], [540, 270], [340, 140], [220, 400], [735, 235], [520, 170], [550, 390], [640, 305], [700, 140], [400, 270], [230, 50], [160, 320], [460, 60], [80, 430], [200, 200] ];
    export let players: Player[] = [];

    function handleLoad(): void {
        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        pitch();
        generatePlayer();
        ball();
    }

    function generatePlayer(): void {

        for (let i: number = 0; i <= 21; i++) {
        let player: Player = new Player(new Vector(pos[i][0], pos[i][1]));
        player.draw();
        players.push(player);
        }
        let leftReff: Reff = new Reff(new Vector(10, 0));
        leftReff.draw();
        let rightReff: Reff = new Reff(new Vector(750, 470));
        rightReff.draw();
        let mainReff: Reff = new Reff(new Vector(420, 210));
        mainReff.draw();
        
    }

    
    




}