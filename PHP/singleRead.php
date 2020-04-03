<?php
session_start();
include 'Database.php';
$db=new Database();
$con=$db->getConnection();


$json = file_get_contents('php://input');

$obj = json_decode($json, true);
//print_r($obj);

$uname = $obj['username'];
$pass = $obj['password'];
//$uname = "";
//$pass = "";

$CheckSQL = "SELECT * FROM users WHERE username='$uname' and password='$pass' ";

// Executing SQL Query.
$result=mysqli_fetch_array(mysqli_query($con, $CheckSQL));
//print_r($result);

$CheckSQL = "SELECT user_id FROM users WHERE username='$uname' and password='$pass' ";

// Executing SQL Query.
$res=mysqli_fetch_array(mysqli_query($con, $CheckSQL));
//print_r($result);
$id=$res['user_id'];
$a = new stdClass();
if (!isset($result)) {

    $InvalidMsg = "Username or Password invalid !!!";
    $a->msg = $InvalidMsg ;
    $a->id = "none";
 
    echo(json_encode(array($a)));

} else if(isset($result)){

    $ValidMsg = "Successful !!!";
    $a->msg = $ValidMsg ;
    $a->id = $id;
 
    echo(json_encode(array($a)));
    


}
else {

    $errorMsg="Error: " . $result . "<br>" . $conn->error;
    $json = json_encode($errorMsg);
    echo $json;}
mysqli_close($con);
?>