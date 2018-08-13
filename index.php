<?php
require('ui.php');
if( isset($_POST['prod']) && isset($_POST['price']) )//After submitting
{
	//Safety checks	
	if( $_POST['price'] <= 0 )//check1
	{
		die("<script>alert('Price must be a positive number!');</script>");
	}
	
	if( strlen($_POST['prod']) < 2 )//check2
	{
		die("<script>alert('Product name must be atleast 3 characters long!');</script>");
	}
	
	//GET the user input
	$prod = htmlspecialchars($_POST['prod']);
	$price = htmlspecialchars($_POST['price']);
	
	//formatting the user's input to generate a query
	$uq = $prod." ".$price;
	
	require("gotonode.php");//Move to NodeJS
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
