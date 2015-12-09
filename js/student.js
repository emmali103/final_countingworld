function student() {

	Parse.$ = jQuery;
	Parse.initialize("rStqA5A8OTIgk0ISNHx5g36OQ3si1XEdDdOoHHJ4", "yOK2rBjFdotTkPCrEC5Q6BE3KE18EtdOwfPearb0");
	
	var test = new Parse.Query(Parse.Object.extend("problem"));

	test.find({
		success: function (results) {
		
		
		
		console.log("total: "+results.length);
			//for (var i = 0; i < results.length; i++) {
		var object = results[0];
		var apples = object.get('apple');
		//alert(apples);
		
		var bananas = object.get('banana');
		
		var sign = object.get('sign');
		
		var count = apples;
		var count2 = bananas;
		while (count > 0) {
			$('.apple').append('<img id="drag' + count +'" src="images/apple.png" style="width:20%" >');
			 $("#drag"+ count).draggable();
			count--;
			}
			
			while (count2 > 0) {
			$('.banana').append('<img id="drag_' + count2 +'" src="images/banana.png" style="width:20%" >');
			$("#drag_"+ count2).draggable();
			count2--;
			}
			$('#sign').append(sign + ' ');
			//}
		},
		error: function (error) {
			alert('error');
		}
	
	});
}