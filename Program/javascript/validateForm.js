function validateForm() {
		//stores value from the form to the javascript variavles
		var name = document.forms["messageForm"]["name"].value;
		var email = document.forms["messageForm"]["email"].value;
		var phone = document.forms["messageForm"]["phone"].value;
		var feedback = document.forms["messageForm"]["feedback"].value;
		
		//checks if any value is empty or not
		if (name =="") {
			alert("Please enter your name.");	//alerts the user of the empty name
			return false;
		}
		else if(email ==""){
			alert("Please enter your email.");	//alerts the user of the empty email
			return false;
		}
		else if(phone ==""){
			alert("Please enter your phone");	//alerts the user of the empty phone
			return false;
		}
		else if(feedback ==""){
			alert("Please enter your feedback");	//alerts the user of the empty feedback
			return false;
		}
		else{	
			alert("Thank You " + name + " Your details: "+
			"Name: "+name+" "+
			"Email: "+email+" "+
			"Phone: "+phone+" "+
			"Feedback: "+ feedback+" have been submitted."); 	// alerts the user that their details are submitted
		};
	};