// Initialize grid, bind events.
// @param ele: DOM element as grid container.
// @param config: configuration vars.
          // - cellSize (px)
          // - rows
          // - cols
          // - grid { cell, fixL, fixR }
// @param rules: additional rules on grid control.
function jsGrid(ele, config, rules) {

  drawGrid();

  // Display grid cells, lines, placement.
  function drawGrid() {
    var html = ele.innerHTML;
    for (var i = 0; i < config.rows; i++) {
      for (var j = 0; j < config.cols; j++) {
        html += "<div class='grid-cell' id='gcell-" + i + "-" + j + "'></div>";
      }
    }
    ele.innerHTML = html;
    for (var i = 0; i < config.rows; i++) {
      for (var j = 0; j < config.cols; j++) {
        var c = document.getElementById('gcell-' + i + '-' + j);
        c.style.top = i * config.cellSize + 'px';
        c.style.left = j * config.cellSize + 'px';
      }
    }
  }

}
