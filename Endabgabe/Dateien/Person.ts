namespace end {
    export class Person {
        position: Vector;
        speed: number;
        direction: number;
        color: string;
        opacity: number;
        number: number;
        oldPosition: Vector;
        balance: number = 0;
        name: String;
        role: String;
        nation: String;
        team: String;

        constructor(_pos: Vector, _name: String) {
            this.position = _pos;
            this.name = _name;
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

        change(_event: Event): void {
            //
        }
        
        substitute(_event: Event): void {
            //
        }

    }
}