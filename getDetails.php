<?php

$path = dirname(__FILE__);

require_once($path . '/vendor/autoload.php');

use Zillow\ZillowClient;

$client = new ZillowClient(getenv(zid));

try {
	$client->GetSearchResults(['address' => '14506 Swiss Ln', 'citystatezip' => 'Truckee CA 96161']);
} catch(Exception $e) {
	echo $e->getMessage();
}

if($client->isSuccessful()) {
	$response = $client->getResponse();
	// enter address into db
	// return zestimate and other details as json
	return json_encode($response);
	
} else {
	echo $client->getStatusCode() . ':' . $client->getStatusMessage(). PHP_EOL;
}
