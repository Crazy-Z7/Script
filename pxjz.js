/*************************************
@@Zoo
貔貅记账会员
日期:2022.09.16
[rewrite_local]
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/pxjz.js 
hostname = buy.itunes.apple.com
**************************************/
var body = $response.body.replace(/.+/g, '{
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1461452315,
    "app_item_id": 1461452315,
    "bundle_id": "com.RuoG.Pixiu",
    "application_version": "20220914",
    "download_id": 501752750841698556,
    "version_external_identifier": 852192959,
    "receipt_creation_date": "2022-09-16 07:54:25 Etc/GMT",
    "receipt_creation_date_ms": "1663314865000",
    "receipt_creation_date_pst": "2022-09-16 00:54:25 America/Los_Angeles",
    "request_date": "2022-09-16 07:56:43 Etc/GMT",
    "request_date_ms": "1663315003884",
    "request_date_pst": "2022-09-16 00:56:43 America/Los_Angeles",
    "original_purchase_date": "2022-09-16 07:15:40 Etc/GMT",
    "original_purchase_date_ms": "1663312540000",
    "original_purchase_date_pst": "2022-09-16 00:15:40 America/Los_Angeles",
    "original_application_version": "20220914",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.RuoG.Pixiu.VIPYear",
      "transaction_id": "310001202964473",
      "original_transaction_id": "310001202964473",
      "purchase_date": "2022-09-16 07:17:05 Etc/GMT",
      "purchase_date_ms": "1663312625000",
      "purchase_date_pst": "2022-09-16 00:17:05 America/Los_Angeles",
      "original_purchase_date": "2022-09-16 07:17:06 Etc/GMT",
      "original_purchase_date_ms": "1663312626000",
      "original_purchase_date_pst": "2022-09-16 00:17:06 America/Los_Angeles",
      "expires_date": "2054-05-28 17:03:45 Etc/GMT",
      "expires_date_ms": "2663571825000",
      "expires_date_pst": "2054-05-28 17:03:45 America/Los_Angeles",
      "web_order_line_item_id": "310000548193666",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.RuoG.Pixiu.VIPYear",
    "transaction_id": "310001202964473",
    "original_transaction_id": "310001202964473",
    "purchase_date": "2022-09-16 07:17:05 Etc/GMT",
    "purchase_date_ms": "1663312625000",
    "purchase_date_pst": "2022-09-16 00:17:05 America/Los_Angeles",
    "original_purchase_date": "2022-09-16 07:17:06 Etc/GMT",
    "original_purchase_date_ms": "1663312626000",
    "original_purchase_date_pst": "2022-09-16 00:17:06 America/Los_Angeles",
    "expires_date": "2054-5-28 17:03:45 Etc/GMT",
    "expires_date_ms": "2663571825000",
    "expires_date_pst": "2054-05-28 17:03:45 America/Los_Angeles",
    "web_order_line_item_id": "310000548193666",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20521339"
  }],

  "pending_renewal_info": [{
    "auto_renew_product_id": "com.RuoG.Pixiu.VIPYear",
    "product_id": "com.RuoG.Pixiu.VIPYear",
    "original_transaction_id": "310001202964473",
    "auto_renew_status": "0"
  }],
  "status": 0
}');
$done({body});
