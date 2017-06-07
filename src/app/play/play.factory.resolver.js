define([ 'angular' ], function(angular) {
  var PlayResource = function($resource) {
    var service = $resource(
      '/sequences.json'
    );

    return service;
  };
  return [ '$resource', PlayResource ];
});
