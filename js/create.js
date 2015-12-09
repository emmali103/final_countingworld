//$(document).ready(function(){

function create(){

	var apple = document.getElementById('numberLeft').value;
	var apple = parseInt(apple);
	var banana = document.getElementById('numberRight').value;
	var banana = parseInt(banana);
	//var final_result = apple + banana;
	
	Parse.$ = jQuery;
	Parse.initialize("rStqA5A8OTIgk0ISNHx5g36OQ3si1XEdDdOoHHJ4", "yOK2rBjFdotTkPCrEC5Q6BE3KE18EtdOwfPearb0");

	var problem = Parse.Object.extend("problem");
	var Problem = new problem();

	Problem.set("apple", apple);
	Problem.set("banana", banana);
	if ($("#minus").hasClass("minuss") == true) {
	Problem.set("sign", "-");
	var final_result = apple - banana;
	Problem.set("result", final_result);
	//alert('-');
	}
	else {
	var final_result = apple + banana;
	Problem.set("sign", "+");
	Problem.set("result", final_result);
	//alert('+');
	}
	
	
	//alert (final_result);
	
	Problem.save(null, {
		success: function(Problem){
			//alert('problem saved');
			document.getElementById("result_teacher").style.display="block";
		},
		error: function(Problem, error){
			alert('fucking error');
			}
	});
	$("img").removeClass("minuss");
	document.getElementById('minus').src = "images/minus.png";
	document.getElementById('plus').src = "images/plus.png";
}

 //});