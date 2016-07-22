<?php
error_reporting(0);
$json = '{"nombre":"Luis Rodriguez", "direccion":"Catia La Mar, Edo. Vargas", "telefono":"555-55-55"}';

?>

<?php
// Vamos a mostrar un Json
header('Content-type: application/json');
echo $json;
?>


