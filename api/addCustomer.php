<?php
    require_once ('connection.php');    
    if ($_SERVER['REQUEST_METHOD'] != 'POST'){
        die(json_encode(array('code' => 4, 'data' => 'Only accept Post Method')));
    }

    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
    if ($contentType !== "application/json") {
        die(json_encode(array('code' => 4, 'data' => 'Content-Type is not set as "application/json"')));
    }else{
        $content = file_get_contents('php://input');
    
        $data=json_decode($content);

        if(is_null($data)){
            die(json_encode(array('code' => 2, 'data' => 'Only json is supported')));
        }
    
        if (!property_exists($data,'name') || !property_exists($data,'email')|| !property_exists($data,'price') || !property_exists($data,'number') || !property_exists($data,'purchase')){
            die(json_encode(array('code' => 1, 'data' => 'Missing Paramenter')));
        }

        $name = $data->name;
        $email = $data->email;
        $price = $data->price;
        $number = $data->number;
        $purchase = $data->purchase;
    
        add_customer($name, $email, $price, $number, $purchase);
    }

?>