
$(document).ready(function() {
  function render_uploaded_image(input, element_selector) {
       if (input.files && input.files[0]) {
           var file = input.files[0];

           var reader = new FileReader();

           reader.onload = function (e) {
               $(element_selector).attr('src', e.target.result);

           }

           reader.readAsDataURL(input.files[0]);
           $(element_selector).show();
       }
   }

  $("#image").change(function () {

       render_uploaded_image(this, '.cb-logo');

   });

});


// var _URL = window.URL;
// $("#image").change(function (e) {
//     var file, img;
//     if ((file = this.files[0])) {
//         img = new Image();
//         img.onload = function () {
//             alert("Width:" + this.width + "   Height: " + this.height);//this will give you image width and height and you can easily validate here....
//         };
//         img.src = _URL.createObjectURL(file);
//     }
// });



