// ==UserScript==
// @name         CSDN/知乎/哔哩哔哩/简书免登录去除弹窗广告 🛡
// @namespace    http://tampermonkey.net/
// @version      0.2.9.2
// @description  登录个锤子  🌭 +适配移动端📱 | 去除所有广告🥽 | 任意文本复制🖱︎ | 界面优化让阅读更轻松📄
// @author       T_T
// @license      GPL-3.0 License
// @original-script https://greasyfork.org/scripts/412212 (c)X.I.U
// @original-changes Use zhihu dark theme
// @run-at       document-body
// @match        https://www.zhihu.com/*
// @match        https://*.zhihu.com/*
// @match        https://blog.csdn.net/*
// @match        https://*.csdn.net/*
// @match        https://www.jianshu.com/*
// @match        https://*.jianshu.com/*
// @match        https://www.bilibili.com/*
// @match        https://*.bilibili.com/*
// @match        https://juejin.cn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// @grant        GM_openInTab
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_notification
// @grant        unsafeWindow
// @require      https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.4.0/jquery.cookie.js
/* globals jQuery, $, waitForKeyElements */


// @note         0.2.9 修复哔哩哔哩去弹窗&去除复制小尾巴, CSDN免关注展开文本，修复知乎部分问题
// @note         0.2.8 修复Chrome97下CSDN失效问题，新增哔哩哔哩去弹窗
// @note         0.2.7 修复CSDN免登录复制问题，更新简书宽屏及展开全文
// @note         0.2.6 修复简书无法写文章的问题，更新广告屏蔽列表，优化CSDN显示
// @note         0.2.5 修复知乎部分回答下拉频闪问题
// @note         0.2.4 修复已知问题, 新增知乎问答时间显示
// @note         0.2.3 修复了知乎页面未加载完成时登录按钮失效的问题
// @note         0.2.2 更新屏蔽策略
// @note         0.2.1 修复知乎黑夜模式界面切换不统一问题，新增一键简化按钮(待完成，默认开启)，让阅读更轻松
// @note         0.2.0 去除CSDN顶部广告，净化主页
// @note         0.1.9 新增知乎黑夜模式
// @note         0.1.8 修复移动端知乎专栏已知问题，新增知乎图片原图显示，新增知乎首页热搜榜
// @note         0.1.7 知乎移动端首页新增搜索框，修复CSDN个别页面无法复制问题
// @note         0.1.6 适配CSDN移动端网页
// @note         0.1.5 适配知乎移动端网页
// @note         0.1.4 更新简书全站广告屏蔽策略, 适配简书移动端网页
// @note         0.1.3 修复简书首页抽奖弹窗问题, 新增知乎直接复制功能，删除CSDN一键三连按钮
// @note         0.1.2 优化了屏蔽策略，增加CSDN/简书直接复制、去除版权声明功能
// ==/UserScript==

let version = "0.2.9.2";
Script_setting();


var $$ = document.querySelectorAll.bind(document);

(function() {
    'use strict';

    var url = unsafeWindow.location.href;//document.location.host
    var mobile=/(Android|iPhone|iPad)/i.test(navigator.userAgent);

    if(url.indexOf('zhihu.com')!=-1)
    {
        Zhihu_dark_theme();
        //登录页跳转
        if(url == "https://www.zhihu.com/signin?next=%2F")
        {
            window.location.replace("https://www.zhihu.com/search?q=&type=content");
        }
        //首页热搜
        if(url == 'https://www.zhihu.com/search?q=&type=content')
        {
            GM_addStyle('#SearchMain {visibility:hidden !important}');
            unsafeWindow.setTimeout(function(){ Zihu_hot_in_home(); },0);
            unsafeWindow.setTimeout(function(){ Zihu_hot_in_home(); },100);
            unsafeWindow.setTimeout(function(){ Zihu_hot_in_home(); },1000);
            GM_addStyle('#SearchMain {visibility:visible !important}');
        }
        //知乎弹窗去除 ->
        GM_addStyle('.css-ysn1om{display:none !important}');//右上方登录提示
        GM_addStyle('.css-1ynzxqw,.css-1t53heo{display:none !important}');//右下方登录提示
        GM_addStyle('.Modal-wrapper{display:none !important}');//登录弹窗
        //该方法仅屏蔽首次登录弹窗，页面内点赞等操作后仍会提示。完全屏蔽请注释后使用（将无法查看对话详情）//
        unsafeWindow.onload = function(){
            console.log("[知乎]页面加载完成");
            if(url != 'https://www.zhihu.com/search?q=&type=content'){
                unsafeWindow.setTimeout(function(){if(document.querySelector(".Modal-wrapper")){document.querySelector(".Modal-wrapper").remove();console.log("[知乎]登录窗口已去除");} GM_addStyle('.Modal-wrapper{display:flex !important}');console.log("[知乎]登录弹窗已恢复");}, 100);
            }else{ GM_addStyle('.Modal-wrapper{display:flex !important}') }
        }
        //<-
        GM_addStyle('html{overflow:visible !important}');
        GM_addStyle('html{margin-right:auto !important}');
        GM_addStyle('.Question-mainColumnLogin{display:none !important}');//登录提示栏
        //GM_addStyle('.Sticky{display:none !important}');//右侧窗口
        GM_addStyle('.Card.AppBanner{display:none !important}');//右侧登录提示栏
        GM_addStyle('.Pc-card.Card{display:none !important}');//右侧广告

        GM_addStyle('.Pc-word {display:none !important}');//问答列表内广告

        GM_addStyle('.TheaterDetailDanmakuArea-footer {display:none !important}');//直播评论区下方下载按钮

        //一键简化
        Clean_zhihu();

        //mobile
        if(mobile){Mobile_zhihu();}
        GM_addStyle('.OpenInAppButton {display:none !important}');//删除打开app按钮(首页/移动端)


        //Pic 原图
        PIC_zhihu();
        //Seconde
        unsafeWindow.setTimeout(function(){ PIC_zhihu()},1000);
        //颜色主题切换
        unsafeWindow.setTimeout(function(){ Change_theme_zhihu() },100);
        unsafeWindow.setTimeout(function(){ Change_theme_zhihu() },1000);
        //回答时间显示
        if(url.indexOf('https://www.zhihu.com/question')!=-1){Time_for_zhihu();}

        [].concat(...document.querySelectorAll("*")).map(item=>{//
            item.oncopy = function(e) {
                e.stopPropagation();
            }
        });
    }
    else if(url.indexOf('csdn.net')!=-1)
    {
        //侧边栏广告
        GM_addStyle('#footerRightAds{display:none !important}');
        //CSDN登录弹窗去除 ->
        GM_addStyle('.passport-login-container {display:none !important}');//登录弹窗//收藏点赞订阅专栏将无反应
        GM_addStyle('#csdn-toolbar-profile-nologin {display:none !important}');//登录提示弹窗
        //<-
        //右侧悬浮导航栏广告
        GM_addStyle('.csdn-common-logo-advert{display:none !important}');
        //右侧缩放提示
        GM_addStyle('.leftPop{display:none !important}');
        //评论上方打赏
        GM_addStyle('.reward-box-new{display:none !important}');
        //评论上方广告
        GM_addStyle('#dmp_ad_58{display:none !important}');
        //展开代码块
        GM_addStyle('pre.set-code-hide{height:100% !important}');
        GM_addStyle('pre.set-code-hide .hide-preCode-box{display:none !important}');
        //展开评论
        GM_addStyle('.comment-list-box{max-height:none !important}');
        GM_addStyle('.opt-box.text-center{display:none !important}');
        //展开需关注博主文本
        GM_addStyle('#article_content{height:100% !important}');
        GM_addStyle('.hide-article-box.hide-article-pos.text-center{display:none !important}');
        //一键三连按钮
        GM_addStyle('#health-companies {display:none !important}');
        //评论抢沙发
        GM_addStyle('.comment-sofa-flag {display:none !important}');
        //分享海报按钮
        //GM_addStyle('#health-companies {display:none !important}');
        //博主商场
        GM_addStyle('#csdn-shop-window-top {display:none !important}');//top
        GM_addStyle('#csdn-shop-window {display:none !important}');//buttom
        //页面顶部广告
        GM_addStyle('.toolbar-advert {display:none !important}');
        ///首页///
        if(url.indexOf('https://www.csdn.net/')!=-1){
            GM_addStyle('#kp_box_ww9877 {display:none !important}');//横条广告
            GM_addStyle('#kp_box_www_swiper {display:none !important}');//‘头条’右侧广告
            GM_addStyle('.www-home-silde-top {display:none !important}');//右侧广告
            GM_addStyle('.so-questionnaire {display:none !important}');//自产自销投票
            GM_addStyle('.links {display:none !important}');//友链
            GM_addStyle('.ad_fullWidth {display:none !important}');//列表内广告
        }
        ///blog首页///
        if(url.indexOf('https://blog.csdn.net/')!=-1){
            GM_addStyle('.banner-ad-box {display:none !important}');//横条广告
        }
        ///下载页//
        GM_addStyle('.ads.mt-10 {display:none !important}');//图片广告

        //一键简化
        Clean_csdn();

        //mobile
        if(mobile){Mobile_csdn();}

        // 免登录复制
        //if(url.indexOf('https://www.csdn.net/')==-1){//绕过首页
        GM_addStyle('#content_views pre code{user-select:text !important}');
        GM_addStyle('#content_views pre{user-select:text !important}');
        GM_addStyle('#content_views{user-select:text !important}');
        try{
            window.onload=function()
            {
                $("code").attr("onclick", "mdcp.copyCode(event)");
                // 免登录复制
                if($(".hljs-button").length > 0)
                {
                    $(".hljs-button").removeClass("signin");
                    $(".hljs-button").addClass("{2}");
                    $(".hljs-button").attr("data-title", "复制");
                    $(".hljs-button").attr("onclick", "hljs.copyCode(event)");
                }
                //$("pre").forEach(item=>{item.forEach(children=>{children.attr("data-title","复制")})});
                //document.body.contentEditable='true';
                //document.designMode='on';
                // 去除剪贴板CopyRight版权声明
                try{
                    unsafeWindow.csdn.copyright.init("", "", "");////貌似官方取消了该方法///暂时不去除该代码
                }catch(_err){}
            }
        }catch(err){
            $$('*').forEach(item=>{ item.oncopy = e => e.stopPropagation()});
        }
        //}
        //
    }
    else if(url.indexOf('jianshu.com')!=-1)
    {
        //简书去除弹窗
        GM_addStyle('.-umr26{display:none !important}');
        GM_addStyle('._27yofX{display:none !important}');
        GM_addStyle('._1aCo37{display:none !important}');
        GM_addStyle('._1aCo37-mask{display:none !important}');

        GM_addStyle('body{ position: none !important}');
        GM_addStyle('body{width: auto !important}');
        GM_addStyle('body{overflow: auto !important}');
        GM_addStyle('._3JYrtj :nth-child(2) {display:none !important}');//app下载

        GM_addStyle('._19DgIp{display:none !important}');//<hr/>
        GM_addStyle('._16AzcO{display:none !important}');//扫描下载app
        GM_addStyle('._6S_NkV{display:none !important}');//扫描下载app
        GM_addStyle('.l8ZVfE{display:none !important}');//扫描下载app

        //自动展开全文
        GM_addStyle('._2rhmJa._2BJJ_f{height:100% !important}');
        GM_addStyle('._22e-Te._24jYYR{display:none !important}');

        //首页
        //标题栏
        GM_addStyle('#web-nav-app-download-btn {display:none !important}');//标题栏下载APP按钮
        //unsafeWindow.setTimeout(function(){if(document.querySelector("#web-nav-app-download-btn")){document.querySelector("#web-nav-app-download-btn").remove();}}, 100);//标题栏下载APP按钮
        //
        GM_addStyle('#index-aside-download-qrbox{display:none !important}');//app下载
        GM_addStyle('._24FgOn2LX2uICAAvbCms63_0{display:none !important}');//广告
        GM_addStyle('._3Qa4dn5YlokOkxn6RsnEsL_0{display:none !important}');//抽奖
        GM_addStyle('.fa8byxiLG1y_kbW7CHjYk_0{display:none !important}');//右侧抽奖浮动窗口
        GM_addStyle('.self-flow-ad.clearfix{display:none !important}');//列表广告
        GM_addStyle('.commonclass{display:none !important}');//列表广告
        unsafeWindow.setTimeout(function(){
            if(document.querySelector(".col-xs-7"))
            {//强制删除右侧栏垃圾广告
                unsafeWindow.setTimeout(function(){document.querySelector(".col-xs-7").children[2].remove();document.querySelector(".fa8byxiLG1y_kbW7CHjYk_0").remove();}, 100);//广告
                unsafeWindow.setTimeout(function(){unsafeWindow.setInterval(function(){if(document.querySelector(".col-xs-7").childElementCount > 4){console.log('rm #01');document.querySelector(".col-xs-7").children[2].remove()}else{clearInterval(this)}}, 100);});
            }
        }, 100);

        //专题页
        GM_addStyle('.col-xs-24.col-sm-7.col-sm-offset-1.aside {visibility:hidden !important}');//隐藏右侧栏
        unsafeWindow.onload=function(){//加载完后移除广告并重新显示右侧栏
            unsafeWindow.setTimeout(function(){if(document.querySelector(".col-xs-24.col-sm-7.col-sm-offset-1.aside")){document.querySelector(".col-xs-24.col-sm-7.col-sm-offset-1.aside").children[0].remove();document.querySelector(".col-xs-24.col-sm-7.col-sm-offset-1.aside").children[4].remove();}GM_addStyle('.col-xs-24.col-sm-7.col-sm-offset-1.aside {visibility:visible !important}');}, 0);
        }
        GM_addStyle('iframe {display:none !important}');//该方法适用于本站所有广告,登录后影响未知  //列表广告

        //一键简化
        Clean_jianshu();

        //Mobile
        if(mobile){Mobile_jianshu();}

        $$('*').forEach(item=>{ item.oncopy = e => e.stopPropagation()});
        /* //去除剪贴板版权声明 or this one
        [].concat(...document.querySelectorAll("*")).map(item=>{//
            item.oncopy = function(e) {
                e.stopPropagation();
            }
        });*/
    }
    else if(url.indexOf('bilibili.com')!=-1)
    {
        //首页
        GM_addStyle('.login-panel-popover{display:none !important}');//新版toolbar登录弹窗
        //GM_addStyle('.unlogin-popover{display:none !important}');//旧版toolbar登录弹窗-将留有横线
        //GM_addStyle('.van-popover.van-popper{display:none !important}');//旧版toolbar登录弹窗-登录后无法获得焦点
        GM_addStyle('.login-tip{display:none !important}');//登录弹窗tip提示
        GM_addStyle('.banner-card.b-wrap{display:none !important}');//首页横条广告
        GM_addStyle('.eva-banner{display:none !important}');//新版首页横条广告
        GM_addStyle('.contact-help{display:none !important}');//首页联系客服
        GM_addStyle('.nav-link-ul{display:none !important}');//旧版下载app按钮
        if($('.bilifont.bili-icon_dingdao_xiazaiapp')){$('.bilifont.bili-icon_dingdao_xiazaiapp').parent().parent().css('display','none');GM_addStyle('.nav-link-ul{display:flex !important}');}//下载app按钮
        GM_addStyle('.download-entry{display:none !important}');//新版下载app按钮toolbar
        //番剧
        GM_addStyle('.gg-floor-module{display:none !important}');//首页横条广告
        //视频页
        GM_addStyle('#bannerAd{display:none !important}');//视频下方广告
        GM_addStyle('#activity_vote{display:none !important}');//视频下方活动推广
        GM_addStyle('.ad-report.video-card-ad-small{display:none !important}');//视频合集右侧弹幕列表视频选集间广告

        //手机端
        GM_addStyle('.launch-app-btn.home-float-openapp{display:none !important}');//首页打开APP
        GM_addStyle('.launch-app-btn.m-nav-openapp{display:none !important}');//首页下载APP
        GM_addStyle('.mplayer-widescreen-callapp{position:unset !important; z-index:unset !important; display:none !important; visibility:hidden !important}');//视频内打开APP
        GM_addStyle('.m-video2-awaken-btn{display:none !important}');//视频页视频下方打开app
        GM_addStyle('.launch-app-btn.m-float-openapp{display:none !important}');//视频页右侧浮动打开app
        GM_addStyle('.launch-app-btn.related-openapp{display:none !important}');//视频页底部打开app

        $$('*').forEach(item=>{ item.oncopy = e => e.stopPropagation()});
    }
    else if(url.indexOf('juejin.cn')!=-1)
    {
        GM_addStyle('.sidebar-block.banner-block{display:none !important}');//首页右侧广告
        GM_addStyle('.extension{display:none !important}');//底部广告

        document.oncopy = event => event.clipboardData.setData('text',window.getSelection(0).toString());
    }

})();


function Mobile_jianshu(){
    //SetUA("iphone"); //无效，需要借助外部插件更改UA
    //首页 & (专题)
    GM_addStyle('.modal {display:none !important}');//去除首页引流app界面,直接进入首页
    GM_addStyle('.slogan {display:none !important}');//导航栏提示
    GM_addStyle('.header-download {display:none !important}');//导航栏下载按钮
    GM_addStyle('.index_call-app-btn {display:none !important}');//打开app提示按钮 //打开APP，看更多好文
    GM_addStyle('.note__flow__download {display:none !important}');//文章列表内 app内查看提示按钮
    //循环删除列表广告
    unsafeWindow.setTimeout(function(){
        var loop = unsafeWindow.setInterval(
            function(){
                if(document.querySelector(".flow-list-ul"))
                {
                    if(document.querySelector(".flow-list-ul").children[1])
                    {
                        if(document.querySelector(".flow-list-ul").children[1].children[1])
                        {
                            console.log('rm #02');document.querySelector(".flow-list-ul").children[1].children[1].remove();
                        }else{
                            clearInterval(loop);
                        }
                    }else{
                        clearInterval(loop);
                    }
                }else{
                    clearInterval(loop);
                }
            }, 100
        )});
    GM_addStyle('#footer {display:none !important}');//footer
    //移除显示app下载,展开更多
    GM_addStyle('.wrapper-kBteQ_0 {display:none !important}');//隐藏展开更多弹窗
    //展开更多hook //bug => 文章页进入主页后失效//已解决 #BUG001
    unsafeWindow.setTimeout(function(){ $(".logo-wrap").click(function(){window.location.replace("https://www.jianshu.com/");}) },1000);//解决bug #BUG001 =》 因为官方未刷新页面策略导致，添加刷新策略
    //方法2 unsafeWindow.setTimeout(function(){ if($('.flow-list-placeholder-load-more')){$('.flow-list-placeholder-load-more').click(function(){console.log(10021255);$(".dialog-1f6iY_0").removeClass();document.querySelector(".cancel").click();});}},1000);
    unsafeWindow.setTimeout(function(){ $$('.flow-list-placeholder-load-more').forEach(item=>{ item.onclick = e => {console.log(10021255);$(".dialog-1f6iY_0").removeClass();document.querySelector(".cancel").click();}}); },1000);

    /*//去除文章顶部和底部广告
    var wphad_loop = unsafeWindow.setInterval(function() {
        var wph_ad = document.querySelector('div[aria-label="wph-ad"]');
        if (wph_ad) {
            wph_ad.remove();
            //clearInterval(wphad_loop);
        }
    }, 1000);*///不起作用待修复

    //文章页
    GM_addStyle('.call-app-btn {display:none !important}');//打开app提示按钮 //打开APP，看更多好文
    GM_addStyle('.download-app-guidance {display:none !important}');//打开app继续浏览内容底部弹窗//部分机型
    GM_addStyle('.app-open {display:none !important}');//时间侧边打开App按钮
    GM_addStyle('.wrapper-21Vwf_0 {display:none !important}');//文章内广告
    GM_addStyle('.line-container {display:none !important}');//诱导点赞文本
    //展开全文
    GM_addStyle('.collapse-free-content {position:static !important; height:100% !important; overflow:visible !important; padding-left:0 !important;padding-right:0 !important;margin-left:0 !important;margin-right:0 !important;}');
    GM_addStyle('.collapse-free-content:after { content:normal !important; position:static !important; left:auto !important; bottom:auto !important;width:auto !important;height:auto !important;}');
    GM_addStyle('.collapse-tips {display:none !important}');//删除展开全文按钮
    unsafeWindow.setTimeout(function(){ if($(".note").children().length == 6){$(".note").children(':last-child').remove()} },500); unsafeWindow.setTimeout(function(){ if($(".note").children().length == 6){$(".note").children(':last-child').remove()} },2500);//文章底部唯品会广告
    ////unsafeWindow.setTimeout(function(){var $$ = document.querySelectorAll.bind(document); $$('.note-graceful-button').forEach(item=>{ item.onclick = e => { e.stopPropagation();e.preventDefault(); } });},1000);//去除剪贴板版权声明
    GM_addStyle('.comment-open-app-btn-wrap {display:none !important}');//诱导打开App，查看全部评论
    GM_addStyle('.more {display:none !important}');//更多精彩内容
    GM_addStyle('.recommend-wrap.recommend-ad {display:none !important}');//更多精彩内容
    GM_addStyle('.wrapper-_PVsE_0 {display:none !important}');//底部谷歌广告

    //小说文章页
    unsafeWindow.setTimeout(function(){ $(".book").children(':last-child').remove() },1000);//文章底部唯品会广告
    unsafeWindow.setTimeout(function(){ $(".book-info").click(function(){window.location.replace($(".book-info").attr('href'));}) },1000);//解决bug #BUG001 =》 因为官方未刷新页面策略导致，添加刷新策略
}



function Mobile_zhihu(){
    //专栏
    if(location.host.startsWith('zhuanlan')){
        SetUA("iphone");
        GM_addStyle('.Post-Button-ViewMore {display:none !important}');///查看更多/文字
        GM_addStyle('.css-9zqjc3-CommentContent {-webkit-line-clamp:unset !important}');//完整显示
        unsafeWindow.setTimeout(function(){
            if(document.querySelector(".Post-Sub")){ document.querySelector(".Post-Sub").onclick = function(e){ e.stopPropagation() } }
            if(document.querySelector(".css-qbubgm")){document.querySelector(".css-qbubgm").onclick = function(e){
                var ZL_pl = document.querySelector(".css-18nrxkn-PreviewCommentContent");
                if(ZL_pl){
                    ZL_pl.scrollIntoView({
                        behavior: "smooth", // 定义动画过渡效果， "auto"或 "smooth" 之一。默认为 "auto"
                        //block: "center", // 定义垂直方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "start"
                        //inline: "nearest" // 定义水平方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "nearest"
                    });//跳转评论
                }
            }}
        },1000);
    }else{SetUA("iPad")}

    //首页
    GM_addStyle('.MobileAppHeader-downloadLink {display:none !important}');//导航栏下载app
    GM_addStyle('.MobileAppHeader-authLink {display:none !important}');//导航栏注册登录
    GM_addStyle('.MobileAppHeader-searchBoxWithUnlogin {width: 70% !important}');//搜索框拉长
    GM_addStyle('.OpenInAppButton {display:none !important}');//打开app按钮
    //GM_addStyle('.DownloadGuide--downloadButton {display:none !important}');//下载app按钮 ->
    //更改为登录按钮
    var url = unsafeWindow.location.href;
    if(url == "https://www.zhihu.com/" || url.indexOf("https://www.zhihu.com/?utm_source=zhihu")!=-1){
        unsafeWindow.onload = function(){
            if(document.querySelector(".DownloadGuide--downloadButton")){
                var login_button = document.querySelector(".DownloadGuide--downloadButton").querySelector("a");
                login_button.text = "登录";
                login_button.href = "https://www.zhihu.com/signin?next=https://www.zhihu.com/";
            }
        }
    }
    //<-
    //导航栏添加搜索框
    if(url != "https://www.zhihu.com/search?type=content&q="){
        var input = document.createElement('input');
        input.type = "search"; input.className = "Input"; input.placeholder="搜索"; input.value="";
        var searchBox = document.createElement('label');
        searchBox.className = "MobileAppHeader-searchBox MobileAppHeader-searchBoxWithUnlogin Input-wrapper";
        var path = document.createElement('path');
        path.setAttribute("d", "M 17.068 15.58 a 8.377 8.377 0 0 0 1.774 -5.159 a 8.421 8.421 0 1 0 -8.42 8.421 a 8.38 8.38 0 0 0 5.158 -1.774 l 3.879 3.88 c 0.957 0.573 2.131 -0.464 1.488 -1.49 l -3.879 -3.878 Z m -6.647 1.157 a 6.323 6.323 0 0 1 -6.316 -6.316 a 6.323 6.323 0 0 1 6.316 -6.316 a 6.323 6.323 0 0 1 6.316 6.316 a 6.323 6.323 0 0 1 -6.316 6.316 Z");
        path.setAttribute("fill-rule","evenodd");
        var svg = document.createElement('svg');
        svg.setAttribute("class","Zi Zi--Search");
        svg.setAttribute("fill","#999");
        svg.setAttribute("viewBox","0 0 24 24");
        svg.setAttribute("width","18");
        svg.setAttribute("height","18");
        svg.append(path);
        searchBox.append(svg);
        searchBox.append(input);
        unsafeWindow.setTimeout(function(){ if(document.querySelector(".MobileAppHeader-inner")){document.querySelector(".MobileAppHeader-inner").append(searchBox)}},100);
        unsafeWindow.setTimeout(function(){ if(document.querySelector(".MobileAppHeader-inner")){document.querySelector(".MobileAppHeader-inner").append(searchBox)}},1000);
        searchBox.onclick = function(){
            window.location.replace("https://www.zhihu.com/search?type=content&q=");
        }}else{//搜索框点击仍有问题，BUG 002
            if(document.querySelector(".Input")){
                unsafeWindow.setTimeout(function(){ document.querySelector(".Input").focus();},1000);
            }
            document.querySelector(".Input").focus();
        }//END BUG 002

    //文章详情页
    GM_addStyle('.MBannerAd {display:none !important}');//文章底部广告
    GM_addStyle('.Card.RelatedReadings{display:none !important}');//文章底部广告
    GM_addStyle('.MHotFeedAd{display:none !important}');//热门推荐列表广告
    GM_addStyle('.HotQuestions-bottomButton{display:none !important}');//底部打开app
    //评论间距修复
    GM_addStyle('.Modal-content.css-1svde17 {padding: 5px !important}');//padding
    GM_addStyle('.Modal-content.css-1svde17 {width: 54% !important}');//width
    GM_addStyle('.Button.css-1x9te0t {left: -20px !important; top: 45px !important}');//close
    GM_addStyle('.Button.css-1x9te0t svg {fill:currentColor !important; color:#999999 !important}');//close
}


function Mobile_csdn(){
    SetUA("iphone"); //无效
    //首页
    GM_addStyle('#loginTag {display:none !important}');//导航栏注册登录
    GM_addStyle('.feed-Sign-span {display: none !important}');//打开app按钮
    GM_addStyle('.search_box {width: 220px !important}');//搜索框拉长

    //文章详情页
    GM_addStyle('.weixin-shadowbox.wap-shadowbox {display:none !important}');//诱导下载并打开APP弹窗(全屏)
    GM_addStyle('.feed-Sign-span {display:none !important}');//app打开按钮
    GM_addStyle('#loginTag {display:none !important}');//导航栏登录
    GM_addStyle('.btn_open_app_prompt_div{display:none !important}');//打开app按钮
    GM_addStyle('.readall_box{display:none !important}');//完全显示文章
    GM_addStyle('.article_content{overflow:visible !important; height:auto !important;}');//完全显示文章
    GM_addStyle('.view_comment_box{display:none !important}');//app打开按钮
    GM_addStyle('#first_recommend_list{display:none !important}');//去除最先推荐
    //GM_addStyle('.flag{display:none !important}');//去除浏览器打开字样

    //底部广告
    GM_addStyle('.add-firstAd {display: none !important}');//文章底部广告

    //-->未解决！！！！！
    //点击评论按钮跳转评论区
    unsafeWindow.setTimeout(function(){
        var comment_button = $("span.have_count");
        comment_button.unbind("click");//解绑
        comment_button.on("click", function(){
            document.querySelector('#comment').scrollIntoView({
                behavior: "smooth", // 定义动画过渡效果， "auto"或 "smooth" 之一。默认为 "auto"
                //block: "center", // 定义垂直方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "start"
                //inline: "nearest" // 定义水平方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "nearest"
            });
        });//重绑
    },1000);
    //<--未解决！！！！！！

    //优化相关推荐-免跳转下载app-推荐分类
    Mobile_csdn_Recommend();
}

function Mobile_csdn_Recommend(){
    //暂时无效   $(".recommend-jump-app").unbind();//解绑下载APP事件
}


//简化CSDN, 提升阅读体验
function Clean_csdn(){
    var mobile=/(Android|iPhone|iPad)/i.test(navigator.userAgent);
    if(mobile){return;}//移动端无需简化页面

    var url = unsafeWindow.location.href;
    var re_article_details = /https:\/\/(.*)blog.csdn.net\/(\w*)(\/*)article\/details\/(\w+)/;
    var re_blog_home = /(^https:\/\/(\w*).blog.csdn.net\/$)|(^https:\/\/blog.csdn.net\/(\w\/*)((?!article\/details).)+$)/;

    if (GM_getValue("menu_GAEEScript_tc_CSDN")) {
        if(url.match(re_article_details)){
            console.log("[CSDN]检测到文章详情页");
            Clean_csdn_article_details();//简化文章详情页
        }
        else if(url.match(re_blog_home)){
            console.log("[CSDN]检测到个人博客页面");
            Clean_csdn_blog_home();//简化个人博客页
        }
        //简化首页
        //(...)
    }
}

//简化CSDN-简化文章详情页
function Clean_csdn_article_details(){
    var did = false;
    var whiteTheme = true;

    //背景颜色判断
    if($('body').attr('class')=='nodata is_black_skin '){whiteTheme = false;}
    //页面居中 ->
    var count = 0;
    var page_width = $(".nodata .container").width();//页面原始宽度
    var page_width_Y = page_width - 67;//页面居中后宽度
    var _page = unsafeWindow.setInterval(function () {
        count += 1;
        if(count>=10){ unsafeWindow.clearInterval(_page) }
        console.log("[CSDN简化]页面正在设置居中");
        console.log("page_width: "+page_width);
        console.log("page_width_Y:"+page_width_Y);
        if(page_width === undefined){
            page_width = $(".nodata .container").width();
            page_width_Y = page_width - 67;
        }else{
            if($(".nodata .container").width() == page_width_Y){ unsafeWindow.clearInterval(_page) }
            $(".nodata .container").width(page_width_Y);//GM_addStyle('.nodata .container {width:1266px !important}');//页面居中
        }
    },0);
    //页面居中 <-

    GM_addStyle('.blog_container_aside {display:none !important}');///隐藏侧边栏
    $(".main_father").removeClass("justify-content-center");//样式恢复
    if (whiteTheme) {
        // 白色背景
        $('.main_father').attr('style', 'background-image: none !important; background-color: #f5f6f7; background: #f5f6f7;');
        $('[href^="https://csdnimg.cn/release/phoenix/template/themes_skin/"]').attr('href', 'https://csdnimg.cn/release/phoenix/template/themes_skin/skin-technology/skin-technology-6336549557.min.css');
        $('#csdn-toolbar').removeClass('csdn-toolbar-skin-black');
        $('.csdn-logo').attr('src', '//csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1');
    }else{
        // 黑色背景
        var _page_bg = unsafeWindow.setInterval(function () {
            $('.main_father').attr('style', 'background-color: #242424; background: #242424;');
            if($('.main_father').attr('style')=='background-color: #242424; background: #242424;'){unsafeWindow.clearInterval(_page_bg)}
        },0);
    }

    var _this = unsafeWindow.setInterval(function () {//多次加载增加鲁棒性
        console.log("[CSDN简化]文章背景简化中");
        //GM_addStyle('.blog_container_aside {display:none !important}');
        if(document.querySelector(".blog_container_aside")){
            //$(".blog_container_aside").remove();
            //$(".main_father").removeClass("justify-content-center");

            GM_addStyle('.blog_container_aside {display:none !important}');///侧边栏
            $(".main_father").removeClass("justify-content-center");//样式恢复
            if (whiteTheme) {
                // 白色背景
                $('.main_father').attr('style', 'background-image: none !important; background-color: #f5f6f7; background: #f5f6f7;');
                $('[href^="https://csdnimg.cn/release/phoenix/template/themes_skin/"]').attr('href', 'https://csdnimg.cn/release/phoenix/template/themes_skin/skin-technology/skin-technology-6336549557.min.css');
                $('#csdn-toolbar').removeClass('csdn-toolbar-skin-black');
                $('.csdn-logo').attr('src', '//csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1');
            }

            unsafeWindow.clearInterval(_this);
        }
    },10);

    GM_addStyle('.template-box {display:none !important}');
    GM_addStyle('#copyright-box {display:none !important}');
    unsafeWindow.setInterval(function () {
        //console.log("[CSDN简化]文章宽度自适应中");
        // 文章宽度自适应 //from https://greasyfork.org/zh-CN/scripts/378351-%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0-csdn%E5%B9%BF%E5%91%8A%E5%AE%8C%E5%85%A8%E8%BF%87%E6%BB%A4-%E4%BA%BA%E6%80%A7%E5%8C%96%E8%84%9A%E6%9C%AC%E4%BC%98%E5%8C%96-%E4%B8%8D%E7%94%A8%E5%86%8D%E7%99%BB%E5%BD%95%E4%BA%86-%E8%AE%A9%E4%BD%A0%E4%BD%93%E9%AA%8C%E4%BB%A4%E4%BA%BA%E6%83%8A%E5%96%9C%E7%9A%84%E5%B4%AD%E6%96%B0csdn
        if (window.innerWidth < 1100) {
            // 删除原有响应式样式
            $(".main_father").removeClass("justify-content-center");
            $("csdn-side-toolbar").css("left", "auto");
            $("article").width(window.innerWidth - 150);
            GM_addStyle(`
                        main{
                            width: auto!important;
                            float: none!important;
                            max-width: 90vw;
                        }
                        main article img{
                            margin: 0 auto;
                            max-width: 100%;
                            object-fit: cover;
                        }
                        `);
            did = true;
        } else {
            if (did === true) {
                $("article").removeAttr("style");
                did = false;
            }
        }
    }, 500);
}

//简化CSDN-简化个人博客页
function Clean_csdn_blog_home(){
    var whiteTheme = true;

    //页面居中 ->
    var count = 0;
    var page_width = $("#mainBox").width();//页面原始宽度
    var page_width_Y = page_width - 271;//页面居中后宽度
    var _page = unsafeWindow.setInterval(function () {
        count += 1;
        if(count>=10){ unsafeWindow.clearInterval(_page) }
        console.log("[CSDN简化]页面正在设置居中");
        console.log("page_width: "+page_width);
        console.log("page_width_Y:"+page_width_Y);
        if(page_width === undefined){
            page_width = $("#mainBox").width();
            page_width_Y = page_width - 271;
        }else{
            if($("#mainBox").width() == page_width_Y){ unsafeWindow.clearInterval(_page) }
            $("#mainBox").width(page_width_Y);//GM_addStyle('#mainBox {width:1067px !important}');//页面居中
        }
    },10);
    //页面居中 <-

    GM_addStyle('.blog_container_aside {display:none !important}');///隐藏侧边栏
    /*
    $("body").removeClass("justify-content-center");//样式恢复
    if (whiteTheme) {
        // 白色背景
        $('.nodata ').attr('style', 'background-image: none !important; background-color: #f5f6f7; background: #f5f6f7;');
        $('[href^="https://csdnimg.cn/release/phoenix/template/themes_skin/"]').attr('href', 'https://csdnimg.cn/release/phoenix/template/themes_skin/skin-technology/skin-technology-6336549557.min.css');
        $('#csdn-toolbar').removeClass('csdn-toolbar-skin-black');
        $('.csdn-logo').attr('src', '//csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1');
    }

    var _this = unsafeWindow.setInterval(function () {//多次加载增加鲁棒性
        console.log("[CSDN简化]文章背景简化中");
        //GM_addStyle('.blog_container_aside {display:none !important}');
        if(document.querySelector(".blog_container_aside")){
            //$(".blog_container_aside").remove();
            //$(".main_father").removeClass("justify-content-center");

            GM_addStyle('.blog_container_aside {display:none !important}');///侧边栏
            $(".main_father").removeClass("justify-content-center");//样式恢复
            if (whiteTheme) {
                // 白色背景
                $('.main_father').attr('style', 'background-image: none !important; background-color: #f5f6f7; background: #f5f6f7;');
                $('[href^="https://csdnimg.cn/release/phoenix/template/themes_skin/"]').attr('href', 'https://csdnimg.cn/release/phoenix/template/themes_skin/skin-technology/skin-technology-6336549557.min.css');
                $('#csdn-toolbar').removeClass('csdn-toolbar-skin-black');
                $('.csdn-logo').attr('src', '//csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1');
            }

            unsafeWindow.clearInterval(_this);
        }
    },10);*/
}


//简化知乎
function Clean_zhihu(){
    if(GM_getValue("menu_GAEEScript_tc_Zhihu")){
        GM_addStyle('.Question-sideColumn {display:none !important}');
        GM_addStyle('.Question-mainColumn {width:1000px !important}');

        GM_addStyle('.AuthorInfo.AnswerItem-authorInfo.AnswerItem-authorInfo--related {max-width: unset !important}');
        /////未完成/////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
}

//简化简书
function Clean_jianshu(){
    if(GM_getValue("menu_GAEEScript_tc_Jianshu")){
        GM_addStyle('._2OwGUo {display:none !important}');
        GM_addStyle('._gp-ck {width:1000px !important}');//宽屏
        //unsafeWindow.setTimeout(function (){GM_addStyle('.ouvJEz:last-child {display:none !important}');},2000);

    }
}


function Zihu_hot_in_home(){
    GM_addStyle('.Button.EmptyView-button {display:none !important}');//删除提问按钮
    var left_List = document.querySelector(".List");
    var zh_hot = document.querySelector("#zh_hot");
    if(!left_List){return}
    if(zh_hot){return}

    unsafeWindow.setTimeout(function(){
        var Tip = document.querySelector(".EmptyView-content");//
        if(Tip){ Tip.children[0].textContent="没有更多内容了~" }
    },2000);

    var hot = document.createElement('iframe');
    hot.setAttribute("src","https://www.zhihu.com/billboard");
    hot.setAttribute("id","zh_hot");
    hot.setAttribute("scrolling","no");
    hot.setAttribute("frameborder","0");
    hot.setAttribute("width","100%");
    hot.setAttribute("height","4800px");
    left_List.insertBefore(hot,left_List.childNodes[0]);

    unsafeWindow.setTimeout(function(){
        Array.from(document.querySelector("#zh_hot").contentDocument.querySelectorAll(".HotList-item")).forEach( item => {
            item.style.cssText = "-webkit-user-select: none !important;-moz-user-select: none !important;-o-user-select: none !important;user-select: none !important";
            item.onclick = function(e){
                console.log("[ CLICK! ]");
                unsafeWindow.setTimeout(function(){
                    var link = document.querySelector("#zh_hot").contentWindow.location.href; console.log(link);
                    //* top.location.href = link;//
                    window.location.replace(link);//原页面打开链接
                    //window.open(link);//新标签页打开链接//有问题!未解决
                },350);
            }
        });
    },1000);
}

function PIC_zhihu(){
    Array.from(document.getElementsByTagName('img')).forEach(item => {
        //console.log(item);
        if(item.getAttribute('data-original') != undefined && item.className != 'comment_sticker'){
            if (item.getAttribute('src') != item.getAttribute('data-original')) {
                item.setAttribute('src', item.getAttribute('data-original'));
                //console.log(item);
            }
        }
    });/*
    Array.from(document.getElementsByTagName('img')).forEach(item => {
        console.log(item);
    });*/
}



//知乎显示回答时间 //修改from：https://greasyfork.org/scripts/4122051
function Time_for_zhihu(){
    // 完整显示时间 + 置顶显示时间 - 首页
    function topTime_index() {
        let topTime = document.querySelectorAll('.TopstoryItem');if (!topTime) return;
        topTime.forEach(function(_this) {
            let ContentItemTime = _this.querySelector('.ContentItem-time');if (!ContentItemTime) return;
            if (!(ContentItemTime.classList.contains('full')) && ContentItemTime.querySelector('span') && ContentItemTime.querySelector('span').innerText != null) {
                // 完整显示时间
                topTime_allTime(ContentItemTime);
                // 发布时间置顶
                topTime_publishTop(ContentItemTime, _this, 'ContentItem-meta');
            }
        });
    }// 完整显示时间 + 置顶显示时间 - 回答页
    function topTime_question() {
        let topTime = document.querySelectorAll('.ContentItem.AnswerItem');if (!topTime) return;
        topTime.forEach(function(_this) {
            let ContentItemTime = _this.querySelector('.ContentItem-time');if (!ContentItemTime) return;
            if (!(ContentItemTime.classList.contains('full')) && ContentItemTime.querySelector('span') && ContentItemTime.querySelector('span').innerText != null) {
                // 完整显示时间
                topTime_allTime(ContentItemTime);
                // 发布时间置顶
                topTime_publishTop(ContentItemTime, _this, 'ContentItem-meta');
            }

        });// 问题创建时间
        if (!(document.querySelector('.QuestionPage .QuestionHeader-side p')) && window.location.href.indexOf("log") == -1) { // 没有执行过 且 非问题日志页
            let createtime = document.querySelector('.QuestionPage>[itemprop~=dateCreated]').getAttribute('content');
            let modifiedtime = document.querySelector('.QuestionPage>[itemprop~=dateModified]').getAttribute('content');
            createtime = getUTC8(new Date(createtime));
            modifiedtime = getUTC8(new Date(modifiedtime));
            // 添加到问题页右上角
            document.querySelector('.QuestionPage .QuestionHeader-side').insertAdjacentHTML('beforeEnd', '<div style=\"color:#8590a6; margin-top:15px\"><p>创建时间:&nbsp;&nbsp;' + createtime + '</p><p>最后编辑:&nbsp;&nbsp;' + modifiedtime + '</p></div>');
        }
    }// 完整显示时间 + 置顶显示时间 - 搜索结果页
    function topTime_search() {
        let topTime = document.querySelectorAll('.ContentItem.AnswerItem, .ContentItem.ArticleItem');if (!topTime) return;
        topTime.forEach(function(_this) {
            let ContentItemTime = _this.querySelector('.ContentItem-time');if (!ContentItemTime) return;
            if (!(ContentItemTime.classList.contains('full')) && ContentItemTime.querySelector('span') && ContentItemTime.querySelector('span').innerText != null) {
                // 完整显示时间
                topTime_allTime(ContentItemTime);
                // 发布时间置顶
                topTime_publishTop(ContentItemTime, _this, 'SearchItem-meta');
            }
        });
    }// 完整显示时间 + 置顶显示时间 - 用户主页
    function topTime_people() {
        let topTime = document.querySelectorAll('.ContentItem.AnswerItem, .ContentItem.ArticleItem');if (!topTime) return;
        topTime.forEach(function(_this) {
            let ContentItemTime = _this.querySelector('.ContentItem-time');if (!ContentItemTime) return;
            if (!(ContentItemTime.classList.contains('full')) && ContentItemTime.querySelector('span') && ContentItemTime.querySelector('span').innerText != null) {
                // 完整显示时间
                topTime_allTime(ContentItemTime);
                // 发布时间置顶
                topTime_publishTop(ContentItemTime, _this, 'ContentItem-meta');
            }

        });
    }// 完整显示时间 + 置顶显示时间 - 专栏/文章
    function topTime_zhuanlan() {
        let ContentItemTime = document.querySelector('.ContentItem-time');if (!ContentItemTime) return;
        // 完整显示时间
        if (ContentItemTime.innerText.indexOf('编辑于') > -1 && !(ContentItemTime.classList.contains('doneeeeee'))) {
            let bianjiyu = ContentItemTime.innerText;
            ContentItemTime.click();
            ContentItemTime.innerText = (ContentItemTime.innerText + "，" + bianjiyu);
            ContentItemTime.classList.add("doneeeeee");
        }//发布时间置顶
        if (!(document.querySelector('.Post-Header > .ContentItem-time')) && !(document.querySelector('.ContentItem-meta > .ContentItem-time'))) {
            ContentItemTime.style.cssText = 'padding:0px 0px 0px 0px; margin-top: 14px';
            let temp_time = ContentItemTime.cloneNode(true);
            // ContentItemTime.style.display = 'none';
            if (window.location.href.indexOf("column") > -1){
                document.querySelector('.ContentItem-meta').insertAdjacentElement('beforeEnd', temp_time);
            } else {
                document.querySelector('.Post-Header').insertAdjacentElement('beforeEnd', temp_time);
            }
        }
    }// 完整显示时间
    function topTime_allTime(ContentItemTime) {
        if (ContentItemTime.innerText.indexOf("发布于") == -1 && ContentItemTime.innerText.indexOf("编辑于") > -1) { //只有 "编辑于" 时增加具体发布时间 data-tooltip
            let data_tooltip = ContentItemTime.querySelector('span').getAttribute('data-tooltip');
            let oldtext = ContentItemTime.querySelector('span').innerText;
            ContentItemTime.querySelector('span').innerText = data_tooltip + "，" + oldtext;
            ContentItemTime.classList.add('full');
        } else if (ContentItemTime.innerText.indexOf("发布于") > -1 && ContentItemTime.innerText.indexOf("编辑于") == -1) { //只有 "发布于" 时替换为具体发布时间 data-tooltip
            let data_tooltip = ContentItemTime.querySelector('span').getAttribute('data-tooltip');
            ContentItemTime.querySelector('span').innerText = data_tooltip;
            ContentItemTime.classList.add('full');
        }
    }// 发布时间置顶
    function topTime_publishTop(ContentItemTime, _this, class_) {
        if (!ContentItemTime.parentNode.classList.contains(class_)) {
            let temp_time = ContentItemTime.cloneNode(true);
            //_this.querySelector('.RichContent .ContentItem-time').style.display = 'none';
            _this.querySelector('.' + class_).insertAdjacentElement('beforeEnd', temp_time);
        }
    }// UTC 标准时转 UTC+8 北京时间，来自：https://greasyfork.org/zh-CN/scripts/402808
    function getUTC8(datetime) {
        let month = (datetime.getMonth() + 1) < 10 ? "0" + (datetime.getMonth() + 1) : (datetime.getMonth() + 1);
        let date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
        let hours = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
        let minutes = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
        let seconds = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
        return (datetime.getFullYear() + "-" + month + "-" + date + "\xa0\xa0" + hours + ":" + minutes + ":" + seconds);
    }
    unsafeWindow.onload = function(){
        unsafeWindow.setTimeout(function(){if(document.querySelector(".Modal-wrapper")){document.querySelector(".Modal-wrapper").remove();console.log("[TC]登录窗口已去除");} GM_addStyle('.Modal-wrapper{display:flex !important}');console.log("[TC]登录弹窗已恢复");}, 100);

        unsafeWindow.setInterval(function() {
            try{
                //topTime_index();
                topTime_question();
                //topTime_search();
                //topTime_people();
                //topTime_zhuanlan();
            }catch(err) {
                console.log(err);
            }
        }, 300);
    }
}



function Change_theme_zhihu(){
    var Home_bar = document.querySelector(".AppHeader-inner");//首页
    var Zhuanlan_bar = document.querySelector(".ColumnPageHeader-content");//专栏页
    var bar = false;
    if(Home_bar){bar = Home_bar}else if(Zhuanlan_bar){bar = Zhuanlan_bar}
    if(!bar){return}else{console.log("加载按钮中")}
    if(document.querySelector("#light_night")){return}else{console.log("2加载按钮中")}
    var theme = $.cookie("theme") || "light";
    var button = document.createElement('button');
    button.setAttribute("id","light_night");
    button.style.color = "#8590A6";
    var img = document.createElement('img');
    var span = document.createElement('span');
    if(theme == "light"){
        img.src = icon("dark");
        span.textContent="夜间模式";
    }else{
        img.src = icon("light");
        span.textContent="日间模式";
    }
    img.setAttribute("style","vertical-align:middle; width:20px; height:20px;");
    span.setAttribute("style","vertical-align:middle;");
    button.append(img);
    button.append(span);
    var div = document.createElement('div');
    div.setAttribute("style","margin-left: 20px;");
    div.append(button);
    bar.append(div);

    unsafeWindow.setTimeout(function(){
        document.querySelector("#light_night").onclick = function(){
            if(theme == "light"){
                $.cookie("theme","dark",{
                    path: '/',
                    expires: 365
                });
                location.reload();
            }
            else if(theme == "dark"){
                $.cookie("theme","light",{
                    path: '/',
                    expires: 365
                });
                location.reload();
            }
        }
    },1000);
}

function Zhihu_dark_theme(){
    //引用于 //https://greasyfork.org/zh-CN/scripts/412212-%E7%9F%A5%E4%B9%8E%E7%BE%8E%E5%8C%96/
    var theme = `
/* 文字颜色 */
html[data-theme=dark] body, html[data-theme=dark] .ContentItem-title, html[data-theme=dark] .QuestionHeader-title, html[data-theme=dark] .Tabs-link, html[data-theme=dark] .CreatorEntrance-title, html[data-theme=dark] .Search-container, html[data-theme=dark] .HotItem-excerpt, html[data-theme=dark] .PushNotifications-item, html[data-theme=dark] .Notifications-Main>header h1, html[data-theme=dark] .Notifications-Section-header h2, html[data-theme=dark] .NotificationList-Item-content, html[data-theme=dark] .Reward, html[data-theme=dark] .ChatSideBar-Search-Input input, html[data-theme=dark] input.Input, html[data-theme=dark] .LinkCard-title, html[data-theme=dark] .MCNLinkCard-title, html[data-theme=dark] .ZVideoLinkCard-title, html[data-theme=dark] .TipjarDialog-customButton {color: #adbac7 !important;}
html[data-theme=dark] .LinkCard-meta, html[data-theme=dark] .MCNLinkCard-source {color: #5a6f83 !important;}
/* 热榜标题 */
html[data-theme=dark] .HotItem-title {color: #c4cfda !important;}
html[data-theme=dark] .App{background: #22272E !important;}
/* 首页信息流标题 */
html[data-theme=dark] .ContentItem-title a:hover, html[data-theme=dark] .RichContent.is-collapsed .RichContent-inner:hover, html[data-theme=dark] .ContentItem-more:hover, html[data-theme=dark] .QuestionRichText--expandable.QuestionRichText--collapsed:hover {color: #b3c3d6 !important;}
/* 搜索高亮红字 */
html[data-theme=dark] .Highlight em {color: #c33c39 !important;}
/* 背景颜色 - 网页 */
html[data-theme=dark] body, html[data-theme=dark] .Select-option:focus {background: #22272E !important;}
/* 背景颜色 - 问题 */
html[data-theme=dark] .AppHeader, html[data-theme=dark] .QuestionHeader, html[data-theme=dark] .QuestionHeader-footer, html[data-theme=dark] .EmoticonsFooter-item--selected, html[data-theme=dark] .Card, html[data-theme=dark] .ContentItem-actions, html[data-theme=dark] .MoreAnswers .List-headerText, html[data-theme=dark] .CommentsV2-withPagination, html[data-theme=dark] .Topbar, html[data-theme=dark] .CommentsV2-footer, html[data-theme=dark] .CommentEditorV2-inputWrap--active, html[data-theme=dark] .InputLike, html[data-theme=dark] .Popover-content, html[data-theme=dark] .Notifications-footer, html[data-theme=dark] .Messages-footer, html[data-theme=dark] .Modal-inner, html[data-theme=dark] .Emoticons, html[data-theme=dark] .EmoticonsFooter, html[data-theme=dark] .SearchTabs, html[data-theme=dark] .Popover-arrow:after, html[data-theme=dark] .CommentEditorV2-inputWrap, html[data-theme=dark] .ProfileHeader-wrapper, html[data-theme=dark] .UserCover, html[data-theme=dark] .AnswerForm-footer, html[data-theme=dark] .Editable-toolbar, html[data-theme=dark] .AnswerForm-fullscreenContent .Editable-toolbar, html[data-theme=dark] .KfeCollection-PcCollegeCard-wrapper, html[data-theme=dark] .KfeCollection-PcCollegeCard-root, html[data-theme=dark] .HotItem, html[data-theme=dark] .HotList, html[data-theme=dark] .HotListNavEditPad, html[data-theme=dark] .QuestionWaiting-typesTopper, html[data-theme=dark] .QuestionWaiting-types, html[data-theme=dark] .PostItem, html[data-theme=dark] .ClubSideBar section, html[data-theme=dark] .SearchSubTabs, html[data-theme=dark] .Club-SearchPosts-Content, html[data-theme=dark] .Club-content, html[data-theme=dark] .ClubJoinOrCheckinButton, html[data-theme=dark] .ClubEdit, html[data-theme=dark] .CornerButton, html[data-theme=dark] .Notifications-Section-header, html[data-theme=dark] .NotificationList, .NotificationList-Item.NotificationList-Item:after, .NotificationList-DateSplit.NotificationList-DateSplit:after, html[data-theme=dark] .Chat, .ChatUserListItem:after, .ChatListGroup-SectionTitle--bottomBorder:after, html[data-theme=dark] .ActionMenu, .ChatSideBar-Search--active, html[data-theme=dark] .ChatSideBar-Search-ResultListWrap, html[data-theme=dark] .QuestionMainDivider-inner, html[data-theme=dark] .Topic-bar, html[data-theme=dark] .AnnotationTag, html[data-theme=dark] .HoverCard, html[data-theme=dark] .HoverCard-loading, html[data-theme=dark] .ExploreSpecialCard, html[data-theme=dark] .ExploreHomePage-ContentSection-moreButton a, html[data-theme=dark] .ExploreRoundtableCard, html[data-theme=dark] .ExploreCollectionCard, html[data-theme=dark] .ExploreColumnCard, html[data-theme=dark] .RichText .lazy[data-lazy-status] {background: #2D333B !important;}
html[data-theme=dark] .CommentListV2-header-divider, html[data-theme=dark] .CommentsV2-openComment-divider, html[data-theme=dark] .AnswerForm-fullscreenScroller, html[data-theme=dark] .HotListNav-item, html[data-theme=dark] .AutoInviteItem-wrapper--desktop, html[data-theme=dark] .ExploreSpecialCard-contentTag, html[data-theme=dark] .ExploreCollectionCard-contentTypeTag, html[data-theme=dark] .Reward-TipjarDialog-tagLine {background-color: #222933 !important;}
html[data-theme=dark] .CornerButton:hover {background: #3f4752 !important;} /* 右下角按钮 */
/* 背景颜色 - 引用 */
html[data-theme=dark] .ztext blockquote {color: #768390 !important;border-left: 3px solid #3b3b3b !important;}
/* 背景颜色 - 卡片 */
html[data-theme=dark] .MCNLinkCard, html[data-theme=dark] .LinkCard-content, html[data-theme=dark] .ZVideoLinkCard-info {background-color: #22272e !important;}
html[data-theme=dark] .Post-content .MCNLinkCard, html[data-theme=dark] .Post-content .LinkCard-content, html[data-theme=dark] .Post-content .ZVideoLinkCard-info {background-color: #2D333B !important;}
html[data-theme=dark] .LinkCard-backdrop {background-image: url() !important;}
/* 通知信息中点评论链接时，在弹出的评论框中 "高亮" 目标评论 */
html[data-theme=dark] .CommentItemV2[tabindex='-1'] {background-color: #343a44 !important;}
/* 搜索框 */
html[data-theme=dark] .Input-wrapper.Input-wrapper--grey, html[data-theme=dark] .ChatSideBar-Search-Input input {background: #333a44 !important;}
/* 加载动画 */
html[data-theme=dark] .PlaceHolder-bg {background: -webkit-gradient(linear,left top,right top,from(#22272e),color-stop(20%,#2d333b),color-stop(40%,#22272e),to(#22272e)) !important;background: linear-gradient(90deg,#22272e 0,#2d333b 20%,#22272e 40%,#22272e) !important;}
html[data-theme=dark] .PlaceHolder-inner {background: #22272e !important;color: #2d333b !important;}
/* 私信 */
html[data-theme=dark] .Input-wrapper {background-color: #30363f !important;}
html[data-theme=dark] .TextMessage-sender, html[data-theme="dark"] .TextMessage-sender::after {background-color: #57616f !important;}
html[data-theme=dark] .TextMessage-receiver, html[data-theme="dark"] .TextMessage-receiver::after {background-color: #1e5fbf !important;}
html[data-theme=dark] .TextMessage-sender, html[data-theme=dark] .TextMessage-receiver {color: #dcdcdc !important;}
/*html[data-theme=dark] .MessagesBox::-webkit-scrollbar {width: 0px !important;height: 0px !important;}*/
html[data-theme=dark] .ToolBar, html[data-theme=dark] .Input-wrapper, html[data-theme=dark] .ClubTopPosts, html[data-theme=dark] .ChatSideBar-Search-Input input {border: none !important;}
html[data-theme=dark] .ChatBoxModal-closeIcon {fill: #8590a6 !important;}
/* 私信网页 */
html[data-theme=dark] .ChatUserListItem .Chat-ActionMenuPopover-Button {background: -webkit-gradient(linear,left top,right top,from(rgba(18,18,18,0)),color-stop(20%,#22272e)) !important;background: linear-gradient(90deg,rgba(18,18,18,0),#22272e 20%) !important;}
html[data-theme=dark] .css-1j6tmrz {border: 2px solid #2d333b !important;}
/* 选项鼠标指向时背景颜色 */
html[data-theme=dark] .Messages-item:hover, html[data-theme=dark] .GlobalSideBar-navLink:hover, html[data-theme=dark] .Menu-item.is-active, html[data-theme=dark] .ActionMenu-item:hover, html[data-theme=dark] .ChatUserListItem--active, html[data-theme=dark] .Messages-newItem {background-color: #272c33 !important;}
/* 通知 */
html[data-theme=dark] .PushNotifications-item a {color: #8ab5e0 !important;}
/* 封面大图/文章头部大图 */
html[data-theme=dark] img.UserCover-image, html[data-theme=dark] img.TitleImage {opacity: 0.7 !important;}
/* 其他图片 */
html[data-theme=dark] img {opacity: 0.8 !important;}
/* GIF 动图、放大图除外 */
html[data-theme=dark] .GifPlayer img, html[data-theme=dark] .ImageView-img {opacity: 1 !important;}
/* 边框 */
html[data-theme=dark] .Topbar, html[data-theme=dark] .CommentsV2-footer, html[data-theme=dark] .Topstory-mainColumnCard .Card:not(.Topstory-tabCard), html[data-theme=dark] .NestComment:not(:last-child):after, html[data-theme=dark] .NestComment--rootComment:after, html[data-theme=dark] .NestComment .NestComment--child:after, html[data-theme=dark] .NestComment .NestComment--child:after, html[data-theme=dark] .CommentsV2-replyNum, html[data-theme=dark] .CommentItemV2:not(:first-child):after, html[data-theme=dark] .Tabs, html[data-theme=dark] .Popover-arrow:after {border-bottom: 1px solid #282d35 !important;}
html[data-theme=dark] .CommentEditorV2-inputWrap--active, html[data-theme=dark] .CommentEditorV2-inputWrap, html[data-theme=dark] .PostItem {border: none !important;}
html[data-theme=dark] .InputLike {border: 1px solid #424b56 !important;}
html[data-theme=dark] .Popover .InputLike {border: 1px solid #2d333b !important;}
html[data-theme=dark] .Popover-content, html[data-theme=dark] .Popover-arrow:after {border: 1px solid #22272e !important;}
/* 滚动条 */
html[data-theme=dark] body::-webkit-scrollbar, html[data-theme="dark"] .MessagesBox::-webkit-scrollbar, html[data-theme="dark"] .Messages-list::-webkit-scrollbar, html[data-theme=dark] .PushNotifications-list::-webkit-scrollbar, html[data-theme=dark] .CommentListV2::-webkit-scrollbar, .ChatListGroup-SectionContent::-webkit-scrollbar, html[data-theme=dark] .ChatSideBar-Search-ResultListWrap::-webkit-scrollbar, html[data-theme=dark] .ChatBox textarea.Input::-webkit-scrollbar {width: 6px !important;height: 1px !important;}
html[data-theme=dark] body::-webkit-scrollbar-thumb, html[data-theme="dark"] .MessagesBox::-webkit-scrollbar-thumb, html[data-theme="dark"] .Messages-list::-webkit-scrollbar-thumb, html[data-theme=dark] .PushNotifications-list::-webkit-scrollbar-thumb, html[data-theme=dark] .CommentListV2::-webkit-scrollbar-thumb, .ChatListGroup-SectionContent::-webkit-scrollbar-thumb, html[data-theme=dark] .ChatSideBar-Search-ResultListWrap::-webkit-scrollbar-thumb, html[data-theme=dark] .ChatBox textarea.Input::-webkit-scrollbar-thumb {background: #3f4752 !important;}
html[data-theme=dark] body::-webkit-scrollbar-track {background: #22272e !important;}
html[data-theme=dark] .MessagesBox::-webkit-scrollbar-track, html[data-theme="dark"] .Messages-list::-webkit-scrollbar-track, html[data-theme=dark] .PushNotifications-list::-webkit-scrollbar-track, html[data-theme=dark] .CommentListV2::-webkit-scrollbar-track, .ChatListGroup-SectionContent::-webkit-scrollbar-track, html[data-theme=dark] .ChatSideBar-Search-ResultListWrap::-webkit-scrollbar-track, html[data-theme=dark] .ChatBox textarea.Input::-webkit-scrollbar-track {background: #2d333b !important;}
html {scrollbar-width: thin; scrollbar-color: #3f4752 #22272e;}
.MessagesBox, .Messages-list, .PushNotifications-list, .CommentListV2, .ChatListGroup-SectionContent, .ChatSideBar-Search-ResultListWrap {scrollbar-width: thin; scrollbar-color: #3f4752 #2D333B;}
/* 背景颜色 - 专栏/文章 */
html[data-theme=dark] .WhiteBg-body, html[data-theme=dark] .Post-content {background: #22272E !important;}
html[data-theme=dark] .ColumnPageHeader, html[data-theme=dark] .BottomInfo {background: #1c2129 !important;}
/* 按钮颜色 */
.TopstoryTabs-link.is-active, html[data-theme=dark] .TopstoryTabs-link.is-active, html[data-theme=dark] .VoteButton, .Tag, html[data-theme=dark] .Tag, html[data-theme=dark] .HotListNav-item.is-active, html[data-theme=dark] .RichText a.UserLink-link {color: #3faaff !important;}
/*html[data-theme=dark] .Tabs-link.is-active:after {background: #2196F3 !important;}*/
html[data-theme=dark] .Reward-rewardBtn, html[data-theme=dark] .SearchBar-searchIcon.hasValue, html[data-theme=dark] .Chat-UnreadCount, html[data-theme=dark] .Payment-CheckedButton {color: #ffffff !important;}
/* 关闭查看回复时的高闪 */
html[data-theme=dark] .CommentItemV2--highlighted {-webkit-animation: nano !important;animation: nano !important;}
/* 赞赏 */
html[data-theme=dark] .Reward-TipjarDialog-amountList .Button--red, html[data-theme=dark] .Reward-TipjarDialog-amountList .Button--red, html[data-theme=dark] .Reward-TipjarDialog-amountInput .SimpleInput {color: #d3d3d3 !important; background-color: #353b44 !important; border: none !important;}
`;
    var style = document.createElement('style');
    if (document.lastChild) {
        document.lastChild.appendChild(style).textContent = theme;
    } else { // 避免网站加载速度太慢的备用措施
        let timer1 = setInterval(function(){ // 每 5 毫秒检查一下 html 是否已存在
            if (document.lastChild) {
                clearInterval(timer1); // 取消定时器
                document.lastChild.appendChild(style).textContent = theme;
            }
        }, 5);
    }
    //引用结束 //
}

function icon(icon){
    //日间模式图标(base64)
    var light = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDIC' +
        'ItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTkxNjA2NzI5MzM4IiB' +
        'jbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjkxNSIgd2lk' +
        'dGg9IjMyIiBoZWlnaHQ9IjMyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AZm9udC1mY' +
        'WNlIHsgZm9udC1mYW1pbHk6IGVsZW1lbnQtaWNvbnM7IHNyYzogdXJsKCJjaHJvbWUtZXh0ZW5zaW9uOi8vYmJha2hubWZramVuZmJoamRkZGlwY2VmbmhwaWtqYmovZm9udH' +
        'MvZWxlbWVudC1pY29ucy53b2ZmIikgZm9ybWF0KCJ3b2ZmIiksIHVybCgiY2hyb21lLWV4dGVuc2lvbjovL2JiYWtobm1ma2plbmZiaGpkZGRpcGNlZm5ocGlramJqL2ZvbnR' +
        'zL2VsZW1lbnQtaWNvbnMudHRmICIpIGZvcm1hdCgidHJ1ZXR5cGUiKTsgfQo8L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyLjEgNzQzLjVjLTEyNy42IDAtMjMxLjQtMTAz' +
        'LjgtMjMxLjQtMjMxLjRzMTAzLjgtMjMxLjQgMjMxLjQtMjMxLjQgMjMxLjQgMTAzLjggMjMxLjQgMjMxLjQtMTAzLjggMjMxLjQtMjMxLjQgMjMxLjR6IG0wLTM5My40Yy04O' +
        'S4zIDAtMTYyIDcyLjctMTYyIDE2MnM3Mi43IDE2MiAxNjIgMTYyIDE2Mi03Mi43IDE2Mi0xNjItNzIuNy0xNjItMTYyLTE2MnpNNTEyLjEgMjI3LjFjLTE5LjIgMC0zNC43LT' +
        'E1LjUtMzQuNy0zNC43Vjk4LjdjMC0xOS4yIDE1LjUtMzQuNyAzNC43LTM0LjcgMTkuMiAwIDM0LjcgMTUuNSAzNC43IDM0Ljd2OTMuN2MwIDE5LjEtMTUuNSAzNC43LTM0Ljc' +
        'gMzQuN3pNMjg2IDMyMC43Yy04LjkgMC0xNy44LTMuNC0yNC41LTEwLjJsLTY2LjMtNjYuM2MtMTMuNi0xMy42LTEzLjYtMzUuNSAwLTQ5LjEgMTMuNS0xMy42IDM1LjUtMTMu' +
        'NiA0OS4xIDBsNjYuMyA2Ni4zYzEzLjYgMTMuNiAxMy42IDM1LjUgMCA0OS4xYTM0LjY4IDM0LjY4IDAgMCAxLTI0LjYgMTAuMnpNMTkyLjQgNTQ2LjhIOTguN2MtMTkuMiAwL' +
        'TM0LjctMTUuNS0zNC43LTM0LjcgMC0xOS4yIDE1LjUtMzQuNyAzNC43LTM0LjdoOTMuN2MxOS4yIDAgMzQuNyAxNS41IDM0LjcgMzQuNyAwIDE5LjEtMTUuNSAzNC43LTM0Lj' +
        'cgMzQuN3pNMjE5LjggODM5LjFjLTguOSAwLTE3LjgtMy40LTI0LjUtMTAuMi0xMy42LTEzLjYtMTMuNi0zNS41IDAtNDkuMWw2Ni4zLTY2LjNjMTMuNS0xMy42IDM1LjUtMTM' +
        'uNiA0OS4xIDAgMTMuNiAxMy42IDEzLjYgMzUuNSAwIDQ5LjFsLTY2LjMgNjYuM2MtNi45IDYuOC0xNS43IDEwLjItMjQuNiAxMC4yek01MTIuMSA5NjAuMmMtMTkuMiAwLTM0' +
        'LjctMTUuNS0zNC43LTM0Ljd2LTkzLjdjMC0xOS4yIDE1LjUtMzQuNyAzNC43LTM0LjcgMTkuMiAwIDM0LjcgMTUuNSAzNC43IDM0Ljd2OTMuN2MwIDE5LjItMTUuNSAzNC43L' +
        'TM0LjcgMzQuN3pNODA0LjQgODM5LjFjLTguOSAwLTE3LjgtMy40LTI0LjUtMTAuMmwtNjYuMy02Ni4zYy0xMy42LTEzLjYtMTMuNi0zNS41IDAtNDkuMSAxMy41LTEzLjYgMz' +
        'UuNS0xMy42IDQ5LjEgMGw2Ni4zIDY2LjNjMTMuNiAxMy42IDEzLjYgMzUuNSAwIDQ5LjFhMzQuNjggMzQuNjggMCAwIDEtMjQuNiAxMC4yek05MjUuNSA1NDYuOGgtOTMuN2M' +
        'tMTkuMiAwLTM0LjctMTUuNS0zNC43LTM0LjcgMC0xOS4yIDE1LjUtMzQuNyAzNC43LTM0LjdoOTMuN2MxOS4yIDAgMzQuNyAxNS41IDM0LjcgMzQuNyAwIDE5LjEtMTUuNSAz' +
        'NC43LTM0LjcgMzQuN3pNNzM4LjIgMzIwLjdjLTguOSAwLTE3LjgtMy40LTI0LjUtMTAuMi0xMy42LTEzLjYtMTMuNi0zNS41IDAtNDkuMWw2Ni4zLTY2LjNjMTMuNS0xMy42I' +
        'DM1LjUtMTMuNiA0OS4xIDAgMTMuNiAxMy42IDEzLjYgMzUuNSAwIDQ5LjFsLTY2LjMgNjYuM2MtNi45IDYuOC0xNS44IDEwLjItMjQuNiAxMC4yeiIgZmlsbD0iI2Y0ZWEyYS' +
        'IgcC1pZD0iOTE2Ij48L3BhdGg+PC9zdmc+';

    //夜间模式图标(base64)
    var dark = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDI' +
        'CItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTkxNjAzODE3ODAwI' +
        'iBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExMDEiI' +
        'HhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+QGZvb' +
        'nQtZmFjZSB7IGZvbnQtZmFtaWx5OiBlbGVtZW50LWljb25zOyBzcmM6IHVybCgiY2hyb21lLWV4dGVuc2lvbjovL2JiYWtobm1ma2plbmZiaGpkZGRpcGNlZm5ocGlramJqL' +
        '2ZvbnRzL2VsZW1lbnQtaWNvbnMud29mZiIpIGZvcm1hdCgid29mZiIpLCB1cmwoImNocm9tZS1leHRlbnNpb246Ly9iYmFraG5tZmtqZW5mYmhqZGRkaXBjZWZuaHBpa2pia' +
        'i9mb250cy9lbGVtZW50LWljb25zLnR0ZiAiKSBmb3JtYXQoInRydWV0eXBlIik7IH0KPC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwMy40IDk1OS4yYy0xNTYuMSAwLTMwM' +
        'y4xLTgzLjItMzgzLjUtMjE3LjNsLTQ1LjgtNzYuMyA4Ny4yIDE3LjNjNDQgOC44IDg4LjkgOC42IDEzMy4yLTAuNkMzODIuNiA2NjQuNCA0NTguMyA2MTMgNTA3LjggNTM4Y' +
        'zQ5LjUtNzUuMSA2Ni44LTE2NC45IDQ4LjctMjUzLTExLjgtNTcuMy0zOC40LTExMC43LTc2LjktMTU0LjRsLTU4LjctNjYuNyA4OC44IDEuMmMyNDMuMSAzLjQgNDQwLjggM' +
        'jAzLjkgNDQwLjggNDQ3IDAgMjQ2LjUtMjAwLjYgNDQ3LjEtNDQ3LjEgNDQ3LjF6TTIzOC4zIDc2OC4xYzY4LjUgNzEuNCAxNjMgMTEyLjMgMjY1LjEgMTEyLjMgMjAzLjEgM' +
        'CAzNjguMy0xNjUuMiAzNjguMy0zNjguMyAwLTE3MS42LTExOS42LTMxNy40LTI3OS44LTM1Ny40IDE5LjQgMzUuNyAzMy41IDc0LjMgNDEuOCAxMTQuNCA0Ni4xIDIyNC40L' +
        'Tk4LjkgNDQ0LjQtMzIzLjMgNDkwLjUtMjQgNS00OCA3LjgtNzIuMSA4LjV6IiBmaWxsPSIjMDAwMDAwIiBwLWlkPSIxMTAyIj48L3BhdGg+PC9zdmc+';

    if(icon == 'light'){
        return light;
    }else if(icon == 'dark'){
        return dark;
    }
}

function SetUA(phone){
    console.log(window.navigator.userAgent);
    var UA;
    if(phone == "iphone"){
        UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1";
    }
    if(phone == "iPad"){
        UA = "Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1";
    }

    Object.defineProperties(navigator,{
        userAgent:{value:UA},
        platform:{value:'Mac'}
    });
    console.log(window.navigator.userAgent);
}


function Script_setting(){
    var menu_ALL = [
        ['menu_GAEEScript_tc_CSDN', 'CSDN', 'CSDN宽屏/简化', true],
        ['menu_GAEEScript_tc_Zhihu', 'Zhihu', '知乎宽屏/简化', true],
        ['menu_GAEEScript_tc_Jianshu', 'Jianshu', '简书宽屏/简化', true],
    ], menu_ID = [];
    for (let i=0;i<menu_ALL.length;i++){ // 如果读取到的值为 null 就写入默认值
        if (GM_getValue(menu_ALL[i][0]) == null){GM_setValue(menu_ALL[i][0], menu_ALL[i][3])};
        //console.log(menu_ALL[i][3]);
    }
    registerMenuCommand();

    // 注册脚本菜单
    function registerMenuCommand() {
        if (menu_ID.length > menu_ALL.length){ // 如果菜单ID数组多于菜单数组，说明不是首次添加菜单，需要卸载所有脚本菜单
            for (let i=0;i<menu_ID.length;i++){
                GM_unregisterMenuCommand(menu_ID[i]);
            }
        }
        for (let i=0;i<menu_ALL.length;i++){ // 循环注册脚本菜单
            menu_ALL[i][3] = GM_getValue(menu_ALL[i][0]);
            menu_ID[i] = GM_registerMenuCommand(`${menu_ALL[i][3]?'✅':'❎'} ${menu_ALL[i][2]}`, function(){menu_switch(`${menu_ALL[i][0]}`,`${menu_ALL[i][1]}`,`${menu_ALL[i][2]}`,`${menu_ALL[i][3]}`)});
        }
        menu_ID[menu_ID.length] = GM_registerMenuCommand(`🏁 当前版本 ${version}`, function () {window.GM_openInTab('https://greasyfork.org/zh-CN/scripts/428960', {active: true,insert: true,setParent: true});});
        //menu_ID[menu_ID.length] = GM_registerMenuCommand('💬 反馈 & 建议', function () {window.GM_openInTab('', {active: true,insert: true,setParent: true});});
    }

    //切换选项
    function menu_switch(name,ename,cname,value){
        if(value == 'false'){
            console.log(name);
            GM_setValue(`${name}`, true);
            registerMenuCommand(); // 重新注册脚本菜单
            location.reload(); // 刷新网页
            GM_notification({text: `「${cname}」已开启\n`, timeout: 3500}); // 提示消息
        }else{
            console.log(name);
            GM_setValue(`${name}`, false);
            registerMenuCommand(); // 重新注册脚本菜单
            location.reload(); // 刷新网页
            GM_notification({text: `「${cname}」已关闭\n`, timeout: 3500}); // 提示消息
        }
        registerMenuCommand(); // 重新注册脚本菜单
    }
}
