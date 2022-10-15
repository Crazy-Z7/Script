/*************************************
@@Zoo

日期:2022.10.02
[rewrite_local]
^https?:\/\/service.hhdd.com url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/kdgs.js
hostname = service.hhdd.com
**************************************/
var body = $response.body.replace(/subscribeStatus":\d/g, 'subscribeStatus":0').replace(/bookVip":\d/g, 'bookVip":0').replace(/vipStatus":\d/g, 'vipStatus":1').replace(/endTime":\d/g, 'endTime":9999-09-09'); $done({body});
