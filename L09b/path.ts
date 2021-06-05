namespace L09b {

    //FLOWERS

    export let stiel: Path2D = new Path2D();               //Stiel
    stiel.moveTo(27.5, 20);
    stiel.lineTo(27.5, 45);


    export let sun: Path2D = new Path2D();                 //sun
    sun.moveTo(25, 20);
    sun.arc(20, 20, 5, 0, 2 * Math.PI);
    sun.moveTo(30, 25);
    sun.arc(25, 25, 5, 0, 2 * Math.PI);
    sun.moveTo(35, 25);
    sun.arc(30, 25, 5, 0, 2 * Math.PI);
    sun.moveTo(40, 20);
    sun.arc(35, 20, 5, 0, 2 * Math.PI);
    sun.moveTo(30, 15);
    sun.arc(25, 15, 5, 0, 2 * Math.PI);
    sun.moveTo(30, 15);
    sun.arc(30, 15, 5, 0, 2 * Math.PI);
    

    export let rose: Path2D = new Path2D();            //rose
    rose.arc(27.5, 17, 10, -0.5, Math.PI + 0.5);
    rose.bezierCurveTo(22, 3, 28, 16, 36, 11);   
    rose.bezierCurveTo(20, 2, 28, 16, 36, 11);


    export let bundle: Path2D = new Path2D();          //bundleStiel
    bundle.moveTo(30, 40);
    bundle.lineTo(30, 5);
    bundle.moveTo(30, 40);
    bundle.bezierCurveTo(24, 24, 25, 20, 17, 15);
    bundle.moveTo(30, 40);
    bundle.bezierCurveTo(36, 24, 35, 20, 43, 15);
    export let knosp: Path2D = new Path2D();           //bundle
    knosp.moveTo(25, 20);
    knosp.arc(22, 20, 4, 0, 2 * Math.PI);
    knosp.moveTo(42, 20);
    knosp.arc(38, 20, 4, 0, 2 * Math.PI);
    knosp.moveTo(34, 12);
    knosp.arc(30, 12, 4, 0, 2 * Math.PI);


    //BEES

    export let bees: Path2D = new Path2D();
    bees.ellipse(0, 40, 10, 20, Math.PI / 2, 0, 2 * Math.PI);
    bees.moveTo(-7, 30);
    bees.lineTo(-7, 50);
    bees.moveTo(0, 30);
    bees.lineTo(0, 50);
    bees.moveTo(7, 30);
    bees.lineTo(7, 50);
    bees.moveTo(14, 33);
    bees.lineTo(14, 47);
    bees.moveTo(-14, 38);
    bees.arc(-14, 38, 1, 0, 2 * Math.PI);
    bees.moveTo(-16, 46);
    bees.lineTo(-12, 43);

    export let wings: Path2D = new Path2D();
    wings.moveTo(0, 30);
    wings.lineTo(10, 21);
    wings.moveTo(0, 30);
    wings.lineTo(-10, 21);
}