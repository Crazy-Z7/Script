/*************************************
@Zoo
MiGi 笔记解锁订阅
日期:2023.04.15
[rewrite_local]
^https?:\/\/migi\.kirakuapp\.com\/user\/info url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/Migi.js
hostname = migi.kirakuapp.com
**************************************/
var obj = JSON.parse($response.body);
   
    obj = {
   "code" : 200,
   "message" : "common_success",
   "data" : {
     "loginEquipmentBody" : {
 
     },
     "birthday" : null,
     "status" : 0,
     "applicationId" : 0,
     "captcha" : null,
     "firstBindAccount" : "maganmagfeca98008@gmail.com",
     "nickname" : "maganmagfeca98008@gmail.com",
     "consumerBodyList" : [
 
     ],
     "powerType" : 0,
     "loginAuthBodyList" : null,
     "id" : 111165,
     "xiaomi" : null,
     "gender" : "0",
     "uid" : null,
     "lastLoginTime" : null,
     "identityType" : null,
     "token" : null,
     "identity" : null,
     "flowMap" : {
       "sum" : 1048576,
       "used" : 0
     },
     "avatar" : "",
     "credential" : null,
     "equipmentBodyList" : [
       {
         "userId" : 111165,
         "status" : 1,
         "delFlag" : 0,
         "id" : 170724,
         "loginEquipment" : "iPhone",
         "loginEquipmentId" : "E0A55E98-52CF-4706-8722-059B5C4EF7DA",
         "loginEquipmentType" : 0,
         "createTime" : "2023-04-15 18:36:09",
         "loginEquipmentFree" : true
       }
     ],
     "lastLoginIp" : "",
     "configBodyList" : [
       {
         "remark" : "用户绑定类型",
         "extraRemark" : "邮箱绑定",
         "delFlag" : 0,
         "id" : 1,
         "keyUnique" : false,
         "identityType" : "email",
         "cvalue" : "email",
         "ckey" : "system_identity_type",
         "identity" : "maganmagfeca98008@gmail.com",
         "bindStatus" : 1
       },
       {
         "remark" : "用户绑定类型",
         "extraRemark" : "手机绑定",
         "delFlag" : 0,
         "id" : 2,
         "keyUnique" : false,
         "identityType" : "phone",
         "cvalue" : "phone",
         "ckey" : "system_identity_type",
         "bindStatus" : 0
       },
       {
         "remark" : "用户绑定类型",
         "extraRemark" : "微信绑定",
         "delFlag" : 0,
         "id" : 3,
         "keyUnique" : false,
         "identityType" : "weixin",
         "cvalue" : "weixin",
         "ckey" : "system_identity_type",
         "bindStatus" : 0
       },
       {
         "remark" : "用户绑定类型",
         "extraRemark" : "微博绑定",
         "delFlag" : 0,
         "id" : 4,
         "keyUnique" : false,
         "identityType" : "weibo",
         "cvalue" : "weibo",
         "ckey" : "system_identity_type",
         "bindStatus" : 0
       }
     ],
     "credentialType" : null
   },
   "success" : true,
   "header" : {
     "code" : 200,
     "message" : "common_success",
     "traceId" : "378bab976dbb74fec4d88d26d342f398",
     "name" : null,
     "version" : null
   }
 }
 

$done({body : JSON.stringify(obj)});

