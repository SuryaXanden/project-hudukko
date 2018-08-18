<title>hudukko</title>
<center>
<meta name="viewport" content="width=device-width, initial-scale=1">

<head>
<!--including bootstrap libraries-->
	<script src="3jquery.min.js"></script>
	<script src="popper.min.js"></script>
	<link rel="stylesheet" href="2bootstrap.min.css">

	<link rel="stylesheet" href="7bootstrap.min.css">
	<link rel="stylesheet" href="7bootstrap-theme.min.css">
	<script src="7bootstrap.min.js"></script>
<!--including my external files-->
	<script src="help.js"></script>
	<link rel="stylesheet" href="styles.css">
</head>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
	<div class="navbar-header">
	  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span> 
	  </button>
	  <a class="navbar-brand hudukko" href="#" >hudukko</a>
	</div>
	<div class="collapse navbar-collapse" id="myNavbar">
	  <ul class="nav navbar-nav">
		<li class="active">
		<li><a href="about.php" style="color:grey;">About</a></li>
		<li><a href="mailto:hudukko@gmail.com" style="color:grey;">Contact us</a>
	  </ul>
	  </div>
  </div>
</nav>
<body style="background-color:black;">
<div>
	<a class="hudukko" href="#" style="font-size: 80px;">hudukko</a>
	<form method = "POST">
		<input type = "text" name = "prod" placeholder="Product name" autofocus autocomplete="off" required value="<?php
		if(isset($_POST['prod']))
			echo htmlspecialchars($_POST['prod']);?>"
		style="width:40%;font-size:28px;">
		
		<input type = "number" name = "price" placeholder="Price limit" step=1 autocomplete="off" required value="<?php
		if(isset($_POST['price']))
			echo htmlspecialchars($_POST['price']);?>"
		style="width:15%;font-size:28px;">
		
		<button type="submit" class="btn" style="height:36px;color:black;">
			<b>&#x1F50D;</b>
		</button>
	</form>
</div>	
<?php
//65 
//bg
/*
background: #093028;
background: -webkit-linear-gradient(to top, #237A57, #093028);
background: linear-gradient(to top, #237A57, #093028);
*/
?>