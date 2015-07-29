(function(){
  if(typeof window.Hanoi === 'undefined') {
    window.Hanoi = {};
  }

  var Hanoi = window.Hanoi;

  var View = Hanoi.View = function(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
    this.clickTower();
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
    var $towers = $(".tower");
    $towers.empty();
    for (var i = 0; i < towers.length; i++) {
      for (var j = 0; j < towers[i].length; j++) {
        var $disc = $('<div>').data("disc", towers[i][j]).addClass("disc"+towers[i][j]);

        $($towers[i]).append($disc);
      }
    }
  };

  View.prototype.clickTower = function () {
    var $towers = $('.tower');
    var $tower1 = null;
    var game = this.game;
    var view = this;
    $towers.on('click', function(event) {
      if($tower1 === null) {
        $tower1 = $(event.currentTarget);
        $tower1.addClass("selected");
      } else {
        var $tower2idx =  $(event.currentTarget).data("tower");
        if(game.isValidMove($tower1.data("tower"), $tower2idx)){
          game.move($tower1.data("tower"), $tower2idx);
          $tower1.removeClass("selected");
          $tower1 = null;
          view.render();
        } else {
          alert("Invalid Move");
          $tower1.removeClass("selected");
          $tower1 = null;
        }
      }
      if(game.isWon()){
        alert("You won!!");
        $towers.off('click');
      }
    });
  };


})();
