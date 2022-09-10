/*
@Hᴀʙɪᴛ.
解锁博树Busuu会员
更新日期:2022.09.10
[rewrite_local]
^https?:\/\/*\/users\/me url script-response-body https://raw.githubusercontent.com/ztjssw/Quantumultx/main/Busuu.js
[mitm]
hostname = *
*/
var body = $response.body.replace(/tier":"\w+/g, 'tier":"plus').replace(/expiration":\w+/g, 'expiration":1820845855'); $done({body});
