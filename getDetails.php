<?php

$path = dirname(__FILE__);

require_once($path . '/vendor/autoload.php');

use Zillow\ZillowClient;

$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();

$client = new ZillowClient(getenv(zid));

$address = $_GET['address'];
$citystatezip = $_GET['citystatezip'];

try {
	$client->GetSearchResults(['address' => $address, 'citystatezip' => $citystatezip ]);
} catch(Exception $e) {
	echo $e->getMessage();
}

if($client->isSuccessful()) {
	$response = $client->getResponse();
	
	// __________ enter address into db  don't forget to sanitize
	// __________ return zestimate and other details as json
	
	echo json_encode($response);
	
} else {
	echo $client->getStatusCode() . ':' . $client->getStatusMessage(). PHP_EOL;
	// __________ return property not found
}
