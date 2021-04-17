"use strict";
var L02a;
(function (L02a) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        let divs = document.querySelectorAll("div");
        console.log(divs);
        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener("click", logInfo);
            divs[i].addEventListener("keyup", logInfo);
        }
    }
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let spanfix = document.querySelector("span");
        spanfix.style.top = (y + 15) + "px";
        spanfix.style.left = (x + 15) + "px";
        spanfix.textContent = "X" + x + " Y" + y + " " + _event.target;
    }
    function logInfo(_event) {
        console.log(_event.target);
        console.log(_event.type);
        console.log(_event.currentTarget);
        console.log(_event);
    }
})(L02a || (L02a = {}));
//# sourceMappingURL=Inspector.js.map