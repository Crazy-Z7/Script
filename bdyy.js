/*
@Hᴀʙɪᴛ.
更新日期:2022.09.09
波点音乐解锁vip
[rewrite_local]
^http[s]:\/\/(.*.kuwo.cn) url script-request-body
[mitm]
hostname = bd-api.kuwo.cn
*/
var body = $response.body.replace(/isVip":\d/g, 'isVip":1').replace(/vip":"\d"/g, 'vip":"1"') .replace(/expireDate":\d/g, 'expireDate":3202385764000'); $done({body});
