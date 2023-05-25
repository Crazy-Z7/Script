
/*************************************
作者:Zoo
解锁KaDa阅读、绘本，课程，听书会员，功能自测
日期:2023.05.26
[rewrite_local]
https://service.hhdd.com/story2/getCollectItems.json url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/KaDaVip.js
https://course-service.hhdd.com/course/mix/info2.json url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/KaDaVip.js
https://service.hhdd.com/book2/info1.json url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/KaDaVip.js
hostname = course-service.hhdd.com,service.hhdd.com
**************************************/












































const Zoovip1 = "/book2/info1.json";
const Zoovip2 = "/course/mix/info2.json";
const Zoovip3 = "/story2/getCollectItems.json";
var body = $response.body;if ($request.url.indexOf(Zoovip1) != -1){let KadavipZoo = JSON.parse(body);KadavipZoo.data.bookVip = 0;KadavipZoo.data.subscribeStatus = 1;body = JSON.stringify(KadavipZoo);}if ($request.url.indexOf(Zoovip2) != -1){let KadavipZoo = JSON.parse(body);KadavipZoo.data.courseVip = 1;KadavipZoo.data.subscribed = 1;body = JSON.stringify(KadavipZoo);}if ($request.url.indexOf(Zoovip3) != -1){let KadavipZoo = JSON.parse(body);KadavipZoo.data.subscribe = 1;
KadavipZoo.data.items.storyVip = 0;body=JSON.stringify(KadavipZoo);}$done({body});
