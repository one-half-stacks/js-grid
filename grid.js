jsGrid(document.getElementById('grid-container'), {
  // essential config vars
  cellSize: 50, // px
  rows: 12,
  cols: 24,
  grid: { // element class
    cell: 'grid-cell',
    fixL: 'fl', // left border is fixed border
    fixR: 'fr',
  },
}, {
  // layout rules
});

function jsGrid(ele, config, rules) {

  drawGrid();

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
