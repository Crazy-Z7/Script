/*************************************************
@@Zoo
b站解锁大会员番剧影视+4K
日期:2022.09.22
[rewrite_local]
^http[s]:\/\/(.*.bili*.com) url script-request-header https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/bi.js
^https:\/\/api\.bilibili\.com url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/4k.js
hostname = *.bili*.com,api.bilibili.com
*********************************************/
