<?php
$curl = curl_init( 'https://staging2.christophero75.sg-host.com/oauth/token' );
// Set options to return the response as a string
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Execute the cURL request
$response = curl_exec($curl);

// Check for cURL errors
if (curl_errno($curl)) {
    echo 'Error: ' . curl_error($curl);
} else {
    // Output the result
    echo $response;
}

// Close cURL session
curl_close($curl);
// curl_setopt( $curl, CURLOPT_POST, true );
// curl_setopt( $curl, CURLOPT_POSTFIELDS, array(
//     'client_id' =&amp;gt; your_client_id,
//     'redirect_uri' =&amp;gt; your_redirect_url,
//     'client_secret' =&amp;gt; your_client_secret_key,
//     'code' =&amp;gt; $_GET['code'], // The code from the previous request
//     'grant_type' =&amp;gt; 'authorization_code'
// ) );
// curl_setopt( $curl, CURLOPT_RETURNTRANSFER, 1);
// $auth = curl_exec( $curl );
// $secret = json_decode($auth);
// $access_key = $secret-&amp;gt;access_token;