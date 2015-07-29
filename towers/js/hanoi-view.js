(function(){
  if(typeof Hanoi === 'undefined') {
    var Hanoi = window.Hanoi = {};
  }

  var View = Hanoi.View = function(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
  };

  View.prototype.setupTowers = function() {
    for (var i = 0; i < 3; i++) {
      var $tower = $("<div>");
      $tower.data("tower",i);
      $tower.addClass("tower");
      this.$el.append($tower);
    }
  };

  View.prototype.render = function() {
    var towers = this.game.towers;
    $('.disc').parent.removeChild();
    var $towers = $(".tower");
    for (var i = 0; i < towers.length; i++) {
      for (var j = 0; j < towers[i].length; j++) {
        var $disc = $('<div>').data("disc", j).addClass("disc");

        $towers[i].append($disc);
      }
    }

    this.game.towers.forEach(function(tower) {

    });
  };


})();
