var total = 0;
	function submitform()
	{
		const opt = document.querySelector('#type');
		var price = opt.value;
		var quant = document.getElementById("quant").value;
		var discount = 1;
		var delivCost = 3.50;
		if(quant > 10 || quant < 1) {
			document.getElementById("res").innerHTML = "Invalid quantity, please resubmit";
		}
		else {
			if (quant > 2) {
				discount = 0.9;
			}
			if(quant > 3) {
				discount = 0.85;
			}
			total = (price * quant * discount + delivCost)
			document.getElementById("res").innerHTML = "Your total comes to $" + total;
		}
		
	}

	
	paypal.Buttons({
        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{
            amount: {
            value: String(total)
				  }
				}]
			  });
			}
		  }).render('#paypal-button-container');