(function(){	
	angular.module('store', ['ui.router','controllers'])
	.config(function($stateProvider, $urlRouterProvider){
	  // For any unmatched url, redirect to /notes
	  $urlRouterProvider.otherwise("/notes");
	  //
	  // Now set up the states
	  $stateProvider.state('notes', {
	      url: "/notes",
	      templateUrl: "templates/test.html"
	    });
	});
})();