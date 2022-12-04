/*************************************
@@Zoo
Cycles解锁订阅
日期:2022.12.04
[rewrite_local]
^https?:\/\/pcbe\.perigee\.se\/api\/v1\/buyers\/*\/subscription* url reject
^https?:\/\/pcbe\.perigee\.se\/api\/v1\/verify-purchases url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/Cycles.js
hostname = pcbe.perigee.se
**************************************/


var ojbk = JSON.parse($response.body);
   
    ojbk = {
  "has_valid_purchases" : true,
  "subscription_purchases_state" : 3909316327,
  "subscription_purchases" : [
    {
      "period" : "P1Y",
      "expires_at" : {
        "offset" : 0,
        "timestamp" : 9999764138
      },
      "sku_identifier" : "Premium_B_12Months",
      "purchased_at" : {
        "offset" : 0,
        "timestamp" : 1670159338
      },
      "cancelled_at" : {
        "offset" : 0,
        "timestamp" : 1670159556
      },
      "sandbox" : false,
      "auto_renew" : false,
      "trial_period" : "P1W",
      "ownership" : "purchased",
      "grace_period_days" : 0,
      "status" : "normal",
      "store" : "app_store"
    }
  ],
  "in_app_purchases" : [

  ],
  "buyer_identifier" : "60f9751e-4aeb-433b-a1f7-6a3c92a39536"
}

$done({body : JSON.stringify(ojbk)});
