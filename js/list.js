(function() {

    var myApp = angular.module("myApp", ["firebase"]);

    myApp.controller('AcountListCtrl', ['$scope', '$firebase',
     function($scope, $firebase) {
        	var ref = new Firebase("https://torid-heat-5872.firebaseio.com");
        	// GET MESSAGES AS AN ARRAY
        	$scope.messages = $firebase(ref).$asArray();
        	console.log($scope.messages );
        	this.list = $scope.messages;
    }]);

})();

