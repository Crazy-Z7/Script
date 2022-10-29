/**********************************************
@@Zoo
拍照搜题解锁会员
日期:2022.10.29
[rewrite_local]
^http[s]?:\/\/appss\.rhinoxlab\.com\/app\/account\/getAccountInfo.+$ url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/pzst.js
hostname = *
**********************************************/
var body = $response.body.replace(/.+/g, '"{\n  \"success\": true,\n  \"returnCode\": \"200\",\n  \"result\": {\n    \"nickname\": \"U2210562808\",\n    \"headImg\": \"https:\/\/boniuapp.rhinox.cn\/common\/head\/1599546812784.png\",\n    \"type\": \"VIP\",\n    \"vipExpireTime\": \"9999-09-09 15:20:32\",\n    \"vipExpireDays\": 3,\n    \"times\": 0,\n    \"dataId\": \"10166702792813965690\",\n    \"vipGroupInfos\": [{\n      \"groupType\": \"TYPE_ONE\",\n      \"vipType\": \"VIP\",\n      \"autoPay\": \"YES\"\n    }],\n    \"remainTimeSeconds\": 0,\n    \"realnameStatus\": \"NO\",\n    \"wordage\": 0\n  },\n  \"timeOut\": false\n}"'); $done({body});
