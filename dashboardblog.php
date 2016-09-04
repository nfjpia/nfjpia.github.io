<!DOCTYPE html>
<html lang="en">
<?php
    session_start();
    if(!isset($_SESSION['username']) || session_id() == ''){
        header("Location: login.php");
    }
    
?>
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>NFJPIA - Dashboard</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">

    <link href="css/sb-admin.css" rel="stylesheet">

    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <style type="text/css">
        textarea{
            resize: none;
        }
    </style>
</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">NFJPIA Admin</a>
            </div>
            <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav side-nav">
                    <li >
                        <a href="dashboard.php"><i class="fa fa-fw fa-dashboard"></i> Dashboard</a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-fw fa-edit"></i> Blog</a>
                    </li>
                    <li class="active">
                        <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i class="fa fa-fw fa-table"></i> Events <i class="fa fa-fw fa-caret-down"></i></a>
                        <ul id="demo" class="collapse">
                            <li>
                                <a href="#">New Event</a>
                            </li>
                            <li>
                                <a href="masterlist.php">Masterlist</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>

        <div id="page-wrapper">

            <div class="container-fluid">

                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Dashboard <small>Blog Overview</small>
                        </h1>
                        <ol class="breadcrumb">
                            <li class="active">
                                <i class="fa fa-dashboard"></i> Dashboard / Blog
                            </li>
                        </ol>
                    </div>
                </div>
                <!-- /.row -->
                    <div class="jumbotron">
                    <h1>New Article</h1>
                    <form enctype="multipart/form-data" role="form" action="newArticle.php" method="post">
                    <div class="form-group">
                                <label>Title</label>
                                <input class="form-control" placeholder="Title" name="title">
                    </div>
                    <div class="form-group">
                                <label>Subtitle</label>
                                <input class="form-control" placeholder="Subtitle" name="subtitle">
                    </div>
                    <div class="form-group">
                                <label>Author</label>
                                <input class="form-control" placeholder="Author" name="author">
                    </div>
                    <div class="form-group">
                                <label>Image</label>
                                <input type="file" accept="image/*" name="image">
                            </div>
                    <div class="form-group">
                                <label>Content</label>
                                <textarea class="form-control" rows="20" name="body"></textarea>
                    </div>
                    <button type="submit" class="btn btn-default">Create Article</button>
                    </form>
                    </p>
                </div>

               
                <!-- /.row -->

                
                <!-- /.row -->

                
                <!-- /.row -->

                
                <!-- /.row -->

            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>


</body>

</html>
