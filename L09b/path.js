"use strict";
var L09b;
(function (L09b) {
    //FLOWERS
    L09b.stiel = new Path2D(); //Stiel
    L09b.stiel.moveTo(27.5, 20);
    L09b.stiel.lineTo(27.5, 45);
    L09b.sun = new Path2D(); //sun
    L09b.sun.moveTo(25, 20);
    L09b.sun.arc(20, 20, 5, 0, 2 * Math.PI);
    L09b.sun.moveTo(30, 25);
    L09b.sun.arc(25, 25, 5, 0, 2 * Math.PI);
    L09b.sun.moveTo(35, 25);
    L09b.sun.arc(30, 25, 5, 0, 2 * Math.PI);
    L09b.sun.moveTo(40, 20);
    L09b.sun.arc(35, 20, 5, 0, 2 * Math.PI);
    L09b.sun.moveTo(30, 15);
    L09b.sun.arc(25, 15, 5, 0, 2 * Math.PI);
    L09b.sun.moveTo(30, 15);
    L09b.sun.arc(30, 15, 5, 0, 2 * Math.PI);
    L09b.rose = new Path2D(); //rose
    L09b.rose.arc(27.5, 17, 10, -0.5, Math.PI + 0.5);
    L09b.rose.bezierCurveTo(22, 3, 28, 16, 36, 11);
    L09b.rose.bezierCurveTo(20, 2, 28, 16, 36, 11);
    L09b.bundle = new Path2D(); //bundleStiel
    L09b.bundle.moveTo(30, 40);
    L09b.bundle.lineTo(30, 5);
    L09b.bundle.moveTo(30, 40);
    L09b.bundle.bezierCurveTo(24, 24, 25, 20, 17, 15);
    L09b.bundle.moveTo(30, 40);
    L09b.bundle.bezierCurveTo(36, 24, 35, 20, 43, 15);
    L09b.knosp = new Path2D(); //bundle
    L09b.knosp.moveTo(25, 20);
    L09b.knosp.arc(22, 20, 4, 0, 2 * Math.PI);
    L09b.knosp.moveTo(42, 20);
    L09b.knosp.arc(38, 20, 4, 0, 2 * Math.PI);
    L09b.knosp.moveTo(34, 12);
    L09b.knosp.arc(30, 12, 4, 0, 2 * Math.PI);
    //BEES
    L09b.bees = new Path2D();
    L09b.bees.ellipse(0, 40, 10, 20, Math.PI / 2, 0, 2 * Math.PI);
    L09b.bees.moveTo(-7, 30);
    L09b.bees.lineTo(-7, 50);
    L09b.bees.moveTo(0, 30);
    L09b.bees.lineTo(0, 50);
    L09b.bees.moveTo(7, 30);
    L09b.bees.lineTo(7, 50);
    L09b.bees.moveTo(14, 33);
    L09b.bees.lineTo(14, 47);
    L09b.bees.moveTo(-14, 38);
    L09b.bees.arc(-14, 38, 1, 0, 2 * Math.PI);
    L09b.bees.moveTo(-16, 46);
    L09b.bees.lineTo(-12, 43);
    L09b.wings = new Path2D();
    L09b.wings.moveTo(0, 30);
    L09b.wings.lineTo(10, 21);
    L09b.wings.moveTo(0, 30);
    L09b.wings.lineTo(-10, 21);
})(L09b || (L09b = {}));
//# sourceMappingURL=path.js.map