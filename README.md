Cloudflare Turnstile Backend 
```JavaScript
*/ Gumamit ng ENV pag production ang website mo
*/

const fetch = require('node-fetch');
//Ang Privatekey
const Privatekey =
"PRIVATE_STRING";
/**
*@param {string} token - Galing sa HTML 
*/
async function validateturnstilebyTren(token){
if (!token) return false;
const data = new
URLSearchParams();
data.append("secret", 
Pribado);
data.append("response", token);
try {
const response = await
fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',
{
method: 'POST',
body: data,
});
const result = await response.json();

        return result.success; 
catch (e) {

        console.error("Error:", e);
        return false;
    }
}
```