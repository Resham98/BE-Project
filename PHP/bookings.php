<?php

include 'Database.php';
$db=new Database();
$con=$db->getConnection();

$json = file_get_contents('php://input');

$obj = json_decode($json, true);

//print_r(now());
//date_default_timezone_set("Asia/Calcutta");

//$d = strtotime("now");
//$d = date("Y-m-d H:i:s", $d);
//echo "<br>$d ".gettype($d);

//$booking_datetime = date("Y-m-d H:i:s");
//echo $booking_datetime;
$originStation1 = $obj['oStation1'];
$destinationStation1 = $obj['dStation1'];
$deptDate1 = $obj['dDate1'];
$deptTime1 = $obj['dTime1'];
$arrDate1 = $obj['aDate1'];
$arrTime1 = $obj['aTime1'];
$carrierName1 = $obj['fName1'];
$flightNumber1 = $obj['fNumber1'];
$flightDuration1 = $obj['fDuration1'];
$originStation2 = $obj['oStation2'];
$destinationStation2 = $obj['dStation2'];
$deptDate2 = $obj['dDate2'];
$deptTime2 = $obj['dTime2'];
$arrDate2= $obj['aDate2'];
$arrTime2 = $obj['aTime2'];
$carrierName2 = $obj['fName2'];
$flightNumber2 = $obj['fNumber2'];
$flightDuration2 = $obj['fDuration2'];
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


//$user_id = 1;


$total_passengers = $adults+$children+$infants;
$RCS_count = 1;
$non_RCS_count = 1;

$cancellationCharges = 3000;


$sql = "INSERT INTO booking(user_id,originStation1, destinationStation1, carrierName1, flightNumber1,deptDate1, arrDate1, deptTime1, arrTime1, flightDuration1,
originStation2, destinationStation2, carrierName2, flightNumber2,deptDate2, arrDate2, deptTime2, arrTime2, flightDuration2,class,total_passengers, total_fare,
 RCS_count, non_RCS_count, cancellationCharges) VALUES 
($id, '$originStation1', '$destinationStation1', '$carrierName1', '$flightNumber1', '$deptDate1', '$arrDate1','$deptTime1', '$arrTime1', '$flightDuration1',
'$originStation2', '$destinationStation2', '$carrierName2', '$flightNumber2', '$deptDate2', '$arrDate2','$deptTime2', '$arrTime2', '$flightDuration2',
'$classvalue',$total_passengers,'$total_fare', $RCS_count, $non_RCS_count,  $cancellationCharges)";

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