/**********************************************
@@Zoo
爱剪辑-视屏剪辑&视屏编辑vlog制作
日期:2022.11.26
[rewrite_local]
^https?:\/\/api\.open\.loveclip\.site\/UserInfo\/UserPersonalCoreAsync url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/ajj.js
hostname = api.open.loveclip.site
**********************************************/
var body=$response.body;
body = body.replace(/IsVip\":\w+/g,'IsVip":true');
body = body.replace(/VipLevel\":\d/g,'VipLevel":1');
body = body.replace(/VipExpire\":".*?"/g,'VipExpire":"2999-09-29 10:22:58"');
$done(body);
