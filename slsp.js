/**********************************************
@@Zoo
沙拉视屏解锁订阅
日期:2022.11.26
[rewrite_local]
^http:\/\/api\.saladvideo\.com\/app\/v1\/user url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/slsp.js
hostname = api.saladvideo.com
**********************************************/
var body=$response.body;
body = body.replace(/from\":\d+/g,'from":1669428667000');
body = body.replace(/until\":\d+/g,'until":9999687867000');
body = body.replace(/isAppleVip\":\w+/g,'isAppleVip":true');
body = body.replace(/productId\":".*?"/g,'productId":"SaladVip_2020WC"');
body = body.replace(/name\":".*?"/g,'name":"Zoo破解"');
$done(body);
