var App = React.createClass({
  render: function() {
    return (
    <div className="container-fluid">
      <div className="row col-md-6">
        <label>Shape:
          <select id="shape_selector" className = "form-control">
            <option defaultValue>Choose...</option>
            <option value="Circle">Circle</option>
            <option value="Rectangle">Rectangle</option>
            <option value="Triangle">Triangle</option>
          </select>
        </label>
        <div id="shape_colors" className="form-group">
          <label>Fill color: <input id="fill_color" className="form-control" placeholder="#000400" /></label>
          <label>Border color: <input id="border_color" className="form-control" placeholder="#ff0000" /></label>
        </div>
        <div id="circle_parameters" className="form-group">
          <label>Radius: <input id="radius" className="form-control" placeholder="20" /></label>
          <label>Center X: <input id="center_x" className="form-control" placeholder="50" /></label>
          <label>Center Y: <input id="center_y" className="form-control" placeholder="50" /></label>
        </div>
        <div id="rectangle_parameters" className="form-group">
          <label>X1: <input id="rectangle_x1" className="form-control" placeholder="20" /></label>
          <label>Y1: <input id="rectangle_y1" className="form-control" placeholder="20" /></label>
          <label>X2: <input id="rectangle_x2" className="form-control" placeholder="100" /></label>
          <label>Y2: <input id="rectangle_y2" className="form-control" placeholder="50" /></label>
        </div>
        <div id="triangle_parameters" className="form-group">
          <label>X1: <input id="triangle_x1" className="form-control" placeholder="20" /></label>
          <label>Y1: <input id="triangle_y1" className="form-control" placeholder="20" /></label>
          <label>X2: <input id="triangle_x2" className="form-control" placeholder="100" /></label>
          <label>Y2: <input id="triangle_y2" className="form-control" placeholder="20" /></label>
          <label>X3: <input id="triangle_x3" className="form-control" placeholder="60" /></label>
          <label>Y3: <input id="triangle_y3" className="form-control" placeholder="100" /></label>
        </div>
      </div>
      <canvas id="canvas" className="row col-md-6" width="500" height="500">
      </canvas>
    </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);