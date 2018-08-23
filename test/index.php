<?php
$result = shell_exec("node test");

$myJSON = json_decode($result,true);

foreach($myJSON as $key => $value)
{
    echo "Key = [" . $key . "], Value = [" . $value['html'] ."]<br>";
}
// count($myJSON);//length of JSON
?>