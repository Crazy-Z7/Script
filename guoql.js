/**********************************************
作者:Zoo
过期啦解锁永久订阅
日期:2023.06.21
[rewrite_local]
^https:\/\/api\.guoqi365\.com\/1\.1\/functions\/getUserInfo url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Script/main/guoql.js
hostname = api.guoqi365.com
**********************************************/
let Zoo = JSON.parse($response.body);
Zoo.result.data.user_is_pro = true;
Zoo.result.data.locked = false;
Zoo.result.data.group_is_pro = true;
Zoo.result.data.membership_type = 2;
$done({body : JSON.stringify(Zoo)});
