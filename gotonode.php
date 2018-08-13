<?php
$link = "\"".$prod."\" ".$price;
$node = "node .\\safe\\scrape.js ".$link;
$results = shell_exec($node);
echo $results;
?>
