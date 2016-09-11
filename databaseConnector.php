<?php
	
	function connectDB(){
		$servername = "localhost:3307";
	$username = "nfjpia";
	$password = "nfjpia123";

		$conn = mysqli_connect($servername,$username,$password);
		if (!$conn) {
		    die("Connection failed: " . mysqli_connect_error());
		}
		$query = 'CREATE DATABASE IF NOT EXISTS nfjpia';
		mysqli_query($conn,$query);
		mysqli_select_db($conn,'nfjpia');
		return $conn;
	}
	function createDB(){
		$conn = connectDB();
		

		$sql = "CREATE TABLE IF NOT EXISTS articles (
			id INT(1) AUTO_INCREMENT PRIMARY KEY,
			title VARCHAR(50) NOT NULL,
			body TEXT,
			created DATETIME,
			modified DATETIME
		)";

		if($conn->query($sql) === TRUE) {
		}

		$sql = "CREATE TABLE IF NOT EXISTS events (
			id INT(1) AUTO_INCREMENT PRIMARY KEY,
			name VARCHAR(50) NOT NULL
		)";

		if($conn->query($sql) === TRUE) {
		}

		$sql = "CREATE TABLE IF NOT EXISTS registrants (
			id INT(1) AUTO_INCREMENT PRIMARY KEY,
			name VARCHAR(50) NOT NULL,
			region VARCHAR(50),
			localChapter VARCHAR(50),
			contactNumber VARCHAR(50),
			email VARCHAR(50),
			course VARCHAR(50),
			year VARCHAR(50),
			size VARCHAR(50),
			eventID INT(1),
			FOREIGN KEY (eventID) REFERENCES events(id)
		)";

		if($conn->query($sql) === TRUE) {
		}
	}	

	function registerStudents($name,$region,$localChapter,$contactNumber,$email,$course,$year,$size,$eventID){
		$conn = connectDB();
		//$sql = $conn->prepare("INSERT INTO registrants (id,name,region,localChapter,contactNumber,email,position,course,year,size,eventID) VALUES (?,?,?,?,?,?,?,?,?,?,?");

		$sql = "INSERT INTO registrants (id,name,region,localChapter,contactNumber,email,course,year,size,eventID) VALUES (0,'$name','$region','$localChapter','$contactNumber','$email','$course','$year','$size',1)";

		if (mysqli_query($conn, $sql)) {
		    echo "New record created successfully";
		} else {
		    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}

		/*$sql->bind_param("isssssssssi",0,$name,$region,$localChapter,$contactNumber,$email,$position,$course,$year,$size,$eventID);

		$sql->execute();*/

	}

	function getStudents(){
		$conn = connectDB();
		$sql = "SELECT * from registrants";

		$result = mysqli_query($conn,$sql);
		$rows = array();
	    while($row = $result->fetch_assoc()) {
	        $rows[] = $row;
	    }
	    return $rows;


	}





?>