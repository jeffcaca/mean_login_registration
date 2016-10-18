app.controller('sessionController', ['$scope', 'sessionFactory', "$location", function($scope, sessionFactory, $location){
	
	var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;


	$scope.registration = function(){
		if(!$scope.logReg.first_name||$scope.logReg.first_name.length <1){
			alert('Please enter your first name');
		}
		if(!$scope.logReg.last_name||$scope.logReg.last_name.length <1){
			alert('Please enter your last name');
		}
		if(!$scope.logReg.email||$scope.logReg.email.length <1){
			alert('Please enter your email');
		}
		if (!re.test($scope.logReg.email)){
			alert('Not valid email address')
		}
		if(!$scope.logReg.pw||$scope.logReg.pw.length <8){
			alert('Password must be 8 characters or more');
		}
		if($scope.logReg.pw !== $scope.logReg.pwconfirm){
			alert('Passwords do not match');
		}
		else{
			sessionFactory.registration($scope.logReg)
			
		}
	}
	$scope.login = function(){

		sessionFactory.login($scope.log)


	}


	}]);