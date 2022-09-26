/*************************************
@@Zoo
Fileball解锁pro
日期:2022.09.26
[rewrite_local]
^https?://api\.revenuecat\.com/v\d/(subscribers/(\$RCAnonymousID\%)?(\w)+|receipts)$ url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/Fileball.js
hostname = api.revenuecat.com
var body = $response.body.replace(/.+/g, '{"request_date":"1983-03-15T00:00:00Z","request_date_ms":416505600000,"subscriber":{"entitlements":{"filebox_pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"filebox_pro","purchase_date":"1983-03-15T00:00:00Z"}},"first_seen":"1983-03-15T00:00:00Z","last_seen":"1983-03-15T00:00:00Z","management_url":null,"non_subscriptions":{"filebox_pro":[{"id":"yingzi","is_sandbox":false,"original_purchase_date":"1983-03-15T00:00:00Z","purchase_date":"1983-03-15T00:00:00Z","store":"app_store"}]},"original_app_user_id":"$RCAnonymousID%3A8e5a11e56b4246f2ab2b17058c01db1e","original_application_version":"170","original_purchase_date":"1983-03-15T00:00:00Z","other_purchases":{"filebox_pro":{"purchase_date":"1983-03-15T00:00:00Z"}},"subscriptions":{}}};'); $done({body});
