/*************************************
@@Zoo
变声器变声吧，恢复订阅(需要用的时候开规则进入)
日期:2022.10.1
[rewrite_local]
^https:\/\/voicechanger\.szsszykj\.com\/interface\/GetIosVip\.php url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/bsq.js
hostname = voicechanger.szsszykj.com
**************************************/
var body = $response.body.replace(/end_time":".*?"/g, 'end_time":"2032-09-21 15:28:24"').replace(/is_vip":\d/g, 'is_vip":1'); $done({body});
