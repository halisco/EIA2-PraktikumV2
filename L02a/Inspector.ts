namespace L02a {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        
        
        let divs: NodeListOf<HTMLElement> = document.querySelectorAll("div");
        console.log(divs);
        
        for (let i: number = 0; i < divs.length; i++) {
            divs[i].addEventListener("click", logInfo);
            divs[i].addEventListener("keyup", logInfo);
        }
      
    }

    function setInfoBox(_event: MouseEvent): void {
       let x: number = _event.clientX;
       let y: number = _event.clientY;

       let spanfix: HTMLSpanElement = <HTMLSpanElement> document.querySelector("span");
       spanfix.style.top = (y + 15) + "px";
       spanfix.style.left = (x + 15) + "px";

       spanfix.textContent = "X" + x + " Y" + y + " " + _event.target;

    }


    function logInfo(_event: Event): void {
        console.log(_event.target);
        console.log(_event.type);
        console.log(_event.currentTarget);
        console.log(_event);
    }

}
