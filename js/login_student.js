$(document).ready(function(){
 
	
	$('.login').on('submit', function(e) {
 
	    // Prevent Default Submit Event
	    e.preventDefault();
		Parse.$ = jQuery;
		Parse.initialize("rStqA5A8OTIgk0ISNHx5g36OQ3si1XEdDdOoHHJ4", "yOK2rBjFdotTkPCrEC5Q6BE3KE18EtdOwfPearb0");
 
	    // Get data from the form and put them into variables
	    var data = $(this).serializeArray(),
	        username = data[0].value,
	        password = data[1].value;
 
	    // Call Parse Login function with those variables
	    Parse.User.logIn(username, password, {
	        // If the username and password matches
	        success: function(user) {
		
			
			//alert('welcome');
			window.location.href = 'st_page.html';

	        },
	        // If there is an error
	        error: function(object, error) {
			//alert('username not in DB');
	            //console.log("The user is not found in the Cloud DB");
	        }
	    });
		
		
		 
	});
	
		$('.login').on('submit', function(e) {
 
	    // Prevent Default Submit Event
	    e.preventDefault();
		Parse.$ = jQuery;
		Parse.initialize("rStqA5A8OTIgk0ISNHx5g36OQ3si1XEdDdOoHHJ4", "yOK2rBjFdotTkPCrEC5Q6BE3KE18EtdOwfPearb0");

		var user = new Parse.User();
		//var form = document.getElementById("signup-form");

	    var data = $(this).serializeArray(),
	        username = data[0].value,
	        password = data[1].value;
			
		user.set("username",username);
		user.set("password",password);

		user.signUp(null, {
			success: function(user) {
			//alert('signup works');
			window.location.href = 'home.html';
			},
			error: function(user,error){
			//alert('signup doesnt work');
			}
			
			});
		
		
		 
	});
	
	
 });