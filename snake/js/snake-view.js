(function () {
  if(window.Game === undefined){
    window.Game = {};
  }

  var Game = window.Game;

  var View = Game.View = function (game, $board) {
    this.game = game;
    this.$board = $board;
    this.setBoard();
  };

  View.setBoard = function () {
    var $board = this.$board;
     for (var i = 0; i < 10; i++) {
       for (var j = 0; j < 10; j++) {
         var $square = $('<div>').data("pos", [i, j]).addClass('empty');
         $board.append($square);
       }
     }
  };


})();
