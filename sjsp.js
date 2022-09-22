/**********************************
作者@@Zoo
软件下载地址:https://couyixia.com/ilu8.html?c=IJHNHLLKCWI
[rewrite_local]
^https?:\/\/sjapi\.juqianpu\.com\/api\/member\/info$ url script-response-body 
^https?:\/\/sjapi\.juqianpu\.com\/api\/(video|app\/play_page) url script-response-body 
hostname = sjapi.juqianpu.com
***********************************/

        const url = $request.url;
        let body = $response.body;
        if (!body)
            return this.done();
        if (url.includes('member/info')) {
            const result = JSON.parse(decode(body));
            result.data.item.nick = 'Zoo破解';
            result.data.item.vip = 9;
            result.data.item.vip_expire = 1700000000;
            result.data.item.coin = 1000000;
            result.data.item.is_guest = 0;
            result.data.item.qp_coin = '1000.0';
            result.data.item.qp_money = '1000.00';
            body = encode(JSON.stringify(result));
        }
        else if (url.includes('video/video_info')) {
            const result = JSON.parse(decode(body));
            result.data.video_info.vip = -1;
            result.data.video_info.price = 0;
            result.data.video_info.play_uri = result.data.video_info.play_uri.replace('-preview', '');
            body = encode(JSON.stringify(result));
        }
        this.done({ body });
