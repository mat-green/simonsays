define([], function(){
  var PlusOneDirective = function() {
    return {
      link: function( scope, element, attrs ) {
        gapi.plusone.render( element[0], {
          "size": "medium",
          "href": "http://bit.ly/ngBoilerplate"
        });
      }
    };
  };
  return [ PlusOneDirective ];
});
