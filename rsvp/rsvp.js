var t;

(function($){
	$.fn.visibility = function(status) {
		this.css('visibility',status);
		return this;
	}
})(jQuery);

function hidemsg() {
	//$("#message").hide();
	$("#message").visibility('hidden');
}

function displaymsg(msg) {
	clearTimeout(t);
	$("#messagetext").text(msg);
	//$("#message").show();
	$("#message").visibility('visible');
	t = setTimeout(hidemsg,5000);
}

if ($("#message").attr("class").search("error") === -1) {
	$("#message").visibility('hidden'); //hide the javascript warning
} else {
	//an atual message, lets display it
	t = setTimeout(hidemsg,10000);
}

function guestchanged() {
	var val = parseInt($("#guests").val(), 10);
	var i;

	for (i=val+1;i<=5;i++) {
		$("#rowfirst"+i).hide();
		$("#rowveg"+i).hide();
	}
	
	for (i=1;i<=val;i++) {
		$("#rowfirst"+i).show();
		$("#rowveg"+i).show();
	}
	
	if (val === 0) {
		$("#spanyes").text("Yes, I can attend");
		$("#spanno").text("No, I cannot attend");
	} else {
		$("#spanyes").text("Yes, we can attend");
		$("#spanno").text("No, we cannot attend");
	}
}

function pageload() {
	guestchanged();
}

$("#guests").change(function() {
  guestchanged();
});

function validateemail(email) { 
	var re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return null!==email.match(re);
}

var existing = false;
$(".rsvptype").change(function() {
	if ($(this).attr('id') === 'new') {
		$("#submit").attr('value','Submit');
		$("#myTable").show();
		
		existing = false;
		
	} else if ($(this).attr('id') === 'existing') {
		$("#submit").attr('value','Retrieve');
		$("#myTable").hide();
		
		existing = true;
		
	}
});

function numword(i) {
	switch(i) {
		case 1:
			return 'one';
		case 2:
			return 'two';
		case 3:
			return 'three';
		case 4:
			return 'four';
		case 5:
			return 'five';
	}
}

function checkdata() {
	//first check the email address
	var email = $("#email").val();
	
	if (!validateemail(email)) {
		displaymsg("Please enter valid email address.");
		return false;
	}

	if (!existing) {
		
		var str = $("#fullname0").val();
		if (!str) {
			displaymsg("Please enter your full name.");
			return false;
		}
		
		if (str.indexOf(" ")===-1) {
			displaymsg("Please enter your full name.");
			return false;
		}
		
		var val = parseInt($("#guests").val(), 10);
		var i;
		for (i=1;i<=val;i++) {
			str = $("#fullname"+i).val();
			if (!str) {
				displaymsg("Please enter guest "+numword(i)+"'s full name.");
				return false;
			}
			if (str.indexOf(" ")===-1) {
				displaymsg("Please enter guest "+numword(i)+"'s full name.");
				return false;
			}
		}
	
	}
	
	return true;
}