/**********************************************
@Zoo
花样文字解锁订阅
日期:2023.04.15
[rewrite_local]
^https?:\/\/api\.revenuecat\.com/v\d/(subscribers/(\$RCAnonymousID\%)?(\w)+|receipts)$ url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/Emoji.js
hostname = api.revenuecat.com
**********************************************/
var obj = JSON.parse($response.body);
   
    obj = {
   "request_date_ms" : 1681566818004,
   "request_date" : "2023-04-15T13:53:38Z",
   "subscriber" : {
     "non_subscriptions" : {
 
     },
     "first_seen" : "2022-09-12T15:16:19Z",
     "original_application_version" : "12.10.0.11",
     "other_purchases" : {
 
     },
     "management_url" : null,
     "subscriptions" : {
       "com.emoji.freemium.subscription.premium" : {
         "original_purchase_date" : "2022-09-12T15:18:52Z",
         "expires_date" : "2922-09-15T15:18:51Z",
         "is_sandbox" : false,
         "refunded_at" : null,
         "unsubscribe_detected_at" : "2022-09-12T15:19:42Z",
         "grace_period_expires_date" : null,
         "period_type" : "trial",
         "purchase_date" : "2022-09-12T15:18:51Z",
         "billing_issues_detected_at" : null,
         "ownership_type" : "PURCHASED",
         "store" : "app_store",
         "auto_resume_date" : null
       }
     },
     "entitlements" : {
       "subscription" : {
         "grace_period_expires_date" : null,
         "purchase_date" : "2022-09-12T15:18:51Z",
         "product_identifier" : "com.emoji.freemium.subscription.premium",
         "expires_date" : "2922-09-15T15:18:51Z"
       }
     },
     "original_purchase_date" : "2022-09-12T15:15:51Z",
     "original_app_user_id" : "$RCAnonymousID:44fc15c6a5a342a5a55db46789b3567c",
     "last_seen" : "2023-04-15T13:53:37Z"
   }
 }
 

$done({body : JSON.stringify(obj)});

