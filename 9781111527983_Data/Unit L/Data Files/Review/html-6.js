function insertPlaceholders() {
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
	}