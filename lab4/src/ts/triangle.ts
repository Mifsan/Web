import {Shape} from "./shape";

const DEFAULT_COORDINATE_X1: number = 100;
const DEFAULT_COORDINATE_Y1: number = 100;
const DEFAULT_COORDINATE_X2: number = 200;
const DEFAULT_COORDINATE_Y2: number = 200;
const DEFAULT_COORDINATE_X3: number = 400;
const DEFAULT_COORDINATE_Y3: number = 100;

export class Triangle extends Shape {
    private coordinateX1: number = DEFAULT_COORDINATE_X1;
    private coordinateY1: number = DEFAULT_COORDINATE_Y1;
    private coordinateX2: number = DEFAULT_COORDINATE_X2;
    private coordinateY2: number = DEFAULT_COORDINATE_Y2;
    private coordinateX3: number = DEFAULT_COORDINATE_X3;
    private coordinateY3: number = DEFAULT_COORDINATE_Y3;

    constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
        super();
        if (x1 !== undefined && !isNaN(+x1)) {
            this.coordinateX1 = +x1;
        }
        if (y1 !== undefined && !isNaN(+y1)) {
            this.coordinateY1 = +y1;
        }
        if (x2 !== undefined && !isNaN(+x2)) {
            this.coordinateX2 = +x2;
        }
        if (y2 !== undefined && !isNaN(+y2)) {
            this.coordinateY2 = +y2;
        }
        if (x3 !== undefined && !isNaN(+x3)) {
            this.coordinateX3 = +x3;
        }
        if (y3 !== undefined && !isNaN(+y3)) {
            this.coordinateY3 = +y3;
        }
    }

    public draw(): void {
        let canvas = <HTMLCanvasElement> document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        ctx.beginPath();
        ctx.strokeStyle = this.borderColor;
        ctx.fillStyle = this.fillColor;
        ctx.moveTo(this.coordinateX1, this.coordinateY1);
        ctx.lineTo(this.coordinateX2, this.coordinateY2);
        ctx.lineTo(this.coordinateX3, this.coordinateY3);
        ctx.lineTo(this.coordinateX1, this.coordinateY1);
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = "#000000";
        ctx.font = "bold 12px sans-serif";
        ctx.fillText("perimeter: " + this.calculatePerimeter().toFixed(2), 380, 450);
        ctx.fillText("area: " + this.calculatePerimeter().toFixed(2), 380, 470);
    }

    public calculateArea(): number {
        let firstRect = (this.getCoordinateX1() - this.getCoordinateX3()) *
                        (this.getCoordinateY2() - this.getCoordinateY3());
        let secondRect = (this.getCoordinateX2() - this.getCoordinateX3()) *
                        (this.getCoordinateY1() - this.getCoordinateY3());
        return Math.abs(firstRect - secondRect) / 2;
    }

    public calculatePerimeter(): number {
        let side12 = Math.sqrt(Math.pow(this.getCoordinateX2() - this.getCoordinateX1(), 2) +
                    Math.pow(this.getCoordinateY2() - this.getCoordinateY1(), 2));
        let side23 = Math.sqrt(Math.pow(this.getCoordinateX3() - this.getCoordinateX1(), 2) +
                    Math.pow(this.getCoordinateY3() - this.getCoordinateY1(), 2));
        let side31 = Math.sqrt(Math.pow(this.getCoordinateX3() - this.getCoordinateX2(), 2) +
                    Math.pow(this.getCoordinateY3() - this.getCoordinateY2(), 2));
        return side12 + side23 + side31;
    }

    public setFirstCoordinate(x: number, y: number): void {
        this.coordinateX1 = x;
        this.coordinateY1 = y;
    }

    public getCoordinateX1(): number {
        return this.coordinateX1;
    }

    public getCoordinateY1(): number {
        return this.coordinateY1;
    }

    public setSecondCoordinate(x: number, y: number): void {
        this.coordinateX2 = x;
        this.coordinateY2 = y;
    }

    public getCoordinateX2(): number {
        return this.coordinateX2;
    }

    public getCoordinateY2(): number {
        return this.coordinateY2;
    }

    public setThirdCoordinate(x: number, y: number): void {
        this.coordinateX3 = x;
        this.coordinateY3 = y;
    }

    public getCoordinateX3(): number {
        return this.coordinateX3;
    }

    public getCoordinateY3(): number {
        return this.coordinateY3;
    }
}
