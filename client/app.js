var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
$routeProvider
        .when('/', {
          templateUrl: '/partials/login.html',
          controller: 'sessionController',
      })
         .when('/registration', {
          templateUrl: '/partials/registration.html',
          controller: 'sessionController',
      })
        .when('/dashboard', {
          templateUrl: '/partials/dashboard.html',
          controller: 'dashboardController',
      })
        .otherwise({
          redirectTo: '/'
        });
});