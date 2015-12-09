function confirm() {

	Parse.$ = jQuery;
	Parse.initialize("rStqA5A8OTIgk0ISNHx5g36OQ3si1XEdDdOoHHJ4", "yOK2rBjFdotTkPCrEC5Q6BE3KE18EtdOwfPearb0");
	
	var test = new Parse.Query(Parse.Object.extend("problem"));

	test.find({
		success: function (results) {
		
		console.log("total: "+results.length);
			//for (var i = 0; i < results.length; i++) {
		var object = results[1];
		var result = object.get('result');
		
		var student = document.getElementById('maybe').value;
		var student = parseInt(student);		
				
		if (result == student){
		
		var check = Parse.Object.extend("result");
		var Result = new check();
		Result.set("result", result); 
		
		Result.save(null, {
		success: function(Result){
		},
		error: function(Result, error){
			alert('fucking error');
			}
	});
		
		document.getElementById("result_student_right").style.display="block";
		}
		else{
		var student = document.getElementById('maybe').value;
		var student = parseInt(student);
		//alert(student);
		var check = Parse.Object.extend("result");
		var Result = new check();
		Result.set("result", student); 
		
		Result.save(null, {
		success: function(Result){
		},
		error: function(Result, error){
			alert('fucking error');
			}
	});
		
			document.getElementById("result_student_wrong").style.display="block";
		}

		},
		error: function (error) {
			alert('error');
		}
	
	});

}