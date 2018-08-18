<?php
$link = "\"".$prod."\" ".$price;
$os = substr(PHP_OS_FAMILY,0,3);
if($os == "Lin")
	$node = "node ./safe/scrape.js ".$link;
else if($os == "Win")
	$node = "node .\\safe\\scrape.js ".$link;
$results = shell_exec($node);
echo $results;
?>