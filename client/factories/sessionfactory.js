app.factory('sessionFactory', ["$http", "$location", function($http, $location){
	var factory={}

	factory.checkUser = function(callback){
		$http.get('/checkUser').then(function(data){

			console.log(data.data)
			callback(data.data)
		})
	}
	factory.registration = function(user){

		$http.post('/registration', user).then(function(data){
			if(data.data.status){
				$location.url('/dashboard')
			}
			else{
				console.log("ERROR")
			}
		})
	}
	factory.login = function(user){
		console.log('got to factory login')
		$http.post('/login', user).then(function(data){
			if(data.data.status){
				$location.url('/dashboard')
			}
			else{
				console.log("ERROR")
			}
		})
	}

	return factory;
}])