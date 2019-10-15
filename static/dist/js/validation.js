
$("#user_form").submit(function(){
  var password = $.trim($('#password').val());
  var cpassword = $.trim($('#cpassword').val());
   if (password != cpassword) {
      $("#mismatch_pass").css("display",'block');
      return false;   
    }
    else{
      return true;
    }
    return false;
});