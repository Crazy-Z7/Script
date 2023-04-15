/*************************************
@Zoo
大神P图，解锁永久订阅
日期:2023.04.15
[rewrite_local]
^https?:\/\/buy\.videoshowiosglobalserver\.com\/zone/1.0.1/iosPayClient\/imeiVerify\.htm url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/Dspt.js
hostname = buy.videoshowiosglobalserver.com
**************************************/
var obj = JSON.parse($response.body);
   
    obj = {
   "subscrib_type" : "2",
   "retCode" : 1,
   "current_date" : "2023-04-15 12:03:09",
   "isUpdateUuid" : 0,
   "retMsg" : "success",
   "isUsedPromocode" : 0,
   "isDiscount" : 1,
   "product_id" : "mg_vip_year",
   "renew_status" : 0,
   "label_type" : 0,
   "list" : [
     {
       "current_date" : "2023-04-15 12:03:09",
       "original_transaction_id" : "310001401549495",
       "order_status" : 1,
       "product_id" : "mg_vip_year",
       "purchase_date" : "2023-04-15 12:00:46",
       "expires_date" : "2223-04-18 12:00:46"
     }
   ],
   "recallLabelType" : 0
 }
 

$done({body : JSON.stringify(obj)});

