<?php
    require_once ('connection.php');
    if ($_SERVER['REQUEST_METHOD'] != 'POST'){
        die(json_encode(array('code' => 4, 'data' => 'Only accept POST Method')));
    }

    update_purchase();

?>