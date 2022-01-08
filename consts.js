const PROD_AUTH_TOKEN = 'EOg9I8fM20d56oX9f6a6DYScb4XDu8GyupxLASSagUTklYG1KpwFmc';
const DEV_AUTH_TOKEN = 'EOgqfhncjud9I8fM20d56oX9f126a6DYScb4XDu8GyupxLASSagUTklYG1KpwFmcABCDDDDD';
const AUTH_TOKEN = DEV_AUTH_TOKEN;

const DEV_URL =  'http://52.210.114.198';
const PROD_URL = 'http://ec2-63-32-183-203.eu-west-1.compute.amazonaws.com';
const API_PORT = 3548;
const CONF_APP_PORT = 3547;

const API_DEV_URL = getUrl(DEV_URL, API_PORT);
const API_PROD_URL = getUrl(PROD_URL, API_PORT);
const CONF_APP_DEV_URL = getUrl(DEV_URL, CONF_APP_PORT);
const CONF_APP_PROD_URL = getUrl(PROD_URL, CONF_APP_PORT);

function getUrl (url, port) {
    return `${url}:${port}`;
} 

console.log(process.argv);
module.exports = {
    AUTH_TOKEN,
    API_DEV_URL,
    CONF_APP_DEV_URL,
    CONF_APP_PROD_URL,
    API_PROD_URL
}
