<title>hudukko</title>
<?php
if( isset($_GET['prod']) && isset($_GET['price']) )//After submitting
{
	if( ($_GET['price'] < 1 ) || ( strlen($_GET['prod']) < 2 ))//Safety checks
	{
		die();
	}
	
	//GET the user input
	$prod = htmlspecialchars($_GET['prod']);
	$price = htmlspecialchars($_GET['price']);
	
	//formatting the user's input to generate a query
	$uq = $prod." ".$price."rs";
	
	//connect to database
	$con = mysqli_connect('localhost','root','','aio');//local deployemnt credentials
	// $con = mysqli_connect('sql105.epizy.com','epiz_22433247','HFbtjraKiIke','epiz_22433247_aio');//web deployemnt credentials
	
//---Alteration Starts---
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
//---Alteration Ends---
	$query=mysqli_query($con,$sql);
	$cnt = mysqli_num_rows($query);
	
	$count = 0;
	echo "{";
	while($result = mysqli_fetch_assoc($query))
	{
		$uq = str_replace(" ",$result['sep'],$uq);
		
		echo "\"company_" . $count++ . "\":{";
		echo "\"company\": \"" . ucwords($result['company']) ."\",";
		
		echo "\"url\": \"" . $result['ql'];
		
		if($result['company']=="Amazon")
			echo substr($uq,0,-2);
		else
			echo $uq;
		
		echo "\"";
		
		$uq = str_replace($result['sep']," ",$uq);
		echo "}";
		if($count<$cnt)
			echo ",";
	}	
	echo "}";
}
else
{
	echo "
	Send Product name as 'prod' & Price limit as 'price' to api.php<br><br>
	Example: <a href=\"http://www.hudukko.epizy.com/index.php?prod=shoes&price=1000\">http://www.hudukko.epizy.com/index.php?prod=shoes&price=1000</a>
	";
}
?>
