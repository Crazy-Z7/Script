/**********************************************
@@Zoo
樊登读书解锁会员权限
日期:2022.11.19
[rewrite_local]
^https?:\/\/.+dushu.+(v101/content|book/v100/info|/play/duration|/v100/index).*$ url request-body "token":"[^"]+ request-body "token":"20221119qbmqdUt8vptKBeZn7ox
hostname = *dushu*
**********************************************/
