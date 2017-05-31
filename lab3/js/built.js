var DEFAULT_FILL_COLOR = "#FF4340";
var DEFAULT_BORDER_COLOR = "#00FF00";

function Shape()
{
    this.fillColor = DEFAULT_FILL_COLOR;
    this.borderColor = DEFAULT_BORDER_COLOR;

    this.setFillColor = function(value)
    {
        this.fillColor = value;
    }
    this.getBorderColor = function()
    {
        return this.borderColor;
    }
    this.setBorderColor = function(value)
    {
        this.borderColor = value;
    }
    this.getFillColor = function()
    {
        return this.fillColor;
    }    
};
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
};
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
};
var DEFAULT_COORDINATE_X1 = 100;
var DEFAULT_COORDINATE_Y1 = 100;
var DEFAULT_COORDINATE_X2 = 200;
var DEFAULT_COORDINATE_Y2 = 200;

function Rectangle()
{
    this.prototype = Object.create(new Shape());
    this.coordinateX1 = DEFAULT_COORDINATE_X1;
    this.coordinateY1 = DEFAULT_COORDINATE_Y1;
    this.coordinateX2 = DEFAULT_COORDINATE_X2;
    this.coordinateY2 = DEFAULT_COORDINATE_Y2;

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

    this.draw = function()
    {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        ctx.beginPath();
        ctx.strokeStyle = this.prototype.borderColor;
        ctx.fillStyle = this.prototype.fillColor;
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
        ctx.fillText("area: " + this.calculatePerimeter().toFixed(2), 380, 470);
    }

    this.calculateArea = function()
    {
        return Math.abs(this.getCoordinateX2() - this.getCoordinateX1()) * Math.abs(this.getCoordinateY2() - this.getCoordinateY1());
    }

    this.calculatePerimeter = function()
    {
        return (Math.abs(this.getCoordinateX2() - this.getCoordinateX1()) + Math.abs(this.getCoordinateY2() - this.getCoordinateY1())) * 2;
    }
};
var shapeSelector = document.getElementById("shape_list");
var circleSettings = document.getElementById("shape_circle_settings");
var triangleSettings = document.getElementById("shape_triangle_settings");
var rectangleSettings = document.getElementById("shape_rectangle_settings");
var rectangle = new Rectangle();
var triangle = new Triangle();
var circle = new Circle();

function start()
{
    checkSelector();
    updateAllFields();
}

function checkSelector()
{
    if(shapeSelector.value == "circle")
    {
        circleSettings.style.display = "block";
        triangleSettings.style.display = "none";
        rectangleSettings.style.display = "none";
    }
    if(shapeSelector.value == "triangle")
    {
        triangleSettings.style.display = "block";
        rectangleSettings.style.display = "none";
        circleSettings.style.display = "none";
    }
    if(shapeSelector.value == "rectangle")
    {
        rectangleSettings.style.display = "block";
        circleSettings.style.display = "none";
        triangleSettings.style.display = "none";
    }
}

function getShape()
{
    if (shapeSelector.value === "circle")
    {
        setCircleSettings();
        setCommonSettings(circle);
        return circle;
    }
    if (shapeSelector.value === "triangle")
    {
        setTriangleSettings();
        setCommonSettings(triangle);
        return triangle;
    }
    if (shapeSelector.value === "rectangle")
    {
        setCommonSettings(rectangle);
        return rectangle;
    }
}

function drawShape()
{
    var shape = getShape();
    shape.draw();
    updateAllFields();
}

function getValueIfItExists(fieldValue, standartValue)
{
    if (fieldValue === "")
    {
        fieldValue = standartValue;
    }

    return fieldValue;
}

function setCircleSettings()
{
    circle.setCoordinateX(getValueIfItExists(document.getElementById("circle_coordinateX").value, circle.getCoordinateX()));
    circle.setCoordinateY(getValueIfItExists(document.getElementById("circle_coordinateY").value, circle.getCoordinateY()));
    circle.setRadius(getValueIfItExists(document.getElementById("circle_radius").value, circle.getRadius()));
}

function setTriangleSettings()
{
    triangle.setFirstCoordinate(
        getValueIfItExists(document.getElementById("triangle_coordinateX1").value, triangle.getCoordinateX1()), 
        getValueIfItExists(document.getElementById("triangle_coordinateY1").value, triangle.getCoordinateY1()));
    triangle.setSecondCoordinate(
        getValueIfItExists(document.getElementById("triangle_coordinateX2").value, triangle.getCoordinateX2()), 
        getValueIfItExists(document.getElementById("triangle_coordinateY2").value, triangle.getCoordinateY2()));
    triangle.setThirdCoordinate(
        getValueIfItExists(document.getElementById("triangle_coordinateX3").value, triangle.getCoordinateX3()), 
        getValueIfItExists(document.getElementById("triangle_coordinateY3").value, triangle.getCoordinateY3()));
}

function setRectangleSettings()
{
    rectangle.setFirstCoordinate(
        getValueIfItExists(document.getElementById("rectangle_coordinateX1").value, rectangle.getCoordinateX1()), 
        getValueIfItExists(document.getElementById("rectangle_coordinateY1").value, rectangle.getCoordinateY1()))
    rectangle.setSecondCoordinate(
        getValueIfItExists(document.getElementById("rectangle_coordinateX2").value, rectangle.getCoordinateX2()), 
        getValueIfItExists(document.getElementById("rectangle_coordinateY2").value, rectangle.getCoordinateY2()))
}

function setCommonSettings(shape)
{
    shape.prototype.setFillColor(getValueIfItExists(document.getElementById("fill_color").value, shape.prototype.getFillColor()));
    shape.prototype.setBorderColor(getValueIfItExists(document.getElementById("border_color").value, shape.prototype.getBorderColor()));
}

function updateAllFields()
{
    document.getElementById("fill_color").value = circle.prototype.getFillColor();
    document.getElementById("border_color").value = circle.prototype.getBorderColor();
    document.getElementById("circle_coordinateX").value = circle.getCoordinateX();
    document.getElementById("circle_coordinateY").value = circle.getCoordinateY();
    document.getElementById("circle_radius").value = circle.getRadius();
    document.getElementById("triangle_coordinateX1").value = triangle.getCoordinateX1();
    document.getElementById("triangle_coordinateY1").value = triangle.getCoordinateY1();
    document.getElementById("triangle_coordinateX2").value = triangle.getCoordinateX2()
    document.getElementById("triangle_coordinateY2").value = triangle.getCoordinateY2();
    document.getElementById("triangle_coordinateX3").value = triangle.getCoordinateX3();
    document.getElementById("triangle_coordinateY3").value = triangle.getCoordinateY3();
    document.getElementById("rectangle_coordinateX1").value = rectangle.getCoordinateX1() 
    document.getElementById("rectangle_coordinateY1").value = rectangle.getCoordinateY1();
    document.getElementById("rectangle_coordinateX2").value = rectangle.getCoordinateX2();
    document.getElementById("rectangle_coordinateY2").value = rectangle.getCoordinateY2();
}