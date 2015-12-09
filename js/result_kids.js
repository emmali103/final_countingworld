function result_kids(){
	Parse.$ = jQuery;
	Parse.initialize("rStqA5A8OTIgk0ISNHx5g36OQ3si1XEdDdOoHHJ4", "yOK2rBjFdotTkPCrEC5Q6BE3KE18EtdOwfPearb0");
	
	var test = new Parse.Query(Parse.Object.extend("problem"));
	test.find({
		success: function (results) {
			var object = results[0];
			var apples = object.get('apple');
			var sign = object.get('sign');
			var bananas = object.get('banana');
			var correct_result = object.get('result');
			
			var object1 = results[1];
			var apples1 = object1.get('apple');
			var sign1 = object1.get('sign');
			var bananas1 = object1.get('banana');
			var correct_result1 = object1.get('result');
			
			var object2 = results[2];
			var apples2 = object2.get('apple');
			var sign2 = object2.get('sign');
			var bananas2 = object2.get('banana');
			var correct_result2 = object2.get('result');
		
		var student_result = new Parse.Query(Parse.Object.extend("result"));
		
		student_result.find ({
			success: function (students){
				var finall = students[0];
				var finall1 = students[1];
				var finall2 = students[2];
				var result_student = finall.get('result');
				var result_student1 = finall1.get('result');
				var result_student2 = finall2.get('result');

				if (result_student == correct_result){
					document.getElementById("r1").style.display="block";
					$('#r1').append(apples + ' ' + sign + ' ' + bananas + ' = ' + correct_result);
				}
				else{
					document.getElementById("w1").style.display="block";
					$('#w1').append(apples + ' ' + sign + ' ' + bananas + ' = ' + result_student);
				}
				if (result_student1 == correct_result1){
					document.getElementById("r2").style.display="block";
					$('#r2').append(apples1 + ' ' + sign1 + ' ' + bananas1 + ' = ' + correct_result1);
				}
				else{
					document.getElementById("w2").style.display="block";
					$('#w2').append(apples1 + ' ' + sign1 + ' ' + bananas1 + ' = ' + result_student1);
				}
				if (result_student2 == correct_result2){
					document.getElementById("r3").style.display="block";
					$('#r3').append(apples2 + ' ' + sign2 + ' ' + bananas2 + ' = ' + correct_result2);				
				}
				else{
					document.getElementById("w3").style.display="block";
					$('#w3').append(apples2 + ' ' + sign2 + ' ' + bananas2 + ' = ' + result_student2);
				}
			},
			error: function(error){
				alert('error');
			}
		
		
		});
		
		},
		error: function (error) {
			alert('error');
		}
		
		});
}