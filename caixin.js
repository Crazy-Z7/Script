/******************************************
@@Zoo
财新解锁财新通，不需要登录 会员有效期2022.10.30
日期:2022.10.17
[rewrite_local]
^https?:\/\/gateway\.caixin\.com\/api\/app\-api\/auth\/(validateAudioAuth|validate|groupImageValidate) url script-request-header https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/caixin.js
hostname = gateway.caixin.com
*******************************************/
var caixin=$request['headers'];caixin['User-Agent']='Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 CaixinV5/7.9.7 deviceType/1';const Caixin=$request['url']['replace'](/uid=(\d+|)/g,'uid=12910665')['replace'](/code=(\w+|)/g,'code=9FF3F46D6E2FA6361B7184C6A9DA81E8')['replace'](/device=(\w+|)/g,'device=b04a8bad013f6f5f2393c4fe9db1e1c32e275688')['replace'](/deviceType=(\d+|)/g,'deviceType=1');if($request['url']['indexOf']('validateAudioAuth')!=-0x1){caixin['appinfo']='75SU0e5TW70SSqRtJ/F6dN60qhTR/VmZTj9JQB4m3Uwq7sM2Mqb98In8aC3o0jcser45axESuqqrtjbo%2Bm5AYSqtjFpFIiPYMcmS35ifWwfGXmPy6G3ZfDrNMJHAO8zVI83DMZPHE9r5t375zH/BVfj04f5EQw53zCWVI3FA5Zo16qvcBagWJpbeWL4zNT8gDHXMWIqoT1Vx7k7vkaRp7rVdzSUSO5SaMvFbYOY1VWBwOZOzt3ukHaDx6I3Bkq2Gpdxt/Eg5WRUb7AHbkGzQx6SGuifbfpLJUncZbgzLNH%2BOegKxdjwb9BKn7S%2BMvzTQMlvIKjZIGccWTbDImn0ahT1NTsSSKRbWRcjpnn8oVlfEBiyZbom1NV%2BwxPeMuz5hG3cjcI37GGDERqcvtCasSeh6vYhbS6SyEn7Jt%2BJgnm5V3P6fTz1mdkak8jxUjCc0dZKB2gTV8713%2BbBbFcOyJI04/jnRHOS6bSlCImGFBH5mzYiqBqTmgiIobf11xg6L0dpm8SYZF2svIpFNBtECUw%3D%3D';}$done({'url':Caixin,'headers':caixin});
