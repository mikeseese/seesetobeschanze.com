<?php

	// ** MySQL settings - You can get this info from your web host ** //
	define('DB_NAME', 'db');    		// The name of the database
	define('DB_USER', 'user');     		// Your MySQL username
	define('DB_PASSWORD', 'password'); 	// ...and password
	define('DB_HOST', 'localhost');    			// 99% chance you won't need to change this value

	function get_ip() {
		if ($_SERVER['HTTP_X_FORWARD_FOR']) {
			return $_SERVER['HTTP_X_FORWARD_FOR'];
		} else {
			return $_SERVER['REMOTE_ADDR'];
		}
	}
	
	$data = $_POST;
	
	
	if ($data['rsvptype']) {
		//retrieve will equal true if it is a retrieve, false if it is an existing modification
		$ret = ($data['rsvptype'] == "retrieve");
		
		$conn = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD) or die ('Error connecting to mysql');
		mysql_select_db(DB_NAME);
		
		if($data['do_modify'] == "true") {
			// update current
			
			if(isset($data['vegetarian0'])) {
				$data['vegetarian0'] = 1;
			}
			if(isset($data['vegetarian1'])) {
				$data['vegetarian1'] = 1;
			}
			if(!isset($data['guests'])) {
				$data['fullname1'] = "";
				$data['vegetarian1'] = "";
			}
			else {
				$data['guests'] = 1;
			}
			$data['fullname2'] = "";
			$data['vegetarian2'] = "";
			$data['fullname3'] = "";
			$data['vegetarian3'] = "";
			$data['fullname4'] = "";
			$data['vegetarian4'] = "";
			$data['fullname5'] = "";
			$data['vegetarian5'] = "";

			$query = sprintf("UPDATE rsvp SET IP = '%s', EMAIL = '%s', NAME0 = '%s', ATTEND = %d, VEG0 = %d, PHONENUMBER = '%s', COMMENTS = '%s', GUESTS = %d, NAME1 = '%s', VEG1 = %d, NAME2 = '%s', VEG2 = %d, NAME3 = '%s', VEG3 = %d, NAME4 = '%s', VEG4 = %d, NAME5 = '%s', VEG5 = %d, SONG = '%s' WHERE ID = '%s'",
					mysql_real_escape_string(get_ip()),
					mysql_real_escape_string($data['email']),
					mysql_real_escape_string($data['fullname0']),
					mysql_real_escape_string($data['attendance']),
					mysql_real_escape_string($data['vegetarian0']),
					mysql_real_escape_string($data['phonenumber']),
					mysql_real_escape_string($data['comments']),
					mysql_real_escape_string($data['guests']),
					mysql_real_escape_string($data['fullname1']),
					mysql_real_escape_string($data['vegetarian1']),
					mysql_real_escape_string($data['fullname2']),
					mysql_real_escape_string($data['vegetarian2']),
					mysql_real_escape_string($data['fullname3']),
					mysql_real_escape_string($data['vegetarian3']),
					mysql_real_escape_string($data['fullname4']),
					mysql_real_escape_string($data['vegetarian4']),
					mysql_real_escape_string($data['fullname5']),
					mysql_real_escape_string($data['vegetarian5']),
					mysql_real_escape_string($data['song']),
					mysql_real_escape_string($data['database_id']));
				
			$result = mysql_query($query);

			echo "1";
		}
		elseif ($ret) {		
			//retrieve the data
			$query = sprintf("SELECT * FROM rsvp where ID=(SELECT MAX(ID) FROM rsvp where NAME0 = '%s')",
				mysql_real_escape_string($data['fullname0']));
				
			$result = mysql_query($query);
			if ($result) {
				if ($row = mysql_fetch_assoc($result)) {
					//these is an name match
					$data['fullname0'] = $row['NAME0'];
					$data['email'] = $row['EMAIL'];
					$data['attendance'] = $row['ATTEND'];
					$data['vegetarian0'] = $row['VEG0'];
					$data['phonenumber'] = $row['PHONENUMBER'];
					$data['comments'] = $row['COMMENTS'];
					$data['guests'] = $row['GUESTS'];
					$data['fullname1'] = $row['NAME1'];
					$data['vegetarian1'] = $row['VEG1'];
					$data['fullname2'] = $row['NAME2'];
					$data['vegetarian2'] = $row['VEG2'];
					$data['fullname3'] = $row['NAME3'];
					$data['vegetarian3'] = $row['VEG3'];
					$data['fullname4'] = $row['NAME4'];
					$data['vegetarian4'] = $row['VEG4'];
					$data['fullname5'] = $row['NAME5'];
					$data['vegetarian5'] = $row['VEG5'];
					$data['song'] = $row['SONG'];
					$data['id'] = $row['ID'];
					echo json_encode($data);
				} else {
					//no name match
					echo "-1";
				}
			}
		} else {
			//submit the data
			
			if(isset($data['vegetarian0'])) {
				$data['vegetarian0'] = 1;
			}
			if(isset($data['vegetarian1'])) {
				$data['vegetarian1'] = 1;
			}
			if(!isset($data['guests'])) {
				$data['fullname1'] = "";
				$data['vegetarian1'] = "";
			}
			else {
				$data['guests'] = 1;
			}
			$data['fullname2'] = "";
			$data['vegetarian2'] = "";
			$data['fullname3'] = "";
			$data['vegetarian3'] = "";
			$data['fullname4'] = "";
			$data['vegetarian4'] = "";
			$data['fullname5'] = "";
			$data['vegetarian5'] = "";

			$query = sprintf("SELECT * FROM rsvp where ID=(SELECT MAX(ID) FROM rsvp where NAME0 = '%s')",
				mysql_real_escape_string($data['fullname0']));
				
			$result = mysql_query($query);

			if ($result && mysql_fetch_assoc($result)) {
				// result 
				echo "-3";
			}
			else {
				$query = sprintf("INSERT INTO rsvp SET IP = '%s', EMAIL = '%s', NAME0 = '%s', ATTEND = %d, VEG0 = %d, PHONENUMBER = '%s', COMMENTS = '%s', GUESTS = %d, NAME1 = '%s', VEG1 = %d, NAME2 = '%s', VEG2 = %d, NAME3 = '%s', VEG3 = %d, NAME4 = '%s', VEG4 = %d, NAME5 = '%s', VEG5 = %d, SONG = '%s'",
					mysql_real_escape_string(get_ip()),
					mysql_real_escape_string($data['email']),
					mysql_real_escape_string($data['fullname0']),
					mysql_real_escape_string($data['attendance']),
					mysql_real_escape_string($data['vegetarian0']),
					mysql_real_escape_string($data['phonenumber']),
					mysql_real_escape_string($data['comments']),
					mysql_real_escape_string($data['guests']),
					mysql_real_escape_string($data['fullname1']),
					mysql_real_escape_string($data['vegetarian1']),
					mysql_real_escape_string($data['fullname2']),
					mysql_real_escape_string($data['vegetarian2']),
					mysql_real_escape_string($data['fullname3']),
					mysql_real_escape_string($data['vegetarian3']),
					mysql_real_escape_string($data['fullname4']),
					mysql_real_escape_string($data['vegetarian4']),
					mysql_real_escape_string($data['fullname5']),
					mysql_real_escape_string($data['vegetarian5']),
					mysql_real_escape_string($data['song']));
				
				mysql_query($query);

				echo "0";
			}
		}
		
		mysql_close($conn);
	}
	else {
		echo "-2";
	}
	
?>