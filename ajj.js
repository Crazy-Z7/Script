/**********************************************
@@Zoo
爱剪辑-视屏剪辑&视屏编辑vlog制作
日期:2022.11.26
[rewrite_local]
^https?:\/\/api\.open\.loveclip\.site\/UserInfo\/UserPersonalCoreAsync url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/ajj.js
hostname = api.open.loveclip.site
**********************************************/
var body = $response.body.replace(/.+/g, '"{\n  \"data\": {\n    \"Id\": \"4116883578833338368\",\n    \"Nickname\": \"Zoo破解\",\n    \"Headimg\": \"http:\/\/api.file.xinyusz.cn\/download\/image\/20190613_636960584132521779.png\",\n    \"Gender\": 0,\n    \"Phone\": \"10086\",\n    \"Email\": null,\n    \"Signature\": null,\n    \"Province\": null,\n    \"City\": null,\n    \"Area\": null,\n    \"IsVip\": true,\n    \"VipLevel\": 1,\n    \"VipExpire\": \"2999-09-29 10:22:58\",\n    \"IsFree\": false,\n    \"IsOpusPower\": false,\n    \"ActivityTotal\": 1,\n    \"LastActivityTime\": \"2022-11-26 10:25:34\",\n    \"FocusTotal\": 0,\n    \"FansTotal\": 0,\n    \"OpusTotal\": 0,\n    \"LikeTotal\": 0,\n    \"IsFocus\": false,\n    \"IsFans\": false,\n    \"CovermapUrl\": null\n  },\n  \"resCode\": 200,\n  \"isSuccess\": true,\n  \"msg\": null\n}"'); $done({body});
