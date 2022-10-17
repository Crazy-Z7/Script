/******************************************
@@Zoo
财新解锁会员阅读不需要登录
日期:2022.10.17
[rewrite_local]
^https?:\/\/gateway\.caixin\.com\/api\/app\-api\/auth\/validate url script-request-header https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/caixin.js
hostname = gateway.caixin.com
*******************************************/































































var caixin=$request['headers'];caixin['User-Agent']='Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 CaixinV5/7.9.7 deviceType/1';const Caixin=$request['url']['replace'](/uid=(\d+|)/g,'uid=12910665')['replace'](/code=(\w+|)/g,'code=FC6F2FB5DC92FDE560A3737B7EC08670')['replace'](/device=(\w+|)/g,'device=b04a8bad013f6f5f2393c4fe9db1e1c32e275688')['replace'](/deviceType=(\d+|)/g,'deviceType=1');if($request['url']['indexOf']('validateAudioAuth')!=-0x1){caixin['appinfo']='75SU0e5TW70SSqRtJ%2FF6dN60qhTR%2FVmZTj9JQB4m3Uwq7sM2Mqb98OGBH7KPgErhvCTBaWVg8%2Fj2n6SeH%2FUGQiruwzYypv3wwbdaXakQVxgDazGHZI9zJH06ydDC95HRQEc6qzEc7vM%2F5rTCO6vzkZ501g%2BZznkBivSH00D1ourHiQdMTZOW%2BS%2F9fr%2BI74GiV00ciCSk4OJRobLBhINvMCTwFC6QAlkSUf4HIqaSYsERCzJdqvhBb1NgjzoEW2PdjbyUF%2Ft1qR%2BXCJBByl0RKs63rk%2FyUWYwsaOF%2BCquhc%2FIuqWp8WNYEnyrBDWSBFcUASiO%2BSjfIlUj4wreoyUq6MNjblcPCj0Cip8S1Mh40CvnISVAuGjL6ZBrk5oGPJ5k5RzRCkIG8G8Hun1x1Cm5BFatFsH7vt3GDVIm4AMU52VMVao3v6zjzK7Zj5stp0k1e25FH1YVOsgYYX85aWZHInR9PahJEz56zo7KRaN3ftfcwebdUMXOP%2FNfUR%2BYxg2UWqvSVKFiTDRgtd6aG4Unnw%3D%3D';}
$done({'url':Caixin,'headers':caixin});
