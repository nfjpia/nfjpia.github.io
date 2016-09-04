<!DOCTYPE html>
<?php
   include("databaseConnector.php");
   createDB();
   
   
   if(isset($_POST['login'])){
	if($_POST['username'] === 'almar' && $_POST['password'] === 'admin123'){
		session_start();
		$_SESSION['username']='almar';

		echo "<script>window.open('dashboard.php','_self')</script>";
	}


	else {

		echo "<script>alert('Email or password is not correct, try again!')</script>";

	}
	

	}

?>
<html>
<head>
	<title>NFJPIA</title>

        
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="css/bootstrap-theme.css">
        <link rel="stylesheet" type="text/css" href="css/site.css">
        <link rel="stylesheet" type="text/css" href="css/login.css">
       
        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

    </head>
</head>
<body>
	<div class="content">
		<div class="row">
			<div class="col-sm-3">
			</div>
			<div class="col-sm-6">
			<center>
			<br><br><br><br>
				<div class="boxHead">
				<br>
					<h1 class="bolder larger cloud">NFJPIA</h1>
				</div>
				<div class="boxBody">
				<br><br>
					<form action="" method="post">
					<input type="text" name="username" placeholder="Username"><br><br>
                    <input type="password" name="password" placeholder="Password"><br><br><br>
                    <button name="login" class="loginButton">Submit</button><br><br><br>
                    </form>
                    <a href="index.html" class="bolder midnight-blue"><< Back</a>
				</div>

			</center>

			</div>
			<div class="col-sm-3">
			</div>
		</div>
	</div>
</body>
</html>