<?php

require_once 'C:/xampp/htdocs/vendor/autoload.php';
require_once 'C:/xampp/htdocs/unirest-php/src/Unirest.php';

$json = file_get_contents('php://input');

$obj = json_decode($json, true);


$origin = $obj['origin'];
$destination = $obj['destination'];
$adults = $obj['adults'];
$children = $obj['children'];
$infants = $obj['infants'];
$classindex = $obj['classindex'];
$onlyoutbounddate = $obj['onlyoutbounddate'];

$response = Unirest\Request::get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/IN/INR/en-US/?query=".$origin,
  array(
    "X-RapidAPI-Host" => "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "X-RapidAPI-Key" => "9800086087mshe511bab222ae47dp14fa45jsn6e3da84d11be"
  )
);

$originStn = "";
$a = $response->body;

foreach($a->Places as $place){
    if($place->CountryName == "India" and $place->PlaceName == $origin){
        $originStn = $place->PlaceId;
    }
}

$response = Unirest\Request::get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/IN/INR/en-US/?query=".$destination,
  array(
    "X-RapidAPI-Host" => "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "X-RapidAPI-Key" => "9800086087mshe511bab222ae47dp14fa45jsn6e3da84d11be"
  )
);

$destinationStn = "";
$a = $response->body;

foreach($a->Places as $place){
    if($place->CountryName == "India" and $place->PlaceName == $destination){
        $destinationStn = $place->PlaceId;
    }
}

if($classindex==0)
{$classvalue="Economy";}
elseif($classindex==1)
{$classvalue="Business";}
else
{$classvalue="First";}

$headers = array(
    "X-RapidAPI-Host" => "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "X-RapidAPI-Key" => "9800086087mshe511bab222ae47dp14fa45jsn6e3da84d11be",
    "Content-Type" => "application/x-www-form-urlencoded",
    "Accept" => "application/json"
  );
$data = array(
    "outboundDate" => "$onlyoutbounddate",
    "cabinClass" => "$classvalue",
    "children" => $children,
    "infants" => $infants,
    "adults" => $adults,
    "originPlace" => "$originStn",
    "destinationPlace" => "$destinationStn",
    "country" => "IN",
    "currency" => "INR",
    "locale" => "en-US",
    "groupPricing"=> "true",
  );


$body = Unirest\Request\Body::form($data);
$response = Unirest\Request::post("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0", $headers, $body);

$var=basename($response->headers['Location']);

$response = Unirest\Request::get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/".$var,
  array(
    "X-RapidAPI-Host" => "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "X-RapidAPI-Key" => "9800086087mshe511bab222ae47dp14fa45jsn6e3da84d11be"
  )
);

$a = array($response->body);
$outarray = array();
$inarray = array();
$sendArray = array();

foreach($a[0]->Itineraries as $Itin){
    array_push($outarray, $Itin->OutboundLegId);
    //echo $Itin->OutboundLegId;
    if(array_key_exists("inboundDate", $data)){
        $inarray[] = $Itin->InboundLegId;
    }
}

$legsCount = count($a[0]->Legs);
$outArrCount = count($outarray);
$inArrCount = count($inarray);
$placesCount = count($a[0]->Places);
$carriersCount = count($a[0]->Carriers);

$arrays = array();

$count=0;
$datas = array();

for($i=0; $i<$outArrCount; $i++){
    $vari = $outarray[$i];

        for($x=0; $x<$legsCount; $x++){
            if($vari == $a[0]->Legs[$x]->Id){
                $leg = $a[0]->Legs[$x];
            
                $originStation = $leg->OriginStation;
                $destinationStation = $leg->DestinationStation;
                $departureDateTime = $leg->Departure;
                $arrivalDateTime = $leg->Arrival;

                $carrier = $leg->FlightNumbers[0]->CarrierId;
            
                $depDT = explode("T", $departureDateTime);
                $arrDT = explode("T", $arrivalDateTime);
                
                //$segIds = $a[0]->Legs[$x]->SegmentIds;
                $stops = $leg->Stops;

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
                
                $stopsArr = array();
                
                foreach($stops as $stop){
                    for($x=0; $x<$placesCount; $x++){
                        if($stop == $a[0]->Places[$x]->Id){
                            $stopsArr[] = $a[0]->Places[$x]->Name;
                            break;
                        }
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

                $seg = new stdClass();
                $seg->OriginStation = $orgStationName;
                $seg->DestinationStation = $dstStationName;
                $seg->DepartureDate = $depDT[0];
                $seg->DepartureTime = $depDT[1];
                $seg->ArrivalDate = $arrDT[0];
                $seg->ArrivalTime = $arrDT[1];
                $seg->Duration = $leg->Duration." mins";
                $seg->Stops = $stopsArr;
                $seg->FlightName = $carrName;
                $seg->FlightNumber = $carrCode."-".$leg->FlightNumbers[0]->FlightNumber;
                $seg->ImageUrl = $carrImg;
                
                $datas[$count] = new stdClass();
                $datas[$count] = $seg;
                
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

    //echo $i ;
    //$meta = array('flight' => $datas);
    //echo $meta;
    //$meta = json_decode($meta);
    //echo "hehe";
    $op = new stdClass();
    $op->id = $i;
    $op->type = "Out";
    $op->price = "Rs. ".$a[0]->Itineraries[$i]->PricingOptions[0]->Price;
    $op->flight = $datas; 
    
    //$op = json_encode($op);
    //$ans=json_encode(array($op));
    //print_r($op);  
    
    //print_r($a[0]->Itineraries[$i]->PricingOptions[0]->Price);
    
    array_push($arrays,$op);

}

//$var1=array($arrays);
//echo "haha";
$var2=json_encode($arrays);
echo($var2);

//echo "ho";
//print_r(json_encode(array($op)));

?>