/*************************************
@@Zoo
变声器变声吧，恢复订阅(需要用的时候开规则进入)
日期:2022.10.1
[rewrite_local]
^https:\/\/voicechanger\.szsszykj\.com\/interface\/GetIosVip\.php url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/biansq.js
hostname = voicechanger.szsszykj.com
**************************************/
var body = $response.body.replace(/.+/g, '"{\n  \"Header\": {\n    \"Result\": 0,\n    \"Msg\": \"查询成功\"\n  },\n  \"Content\": {\n    \"system_time\": \"2022-10-01 22:54:59\",\n    \"end_time\": \"9999-09-09 15:28:24\",\n    \"is_vip\": 1\n  }\n}"'); $done({body});
