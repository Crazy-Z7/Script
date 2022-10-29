/**********************************************
@@Zoo
解锁会员专享课程，直播课，官方独家课，具体自测
日期:2022.10.29
[rewrite_local]
^https?:\/\/api\.gotokeep\.com url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/keep.js
hostname = api.gotokeep.com
**********************************************/
var body=$response.body;
body = body.replace(/username\":".*?"/g,'username":"Zoo破解"');
body = body.replace(/status\":\w+/g,'status":true');
body = body.replace(/hasPaid\":\w+/g,'hasPaid":true');
body = body.replace(/downLoadAll\":\w+/g,'downLoadAll":true');
body = body.replace(/startEnable\":\w+/g,'startEnable":true');
$done(body);
