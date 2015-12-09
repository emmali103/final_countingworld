
function changeSrc(obj)
			{obj.src="images/confirm.png";}
		function ReturnSrc(obj)
			{obj.src="images/redconfirm.png";}
			
var $apple = 0, $banana = 0;
$(function(){



 for( i = 1; i<=9 ; i++){

	$("#drag"+ i).draggable();
	
  }
 
 for( i = 1; i<=9 ; i++){

	$("#drag_"+ i).draggable();
	
  }




	$("#drop1").droppable({
		drop: function(ui, event){
			// console.log(123456)

			$apple++;
			document.getElementById("first-num").innerHTML = $apple;

		}
	});


	$("#drop2").droppable({
		drop: function(ui, event){
			// console.log(123456)

			$banana++;
			document.getElementById("second-num").innerHTML = $banana;

		}
	});


})


