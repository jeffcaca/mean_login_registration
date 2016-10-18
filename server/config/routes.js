var path = require('path')
var users = require('./../controllers/users.js')

module.exports = function(app){
	app.post('/registration', function(req, res){
		users.registration(req, res)
	})
	app.post('/login', function(req, res){
		users.login(req, res)
	})
	app.get('/checkUser', function(req, res){
		users.checkUser(req, res)
	})
	app.get('/logout', function(req, res){
		users.logout(req, res)
	})
}