<?php


include 'Database.php';
$db=new Database();
$con=$db->getConnection();


$json = file_get_contents('php://input');

$obj = json_decode($json, true);

$name = $obj['name'];
$username = $obj['username'];
$email = $obj['email'];
$password = $obj['password'];
$mobile = $obj['mobile'];
$dob = $obj['date'];
$address = $obj['address'];
$gender = $obj['value'];


$CheckSQL = "SELECT * FROM users WHERE username='$username'";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con, $CheckSQL));

if($gender==0)
{$gender="Male";}
elseif($gender==1)
{$gender="Female";}
else
{$gender="Others";}

if (isset($check)) {

    $ExistMSG = 'Username Already Exist, Please Try Again !!!';

    $ExistJson = json_encode($ExistMSG);


    echo $ExistJson;

} else {


    $Sql_Query = "insert into users (username,password,name,email,contact_no,DOB,gender,address) values 
    ('$username','$password','$name','$email','$mobile','$dob','$gender','$address')";


    if (mysqli_query($con, $Sql_Query)) {


        $MSG = 'true';


        $json = json_encode($MSG);


        echo $json;

    } else {

       

    }
}
mysqli_close($con);
