function validateForm() {
  document.querySelector('.status').innerHTML = "<span style= 'color: black;'> Sent!</span>";
  document.querySelector('.nerror').innerHTML = "";
  document.querySelector('.serror').innerHTML = "";
  document.querySelector('.merror').innerHTML = "";
  document.querySelector('.eerror').innerHTML = "";
  
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Name cannot be empty";
	  document.querySelector('.nerror').innerHTML = "*";
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Email cannot be empty";
	  document.querySelector('.eerror').innerHTML = "*";
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Email format invalid";
		  document.querySelector('.eerror').innerHTML = "*";
      }
  }
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      document.querySelector('.status').innerHTML = "Subject cannot be empty";
	  document.querySelector('.serror').innerHTML = "*";
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Message cannot be empty";
	  document.querySelector('.merror').innerHTML = "*";
  }
  var captcha = document.getElementById('captcha').value;
  if (captcha != "father") {
      document.querySelector('.status').innerHTML = "Invalid captcha";
  }
}