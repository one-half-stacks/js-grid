// Initialize grid, bind events.
// @param ele: DOM element as grid container.
// @param config: configuration vars.
          // - cellSize (px)
          // - rows
          // - cols
          // - grid { cell, fixL, fixR }
          // - card { class }
// @param rules: additional rules on grid control.
function jsGrid(ele, config, rules) {

  drawGrid();

  var cards = [];

  ele.onmousedown = function (e) {
    var baseRect = document.querySelector('#gcell-0-0').getBoundingClientRect();
    var base = {
      top: baseRect.top,
      left: baseRect.left,
    };
    var i = Math.floor((e.clientY - (ele.offsetTop + base.top)) / config.cellSize);
    var j = Math.floor((e.clientX - (ele.offsetLeft + base.left)) / config.cellSize);
    console.log(i + ',' + j);
  }

  // DEBUG
  addCard(5, 8, 3, 2);
  addCard(3, 15, 5, 6);

  // Display grid cells, lines, placement.
  function drawGrid() {
    var html = ele.innerHTML;
    for (var i = 0; i < config.rows; i++) {
      for (var j = 0; j < config.cols; j++) {
        html += "<div class='" + config.grid.cell + "' id='gcell-" + i + "-" + j + "'></div>";
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

  function addCard(i, j, hspan, vspan) {
    var html = ele.innerHTML;
    html += "<div class='" + config.card.class + "' id='gcard-" + cards.length + "'></div>";
    ele.innerHTML = html;
    var c = document.getElementById('gcard-' + cards.length);
    c.style.top = config.cellSize * i + 'px';
    c.style.left = config.cellSize * j + 'px';
    c.style.width = hspan * config.cellSize + 'px';
    c.style.height = vspan * config.cellSize + 'px';
    c.style.backgroundColor = '#dfdfdf'; // DEBUG
    cards.push({
      ele: c,
      row: i,
      col: j,
      hspan: hspan,
      vspan: vspan,
    });
  }

}
