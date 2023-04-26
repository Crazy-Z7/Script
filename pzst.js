/**************************************
@Zoo
拍照搜题解锁永久会员，解锁实名认证,去除开屏广告
日期:2023.04.03
[rewrite_local]
^https?:\/\/ad\.rhinox\.cn url reject-200
^https?:\/\/appss\.rhinoxlab\.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/pzst.js
hostname = appss.rhinoxlab.com,ad.rhinox.cn
***************************************/ 
var obj = JSON.parse($response.body);
 obj.result.type = "VIP";
 obj.result.vipExpireTime = "9999-09-09 15:20:32";
 obj.result.vipExpireDays = 9999999999999999;
 obj.result.vipGroupInfos.vipType = "VIP";
 obj.result.vipGroupInfos.autoPay = "NO";
 obj.result.realnameStatus = "YES";
                  
$done({body : JSON.stringify(obj)});
