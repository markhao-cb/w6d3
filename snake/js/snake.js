(function () {
  if(window.Game === undefined) {
     window.Game = {};
  }
  var Game = window.Game;

  var Snake = Game.Snake = function(){
    this.segments = [[0,0], [0,1], [0,2], [0,3]];
  };

  Snake.DIRECT = ["N","E","S","W"];

  Snake.prototype.move = function(vec) {
    var segs = this.segments;
    var head = segs[segs.length-1];
    var newHead = [head[0] + vec[0], head[1] + vec[1]];

    segs.push(newHead);
    segs.shift();
  };

  Snake.prototype.turn = function() {
    var direction = Snake.DIRECT[Math.random() * 4];
    var vec = [];

    switch (direction) {
      case "N":
        vec = [-1, 0];
        break;
      case "E":
        vec = [0, 1];
        break;
      case "S":
        vec = [1, 0];
        break;
      case "W":
        vec = [0, -1];
        break;
      default:
        vec = [0, 0];
    }
    this.move(vec);
  };

  //Coord Class
  //
  // var Coord = Game.Coord = function () {
  //
  // };
  //
  // Coord.prototype.plus = function() {
  //
  // };
  // Coord.prototype.equals = function() {
  //
  // };
  // Coord.prototype.isOpposite = function() {
  //
  // };

  //Board Class
  //
  var Board = Game.Board = function() {
    var snake = new Snake();
    snake.move();
  };


})();
