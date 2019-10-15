
$("#registration_form").submit(function(){
  var email = $.trim($('#email').val());
  var remail = $.trim($('#remail').val());
  var password = $.trim($('#password').val());
  var cpassword = $.trim($('#confirm_password').val());
   if (email != remail) {
      $("#mismatch_email").css("display",'block');
      return false;   
    }
    else if(password != cpassword) {
      $("#mismatch_pass").css("display",'block');   
      return false;
    }
    else{
      return true;
    }
    return false;
});

	
 


	