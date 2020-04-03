<?php
session_start();
include 'Database.php';
$db=new Database();
$con=$db->getConnection();

$json = file_get_contents('php://input');

$obj = json_decode($json, true);

$originStation = $obj['oStation'];
$destinationStation = $obj['dStation'];
$deptDate = $obj['dDate'];
$deptTime = $obj['dTime'];
$arrDate = $obj['aDate'];
$arrTime = $obj['aTime'];
$carrierName = $obj['fName'];
$flightNumber = $obj['fNumber'];
$flightDuration = $obj['fDuration'];
$total_fare = $obj['fPrice'];
$adults = $obj['adults'];
$children = $obj['children'];
$infants = $obj['infants'];
$classindex = $obj['classindex'];
$id= $obj['userid'];

if($classindex==0)
{$classvalue="Economy";}
elseif($classindex==1)
{$classvalue="Business";}
else
{$classvalue="First";}



$total_passengers = $adults+$children+$infants;
$RCS_count = 1;
$non_RCS_count = 1;

$cancellationCharges = 3000;
//$user_id = $_SESSION["userid"];
//$id=$user_id['user_id'];
//echo $id;
//$id=3;

$sql = "INSERT INTO bookings(user_id,originStation, destinationStation, carrierName, flightNumber,class, deptDate, arrDate, deptTime, arrTime, flightDuration, total_passengers, RCS_count, non_RCS_count, total_fare, cancellationCharges) VALUES 
($id,'$originStation', '$destinationStation', '$carrierName', '$flightNumber','$classvalue', '$deptDate', '$arrDate','$deptTime', '$arrTime', '$flightDuration', $total_passengers, $RCS_count, $non_RCS_count, '$total_fare', $cancellationCharges)";

if (mysqli_query($con, $sql)) {

    $MSG = 'Booking successful!!';


        $json = json_encode($MSG);


        echo $json;
} else {
    $MSG=  "<br>Error: " . $sql . "<br>" . mysqli_error($con);
    $json = json_encode($MSG);


    echo $json;
}



mysqli_close($con);

?>