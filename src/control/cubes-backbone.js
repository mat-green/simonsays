(function($) {
	var Sequence = Backbone.Model.extend({
		initialize: function(options) {
	    	this.id = options.id;
	    },
		url: '../../model/sequences.json'
	});
	
	var data = new Sequence();
	
	var CubesView = Backbone.View.extend({
		el: $('body'), // attaches `this.el` to an existing element.
    
		events: {
			'click span.small': 'changeColour',
			'click button#play': 'play'
		},
    
		initialize: function(){
			_.bindAll(this, 'render', 'sequence', 'play', 'changeColour'); // fixes loss of context for 'this' within methods

			this.render(); // not all views are self-rendering. This one is.
		},
    
    	render: function(){
			var e = $(this.el).append('<div class="container"> <div class="row"> <div class="span6"><span class="box large"></span></div> <div class="span6"> <div class="row"> <div class="span3"><span class="box small red"></span><span class="box small green"></span></div> <div class="span3"><span class="box small blue"></span><span class="box small yellow"></span></div> </div> <div class="row"> <div class="span6"><button id="play">Play</button></div> </div> </div> </div> </div>');
		},
    
    	sequence: function(index) {
			
			var box = $("span.large");
			var buttons = $("span.small");
			var d = data.get("sequence");
	    	
			if(index < d.length)
			{
				var classes = buttons[d[index]-1].className.split(" ");
				if(index > 0)
				{					
					$(buttons[d[index-1]-1]).removeClass("glow")
				}
				$(buttons[d[index]-1]).addClass("glow");
				box.removeClass();
				box.addClass("box large "+classes[2]);
				setTimeout(this.sequence, 1000, index+1)
			}
			else
			{
				$(buttons[d[index-1]-1]).removeClass("glow")
				box.removeClass();
				box.addClass("box large"); 
			}
		},
    
	    play: function() {
	    	if(data.get("sequence") == null)
	    	{
	    		var self = this;
	    		data.fetch({ success: function() { self.sequence(0); } });
	    	}
	    	else
	    	{
	    		this.sequence(0);
	    	}
	    },
	    
	    changeColour: function(event) {
	    	var classes = event.target.className.split(" ");
			var box = $("span.large");
			box.removeClass();
			box.addClass("box large "+classes[2]);
	    }
  });
  
  var cubesView = new CubesView();
})(jQuery)