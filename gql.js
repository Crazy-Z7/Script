/**********************************************
作者:Zoo
过期啦解锁永久订阅
日期:2023.06.21
[rewrite_local]
^https?:\/\/api\.revenuecat\.com/v\d/(subscribers/(\$RCAnonymousID\%)?(\w)+|receipts)$ url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Script/main/gql.js
https://api.guoqi365.com/1.1/functions/getUserInfo url response-body "expires_date":"\d+" response-body "expires_date":"4092622536000"
https://api.revenuecat.com/v1/subscribers/identify url response-body .+ response-body {   "request_date_ms" : 1687277100657,   "request_date" : "2023-06-20T16:05:00Z",   "subscriber" : {     "non_subscriptions" : {      },     "first_seen" : "2023-06-20T16:03:05Z",     "original_application_version" : null,     "other_purchases" : {      },     "management_url" : null,     "subscriptions" : {      },     "entitlements" : {      },     "original_purchase_date" : null,     "original_app_user_id" : "6491cdb6a6747e45a0d5a429",     "last_seen" : "2023-06-20T16:03:05Z"   } }
https://api.guoqi365.com/1.1/functions/refreshUserMembership url response-body .+ response-body {   "result" : {     "message" : "success",     "data" : {       "status" : 1,       "is_pro" : true,       "membership_name" : "yearly",       "membership_type" : 2,       "expires_date" : "2099-09-09 T15:35:36.000Z",       "member_id" : "$RCAnonymousID:d7c655b3d6084f8395c3b54cf180492d",       "user_id" : "6491c6e0bb86895f28a91a83"     },     "code" : 1   } }

hostname = api.revenuecat.com,api.guoqi365.com
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


