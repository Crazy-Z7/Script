/************************************************
@@Zoo
懒人听书解锁会员权限
日期:2022.11.02
[rewrite_local]
^https?:\/\/(.*.mting.info) url script-request-header https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/lrtsvip.js
hostname = *.mting.info
************************************************/
var lrtsvip = $request.headers;
lrtsvip['Cookie'] = 'apisid=eyJ1c2VyQmFzZUF0dHJDb29raWVEYXRhIjp7InNldENvb2tpZVRpbWUiOjE2NjczOTMxNDI4MjIsInVzZXJHcm91cElkcyI6IjEsMiJ9LCJ1c2VySWQiOjc2MjczNzY4Nn0=';
lrtsvip['User-Agent'] = 'iOS15.6.1/yyting/Apple/iPhone14,3/ch_AppStore/5.0.7/iPhone';


const lrts=$request['url']['replace'](/toen=(.*?|)/g,'toen=_T3-ccFjOKfP1SZKF6GjFg%2A%2A_l2IIs2fj4E0crg4DuZS3zP99lHVJlk3U');

$done({'url':lrts,'headers':lrtsvip});
