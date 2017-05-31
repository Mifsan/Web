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