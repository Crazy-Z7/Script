/*
@Hᴀʙɪᴛ.
普通话测试解锁永久会员
更新日期:2022.09.09
[rewrite_local]
^https:\/\/api\.hcreator\.cn\/wapsPay\/Login\/pthTest\/v3\/getInfo\.do url script-response-body https://raw.githubusercontent.com/ztjssw/Quantumultx/main/pthcs.js
[mitm]
hostname = api.hcreator.cn
*/

var body = $response.body.replace(/vipType":\d/g, 'vipType":1').replace(/vip":\w+/g, 'vip":true').replace(/vipName":"非会员/g, 'vipName":"永久会员').replace(/vipRank":\d/g, 'vipRank":1'); $done({body});
