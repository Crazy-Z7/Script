/*************************************
@Zoo
文晓生小说阅读器，解锁永久订阅，没效果的先试用一下
日期:2023.04.11
[rewrite_local]
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Script/main/Wxs.js
hostname = buy.itunes.apple.com
**************************************/
var obj = JSON.parse($response.body);
   
    obj = {
   "environment" : "Production",
   "receipt" : {
     "receipt_type" : "Production",
     "app_item_id" : 1595241052,
     "receipt_creation_date" : "2023-04-11 12:45:05 Etc/GMT",
     "bundle_id" : "com.shengzhou.fileartifact",
     "original_purchase_date" : "2023-04-11 12:17:11 Etc/GMT",
     "in_app" : [
       {
         "quantity" : "1",
         "purchase_date_ms" : "1681217103000",
         "expires_date" : "2276-10-17 10:58:23 Etc/GMT",
         "expires_date_pst" : "2023-04-14 05:45:03 America/Los_Angeles",
         "is_in_intro_offer_period" : "false",
         "transaction_id" : "310001397685721",
         "is_trial_period" : "true",
         "original_transaction_id" : "310001397685721",
         "purchase_date" : "2023-04-11 12:45:03 Etc/GMT",
         "product_id" : "com.shengzhou.fileartifact.month",
         "original_purchase_date_pst" : "2023-04-11 05:45:04 America/Los_Angeles",
         "in_app_ownership_type" : "PURCHASED",
         "original_purchase_date_ms" : "1681217104000",
         "web_order_line_item_id" : "310000650693018",
         "expires_date_ms" : "9681476303000",
         "purchase_date_pst" : "2023-04-11 05:45:03 America/Los_Angeles",
         "original_purchase_date" : "2023-04-11 12:45:04 Etc/GMT"
       }
     ],
     "adam_id" : 1595241052,
     "receipt_creation_date_pst" : "2023-04-11 05:45:05 America/Los_Angeles",
     "request_date" : "2023-04-11 12:48:11 Etc/GMT",
     "request_date_pst" : "2023-04-11 05:48:11 America/Los_Angeles",
     "version_external_identifier" : 856113005,
     "request_date_ms" : "1681217291732",
     "original_purchase_date_pst" : "2023-04-11 05:17:11 America/Los_Angeles",
     "application_version" : "2",
     "original_purchase_date_ms" : "1681215431000",
     "receipt_creation_date_ms" : "1681217105000",
     "original_application_version" : "2",
     "download_id" : 502339392655875535
   },
   "pending_renewal_info" : [
     {
       "product_id" : "com.shengzhou.fileartifact.month",
       "original_transaction_id" : "310001397685721",
       "auto_renew_product_id" : "com.shengzhou.fileartifact.month",
       "auto_renew_status" : "0"
     }
   ],
   "status" : 0,
   "latest_receipt_info" : [
     {
       "quantity" : "1",
       "purchase_date_ms" : "1681217103000",
       "expires_date" : "2276-10-17 10:58:23 Etc/GMT",
       "expires_date_pst" : "2276-10-17 10:58:23 America/Los_Angeles",
       "is_in_intro_offer_period" : "false",
       "transaction_id" : "310001397685721",
       "is_trial_period" : "true",
       "original_transaction_id" : "310001397685721",
       "purchase_date" : "2023-04-11 12:45:03 Etc/GMT",
       "product_id" : "com.shengzhou.fileartifact.month",
       "original_purchase_date_pst" : "2023-04-11 05:45:04 America/Los_Angeles",
       "in_app_ownership_type" : "PURCHASED",
       "subscription_group_identifier" : "20905711",
       "original_purchase_date_ms" : "1681217104000",
       "web_order_line_item_id" : "310000650693018",
       "expires_date_ms" : "9681476303000",
       "purchase_date_pst" : "2023-04-11 05:45:03 America/Los_Angeles",
       "original_purchase_date" : "2023-04-11 12:45:04 Etc/GMT"
     }
   ],
   "latest_receipt" : "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"
 }

$done({body : JSON.stringify(obj)});

