<?php
require('ui.php');
if( isset($_GET['prod']) && isset($_GET['price']) )//After submitting
{
	//Safety checks	
	if( $_GET['price'] < 0 )//check1
	{
		die("<script>alert('Price must be a positive number!');</script>");
	}
	
	if( strlen($_GET['prod']) < 2 )//check2
	{
		die("<script>alert('Product name must be atleast 3 characters long!');</script>");
	}
	
	//GET the user input
	$prod = htmlspecialchars($_GET['prod']);
	$price = htmlspecialchars($_GET['price']);
	
	//formatting the user's input to generate a query
	$uq = $prod." ".$price;
	
	//connect to database
	// $con = mysqli_connect('localhost','root','','aio');//local deployemnt credentials
	//$con = mysqli_connect('sql105.epizy.com','epiz_22433247','HFbtjraKiIke','epiz_22433247_aio');//web deployemnt credentials
	
	require("gotonode.php");//Move to python
}
?>
		</div>
	</div>
</body>
<!-- Instructions for usage -->
<footer align="center">
	<div id="help" style="display:none;">
		<table align="center">
          	<tr><td><h1>How to use</h1></td></tr>
			<tr><td><font color="orange">Step 1:&Tab;&Tab;Enter the product name </font>Ex:<alt> Black shoes </alt></td></tr>
			<tr><td>Step 2:&Tab;&Tab;Enter the price limit Ex:<alt> 1000</alt></td></tr>
			<tr><td><font color="lightgreen">Step 3:&Tab;&Tab;Click the Search icon</font></td></tr>
		</table>
	</div>
</footer>
