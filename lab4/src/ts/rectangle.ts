import {Shape} from "./shape";

const DEFAULT_COORDINATE_X1: number = 100;
const DEFAULT_COORDINATE_Y1: number = 100;
const DEFAULT_COORDINATE_X2: number = 200;
const DEFAULT_COORDINATE_Y2: number = 200;

export class Rectangle extends Shape {
    private coordinateX1: number = DEFAULT_COORDINATE_X1;
    private coordinateY1: number = DEFAULT_COORDINATE_Y1;
    private coordinateX2: number = DEFAULT_COORDINATE_X2;
    private coordinateY2: number = DEFAULT_COORDINATE_Y2;

    constructor(x1: number, y1: number, x2: number, y2: number) {
        super();
        if (x1 !== undefined && !isNaN(+x1)) {
            this.coordinateX1 = +x1;
        }
        if (x2 !== undefined && !isNaN(+x2)) {
            this.coordinateX2 = +x2;
        }
        if (y1 !== undefined && !isNaN(+y1)) {
            this.coordinateY1 = +y1;
        }
        if (y2 !== undefined && !isNaN(+y2)) {
            this.coordinateY2 = +y2;
        }
      }

    public setFirstCoordinate(x1: number, y1: number): void {
        this.coordinateX1 = x1;
        this.coordinateY1 = y1;
    }
    public getCoordinateX1(): number {
        return this.coordinateX1;
    }
    public getCoordinateY1(): number {
        return this.coordinateY1;
    }
    public setSecondCoordinate(x2: number, y2: number): void {
        this.coordinateX2 = x2;
        this.coordinateY2 = y2;
    }
    public getCoordinateX2(): number {
        return this.coordinateX2;
    }
    public getCoordinateY2(): number {
        return this.coordinateY2;
    }

    public draw(): void {
        let canvas = <HTMLCanvasElement> document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        ctx.beginPath();
        ctx.strokeStyle = this.borderColor;
        ctx.fillStyle = this.fillColor;
        ctx.moveTo(this.coordinateX1, this.coordinateY1);
        ctx.lineTo(this.coordinateX2, this.coordinateY1);
        ctx.lineTo(this.coordinateX2, this.coordinateY2);
        ctx.lineTo(this.coordinateX1, this.coordinateY2);
        ctx.lineTo(this.coordinateX1, this.coordinateY1);
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = "#000000";
        ctx.font = "bold 12px sans-serif";
        ctx.fillText("perimeter: " + this.calculatePerimeter().toFixed(2), 380, 450);
        ctx.fillText("area: " + this.calculateArea().toFixed(2), 380, 470);
    }

    public calculateArea(): number {
        return Math.abs(this.getCoordinateX2() - this.getCoordinateX1()) *
                Math.abs(this.getCoordinateY2() - this.getCoordinateY1());
    }

    public calculatePerimeter(): number {
        return (Math.abs(this.getCoordinateX2() - this.getCoordinateX1()) +
                Math.abs(this.getCoordinateY2() - this.getCoordinateY1())) * 2;
    }
}
