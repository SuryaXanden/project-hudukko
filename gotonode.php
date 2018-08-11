<?php
if($price<=0)
{
	$link = " \"".$prod."\" "."\"\"";
}
else
{
	$link = " \"".$prod."\" ".$price;
}

$node = "node .\\safe\\scrape.js ".$link;

$results = shell_exec($node);
echo $results;
?>
