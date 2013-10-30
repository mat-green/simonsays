(function($) {
	var CubesView = Backbone.View.extend({
		el: $('body'), // attaches `this.el` to an existing element.
		
		data: null,
    
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
			
			if(index < this.data.length)
			{
				var classes = buttons[this.data[index]-1].className.split(" ");
				if(index > 0)
				{					
					$(buttons[this.data[index-1]-1]).removeClass("glow")
				}
				$(buttons[this.data[index]-1]).addClass("glow");
				box.removeClass();
				box.addClass("box large "+classes[2]);
				setTimeout(this.sequence, 1000, index+1)
			}
			else
			{
				$(buttons[this.data[index-1]-1]).removeClass("glow")
				box.removeClass();
				box.addClass("box large"); 
			}
		},
    
	    play: function() {
			if(this.data == null)
			{
				var instance = this;
				var jqxhr = $.getJSON( "../../model/sequences.json", function(data, textStatus, jqXHR ) {
				  console.log( "success" );
				  instance.data = data["sequence"];
				  instance.sequence(0);
				})
				  .done(function() {
				    console.log( "second success" );
				  })
				  .fail(function( jqxhr, textStatus, error ) {
				    var err = textStatus + ", " + error;
				    console.log( "Request Failed: " + err );
				  })
				  .always(function() {
				    console.log( "complete" );
				  });
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
/*	var control = {
		sequence: function(index) {
			
			var box = $("span.large");
			var buttons = $("span.small");
			
			if(index < model.data.length)
			{
				var classes = buttons[model.data[index]-1].className.split(" ");
				if(index > 0)
				{					
					$(buttons[model.data[index-1]-1]).removeClass("glow")
				}
				$(buttons[model.data[index]-1]).addClass("glow");
				box.removeClass();
				box.addClass("box large "+classes[2]);
				setTimeout(control.sequence, 1000, index+1)
			}
			else
			{
				$(buttons[model.data[index-1]-1]).removeClass("glow")
				box.removeClass();
				box.addClass("box large"); 
			}
		},
		play: function() {
			if(model.data == null)
			{
				console.log("retrieving data");
				var jqxhr = $.getJSON( "../../model/sequences.json", function(data, textStatus, jqXHR ) {
				  console.log( "success" );
				  model.data = data["sequence"];
				  control.sequence(0);
				})
				  .done(function() {
				    console.log( "second success" );
				  })
				  .fail(function( jqxhr, textStatus, error ) {
				    var err = textStatus + ", " + error;
				    console.log( "Request Failed: " + err );
				  })
				  .always(function() {
				    console.log( "complete" );
				  });
			}
			else
			{
				console.log("Already have data");
				control.sequence(0);
			}
		}
	};
	var model = {
		data: null
	};
	return {
		execute: function() {
			console.debug("setting up");
			// Add onclick events to small boxes
			$("span.small").click(function(e) {
				var classes = this.className.split(" ");
				var box = $("span.large");
				box.removeClass();
				box.addClass("box large "+classes[2]);
			})
			
			$("button").click(function(e) {
				control.play();
			})
		}
	};*/
})(jQuery)
