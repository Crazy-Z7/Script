/**********************************************
作者:Zoo
Aptv解锁永久订阅
日期:2023.08.11
[rewrite_local]
^https?:\/\/api\.revenuecat\.com/v\d/(subscribers/(\$RCAnonymousID\%)?(\w)+|receipts)$ url echo-response application/json echo-response https://raw.githubusercontent.com/Crazy-Z7/Script/main/aptv.js
hostname = api.revenuecat.com
**********************************************/ 
   "request_date_ms": 1691684430913,
   "request_date": "2023-08-10T16:20:30Z",
   "subscriber": {
     "non_subscriptions": {
     },
     "first_seen": "2023-08-10T16:15:27Z",
     "original_application_version": "1",
     "other_purchases": {
     },
     "management_url": null,
     "subscriptions": {
       "com.kimen.aptvpro.lifetime": {
         "store": "app_store",
         "purchase_date": "2023-02-23T02:33:33Z",
         "ownership_type": "PURCHASED",
         "original_purchase_date": "2023-02-23T02:33:33Z",
         "expires_date": "9999-09-09T09:09:09Z"
       }
     },
     "entitlements": {
       "pro": {
         "store": "app_store",
         "purchase_date": "2023-02-23T02:33:33Z",
         "ownership_type": "PURCHASED",
         "original_purchase_date": "2023-02-23T02:33:33Z",
         "product_identifier": "com.kimen.aptvpro.lifetime",
         "expires_date": "9999-09-09T09:09:09Z"
       }
     },
     "original_purchase_date": "2022-10-02T04:32:28Z",
     "original_app_user_id": "$RCAnonymousID:807d56e7d09e4e1f8cfa7e50cd323c6b",
     "last_seen": "2023-08-10T16:15:27Z"
   }
 }
