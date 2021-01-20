const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"edcefccc1ceed3f88031de0b7b7cd3c2","url":"./404.html"},{"revision":"2677e9800970e76b993e39ba626daeba","url":"./about/index.html"},{"revision":"1b883d1ffa026a6c8fb898d127bfe852","url":"./aboutsite/index.html"},{"revision":"299a48fb6e96becf02661b5d3e3845dc","url":"./archives/2020/02/index.html"},{"revision":"040bc6277b28cc6bef76443e99c3c6f7","url":"./archives/2020/03/index.html"},{"revision":"14eda25025d921af60e257f80f26ddf5","url":"./archives/2020/04/index.html"},{"revision":"2447f12513e773267c47597779eabed8","url":"./archives/2020/06/index.html"},{"revision":"8e2967fe70ce5dafd4dcde9a0eeec9bc","url":"./archives/2020/07/index.html"},{"revision":"5a97c8d6ed3315af98400c95cf1d67f1","url":"./archives/2020/09/index.html"},{"revision":"c0581eab7d3c70a12516c8deff50e0f3","url":"./archives/2020/10/index.html"},{"revision":"1a1d6be3acff53c7409cce5e0ca2f7a2","url":"./archives/2020/11/index.html"},{"revision":"19847c4f34a0d6adb3d43baa6739e52f","url":"./archives/2020/12/index.html"},{"revision":"27a18beb0871dd6ca2ba440d6d180d20","url":"./archives/2020/index.html"},{"revision":"a962433ea60d2b94eec1b35ddf46ce68","url":"./archives/2020/page/2/index.html"},{"revision":"22eae3ea86012938c3e90972a9ea4c32","url":"./archives/2020/page/3/index.html"},{"revision":"fa19075e764977c543d2003117d5c3d3","url":"./archives/2021/01/index.html"},{"revision":"0fc193958400b2a5fa8ca5a462302ba4","url":"./archives/2021/01/page/2/index.html"},{"revision":"dc2705506f0698f8b056c853a5134a66","url":"./archives/2021/index.html"},{"revision":"b2b6341757dfa13306fe42f27fb2168a","url":"./archives/2021/page/2/index.html"},{"revision":"da02a343f109b235a430331823dddf2b","url":"./archives/index.html"},{"revision":"2ecaa8bd8e8257c9c9c8da3e35e29bb8","url":"./archives/page/2/index.html"},{"revision":"fb77fd8c38792e9090a208aff36c29c4","url":"./archives/page/3/index.html"},{"revision":"c1fc29509b1b5dafe3fda306bf83fa2e","url":"./archives/page/4/index.html"},{"revision":"bf40bad8615637cb01248691d2fd0953","url":"./atom.xml"},{"revision":"ae0875ab18cbcd243cfa5b0b14492671","url":"./baidusitemap.xml"},{"revision":"056b58498967c05fc51d228fcffa1300","url":"./browser.html"},{"revision":"4801ab68a4779e91b935824e434fed50","url":"./categories/hexo/index.html"},{"revision":"d0d8a41adbcefd727c6d759df53622c4","url":"./categories/index.html"},{"revision":"208be3cbeafca6c9c5dbce0e802ffa44","url":"./categories/markdown/index.html"},{"revision":"bd6a01692a0d0090a9acd48b5d15db2e","url":"./categories/教程/index.html"},{"revision":"89ec9f98259637eed4720b62e1288bcc","url":"./categories/日志/index.html"},{"revision":"0f7c91dcc76e49e44e22dbf4419f0602","url":"./categories/电商/index.html"},{"revision":"d5ce84929fc114d01982fbf04562b840","url":"./categories/电商/page/2/index.html"},{"revision":"0646bbc3f3bc725d7c1fad491df04d9c","url":"./categories/视频/index.html"},{"revision":"1abcfe8dfdc1460303970bc5c350d75a","url":"./categories/站点/index.html"},{"revision":"2a2cc70db26c987de4a125a251a34e56","url":"./categories/软件/index.html"},{"revision":"0fdd0d96232a9bfd9fcf2ee95617c657","url":"./css/commentsbar.css"},{"revision":"90fd3456fd864251ce8cd4e71cc23030","url":"./css/cover.css"},{"revision":"f1f3e9effa01a29c456eae5eee8e549f","url":"./css/index.css"},{"revision":"16bd6515f1e52b8ad0db3dbc743d8504","url":"./css/mobile.css"},{"revision":"4dfbb9a266637c71a92fe7daefdecaf6","url":"./css/nesxc-css.css"},{"revision":"bff0ca156e0cf0f90dc6ceb59af5debd","url":"./css/sty.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"ad4d17c0cc4fdfb008a95193d26dfa57","url":"./disclaimer/index.html"},{"revision":"0c436f3d1d4ee9b27b122597a3fbc906","url":"./img/pwa/browserconfig.xml"},{"revision":"0fe65e40f111ec67a5dd55c91411d9bd","url":"./img/pwa/manifest.json"},{"revision":"ff7fcf031ff9f68dc0200a0b808c69ab","url":"./img/pwa/README.html"},{"revision":"2df61e04f6c30840736dc83116bc8800","url":"./index.html"},{"revision":"08c161531ac32a125532bab01c44b50e","url":"./js/browser.js"},{"revision":"978e39748eab8606297a78af8410b19f","url":"./js/git.js"},{"revision":"47d2857f63201aa803c4370a53ab4a6c","url":"./js/hm.js"},{"revision":"bff8227d7135fd3e8c5112c005dcefc1","url":"./js/main.js"},{"revision":"bb88a15771f3e477c3e247640fe81c0f","url":"./js/s-nesxc.js"},{"revision":"e6a9c3f8fa43a7d3421169ea96eef44e","url":"./js/search/algolia.js"},{"revision":"86e7fcbc5aa273e6c3d2c94b0054809b","url":"./js/search/local-search.js"},{"revision":"b3938f358149bc8e5efb88252c2dc0f3","url":"./js/snow.js"},{"revision":"298a8a8354605d9316432d40aafe1407","url":"./js/sw-server.min.js"},{"revision":"8417ce22af4aa44bf709e7cfe44b620e","url":"./js/swiper_init.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"5720a78dca20fab16f21914ae3ac0757","url":"./js/utils.js"},{"revision":"417ab7b846cf10ff5a94dbafc052bb01","url":"./js/wow_init.js"},{"revision":"1db35994da082d408286918fa76104a4","url":"./link/index.html"},{"revision":"ab606b99de036bcc414c5d939d2c2b32","url":"./live2d-widget/autoload.js"},{"revision":"2596a8630c0801002b3dff127b50518b","url":"./live2d-widget/demo/demo.html"},{"revision":"814084edfca521aea7c069da8e0698ad","url":"./live2d-widget/demo/login.html"},{"revision":"ee7efff8ff5d1d4bd4a0ff99affd3ec7","url":"./live2d-widget/live2d.min.js"},{"revision":"2c2ab9dee580ea1b79ab8413279e6312","url":"./live2d-widget/README.html"},{"revision":"e01c75f70a9465389471f638b1356bf8","url":"./live2d-widget/waifu-tips.js"},{"revision":"8dd6573863792f6f2c2e57057d21ef96","url":"./live2d-widget/waifu-tips.json"},{"revision":"c0b987bdddfa732f8505a8d139bdb69b","url":"./live2d-widget/waifu.css"},{"revision":"ca08ea3e0818fe6c2b6c4e58de69fa7d","url":"./manifest.json"},{"revision":"7cdd2b81dd1dcfbb28770ebb4a634761","url":"./messageboard/index.html"},{"revision":"1162148136eb2ed7561dcef310d77716","url":"./newPost.json"},{"revision":"68365e4a409a256981e7bf8f491b481c","url":"./page/2/index.html"},{"revision":"f33c2817d1c2ae4f6249ee5a19fdf42c","url":"./page/3/index.html"},{"revision":"368f5542134e8ceff3b3705fb3412eaa","url":"./page/4/index.html"},{"revision":"11cb093494ab9b3cfbf2c0ead6cb63b8","url":"./post/12ms.html"},{"revision":"b5542891bc9742a07e11cc994858d18c","url":"./post/1688hydzfa.html"},{"revision":"c45f03323d905eac3a823afba0da8db3","url":"./post/1688yunying.html"},{"revision":"33bfe45923f3c6668427c387e5f89b1f","url":"./post/2021welcome.html"},{"revision":"96f5e4d1fd32b439ac28f2dca8418d7d","url":"./post/20minmarkdown.html"},{"revision":"5287f86068a17d6e71fb3695e3625f75","url":"./post/30linuxcd.html"},{"revision":"cd7e62578c61a9cc10462ffff489c6a1","url":"./post/dsyyzsfx-1.html"},{"revision":"d29c98d45c15cef609ccee1d990c2510","url":"./post/dsyyzsfx-2.html"},{"revision":"f78e468f2cb7f5a15077368fba8f12c9","url":"./post/errorpush.html"},{"revision":"40cd03c62a8d4550652e61fdd29adf96","url":"./post/gitalk.html"},{"revision":"f18710e8bf53cd498bd36e5ee87c9d76","url":"./post/gridea.html"},{"revision":"ee3696b186aebf0e0130d3e4a4094633","url":"./post/hexo-ran.html"},{"revision":"e49dbe4f29a20c25dbd86b21b4e81efd","url":"./post/hexo.html"},{"revision":"f00f4519f7b94ac647c32ec6efd893cc","url":"./post/hexogithub.html"},{"revision":"5333486eeaee74d9d933fb919f69ce6e","url":"./post/hexohtml.html"},{"revision":"5ca2952a68a11220c954e167019e44fa","url":"./post/kfhf.html"},{"revision":"eddf3dde5c2093ac96bc834925962578","url":"./post/khfx.html"},{"revision":"b5790ec0279db61888e90222be94c4fb","url":"./post/macosmc.html"},{"revision":"983696ea16dc628a2c0280667a41cfda","url":"./post/noie.html"},{"revision":"87b51f53cced6989047ecc607282e044","url":"./post/OKR.html"},{"revision":"a4414b8976d63ac94d4acec9b37a2595","url":"./post/pzsoft.html"},{"revision":"bb4e8a671d622ea3ba957d2fad487e81","url":"./post/seojj.html"},{"revision":"fd873cfceb0775c0132cb88c62e8d3bb","url":"./post/smpbtb.html"},{"revision":"4212a7c61cccc29077cd8c163bb11178","url":"./post/smpfm.html"},{"revision":"1443b865d40ee3ffce5049b88ad5b633","url":"./post/smpkj.html"},{"revision":"fa9fc54e1440a12ff0b56e68dae0eb60","url":"./post/smpOpenCV.html"},{"revision":"97422eeb4a448a88f66765bc7d82fb00","url":"./post/smpset.html"},{"revision":"cacf443991c5dafbc5037121bea4c447","url":"./post/taobao11.html"},{"revision":"1b4c3a3d73feaa2b821292f920c67a6d","url":"./post/taobaoyunying.html"},{"revision":"85f33ea8f8f898869aab8cd929b7d538","url":"./post/taobaozhibo.html"},{"revision":"343ff8b187093744b58b92e5e1bd5c01","url":"./post/Typora.html"},{"revision":"beea14079ce61b1010e9d5dadea40481","url":"./post/virtualhardwareshack.html"},{"revision":"62c6631420e4763be5b2dfdf80b61467","url":"./post/websitefx.html"},{"revision":"9aead7d440bcae4e0e455564fecf89fc","url":"./post/wpnoadmin.html"},{"revision":"04d870dcd291d28757885df29d629959","url":"./post/wpsslerror.html"},{"revision":"c63cd61a28915f5acd8506a2b48e6a07","url":"./post/yunyin.html"},{"revision":"ddb23145fcf6f1ca947311571a29e188","url":"./post/yydd.html"},{"revision":"77a48c9bd6b6c3bc0cf3d2b6becd458b","url":"./post/zc.html"},{"revision":"2844d95a7deada7d7e4e7c419d5b67e9","url":"./public/newPost.json"},{"revision":"f6f7ff6d6b7b7b652cb92a25eb2cef5b","url":"./public/webpushr-sw.js"},{"revision":"7666a24c604407ba7ca254fd701be592","url":"./qn/index.html"},{"revision":"5f5a202e7dbc937162415384ced7640c","url":"./search.xml"},{"revision":"90d3c4fcbd0d31aff8cffd6655023080","url":"./sitemap.xml"},{"revision":"f9e34462f48a9c30cafaa51ddea18abf","url":"./tags/1688/index.html"},{"revision":"50a117f5b9ae03cb334dad6444e0af03","url":"./tags/bilibili/index.html"},{"revision":"0e83ee511dc4d81ac8e6340530a3c29e","url":"./tags/hexo-ran/index.html"},{"revision":"1707a2c8f32c35c7ef3800497b600b94","url":"./tags/hexo/index.html"},{"revision":"d53f65da7eacc90773f6c0d831768a3e","url":"./tags/index.html"},{"revision":"772161e498985caad0f613603dcb7d4b","url":"./tags/Linux/index.html"},{"revision":"9657b3fff4d857f3d7fe25de8a974750","url":"./tags/markdown/index.html"},{"revision":"61f8027bb2ca6f51d7666f80882a1069","url":"./tags/OKR/index.html"},{"revision":"2ce77c7185b3d8b2d0604fde1f5db5cb","url":"./tags/WordPress错误/index.html"},{"revision":"467530e90fe7281448b3506377f35032","url":"./tags/优化/index.html"},{"revision":"d7112881d71bbdd9679a65d810381b58","url":"./tags/学习/index.html"},{"revision":"82d2c536d5f5078b069cdd21608d2393","url":"./tags/开发/index.html"},{"revision":"4f698d0ff2294e625ba0430ad4075913","url":"./tags/技巧/index.html"},{"revision":"386754035e6bab8a92970a8cf0c8b799","url":"./tags/技巧/page/2/index.html"},{"revision":"50fea42907774e384b64b38110ef6089","url":"./tags/教程/index.html"},{"revision":"5ad0ba065e7b7f65cdf788e4af9c7d3f","url":"./tags/树莓派/index.html"},{"revision":"d662a71650d99933a0a1057705704205","url":"./tags/淘宝/index.html"},{"revision":"246353e30524f2b3a542afeb77acd39d","url":"./tags/电商基础教程/index.html"},{"revision":"6d695c5d5bfa3f68b4cf76ab2cd7ad0e","url":"./tags/破解软件/index.html"},{"revision":"c45be51dcb639c5ccfbdac8b0e2e0f49","url":"./tags/维护/index.html"},{"revision":"6f385007e1f073e0722d944ef1539b6d","url":"./tags/网站教程/index.html"},{"revision":"9cc174da2928167b4d5261d30eccc52d","url":"./tags/美化/index.html"},{"revision":"b565b2c58c31a1f20bbd5715b3d7a6af","url":"./tags/转载/index.html"},{"revision":"2a5254d7d734d2c74551275acd613810","url":"./tags/软件/index.html"},{"revision":"f6f7ff6d6b7b7b652cb92a25eb2cef5b","url":"./webpushr-sw.js"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();
// 可选内容 start 都选可能造成缓存过多 酌情保留。
// 图片资源
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 字体文件
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 谷歌字体
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// jsdelivr的CDN资源
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);
// 可选内容 end 都选可能造成缓存过多 酌情保留。
workbox.googleAnalytics.initialize();