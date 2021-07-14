namespace end {
    export class Person {
        position: Vector;
        speed: number;
        direction: number;
        color: string;
        opacity: number;
        colorOfNumber: string;
        number: number;
        oldPosition: Vector;
        balance: number = 0;
        name: String;
        team: String;

        constructor(_pos: Vector) {
            this.position = _pos;
        }

        draw(): void {
            //
        }

        move(): void {
            //
        }

        moveBack(): void {
            //
        }

        isOnBall(): boolean {
            return false;
        }

        playerCard(_vergleich: number): void {
            //
        }

        

    }
}