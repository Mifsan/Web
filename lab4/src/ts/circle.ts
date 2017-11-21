import {Shape} from "./shape";

const DEFAULT_COORDINATE_X: number = 200;
const DEFAULT_COORDINATE_Y: number = 200;
const DEFAULT_RADIUS: number = 50;

export class Circle extends Shape {
    private radius: number = DEFAULT_RADIUS;
    private coordinateX: number = DEFAULT_COORDINATE_X;
    private coordinateY: number = DEFAULT_COORDINATE_Y;

    constructor(centerX: number, centerY: number, radius: number) {
        super();
        if (centerX !== undefined && !isNaN(+centerX)) {
            this.coordinateX = +centerX;
        }
        if (centerY !== undefined && !isNaN(+centerY)) {
            this.coordinateY = +centerY;
        }
        if (radius !== undefined && !isNaN(+radius) && radius >= 0) {
            this.radius = +radius;
        }
    }

    public setCoordinateX(value: number): void {
        this.coordinateX = value;
    }

    public setCoordinateY(value: number): void {
        this.coordinateY = value;
    }

    public setRadius(value: number): void {
        this.radius = value;
    }

    public getCoordinateX(): number {
        return this.coordinateX;
    }

    public getCoordinateY(): number {
        return this.coordinateY;
    }

    public getRadius(): number {
        return this.radius;
    }

    public draw(): void {
        let canvas = <HTMLCanvasElement> document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        ctx.beginPath();
        ctx.strokeStyle = this.borderColor;
        ctx.fillStyle = this.fillColor;
        ctx.arc(this.coordinateX, this.coordinateY, this.radius, 0, 2 * Math.PI, true);
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = "#000000";
        ctx.font = "bold 12px sans-serif";
        ctx.fillText("perimeter: " + this.calculatePerimeter().toFixed(2), 380, 450);
        ctx.fillText("area: " + this.calculateArea().toFixed(2), 380, 470);
    }

    public calculateArea(): number {
        return this.getRadius() * this.getRadius() * Math.PI;
    }

    public calculatePerimeter(): number {
        return 2 * Math.PI * this.getRadius();
    }
}
