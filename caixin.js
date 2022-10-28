/******************************************
@@Zoo
财新解锁财新通，不需要登录 会员有效期2022.10.30
日期:2022.10.17
[rewrite_local]
^https?:\/\/gateway\.caixin\.com\/api\/app\-api\/auth\/(validateAudioAuth|validate|groupImageValidate) url script-request-header https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/caixin.js
hostname = gateway.caixin.com
*******************************************/
var cx=$request['headers'];_0x177f40['User-Agent']='Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 CaixinV5/7.9.7 deviceType/1';
const CX=$request['url']['replace'](/uid=(\d+|)/g,'uid=12910665')['replace'](/code=(\w+|)/g,'code=FC6F2FB5DC92FDE560A3737B7EC08670')
['replace'](/device=(\w+|)/g,'device=b04a8bad013f6f5f2393c4fe9db1e1c32e275688')['replace'](/deviceType=(\d+|)/g,'deviceType=1');
if($request['url']['indexOf']('validateAudioAuth')!=-0x1)
{cx['appinfo']='75SU0e5TW70SSqRtJ%2FF6dN60qhTR%2FVmZTj9JQB4m3Uwq7sM2Mqb98OGBH7KPgErhvCTBaWVg8%2Fj2n6SeH%2FUGQiruwzYypv3wwbdaXakQVxgDazGHZI9zJH06ydDC95HRQEc6qzEc7vM%2F5rTCO6vzkZ501g%2BZznkBivSH00D1ourHiQdMTZOW%2BS%2F9fr%2BI74GiV00ciCSk4OJRobLBhINvMCTwFC6QAlkSUf4HIqaSYsERCzJdqvhBb1NgjzoEW2PdjbyUF%2Ft1qR%2BXCJBByl0RKs63rk%2FyUWYwOnXG0DbkyK%2F%2FOj8ufBKdvrOLojyf2fu5YFF0VAnh5wrPwibpMk%2FO8YFmd9uX1oWtn84%2BQy5InHjkOqQ9Yms4gpBrk5oGPJ5k5RzRCkIG8G9m89iOSKGZlZ%2Fn0B%2BFuU%2Bf0a%2FTaIROSkosL3c2%2FZpeFK7Zj5stp0k1e25FH1YVOsgYYX85aWZHInR9PahJEz56GkEJHDyr3UM4AzE0g5D%2BmR%2B%2FA969tY1r%2BEE06UHAd5f4wVKbMgOLoQ%3D%3D';}$done({'url':CX,'headers':cx});
