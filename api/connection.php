<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    mysqli_report(MYSQLI_REPORT_STRICT);
    define('HOST','localhost');
    define('USER','root');
    define('PASS','');
    define('DB','customers');

    function connect_database(){
        try{
            $dbCon = new mysqli(HOST,USER,PASS,DB);
        }catch(mysqli_sql_exception $e){
            die(array('code' => 5, 'data' => 'Unable to connect: ' . $e->getMessage()));
        }
        return $dbCon;
    }

    function close_database($db){
        $db->close();
    }

    function get_customers(){
        $dbCon = connect_database();
        $sql = 'SELECT * FROM customer WHERE purchase = 0';

        try{
            $result = mysqli_query($dbCon,$sql);
            close_database($dbCon);
            if(!$result){
                die(json_encode(array('code' => 1, 'data' => 'Error')));
            }
            $data = [];
            while ($row = mysqli_fetch_assoc($result)){
                $data[] = $row;
            }
            die(json_encode(array('code' => 0, 'data' => $data)));
        }catch(mysqli_sql_exception $e){
            die(json_encode(array('code' => 1, 'data' => 'Unable to connect: ' . $e->getMessage())));
        }
    }

    function add_customer($name,$email,$price,$number,$purchase){
        $dbCon = connect_database();

        $sql = "INSERT INTO customer(`name`,`email`,`price`,`number`,`purchase`) VALUES('$name','$email','$price','$number','$purchase')";

        if ($dbCon -> query($sql)){
            $dbCon -> close();
            echo json_encode(array('code' => 0, 'data' => 'Add successfully'));
        }else{
            $dbCon -> close();
            die(json_encode(array('code' => 1, 'data' => 'Add Unsuccessful')));
        }
    }

    function delete_customer($id){
        $dbCon = connect_database();

        $sql = "DELETE FROM customer WHERE id = '$id'";

        if ($dbCon -> query($sql)){
            $dbCon -> close();
            echo json_encode(array('code' => 0, 'data' => 'Delete successfully'));
        }else{
            $dbCon -> close();
            die(json_encode(array('code' => 1, 'data' => 'Delete unsuccessful')));
        }
    }

    function update_purchase(){
        $dbCon = connect_database();

        $sql1 = 'UPDATE customer set purchase = 1';

        $sql2 = 'SELECT * FROM customer WHERE purchase=0';

        $res = $dbCon->query($sql2);
        $count = mysqli_num_rows($res);

        if ($count == 0){
            echo json_encode(array('code' => 0, 'data' => 'All of tickets are purchased'));
        }else{
            if ($dbCon -> query($sql1)){
                $dbCon -> close();
                echo json_encode(array('code' => 0, 'data' => 'Purchase successfully'));
            }else{
                $dbCon -> close();
                die(json_encode(array('code' => 1, 'data' => 'Purchase unsuccessful')));
            }
        }
    }

?>