<?php

	$num = $_POST['idnum'];
	$region = $_POST['regionGroup'];
	$localChapter = $_POST['chapterGroup'];

	include("databaseConnector.php");
	for($i = 1;$i<=$num;$i++){
		$name = $_POST['nameGroup'.$i];
		$course = $_POST['courseGroup'.$i];
		$year = $_POST['yearGroup'.$i];
		$contactNumber = $_POST['contactSpecificGroup'.$i];
		$email = $_POST['emailSpecificGroup'.$i];
		$size = $_POST['sizeGroup'.$i];

		registerStudents($name,$region,$localChapter,$contactNumber,$email,$course,$year,$size,0);

	}
?>