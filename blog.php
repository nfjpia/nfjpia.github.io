<!DOCTYPE html>
<html lang="en" class="no-js">

<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>NFJPIA - Blog</title>
	<meta name="description" content="Card Expansion Effect with SVG clipPath" />
	<meta name="keywords" content="clipPath, svg, effect, layout, expansion, images, grid, polygon" />
	<meta name="author" content="Claudio Calautti for Codrops" />
	<link rel="shortcut icon" href="favicon.ico">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="css/bootstrap-theme.css">
        <link rel="stylesheet" type="text/css" href="css/site.css">
	<link rel="stylesheet" type="text/css" href="css/normalize.css" />
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.3.0/css/font-awesome.min.css" />
	<link rel="stylesheet" type="text/css" href="css/demo.css" />
	<link rel="stylesheet" type="text/css" href="css/card.css" />
	<link rel="stylesheet" type="text/css" href="css/pattern.css" />
	<link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
	<script>
	if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
		var root = document.getElementsByTagName('html')[0];
		root.setAttribute('class', 'ff');
	};
	</script>
</head>
<body class="demo-1">
<div class="firstContentBlog">
		<div class="col-sm-4">
                
            </div>

            <div class="col-sm-4 dd-about-text">
            <div class="container dd-about containerFirst">
                        <div class="dd-about-text">
                <img src="img/nflogo.png" style="width:400px;height:400px;">
                <h1 class="midnight-blue" style="margin-left:100px;margin-top:-40px;">NFJPIA</h1>
                <p class="midnight-blue" style="margin-left:100px; margin-top:-20px;">NATIONAL FEDERATION OF</p>
                <p class="midnight-blue" style="margin-left:100px; margin-top:-20px;">JUNIOR PHILIPPINE INSTITUTE</p>
                <p class="midnight-blue" style="margin-left:100px; margin-top:-20px;">OF ACCOUNTANTS</p>
                </div>
            </div> 
            </div>
		</div>
		
		<div class="content">
			<!-- trianglify pattern container -->
			<div class="pattern pattern--hidden"></div>
			<!-- cards -->
			<div class="wrapper">
				<?php
							include("databaseConnector.php");
							$rows[] = getArticles();
							
							foreach ($rows as $row) {
								foreach($row as $cell){
									echo "<div class='card'><div class='card__container card__container--closed'><svg class='card__image' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 1920 500' preserveAspectRatio='xMidYMid slice'><defs><clipPath id='clipPath1'><circle class='clip' cx='960' cy='250' r='992'></circle></clipPath></defs><image clip-path='url(#clipPath1)' width='1920' height='500' xlink:href='img/a.jpg'></image></svg><div class='card__content'><i class='card__btn-close fa fa-times'></i><div class='card__caption'><h2 class='card__title bolder'>".$cell['title']."</h2><p class='card__subtitle bolder'>".$cell['subtitle']."</p></div><div class='card__copy'><div class='meta'><span class='meta__author bolder midnight-blue'>".$cell['author']."</span><span class='meta__date bolder midnight-blue'>06/19/2015</span></div><p class='bolder midnight-blue'>".$cell['body']."</p></div></div></div></div>";
								}
							}
						?>
				
			</div>
			<!-- /cards -->
		</div><!-- /content -->

	
	

	<!-- /container -->
	<!-- JS -->
	<script src="js/vendors/trianglify.min.js"></script>
	<script src="js/vendors/TweenMax.min.js"></script>
	<script src="js/vendors/ScrollToPlugin.min.js"></script>
	<script src="js/vendors/cash.min.js"></script>
	<script src="js/Card-circle.js"></script>
	<script src="js/demo.js"></script>
</body>

</html>
