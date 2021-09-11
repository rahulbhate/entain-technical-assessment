{
  /* Api endpoints configuration - for Retailer service, Branch service,
    Category service, Notification service, Payment service, App service and ReceiptAnalysis service
   */
}
const PRODUCTION = false
let BASE_URL = ''

if (PRODUCTION) {
  BASE_URL = 'https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10'
} else {
  BASE_URL = 'https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10'
}

export default {
  BASE_URL: BASE_URL,
}
