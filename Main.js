//Its hard but i did it!
const fetch = require('node-fetch');
/* Wag ihardcode pag production ang iyong website
*/
const Privatekey =
"ANG_IYONG_PRIVATE_KEY";
/**
*@param {string} token - From Client Side
*/
async function Verify(token){
if (!token) return false;
const data = new
URLSearchParams();
data.append("secret", 
Privatekey);
data.append("response", token);
try {
const response = await
fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',
{
method: 'POST',
