angular.module("newsApp").service('authService',  function($http){
	
	var users=[
		{"account":"normaluser",
		"password":"12345678",
		"name":"Usuario",
		"lastname":"Comun",
		"type":"user",
		"subscriptions":{"economy":true,
						"international":true}
					
		},


		{"account":"authoruser",
		"password":"12345678",
		"name":"Usuario",
		"lastname":"Autor",
		"type":"author"
		},


		{"account":"adminuser",
		"password":"12345678",
		"name":"Usuario",
		"lastname":"Admin",
		"type":"admin"
		}
	];

	this.userLogued = users[2];

	this.logued = function(){
		return this.userLogued;
	}
});