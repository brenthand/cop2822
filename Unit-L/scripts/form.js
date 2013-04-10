//Brenton Hand HTML5 Unit L Visual Workshop
function addPlaceholders() {
  if (!Modernizr.input.placeholder) {
		var inputs = document.getElementsByTagName("input");
		for (var i=0;i<inputs.length;i++) {
		  if (inputs[i].getAttribute("type") == "text" || "email") {
			  if (inputs[i].getAttribute("placeholder") && inputs[i].getAttribute("placeholder").length > 0) {
			    inputs[i].value = inputs[i].getAttribute("placeholder");
			    inputs[i].onclick = function() {
 				    if (this.value == this.getAttribute("placeholder")) {
 			 	     this.value = "";
  				   }
  			    return false;
  				  }
  			  inputs[i].onblur = function() {
  			  	if (this.value.length < 1) {
   			 	    this.value = this.getAttribute("placeholder");
     				  }
					  }
   				}
  			}
			}
		}
	
	window.onload=function() {
	addPlaceholders();
	}
}
	
function confirmMessage() {
	var name = document.getElementById('fnameinput').value;
	alert("Your info has been submitted. We'll contact you within 2 days,\n" + name + "!");
}

function validation() {
	var fname = document.getElementById("fnameinput").value;
	if (fname == null || fname == "" || fname == document.getElementById("fnameinput").getAttribute("placeholder")) {
		alert("First name must be filled out");
		return false;
	}
	var lname = document.getElementById("lnameinput").value;
	if (lname == null || lname == "" || lname == document.getElementById("fnameinput").getAttribute("placeholder")) {
		alert("last name must be filled out");
		return false;
	}
	confirmMessage();
	document.forms[0].reset();
}

function hello() {
	alert("hello");
}
