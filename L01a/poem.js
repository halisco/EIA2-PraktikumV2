"use strict";
var shortPoem;
(function (shortPoem) {
    let sub = ["John", "Maria", "Ben", "Lenard", "Kyle", "Sarah"];
    let prä = ["träumt", "stirbt", "lacht", "läuft", "singt", "denkt"];
    let obj = ["im Wald", "im Wasser", "im Himmel", "auf dem Boden", "in der Nacht", "am Ende der Welt"];
    for (let i = 5; i >= 0; i--) {
        let min = 0;
        let max = i;
        let a = Math.floor(Math.random() * (max - min + 1)) + min;
        let b = Math.floor(Math.random() * (max - min + 1)) + min;
        let c = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(sub[a], prä[b], obj[c]);
        sub.splice(a, 1);
        prä.splice(b, 1);
        obj.splice(c, 1);
    }
})(shortPoem || (shortPoem = {}));
//# sourceMappingURL=poem.js.map