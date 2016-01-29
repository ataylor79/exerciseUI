(function () {

	var app = angular.module("ExerciseApp");

	var UserController = function ($scope) {

		$scope.users = [
			{
				firstName: "Bill",
				lastName : "Smith"
			},
			{
				firstName: "Ted",
				lastName : "Baker"
			},
			{
				firstName: "Frank",
				lastName : "Applewood"
			},
			{
				firstName: "Ben",
				lastName : "Cope"
			}
		];
	};

	app.controller("UserController", UserController);

})();