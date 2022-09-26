/*************************************
@@Zoo
Emoji表情符号
日期:2022.09.26
[rewrite_local]
^https?://api\.revenuecat\.com/v\d/(subscribers/(\$RCAnonymousID\%)?(\w)+|receipts)$ url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/emoji.js
hostname = api.revenuecat.com
**************************************/
var body = $response.body.replace(/.+/g, '"{\n  \"request_date\": \"2022-09-25T11:31:45Z\",\n  \"request_date_ms\": 1664105505514,\n  \"subscriber\": {\n    \"entitlements\": {\n      \"subscription\": {\n        \"expires_date\": \"2022-09-28T11:31:16Z\",\n        \"grace_period_expires_date\": null,\n        \"product_identifier\": \"com.emoji.freemium.subscription.premium\",\n        \"purchase_date\": \"2022-09-25T11:31:16Z\"\n      }\n    },\n    \"first_seen\": \"2022-09-25T11:31:17Z\",\n    \"last_seen\": \"2022-09-25T11:31:17Z\",\n    \"management_url\": \"https:\/\/apps.apple.com\/account\/subscriptions\",\n    \"non_subscriptions\": {},\n    \"original_app_user_id\": \"$RCAnonymousID:95cdbd01cf5a4e72ade12c8d55db46e1\",\n    \"original_application_version\": \"12.10.0.11\",\n    \"original_purchase_date\": \"2022-09-25T11:30:27Z\",\n    \"other_purchases\": {},\n    \"subscriptions\": {\n      \"com.emoji.freemium.subscription.premium\": {\n        \"billing_issues_detected_at\": null,\n        \"expires_date\": \"2022-09-28T11:31:16Z\",\n        \"grace_period_expires_date\": null,\n        \"is_sandbox\": false,\n        \"original_purchase_date\": \"2022-09-25T11:31:17Z\",\n        \"ownership_type\": \"PURCHASED\",\n        \"period_type\": \"trial\",\n        \"purchase_date\": \"2022-09-25T11:31:16Z\",\n        \"store\": \"app_store\",\n        \"unsubscribe_detected_at\": null\n      }\n    }\n  }\n}"'); $done({body});
