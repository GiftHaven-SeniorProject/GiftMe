// Set your WooCommerce API credentials
const apiURL = 'https://staging2.christophero75.sg-host.com/wp-json/wc/v3'; // Replace 'yourdomain.com' with your actual domain
// const consumerKey = 'ck_15e1fc95106a7d29f7fee5e3c12c6752649dca2a';
const consumerKey = 'ck_aca152d3ec3a52318e13ce9733e80a20ae29de3d';
// const consumerSecret = 'cs_7e422ab63a787e9209d09ac765ed7a1fc3d01dd9';
const consumerSecret = 'cs_8012bae0c22f8016ed7283d1a41c50893a8baea6';

// Function to make a request to the WooCommerce API
async function fetchWooCommerceData(endpoint) {
    try {
        const response = await fetch(`${apiURL}/${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage: Fetch products from WooCommerce
async function fetchProducts() {
    const products = await fetchWooCommerceData('products');
    console.log('Products:', products);
}

// Call the fetchProducts function to execute the request
// fetchProducts();



//
// // WooCommerce API credentials
// // TODO: Find a secure way to store credientials
// const apiURL = 'https://staging2.christophero75.sg-host.com/wp-json/wc/v3';
// const consumerKey = 'ck_15e1fc95106a7d29f7fee5e3c12c6752649dca2a';
// const consumerSecret = 'cs_7e422ab63a787e9209d09ac765ed7a1fc3d01dd9';
//
// // Make a generic get request to the WooCommerce API
// // Endpoint: A string with the endpoint to use, IE: 'products'
// async function fetchWooCommerceData(endpoint) {
//     try {
//         const response = await fetch(`${apiURL}/${endpoint}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`
//             }
//         });
//
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
//
// // Call Products api
// async function fetchProducts() {
//     const products = await fetchWooCommerceData('products');
//     console.log('Products:', products);
// }
//
// // Call the function so results are added to the console on page load
// fetchProducts();
