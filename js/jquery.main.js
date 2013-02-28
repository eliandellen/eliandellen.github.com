$(document).ready(function(){
	$('#loginpwsubmit').keyup(function(){
		if(this.value == "5683")
		  {
		    window.open('wedding.html')/*opens the target page while Id & password matches*/
		  }
		if (this.value.length >= 4 && this.value != "5683"){
			$('#error').show();
		}else{
			$('#error').hide();
		}
	});
});