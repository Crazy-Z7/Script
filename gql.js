/**********************************************
作者:Zoo
过期啦解锁永久订阅
日期:2023.06.20
[rewrite_local]
^https?:\/\/api\.revenuecat\.com/v\d/(subscribers/(\$RCAnonymousID\%)?(\w)+|receipts)$ url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Script/main/gql.js
hostname = api.revenuecat.com
**********************************************/
let Zoo = JSON.parse($response.body);
   
    Zoo = {
   ”request_date_ms“ : 1687275341505,
   ”request_date“ : ”2023-06-20T15:35:41Z“,
   ”subscriber“ : {
     ”non_subscriptions“ : {
 
     },
     ”first_seen“ : ”2023-06-20T15:33:55Z“,
     ”original_application_version“ : ”992“,
     ”other_purchases“ : {
 
     },
     ”management_url“ : ”https://apps.apple.com/account/subscriptions“,
     ”subscriptions“ : {
       ”com.vanemu.oops_expired.pro.yearly“ : {
         ”original_purchase_date“ : ”2023-06-20T15:35:38Z“,
         ”expires_date“ : ”2099-09-09T15:35:36Z“,
         ”is_sandbox“ : false,
         ”refunded_at“ : null,
         ”unsubscribe_detected_at“ : null,
         ”grace_period_expires_date“ : null,
         ”period_type“ : ”trial“,
         ”purchase_date“ : ”2023-06-20T15:35:36Z“,
         ”billing_issues_detected_at“ : null,
         ”ownership_type“ : ”PURCHASED“,
         ”store“ : ”app_store“,
         ”auto_resume_date“ : null
       }
     },
     ”entitlements“ : {
       ”pro“ : {
         ”grace_period_expires_date“ : null,
         ”purchase_date“ : ”2023-06-20T15:35:36Z“,
         ”product_identifier“ : ”com.vanemu.oops_expired.pro.yearly“,
         ”expires_date“ : ”2999-09-09T15:35:36Z“
       }
     },
     ”original_purchase_date“ : ”2023-06-20T15:10:46Z“,
     ”original_app_user_id“ : ”$RCAnonymousID:d7c655b3d6084f8395c3b54cf180492d“,
     ”last_seen“ : ”2023-06-20T15:33:55Z“
   }
 }
 

$done({body : JSON.stringify(Zoo)});


