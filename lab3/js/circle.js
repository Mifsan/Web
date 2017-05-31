var DEFAULT_COORDINATE_X = 200;
var DEFAULT_COORDINATE_Y = 200;
var DEFAULT_RADIUS = 50;

function Circle()
{
    this.prototype = Object.create(new Shape());
    this.radius = DEFAULT_RADIUS;
    this.coordinateX = DEFAULT_COORDINATE_X;
    this.coordinateY = DEFAULT_COORDINATE_Y;

    this.setCoordinateX = function(value)
    {
        this.coordinateX = value;
    }

    this.setCoordinateY = function(value)
    {
        this.coordinateY = value;
    }

    this.setRadius = function(value)
    {
        this.radius = value;
    }

    this.getCoordinateX = function()
    {
        return this.coordinateX;
    }

    this.getCoordinateY = function()
    {
        return this.coordinateY;
    }

    this.getRadius = function()
    {
        return this.radius;
    }

    this.draw = function()
    {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        ctx.beginPath();
        ctx.strokeStyle = this.prototype.borderColor;
        ctx.fillStyle = this.prototype.fillColor;
        ctx.arc(this.coordinateX, this.coordinateY, this.radius, 0, 2 * Math.PI, true);
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = "#000000";
        ctx.font = "bold 12px sans-serif";
        ctx.fillText("perimeter: " + this.calculatePerimeter().toFixed(2), 380, 450);
        ctx.fillText("area: " + this.calculatePerimeter().toFixed(2), 380, 470);
    }

    this.calculateArea = function()
    {
        return this.getRadius() * this.getRadius() * Math.PI;
    }

    this.calculatePerimeter = function()
    {
        return 2 * Math.PI * this.getRadius();
    }
}