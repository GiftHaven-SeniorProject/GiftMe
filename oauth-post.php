<?php
//TODO: curl command not executing the token endpoint
//Reference: https://developer.wordpress.com/docs/oauth2/

// Include the configuration file
require 'config.php';
//phpinfo();

//EXAMPLE: $curl = curl_init( 'https://public-api.wordpress.com/oauth2/token' );
$curl = curl_init( 'https://staging2.christophero75.sg-host.com/oauth/token' );
curl_setopt( $curl, CURLOPT_POST, true );
curl_setopt( $curl, CURLOPT_POSTFIELDS, [
    'client_id' => $client_id,
    'redirect_uri' => $redirect_url,
    'client_secret' => $client_secret,
    'code' => isset($_GET['code']) ? $_GET['code'] : null,
    //'code' => $_GET['code'], // The code from the previous request
    'grant_type' => 'authorization_code'
]);
curl_setopt( $curl, CURLOPT_RETURNTRANSFER, 1);
$auth = curl_exec( $curl );
echo $auth;
//$secret = json_decode($auth);
$secret = json_decode($auth);
echo $secret;
//check 
if ($secret !== null && isset($secret->access_token)) {
    $access_key = $secret->access_token;
} else {
    echo "The secret variable is null";
    echo "Error: Unable to retrieve access token.";
    echo "The client_secret is:";
    echo $client_secret;
}
// $access_key = $secret->access_token;

