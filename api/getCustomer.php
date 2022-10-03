<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    require_once ('connection.php');
    if ($_SERVER['REQUEST_METHOD'] != 'GET'){
        die(json_encode(array('code' => 4, 'data' => 'Only accept Get Method')));
    }
    
    get_customers();

?>