var DEFAULT_COORDINATE_X1 = 100;
var DEFAULT_COORDINATE_Y1 = 100;
var DEFAULT_COORDINATE_X2 = 200;
var DEFAULT_COORDINATE_Y2 = 200;
var DEFAULT_COORDINATE_X3 = 400;
var DEFAULT_COORDINATE_Y3 = 100;

function Triangle()
{
    this.prototype = Object.create(new Shape());
    this.radius = DEFAULT_RADIUS;
    this.coordinateX1 = DEFAULT_COORDINATE_X1;
    this.coordinateY1 = DEFAULT_COORDINATE_Y1;
    this.coordinateX2 = DEFAULT_COORDINATE_X2;
    this.coordinateY2 = DEFAULT_COORDINATE_Y2;
    this.coordinateX3 = DEFAULT_COORDINATE_X3;
    this.coordinateY3 = DEFAULT_COORDINATE_Y3;

    this.setFirstCoordinate = function(x1, y1)
    {
        this.coordinateX1 = x1;
        this.coordinateY1 = y1;
    }

    this.getCoordinateX1 = function()
    {
        return this.coordinateX1;
    }

    this.getCoordinateY1 = function()
    {
        return this.coordinateY1;
    }

    this.setSecondCoordinate = function(x2, y2)
    {
        this.coordinateX2 = x2;
        this.coordinateY2 = y2;
    }

    this.getCoordinateX2 = function()
    {
        return this.coordinateX2;
    }

    this.getCoordinateY2 = function()
    {
        return this.coordinateY2;
    }

    this.setThirdCoordinate = function(x3, y3)
    {
        this.coordinateX3 = x3;
        this.coordinateY3 = y3;
    },
    this.getCoordinateX3 = function()
    {
        return this.coordinateX3;
    },
    this.getCoordinateY3 = function()
    {
        return this.coordinateY3;
    }

    this.draw = function()
    {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        ctx.beginPath();
        ctx.strokeStyle = this.prototype.borderColor;
        ctx.fillStyle = this.prototype.fillColor;
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

    this.calculateArea = function()
    {
        var firstRect = (this.getCoordinateX1() - this.getCoordinateX3()) * (this.getCoordinateY2() - this.getCoordinateY3());
        var secondRect = (this.getCoordinateX2() - this.getCoordinateX3()) * (this.getCoordinateY1() - this.getCoordinateY3());
        return Math.abs(firstRect - secondRect) / 2;
    }

    this.calculatePerimeter = function()
    {
        var side12 = Math.sqrt(Math.pow(this.getCoordinateX2() - this.getCoordinateX1(), 2) + Math.pow(this.getCoordinateY2() - this.getCoordinateY1(), 2));
        var side23 = Math.sqrt(Math.pow(this.getCoordinateX3() - this.getCoordinateX1(), 2) + Math.pow(this.getCoordinateY3() - this.getCoordinateY1(), 2));
        var side31 = Math.sqrt(Math.pow(this.getCoordinateX3() - this.getCoordinateX2(), 2) + Math.pow(this.getCoordinateY3() - this.getCoordinateY2(), 2));
        return side12 + side23 + side31;
    }
}