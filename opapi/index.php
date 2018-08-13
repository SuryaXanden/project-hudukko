<?php
if(strlen($results)>0)
{
	print_r($results);
	/* $json = json_decode($results,true);
	$it=count($json);
	if($it>0)
	{
		//continue
		echo "<br>No. of results= ".$it."<br>";
		
	} */	
}
else
{
	echo "<br>No. of results : 0";
}
?>