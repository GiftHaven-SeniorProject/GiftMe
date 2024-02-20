// TODO: Find a secure way to store credientials
const apiURL = 'https://staging2.christophero75.sg-host.com/wp-json/wc/v3';
// const consumerKey = 'ck_15e1fc95106a7d29f7fee5e3c12c6752649dca2a';
const consumerKey = 'ck_aca152d3ec3a52318e13ce9733e80a20ae29de3d';
// const consumerSecret = 'cs_7e422ab63a787e9209d09ac765ed7a1fc3d01dd9';
const consumerSecret = 'cs_8012bae0c22f8016ed7283d1a41c50893a8baea6';

// Function to add a product via the WooCommerce API
async function addProduct(productData) {
    try {
        const response = await fetch(`${apiURL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`
            },
            body: JSON.stringify(productData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Product added:', data);
    } catch (error) {
        console.error('Error adding product:', error);
    }
}

// Example usage: Add a new product
const newProductData = {
    name: 'Sample Product',
    type: 'simple',
    regular_price: '19.99',
    description: 'This is a sample product added via the WooCommerce API',
    short_description: 'Sample product short description',
    categories: [
        {
            id: 9 // ID of the category to which you want to assign the product
        }
    ]
};

// Call the addProduct function to add the product
// addProduct(newProductData);