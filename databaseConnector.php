<?php
	
	function connectDB(){
		$servername = "localhost";
	$username = "root";
	$password = "root";

		$conn = mysqli_connect($servername,$username,$password);
		if (!$conn) {
		    die("Connection failed: " . mysqli_connect_error());
		}
		return $conn;
	}
	function createDB(){
		$conn = connectDB();
		$query = 'CREATE DATABASE IF NOT EXISTS nfjpia';
		mysqli_query($conn,$query);
		mysqli_select_db($conn,'nfjpia');

		$sql = "CREATE TABLE IF NOT EXISTS articles (
			id INT(1) AUTO_INCREMENT PRIMARY KEY,
			title VARCHAR(50) NOT NULL,
			body TEXT,
			created DATETIME,
			modified DATETIME
		)";

		if($conn->query($sql) === TRUE) {
		}
	}	

	


?>