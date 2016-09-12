<?php

	$name = $_POST['nameSolo'];
	$region = $_POST['regionSolo'];
	$localChapter = $_POST['chapterSolo'];
	$size = $_POST['shirtSolo'];
	$course = $_POST['courseSolo'];
	$year = $_POST['yearSolo'];
	$email = $_POST['emailSolo'];
	$contactNumber = $_POST['contactSolo'];

	include("databaseConnector.php");

	registerStudents($name,$region,$localChapter,$contactNumber,$email,$course,$year,$size,0);
	header("Location: registration.html");
?>