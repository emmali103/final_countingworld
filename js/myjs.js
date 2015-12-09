

function showDiv() {
   document.getElementById('result_teacher').style.display = "block";
}







function incrementValueLeft()
{
    var value = parseInt(document.getElementById('numberLeft').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
			if  ( value == 1)
	{
	$('#a1').toggle();
	}
		if  ( value == 2)
	{
	$('#a2').toggle();
	}
		if  ( value == 3)
	{
	$('#a3').toggle();
	}
		if  ( value == 4)
	{
	$('#a4').toggle();
	}
		if  ( value == 5)
	{
	$('#a5').toggle();
	}
		if  ( value == 6)
	{
	$('#a6').toggle();
	}
		if  ( value == 7)
	{
	$('#a7').toggle();
	}
		if  ( value == 8)
	{
	$('#a8').toggle();
	}
		if  ( value == 9)
	{
	$('#a9').toggle();
	}
    document.getElementById('numberLeft').value = value;

}

function decrementValueLeft()
{
    var value = parseInt(document.getElementById('numberLeft').value, 10);
		if  ( value == 1)
	{
	$('#a1').toggle();
	}
		if  ( value == 2)
	{
	$('#a2').toggle();
	}
		if  ( value == 3)
	{
	$('#a3').toggle();
	}
		if  ( value == 4)
	{
	$('#a4').toggle();
	}
		if  ( value == 5)
	{
	$('#a5').toggle();
	}
		if  ( value == 6)
	{
	$('#a6').toggle();
	}
		if  ( value == 7)
	{
	$('#a7').toggle();
	}
		if  ( value == 8)
	{
	$('#a8').toggle();
	}
		if  ( value == 9)
	{
	$('#a9').toggle();
	}
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('numberLeft').value = value;
}

function incrementValueRight()
{
    var value = parseInt(document.getElementById('numberRight').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numberRight').value = value;
	
		if  ( value == 1)
	{
	$('#b1').toggle();
	}
		if  ( value == 2)
	{
	$('#b2').toggle();
	}
		if  ( value == 3)
	{
	$('#b3').toggle();
	}
		if  ( value == 4)
	{
	$('#b4').toggle();
	}
		if  ( value == 5)
	{
	$('#b5').toggle();
	}
		if  ( value == 6)
	{
	$('#b6').toggle();
	}
		if  ( value == 7)
	{
	$('#b7').toggle();
	}
		if  ( value == 8)
	{
	$('#b8').toggle();
	}
		if  ( value == 9)
	{
	$('#b9').toggle();
	}
}

function decrementValueRight()
{
    var value = parseInt(document.getElementById('numberRight').value, 10);
	if  ( value == 1)
	{
	$('#b1').toggle();
	}
		if  ( value == 2)
	{
	$('#b2').toggle();
	}
		if  ( value == 3)
	{
	$('#b3').toggle();
	}
		if  ( value == 4)
	{
	$('#b4').toggle();
	}
		if  ( value == 5)
	{
	$('#b5').toggle();
	}
		if  ( value == 6)
	{
	$('#b6').toggle();
	}
		if  ( value == 7)
	{
	$('#b7').toggle();
	}
		if  ( value == 8)
	{
	$('#b8').toggle();
	}
		if  ( value == 9)
	{
	$('#b9').toggle();
	}
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('numberRight').value = value;
}


$(function () {
    // Handler for .ready() called.
    $("img").on("click",function(){
        event.preventDefault();
        $(this).toggleClass("active_img");
    })
});


