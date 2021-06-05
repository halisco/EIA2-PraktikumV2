namespace L09b {

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;

    let flowerArray: Flower[] = [];
    let cloudArray: Cloud[] = [];
    let beeArray: Bee[] = [];
    let imageData: ImageData;

    function handleLoad(_event: Event): void {
        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        //Generate First seen Picture
        landscape("#567956", true);
        generateFlower(50);
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Start of animate process
        generateClouds(70);
        generateBees(7);
        window.setInterval(animate, 200);
        
        
    }

    


    function generateFlower(_entry: number): void {

        let flowerTyps: string[] = ["rose", "sun", "bundle"];

        for (_entry; _entry > 0; _entry--) {
            let flow: Flower = new Flower(flowerTyps[typs()], new Vector(flowerX(), flowerY()));
            flow.draw();
            flowerArray.push(flow);
        } 
    }

    function generateBees(_entry: number): void {

        for (_entry; _entry > 0; _entry--) {
            let bees: Bee = new Bee(new Vector(680, 400));
            bees.draw();
            beeArray.push(bees);
        }
    }

    function generateClouds(_particels: number): void {

        for (_particels; _particels > 0; _particels--) {
            let cloud: Cloud = new Cloud(new Vector(cloudX(), cloudY()));
            cloud.draw();
            cloudArray.push(cloud);
        }
    }

    function animate(): void {
        requestAnimationFrame(animate);
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);

        for (let cloud of cloudArray) {
            cloud.move(0.005);
            cloud.draw();
        }

        for (let bees of beeArray) {
            bees.move(0.003);
            bees.draw();
        }
    }






    //Zufallswerte
    function flowerX(): number {
        let xFlower: number = (Math.floor(Math.random() * 500 - 40)); 
        return xFlower;
    }
    function flowerY(): number {
        let yFlower: number = (Math.floor(Math.random() * 220 + 330)); 
        return yFlower;
    }
    function typs(): number {
        let typ: number = (Math.floor(Math.random() * 3)); 
        return typ;
    }
    function cloudX(): number {
        let x: number = (Math.floor(Math.random() * 400 + 400));
        return x;
    }
    function cloudY(): number {
        let y: number = (Math.floor(Math.random() * 130 + 50));
        return y;
    }
    function xAll(): number {
        let x: number = (Math.floor(Math.random() * crc2.canvas.width));
        return x;
    }
    function yAll(): number {
        let y: number = (Math.floor(Math.random() * crc2.canvas.height));
        return y;
    }

    

}