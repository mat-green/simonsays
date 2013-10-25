var cubes = (function($) {
	var control = {
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
	};
})(jQuery)
