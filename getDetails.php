<?php

$path = dirname(__FILE__);

require_once($path . '/vendor/autoload.php');

use Zillow\ZillowClient;

var_dump(getenv(zid));
die();

$client = new ZillowClient(getenv(zid));

try {
	$client->GetSearchResults(['address' => $_GET['address'], 'citystatezip' => $_GET['citystatezip']]);
} catch(Exception $e) {
	echo $e->getMessage();
}

if($client->isSuccessful()) {
	$response = $client->getResponse();
	// enter address into db  don't forget to sanitize
	// return zestimate and other details as json
	return json_encode($response);
	
} else {
	echo $client->getStatusCode() . ':' . $client->getStatusMessage(). PHP_EOL;
	// return property not found
}
