function CubesCtrl($scope, $http, $timeout) {
	// attributes
	var $cubes = {
		data: null,
		index: 0,
		sequence: function() {
				
			var buttons = angular.element('span.small');
			if($cubes.index < $cubes.data.length)
			{
				var classes = buttons[$cubes.data[$cubes.index]-1].className.split(" ");
				if($cubes.index > 0)
				{					
					angular.element(buttons[$cubes.data[$cubes.index-1]-1]).removeClass("glow")
				}
				angular.element(buttons[$cubes.data[$cubes.index]-1]).addClass("glow");
				$scope.colour = classes[2];
				$cubes.index += 1;
				$timeout($cubes.sequence, 1000);
			}
			else
			{
				angular.element(buttons[$cubes.data[$cubes.index-1]-1]).removeClass("glow")
				$scope.colour = ""; 
			}
		}
	}
	 
	// Bindings
	$scope.colour = "";
	
	$scope.selected = function(event) {
		var classes = event.target.className.split(" ");
		$scope.colour = classes[2]; 
	};
	
	$scope.play = function() {
    	if( $cubes.data == null)
    	{
			$http({method: 'GET', url: '../../model/sequences.json'}).
			  	success(function(data, status, headers, config) {
			    	$cubes.data = data["sequence"];
			    	$cubes.index = 0;
			    	$timeout($cubes.sequence, 1000);
			  	}).
			  	error(function(data, status, headers, config) {
			    	console.warn("failed to get data");
			  	});
	  	}
	};
}