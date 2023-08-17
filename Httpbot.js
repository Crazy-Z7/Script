/**********************************************
作者:Zoo
Httpbot解锁永久订阅,进软件恢复购买
强大的网络调试工具，类似Anubis
日期:2023.08.17
[rewrite_local]
^https?:\/\/api\.revenuecat\.com/v\d/(subscribers/(\$RCAnonymousID\%)?(\w)+|receipts)$ url script-echo-response https://raw.githubusercontent.com/Crazy-Z7/Script/main/Httpbot.js
hostname = api.revenuecat.com
**********************************************/
   
    
       let Zoo = {
      "request_date_ms" : 1692277501204,
      "request_date" : "2023-08-17T13:05:01Z",
      "subscriber" : {
        "non_subscriptions" : {
    
        },
        "first_seen" : "2023-08-17T13:04:43Z",
        "original_application_version" : "201",
        "other_purchases" : {
    
        },
        "management_url" : "https://apps.apple.com/account/subscriptions",
        "subscriptions" : {
          "httpbot_1499_1y_1w0" : {
            "original_purchase_date" : "2023-08-17T13:04:57Z",
            "expires_date" : "2999-07-24T13:04:56Z",
            "is_sandbox" : false,
            "refunded_at" : null,
            "store_transaction_id" : "310001526027197",
            "unsubscribe_detected_at" : null,
            "grace_period_expires_date" : null,
            "period_type" : "trial",
            "purchase_date" : "2023-08-17T13:04:56Z",
            "billing_issues_detected_at" : null,
            "ownership_type" : "PURCHASED",
            "store" : "app_store",
            "auto_resume_date" : null
          }
        },
        "entitlements" : {
          "pro" : {
            "grace_period_expires_date" : null,
            "purchase_date" : "2023-08-17T13:04:56Z",
            "product_identifier" : "httpbot_1499_1y_1w0",
            "expires_date" : "2999-07-24T13:04:56Z"
          }
        },
        "original_purchase_date" : "2023-06-27T12:15:30Z",
        "original_app_user_id" : "$RCAnonymousID:ded6a7de98824745b76e2d354e64ea4f",
        "last_seen" : "2023-08-17T13:04:43Z"
      }
    }
    
   $done({body : JSON.stringify(Zoo)});
   
