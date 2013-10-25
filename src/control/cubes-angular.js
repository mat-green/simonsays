function CubesCtrl($scope) {
	$scope.colour = "";
	
	$scope.selected = function(event) {
		var classes = event.target.className.split(" ");
		$scope.colour = classes[2]; 
	};
	
	$scope.play = function() {
	};
}