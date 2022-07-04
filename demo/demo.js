(function($){ 
'use strict'; 

 $("#paymentStatus").on('change', function() {
        var paymentStatus = $(this).children("option:selected").val();
        if (paymentStatus != '') {
        if (paymentStatus  == "waiting") {
        	location.reload(true);
        }else{
            
			var data_url = "demo/ajax.json";
			var walletAddress = $("#wallet").text();
          
			$.ajax({
			type: "POST",
			url: data_url,
			data: {status: paymentStatus,wallet: walletAddress},
			dataType: "json",
			success: function(data) {
             
			},
			
			error: function(e) { 
                console.log(e);
           }
			});
        }


      
}
});





})(jQuery);