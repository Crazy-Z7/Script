/*************************************
@Zoo
mooding-日记心情摩天轮，解锁永久订阅
日期:2023.04.07
[rewrite_local]
^https?:\/\/cn-ios-buy\.enjoy-mobi\.com\/zone\/1.0.1\/iosPayClient\/payVerify\.htm url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/Lexiu.js
hostname = cn-ios-buy.enjoy-mobi.com
**************************************/
var obj = JSON.parse($response.body);
   
    obj = {
   "is_trial_period" : "true",
   "isBlacklist" : "0",
   "retCode" : "1",
   "appAccountToken" : "3B7DA4B1-5D72-4C5C-BB2D-F550E54C94C3",
   "status" : "0",
   "transaction_id" : "310001401516411",
   "retMsg" : "success",
   "isRepeatBind" : "0",
   "isUsedPromocode" : "0",
   "subscrib_type" : "1",
   "current_date" : "2023-04-15 11:22:55",
   "isReportPrice" : "0",
   "product_id" : "vip_privilege_monthly_3",
   "offerIdentifier" : "",
   "purchase_date" : "2023-04-15 11:15:37",
   "original_transaction_id" : "310001401516411",
   "cancellation_date" : "",
   "offerType" : "1",
   "grace_period_expires_date" : "",
   "promotional_offer_id" : "",
   "recallLabelType" : "0",
   "is_in_intro_offer_period" : "true",
   "msg" : "验证成功",
   "expires_date" : "2923-04-18 11:15:37"
 }

$done({body : JSON.stringify(obj)});

