/*************************************
@Zoo
WatchFacesGallery&Widgets解锁永久订阅，一定要先试用然后卸载，在开脚本恢复购买，切记！(脚本只需要开一次)
日期:2023.04.11
[rewrite_local]
^https？:\/\/api\.adapty\.io\/api\/v1\/sdk\/in-apps\/apple\/receipt\/validate\/ url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Script/main/Watch.js
hostname = api.adapty.io
**************************************/
var obj = JSON.parse($response.body);
   
    obj = {
   "data" : {
     "type" : "adapty_inapps_apple_receipt_validation_result",
     "id" : "c0fd67d9-1578-4c58-b24b-d744ce4a2bdf",
     "attributes" : {
       "app_id" : "de891419-be85-43e4-a3b8-6aa08efb23f1",
       "total_revenue_usd" : 0,
       "customer_user_id" : null,
       "subscriptions" : {
         "com.watch.faces.subs2" : {
           "vendor_transaction_id" : "310001397531700",
           "billing_issue_detected_at" : null,
           "is_lifetime" : false,
           "store" : "app_store",
           "vendor_product_id" : "com.watch.faces.subs2",
           "vendor_original_transaction_id" : "310001397531700",
           "will_renew" : true,
           "renewed_at" : "2023-04-11T08:39:54.000000+0000",
           "cancellation_reason" : null,
           "active_promotional_offer_id" : null,
           "active_promotional_offer_type" : null,
           "unsubscribed_at" : null,
           "is_active" : true,
           "activated_at" : "2023-04-11T08:39:56.000000+0000",
           "is_refund" : false,
           "is_in_grace_period" : false,
           "active_introductory_offer_type" : "free_trial",
           "expires_at" : "2276-10-17T06:53:14.000000+0000",
           "starts_at" : null,
           "is_sandbox" : false
         }
       },
       "promotional_offer_eligibility" : false,
       "custom_attributes" : {
 
       },
       "profile_id" : "c0fd67d9-1578-4c58-b24b-d744ce4a2bdf",
       "paid_access_levels" : {
         "premium_watch_widgets" : {
           "id" : "premium_watch_widgets",
           "is_lifetime" : false,
           "vendor_product_id" : "com.watch.faces.subs2",
           "active_promotional_offer_type" : null,
           "cancellation_reason" : null,
           "billing_issue_detected_at" : null,
           "unsubscribed_at" : null,
           "expires_at" : "2276-10-17T06:53:14.000000+0000",
           "will_renew" : true,
           "is_active" : true,
           "active_promotional_offer_id" : null,
           "is_in_grace_period" : false,
           "activated_at" : "2023-04-11T08:39:56.000000+0000",
           "renewed_at" : "2023-04-11T08:39:54.000000+0000",
           "is_refund" : false,
           "active_introductory_offer_type" : "free_trial",
           "store" : "app_store",
           "starts_at" : null
         }
       },
       "introductory_offer_eligibility" : false,
       "apple_validation_result" : {
         "environment" : "Production",
         "receipt" : {
           "receipt_type" : "Production",
           "app_item_id" : 1577752071,
           "receipt_creation_date" : "2023-04-11 08:39:56 Etc/GMT",
           "bundle_id" : "com.watch.faces.app",
           "original_purchase_date" : "2023-04-11 08:36:32 Etc/GMT",
           "in_app" : [
             {
               "quantity" : "1",
               "purchase_date_ms" : "1681202394000",
               "expires_date" : "2276-10-17 06:53:14 Etc/GMT",
               "expires_date_pst" : "2276-10-17 06:53:14 America/Los_Angeles",
               "is_in_intro_offer_period" : "false",
               "transaction_id" : "310001397531700",
               "is_trial_period" : "true",
               "original_transaction_id" : "310001397531700",
               "purchase_date" : "2023-04-11 08:39:54 Etc/GMT",
               "product_id" : "com.watch.faces.subs2",
               "original_purchase_date_pst" : "2023-04-11 01:39:56 America/Los_Angeles",
               "in_app_ownership_type" : "PURCHASED",
               "original_purchase_date_ms" : "1681202396000",
               "web_order_line_item_id" : "310000650605036",
               "expires_date_ms" : "9681461594000",
               "purchase_date_pst" : "2023-04-11 01:39:54 America/Los_Angeles",
               "original_purchase_date" : "2023-04-11 08:39:56 Etc/GMT"
             }
           ],
           "adam_id" : 1577752071,
           "receipt_creation_date_pst" : "2023-04-11 01:39:56 America/Los_Angeles",
           "request_date" : "2023-04-11 08:39:58 Etc/GMT",
           "request_date_pst" : "2023-04-11 01:39:58 America/Los_Angeles",
           "version_external_identifier" : 856171850,
           "request_date_ms" : "1681202398648",
           "original_purchase_date_pst" : "2023-04-11 01:36:32 America/Los_Angeles",
           "application_version" : "1",
           "original_purchase_date_ms" : "1681202192000",
           "receipt_creation_date_ms" : "1681202396000",
           "original_application_version" : "1",
           "download_id" : 502338957716873322
         },
         "pending_renewal_info" : [
           {
             "product_id" : "com.watch.faces.subs2",
             "original_transaction_id" : "310001397531700",
             "auto_renew_product_id" : "com.watch.faces.subs2",
             "auto_renew_status" : "1"
           }
         ],
         "status" : 0,
         "latest_receipt_info" : [
           {
             "quantity" : "1",
             "purchase_date_ms" : "1681202394000",
             "expires_date" : "2276-10-17 06:53:14 Etc/GMT",
             "expires_date_pst" : "2276-10-17 06:53:14 America/Los_Angeles",
             "is_in_intro_offer_period" : "false",
             "transaction_id" : "310001397531700",
             "is_trial_period" : "true",
             "original_transaction_id" : "310001397531700",
             "purchase_date" : "2023-04-11 08:39:54 Etc/GMT",
             "product_id" : "com.watch.faces.subs2",
             "original_purchase_date_pst" : "2023-04-11 01:39:56 America/Los_Angeles",
             "in_app_ownership_type" : "PURCHASED",
             "subscription_group_identifier" : "20857042",
             "original_purchase_date_ms" : "1681202396000",
             "web_order_line_item_id" : "310000650605036",
             "expires_date_ms" : "9681461594000",
             "purchase_date_pst" : "2023-04-11 01:39:54 America/Los_Angeles",
             "original_purchase_date" : "2023-04-11 08:39:56 Etc/GMT"
           }
         ],
         "latest_receipt" : "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"
       },
       "non_subscriptions" : null
     }
   }
 }

$done({body : JSON.stringify(obj)});

