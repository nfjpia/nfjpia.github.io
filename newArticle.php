<?php 
	
	$title = $_POST['title'];
	$subtitle = $_POST['subtitle'];
	$author = $_POST['author'];
	$body = $_POST['body'];
	$data = "";
	print_r($_FILES['image']);
		$tmpName = $_FILES['image']['tmp_name'];
		$fp = fopen($tmpName, 'r');

		$data = fread($fp, filesize($tmpName));

		$data = addslashes($data);
		fclose($fp);

	include("databaseConnector.php");
	newBlog($title,$subtitle,$body,$author,$data);


?>