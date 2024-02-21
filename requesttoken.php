<?php
//TO DO: Requesting access token/authorization code returned from WP OAuth Server
$client_id     = 'qPhrOYDqVLwSPYzPPPqvVZ3mrHMiVylkPc99O5XS';
$client_secret = 'A1mfNHeaNUpF06p8KSEalVplNfiyB5rkBaTLX35F';
 
$curl_post_data = array(
   'grant_type'    => 'authorization_code',
   'code'          => $_GET['code'],
   'redirect_uri'  => 'http://oauth.dev',
   'client_id'     => $client_id, 
   'client_secret' => $client_secret
);

// Initialize a CURL session.
$curl = curl_init( $server_url . '/oauth/token/' );
 
// Uncomment if you want to use CLIENT ID AND SECRET IN THE HEADER
//curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
//curl_setopt($curl, CURLOPT_USERPWD, $client_id.':'.$client_secret); // Your credentials goes here
curl_setopt( $curl, CURLOPT_RETURNTRANSFER, true );
curl_setopt( $curl, CURLOPT_POST, true );
curl_setopt( $curl, CURLOPT_POSTFIELDS, $curl_post_data );
curl_setopt( $curl, CURLOPT_SSL_VERIFYPEER, false );
curl_setopt( $curl, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 GTB5' );
curl_setopt( $curl, CURLOPT_REFERER, 'http://www.example.com/1' );
 
$curl_response = curl_exec( $curl );
curl_close( $curl );
echo '<pre>';
print_r( $curl_response );
echo '</pre>';
?>