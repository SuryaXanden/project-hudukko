<?php
require('ui.php');
if( isset($_GET['prod']) && isset($_GET['price']) )//After submitting
{
	//Safety checks	
	/*if( $_GET['price'] < 1 )//check1
	{
		die("<script>alert('Price must be greater than ZERO !');</script>");
	}*/
	
	if( strlen($_GET['prod']) < 2 )//check2
	{
		die("<script>alert('Product name must be atleast 3 characters long');</script>");
	}
	
	//GET the user input
	$prod = htmlspecialchars($_GET['prod']);
	$price = htmlspecialchars($_GET['price']);
	
	//formatting the user's input to generate a query
	$uq = $prod." ".$price." &#8377;"."";
	
	//connect to database
	 $con = mysqli_connect('localhost','root','','aio');//local deployemnt credentials
	//$con = mysqli_connect('sql105.epizy.com','epiz_22433247','HFbtjraKiIke','epiz_22433247_aio');//web deployemnt credentials
	
//---from here---
	$c = "";
	
	$res = explode(" ",$prod);

	foreach($res as $itr)
	{
		if((strlen($itr)>2) && ($itr !== " "))
		{
			$sql="select distinct(cat) from cat where term like '%".strtolower($itr)."%'";
			$query=mysqli_query($con,$sql);
			while($result = mysqli_fetch_assoc($query))
			{
				$c .= $result['cat'];
			}
		}	
	}
	//retrive detais from db
	$sql="select * from linq where cat like 'A'";//Default
	
	if($c !== "")//change this
	{
		for($i=0;$i<strlen($c);$i++)
		{
			$sql .= " or cat like '".strtoupper($c{$i})."'";//charAt() //and-or
		}		
	}	
//---until here---
	$query=mysqli_query($con,$sql);
	echo "<h3>Find it on:</h3><br>";
	
	echo "<div class=\"container-fluid\" style=\"width:70%;\"><div class=\"container-fluid\"><div class=\"row\" >";
	
	while($result = mysqli_fetch_assoc($query))
	{
		$uq = str_replace(" ",$result['sep'],$uq);
			//---start of <a>---
			echo "<a href=\"".$result['ql'];
			if($result['company']=="Amazon")
				echo substr($uq,0,-2);
			else
			{
				echo $uq;
			}
			echo "\" target=\"_blank\">";
				//---closing <a>---
				
		echo "<div id=\"results\" class=\"col-sm\">";
				echo "<img id=\"results\" src=\"".$result['fav']."\"/>";
				echo "&Tab;".ucwords($result['company']);				
		echo "</div>";
		echo "</a>";
		$uq = str_replace($result['sep']," ",$uq);
	}
	
	echo "</div></div></div>";
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