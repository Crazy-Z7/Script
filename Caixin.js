/******************************************
@@Zoo
财新解锁财新通v2文章
日期:2023.06.22
[rewrite_local]
^https?:\/\/gateway\.caixin\.com\/api\/app\-api\/auth\/(validate|validateAudioAuth|groupImageValidate) url script-request-header https://raw.githubusercontent.com/Crazy-Z7/Script/main/Caixin.js
hostname = gateway.caixin.com
*******************************************/

const Zoo=$request['url']['replace'](/uid=(\d+|)/g,'uid=12910665')['replace'](/code=(\w+|)/g,'code=08D17ED80C397C205F72E775ED19A04A')['replace'](/device=(\w+|)/g,'device=b04a8bad013f6f5f2393c4fe9db1e1c32e275688')['replace'](/deviceType=(\d+|)/g,'deviceType=1');

$done({'url':Zoo});