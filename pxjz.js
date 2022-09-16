/*************************************
@@Zoo
貔貅记账会员
日期:2022.09.16
[rewrite_local]
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/pxjz.js
hostname = catbuy.itunes.apple.com
**************************************/
var body = $response.body.replace(/.+/g,'{
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1461452315,
    "app_item_id": 1461452315,
    "bundle_id": "com.RuoG.Pixiu",
    "application_version": "20220914",
    "download_id": 501752750841698556,
    "version_external_identifier": 852192959,
    "receipt_creation_date": "2022-09-16 07:17:07 Etc/GMT",
    "receipt_creation_date_ms": "1663312627000",
    "receipt_creation_date_pst": "2022-09-16 00:17:07 America/Los_Angeles",
    "request_date": "2022-09-16 07:17:23 Etc/GMT",
    "request_date_ms": "1663312643846",
    "request_date_pst": "2022-09-16 00:17:23 America/Los_Angeles",
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
      "expires_date": "2029-01-20 14:01:52 Etc/GMT",
      "expires_date_ms": "1863571825000",
      "expires_date_pst": "2029-01-20 14:01:52 America/Los_Angeles",
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
    "expires_date": "2029-01-20 14:01:52 Etc/GMT",
    "expires_date_ms": "1863571825000",
    "expires_date_pst": "2029-01-20 14:01:52 America/Los_Angeles",
    "web_order_line_item_id": "310000548193666",
    "is_trial_period": "false",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20521339"
  }],
  "latest_receipt": "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",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.RuoG.Pixiu.VIPYear",
    "product_id": "com.RuoG.Pixiu.VIPYear",
    "original_transaction_id": "310001202964473",
    "auto_renew_status": "0"
  }],
  "status": 0
}');
$done({body});
