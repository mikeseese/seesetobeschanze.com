function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function do_new_response() {
    // unhide everything
    var elements = document.getElementsByClassName("new_response_field");
    for(var i = 0; i < elements.length; i++) {
        if(hasClass(elements[i], "plus_one")) {
            // plus one fields
            var guests = document.getElementById("guests");
            if(guests.checked) {
                elements[i].style.display = "block"; 
            }
        }
        else {
            // all other fields
            elements[i].style.display = "block"; 
        }
    }
    $("#do_modify").val("false");
}

function do_modify_response() {
    // hide everything
    var elements = document.getElementsByClassName("new_response_field");
    for(var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    $("#do_modify").val("false");
}

function plus_one() {
    var element = document.getElementById("guests");
    var value = element.checked;
    var plus_one_elements  = document.getElementsByClassName("plus_one");
    var can_attend = document.getElementById("can_attend_label");
    var cannot_attend = document.getElementById("cannot_attend_label");

    for(var i = 0; i < plus_one_elements.length; i++) {
        if(value) {
            plus_one_elements[i].style.display = "block"; 
            can_attend.innerText = "Yes, we'll be there!";
            cannot_attend.innerText = "No, we will celebrate from afar.";
        }
        else {
            plus_one_elements[i].style.display = "none";  
            can_attend.innerText = "Yes, I'll be there!";
            cannot_attend.innerText = "No, I will celebrate from afar.";
        }
    }
}

$(document).ready(function() {
    $("#rsvp_form").submit(function (event) {
        $("#alert_box").css('visibility', 'hidden');
        var element = document.getElementById("new_response");
        var num_errors = 0;
        var errors = [];
        var formData = $("#rsvp_form").serializeArray();
        if(element.checked) {
            // New Response
            // check if fullname filled
            var fullname0 = document.getElementById("fullname0");
            if(!fullname0.value) {
                errors[num_errors] = "Please enter your full name.";
                num_errors++;
            }
            // check if attendance recorded
            var attendance = document.getElementsByName("attendance");
            var attendance_recorded = false;
            for(var i = 0; i < attendance.length; i++) {
                if(attendance[i].checked) {
                    attendance_recorded = true;
                    break;
                }
            }
            if(!attendance_recorded) {
                errors[num_errors] = "Please record your attendance.";
                num_errors++;
            }
            // if plus one, check plus one name
            var guests = document.getElementById("guests");
            if(guests.checked) {
                var fullname1 = document.getElementById("fullname1");
                if(fullname1.value == "") {
                    errors[num_errors] = "Please enter your guest's full name.";
                    num_errors++;
                }
            }
            if(errors.length > 0) {
                // print out errors
                var error_text = "";
                for(var i = 0; i < errors.length; i++) {
                    error_text = error_text + errors[i] + "<br>";
                }
                $("#callout_text").html(error_text);
                $("#callout_box").addClass("alert");
                $("#alert_box").removeClass("success");
                $("#alert_box").css('visibility', 'visible');
                event.preventDefault();
            }
            else {
                // Submit the form using AJAX.
                $.ajax({
                    type: 'POST',
                    url: $("#rsvp_form").attr('action'),
                    data: formData
                }).done(function(response) {
                    if(response == "-1" || response == "-2") {
                        $("#callout_text").html("Unfortunately a server error occurred. Please try again later or contact rsvp@seesetobeschanze.com");
                        $("#callout_box").addClass("alert");
                        $("#callout_box").removeClass("success");
                        $("#alert_box").css('visibility', 'visible');
                    }
                    else if(response == "-3") {
                        $("#callout_text").html("The name you provided is already in our database; please use the Modify Response function to edit your RSVP.");
                        $("#callout_box").addClass("alert");
                        $("#callout_box").removeClass("success");
                        $("#alert_box").css('visibility', 'visible');
                    }
                    else {
                        $("#callout_text").html("Successfully submitted your RSVP! Thank you! We'll contact you if we have any questions.");
                        $("#callout_box").addClass("success");
                        $("#callout_box").removeClass("alert");
                        $("#alert_box").css('visibility', 'visible');
                    }
                }).fail(function(data) {
                    // Make sure that the formMessages div has the 'error' class.
                    console.log(data);
                    $("#callout_text").html("Unfortunately a server error occurred. Please try again later or contact rsvp@seesetobeschanze.com");
                    $("#callout_box").addClass("alert");
                    $("#callout_box").removeClass("success");
                    $("#alert_box").css('visibility', 'visible');
                });
                event.preventDefault();
            }
        }
        else {
            // Modify Response
            // check if full name filled
            if($("#do_modify").val() == "true") {
                // check if fullname filled
                var fullname0 = document.getElementById("fullname0");
                if(!fullname0.value) {
                    errors[num_errors] = "Please enter your full name.";
                    num_errors++;
                }
                // check if attendance recorded
                var attendance = document.getElementsByName("attendance");
                var attendance_recorded = false;
                for(var i = 0; i < attendance.length; i++) {
                    if(attendance[i].checked) {
                        attendance_recorded = true;
                        break;
                    }
                }
                if(!attendance_recorded) {
                    errors[num_errors] = "Please record your attendance.";
                    num_errors++;
                }
                // if plus one, check plus one name
                var guests = document.getElementById("guests");
                if(guests.checked) {
                    var fullname1 = document.getElementById("fullname1");
                    if(fullname1.value == "") {
                        errors[num_errors] = "Please enter your guest's full name.";
                        num_errors++;
                    }
                }
                if(errors.length > 0) {
                    // print out errors
                    var error_text = "";
                    for(var i = 0; i < errors.length; i++) {
                        error_text = error_text + errors[i] + "<br>";
                    }
                    $("#callout_text").html(error_text);
                    $("#callout_box").addClass("alert");
                    $("#alert_box").removeClass("success");
                    $("#alert_box").css('visibility', 'visible');
                    event.preventDefault();
                }
                else {
                    // Submit the form using AJAX.
                    $.ajax({
                        type: 'POST',
                        url: $("#rsvp_form").attr('action'),
                        data: formData
                    }).done(function(response) {
                        if(response == "-1" || response == "-2" || response == "-3") {
                            $("#callout_text").html("Unfortunately a server error occurred. Please try again later or contact rsvp@seesetobeschanze.com");
                            $("#callout_box").addClass("alert");
                            $("#callout_box").removeClass("success");
                            $("#alert_box").css('visibility', 'visible');
                        }
                        else {
                            $("#callout_text").html("Successfully updated your RSVP! Thank you! We'll contact you if we have any questions.");
                            $("#callout_box").addClass("success");
                            $("#callout_box").removeClass("alert");
                            $("#alert_box").css('visibility', 'visible');
                        }
                    }).fail(function(data) {
                        // Make sure that the formMessages div has the 'error' class.
                        console.log(data);
                        $("#callout_text").html("Unfortunately a server error occurred. Please try again later or contact rsvp@seesetobeschanze.com");
                        $("#callout_box").addClass("alert");
                        $("#callout_box").removeClass("success");
                        $("#alert_box").css('visibility', 'visible');
                    });
                    event.preventDefault();
                }
            }
            else {
                var fullname0 = document.getElementById("fullname0");
                if(fullname0.value == "") {
                    errors[num_errors] = "Please enter your full name.";
                    num_errors++;
                }
                if(errors.length > 0) {
                    // print out errors
                    var error_text = "";
                    for(var i = 0; i < errors.length; i++) {
                        error_text = error_text + errors[i] + "<br>";
                    }
                    $("#callout_text").html(error_text);
                    $("#callout_box").addClass("alert");
                    $("#alert_box").removeClass("success");
                    $("#alert_box").css('visibility', 'visible');
                    event.preventDefault();
                }
                else {
                    // Submit the form using AJAX.
                    $.ajax({
                        type: 'POST',
                        url: $("#rsvp_form").attr('action'),
                        data: formData
                    }).done(function(response) {
                        // Set the message text.
                        if(response == "-1") {
                            $("#callout_text").html("There was no name found in our database with the name you provided; please verify the name and try again. It should match your original RSVP; please note that guest names cannot be used to acquire an existing RSVP. If all else fails, you may submit another RSVP with a message saying to use the new RSVP.");
                            $("#callout_box").addClass("alert");
                            $("#alert_box").removeClass("success");
                            $("#alert_box").css('visibility', 'visible');
                        }
                        else if(response == "-2") {
                            $("#callout_text").html("Unfortunately a server error occurred. Please try again later or contact rsvp@seesetobeschanze.com");
                            $("#callout_box").addClass("alert");
                            $("#callout_box").removeClass("success");
                            $("#alert_box").css('visibility', 'visible');
                        }
                        else {
                            var result = $.parseJSON(response);
                            $("#fullname0").val(result['fullname0']);
                            $("#email").val(result['email']);
                            $("#phonenumber").val(result['phonenumber']);
                            if(result['attendance'] == "0") {
                                $("#cannot_attend").prop('checked', true);
                            }
                            else {
                                $("#can_attend").prop('checked', true);
                            }
                            $("#vegetarian0").val(result['vegetarian0']);
                            if(result['guests'] == "0") {
                                $("#guests").prop('checked', false);
                            }
                            else {
                                $("#guests").prop('checked', true);
                            }
                            $("#fullname1").val(result['fullname1']);
                            $("#song").val(result['song']);
                            $("#comments").val(result['comments']);
                            $("#database_id").val(result['id']);
                            do_new_response();
                            $("#do_modify").val("true");
                        }
                    }).fail(function(data) {
                        // Make sure that the formMessages div has the 'error' class.
                        console.log(data);
                        $("#callout_text").html("Unfortunately a server error occurred. Please try again later or contact rsvp@seesetobeschanze.com");
                        $("#callout_box").addClass("alert");
                        $("#callout_box").removeClass("success");
                        $("#alert_box").css('visibility', 'visible');
                    });
                    event.preventDefault();
                }
            }
        }
    });
});