import './simonsays.less';



var app = new Vue({
  el: '#simonsays',
  data: {
    sequence: null,
    index: 0,
    response: [],
    colour: "",
    playing: false,
    result: "",
    glowing: ""
  },
  created: function() {
    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.open('GET', 'sequences.json');
    xhr.onload = function () {
      var json = JSON.parse(xhr.responseText);
      self.sequence = json.sequences;
    };
    xhr.send();
  },
  methods: {
    start: function() {
      this.index = 0;
      this.playing = true;
      this.result = "";
      setTimeout(this.play, 1000);
    },
    play: function() {
      var buttons = document.querySelectorAll('span.small');
      if(this.index < this.sequence.length)
      {
        var classes = buttons[this.sequence[this.index]-1].className.split(" ");
        this.glowing = this.colour = classes[2];
        this.index += 1;
        setTimeout(this.play, 1000);
      }
      else
      {
        this.glowing = this.colour = "";
      }
    },
    reset: function() {
      this.colour = "";
      this.glowing = "";
      this.response = [];
      this.playing = false;
    },
    selected: function(event) {
      var classes = event.target.className.split(" ");
      var buttons = document.querySelectorAll('span.small');
      this.colour = classes[2];
      for(var i = 0; i < 4; i++) {
        classes = buttons[i].className.split(" ");
        if(this.colour == classes[2]) {
          this.response.push(i+1);
          if(this.sequence !== null && this.response.length == this.sequence.length) {
            this.colour = "";
            if(this.response.every(this.resultCheck)) { // spiral win
              console.debug("you win");
              this.win();
            } else { // flash
              console.debug("you lose");
              this.lose();
            }
          }
          break;
        }
      }
    },
    resultCheck: function(item, index) {
      return item == this.sequence[index];
    },
    win: function() {
      var buttons = document.querySelectorAll('span.large');
      this.result = 'Yeah - thats correct!';
      setTimeout(this.flash, 500, 5, buttons[0]);
      this.reset();
    },
    lose: function() {
      var buttons = document.querySelectorAll('span.large');
      this.result = 'Oops - thats incorrect - try again';
      setTimeout(this.flash, 500, 5, buttons[0]);
      this.reset();
    },
    flash: function(check, item) {
     this.glowOn(item);
     if(check > 0) {
       setTimeout(this.flash, 500, check-1, item);
     }
   },
   glowOn: function(item) {
     var classes = item.className.split(" ");
     this.glowing = classes[1];
     setTimeout(this.glowOff, 250);
   },
    glowOff: function() {
      this.glowing = "";
    }
  }
});
