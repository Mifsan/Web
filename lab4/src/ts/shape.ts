import {IShape} from "./ishape";
// cSpell:ignore ishape
const DEFAULT_FILL_COLOR: string = "#FF4340";
const DEFAULT_BORDER_COLOR: string  = "#00FF00";

export abstract class Shape implements IShape {
    protected fillColor: string = DEFAULT_FILL_COLOR;
    protected borderColor: string = DEFAULT_BORDER_COLOR;

    public setFillColor(value: string): void {
        this.fillColor = value;
    }
    public setBorderColor(value: string): void {
        this.borderColor = value;
    }
    public getBorderColor(): string {
        return this.borderColor;
    }
    public getFillColor(): string {
        return this.fillColor;
    }

    public abstract draw(): void;
    public abstract calculateArea(): number;
    public abstract calculatePerimeter(): number;
}
