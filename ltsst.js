/**********************************************
作者:Zoo
旅途随身听解锁会员
日期:2023.06.04
[rewrite_local]
^https?:\/\/www\.1314zhilv\.com\/ltsstnew\/user\/getInfo url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Script/main/ltsst.js
hostname = www.1314zhilv.com
**********************************************/
let obj = JSON.parse($response.body);
   
    obj = {
   "state": 200,
   "message": "success",
   "content": {
     "isAnchor": 1,
     "isShowAppletWX": 1,
     "identityType": 1,
     "isShowAppletDY": 1,
     "levDesc": "超级会员",
     "headUrl": "https://www.1314zhilv.com/resources/lxwalkman/userLogo.png",
     "isShowGrey": 1,
     "phoneNum": "10086",
     "isMountSwitch": 0,
     "userName": "用户10086",
     "userId": "10086",
     "isActivate": 1
   },
   "success": true
 }

$done({body : JSON.stringify(obj)});
