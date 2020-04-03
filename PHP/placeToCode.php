<?php

require_once 'C:/xampp/htdocs/vendor/autoload.php';
require_once 'C:/xampp/htdocs/unirest-php/src/Unirest.php';

$response = Unirest\Request::get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/IN/INR/en-GB/?query=Delhi",
  array(
    "X-RapidAPI-Host" => "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "X-RapidAPI-Key" => "9800086087mshe511bab222ae47dp14fa45jsn6e3da84d11be"
  )
);

$reqStn = "";
$a = $response->body;

foreach($a->Places as $place){
    if($place->CountryName == "India"){
        $reqStn = $place->PlaceId;
    }
}

//print_r($a);
echo $reqStn;

?>