<?php

require_once 'C:/xampp/htdocs/vendor/autoload.php';
require_once 'C:/xampp/htdocs/unirest-php/src/Unirest.php';
session_start();
$headers = array(
    "X-RapidAPI-Host" => "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "X-RapidAPI-Key" => "9800086087mshe511bab222ae47dp14fa45jsn6e3da84d11be",
    "Content-Type" => "application/x-www-form-urlencoded",
    "Accept" => "application/json"
  );
$data = array(
    "outboundDate" => "2020-04-10",
    "cabinClass" => "business",
    "children" => 0,
    "infants" => 0,
    "country" => "IN",
    "currency" => "INR",
    "locale" => "en-US",
    "originPlace" => "PNQ-sky",
    "destinationPlace" => "BLR-sky",
    "adults" => 1,
    "inboundDate" => "2020-04-12",
  );


$body = Unirest\Request\Body::form($data);
$response = Unirest\Request::post("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0", $headers ,$body);

$var=basename($response->headers['Location']);
//print_r($response->body);
//$arr = array(array('sesskey' => "$var"));
//print_r($arr);
//$js_arr = json_encode($arr);
//print_r($js_arr);
//$_SESSION['varname'] = $var;
//echo '<a href="try2.php"> continue </a>';

$response = Unirest\Request::get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/".$var,
  array(
    "X-RapidAPI-Host" => "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "X-RapidAPI-Key" => "9800086087mshe511bab222ae47dp14fa45jsn6e3da84d11be"
  )
);

$a = array($response->body);
//print_r($a);
//$array = array();
$outarray = array();
$inarray = array();
$sendArray = array();

foreach($a[0]->Itineraries as $Itin){
    array_push($outarray, $Itin->OutboundLegId);
    //echo $Itin->OutboundLegId;
    $inarray[] = $Itin->InboundLegId;
    //print_r("$Itin->OutboundLegId   ");
    //print_r("$Itin->InboundLegId");
    //echo '<br>';
    //print_r($outarray);
    //echo '<br>';
    //echo "Hiii";
}
//$b = json_encode($a);
//print_r(json_encode($a));
//print_r($b);
//echo '<br>';
//echo '<br>';
$legsCount = count($a[0]->Legs);
$outArrCount = count($outarray);
$inArrCount = count($inarray);
$placesCount = count($a[0]->Places);
$carriersCount = count($a[0]->Carriers);

$arrays=array();
//$op = new stdClass();


//echo($legsCount);echo '<br>';
//echo($outArrCount);echo '<br>';
//echo($inArrCount);

for($i=0; $i<$outArrCount; $i++){
    $vari = $outarray[$i];

        for($x=0; $x<$legsCount; $x++){
            if($vari == $a[0]->Legs[$x]->Id){
                $segIds = $a[0]->Legs[$x]->SegmentIds;
                $stops = $a[0]->Legs[$x]->Stops;
                break;
            }
        }
//        foreach($segIds as $segId){
//            print_r($segId);
//            echo '<br>';
//        }
//        foreach($stops as $stop){
//            print_r($stop);
//            echo '<br>';
//        }
        //echo '<br>';
        $count=0;
        $datas = array();
        foreach($segIds as $segId){

            $x = $a[0]->Segments[$segId];
            //print_r($x);
            
            $originStation = $x->OriginStation;
            $destinationStation = $x->DestinationStation;
            $departureDateTime = $x->DepartureDateTime;
            $arrivalDateTime = $x->ArrivalDateTime;
            $carrier = $x->Carrier;
            //$seg->Duration = $x->Duration;
            //$seg->FlightNumber = $x->FlightNumber;
            
            $depDT = explode("T", $departureDateTime);
            $arrDT = explode("T", $arrivalDateTime);
            
            for($x=0; $x<$placesCount; $x++){
                if($originStation == $a[0]->Places[$x]->Id){
                    $orgStationName = $a[0]->Places[$x]->Name;
                    break;
                }
            }
            
            for($x=0; $x<$placesCount; $x++){
                if($destinationStation == $a[0]->Places[$x]->Id){
                    $dstStationName = $a[0]->Places[$x]->Name;
                    break;
                }
            }
            
            for($x=0; $x<$carriersCount; $x++){
                if($carrier == $a[0]->Carriers[$x]->Id){
                    $carrName = $a[0]->Carriers[$x]->Name;
                    $carrCode = $a[0]->Carriers[$x]->Code;
                    $carrImg = $a[0]->Carriers[$x]->ImageUrl;
                    break;
                }
            }
            
            $x = $a[0]->Segments[$segId];
            //print_r($x);
            $seg = new stdClass();
            $seg->OriginStation = $orgStationName;
            $seg->DestinationStation = $dstStationName;
            $seg->DepartureDate = $depDT[0];
            $seg->DepartureTime = $depDT[1];
            $seg->ArrivalDate = $arrDT[0];
            $seg->ArrivalTime = $arrDT[1];
            $seg->FlightName = $carrName;
            $seg->Duration = $x->Duration." mins";
            $seg->FlightNumber = $carrCode."-".$x->FlightNumber;
            $seg->ImageUrl = $carrImg;
            //print_r($seg);
            //$seg=json_encode($seg);
            //print_r($seg);

//          echo '<br>';
//          echo '<br>';


            $datas[$count] = new stdClass();
            $datas[$count] = $seg;
            //print_r($datas);
//          echo '<br>';
//          echo '<br>';
            $count++;

        }
    //print_r(json_encode($datas,JSON_UNESCAPED_SLASHES));

    //echo '<br>';
    //echo $i ;
    //$meta = array('flight' => $datas);
    //echo $meta;
    //$meta = json_decode($meta);
    $op = new stdClass();
    $op->id =$i;
    $op->price = "Rs. ".$a[0]->Itineraries[$i]->PricingOptions[0]->Price;
    $op->flight = $datas; 
    //$op = json_encode($op);
    //$ans=json_encode(array($op));
    //print_r($op);  
    
    //print_r($a[0]->Itineraries[$i]->PricingOptions[0]->Price);
    array_push($arrays,$op);
    
}

//$var1=array($arrays);
$var2=json_encode($arrays);
print_r($var2);
//echo "ho";
//print_r(json_encode(array($op)));

//$a[0]->name->v = "La";

//$a = ;
//$a[1]->name = "K";
//$a[1]->sur = "Kh";
// 
//print_r(json_encode($a));
//

?>
