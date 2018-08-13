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
      <a class="navbar-brand" href="#" onclick="hide()" >hudukko</a>
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
  
<!--option1
background: #536976;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #292E49, #536976);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #292E49, #536976); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

option2
background: #0F2027;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

-->

<body style="
             background: #141E30;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

             ">
<br><br>
	<div class="container">
		<div>
			<a class="hudukko" onclick="hide()" href="#" style="font-size: 104px;">hudukko</a>
			<form method = "GET" >
				<input type = "text" name = "prod" placeholder = "Product name" required autocomplete="off" value="<?php
				if(isset($_GET['prod']))
					echo htmlspecialchars($_GET['prod']);
				?>"	style="width:60%;font-size:28px;">
				
				<input type = "number" name = "price" placeholder = "Price limit" autocomplete="off" value="<?php
				if(isset($_GET['price']))
					echo htmlspecialchars($_GET['price']);
				?>" style="width:20%;font-size:28px;">
				
				<!--<input type = "submit" class="glyphicon glyphicon-search" value = "&#xe003;" >-->
				<button type="submit" class="btn " style="height:32px;color:black;"><b>&#x1F50D; </b></button>
			</form>
		</div>
	</div>		