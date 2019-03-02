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
    console.log(cardHere(i, j));
  }

  function cardHere(i, j) {
    for (var idx = 0; idx < cards.length; idx++) {
      var c = cards[idx];
      if (i >= c.row && i < c.row + c.vspan
        && j >= c.col && j < c.col + c.hspan)
        return c;
    }
    return null;
  }

  // DEBUG
  addCard(5, 8, 3, 2).style.backgroundColor = '#ee4';
  addCard(3, 15, 5, 6).style.backgroundColor = '#4ee';

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
    var cid = 'gcard-' + cards.length;
    var ccls = config.card.class;
    var c = document.createElement('div');
    c.setAttribute('class', ccls);
    c.setAttribute('id', cid);
    ele.appendChild(c);
    c.style.top = config.cellSize * i + 'px';
    c.style.left = config.cellSize * j + 'px';
    c.style.width = hspan * config.cellSize + 'px';
    c.style.height = vspan * config.cellSize + 'px';
    cards.push({
      ele: c,
      row: i,
      col: j,
      hspan: hspan,
      vspan: vspan,
    });
    dragGrid(c, {
      offX: 0,
      offY: 0,
      grainX: config.cellSize,
      grainY: config.cellSize,
    }, function (o) {
      var c = cards[parseInt(o.ele.id.substring(o.ele.id.length - 1))];
      c.row = o.newR;
      c.col = o.newC;
    });
    return c;
  }

}
