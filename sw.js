const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"e3f2344580797288cfcd35e66fb2e26f","url":"./404.html"},{"revision":"465a39a5851551730e16f584a9d0732e","url":"./about/index.html"},{"revision":"d43dc30ab7b1cf57311bc1845aa6d339","url":"./aboutsite/index.html"},{"revision":"32559db348fd9f0ca9a7913326fd2f85","url":"./archives/2020/02/index.html"},{"revision":"844eb7fe3b0c6f5f8a3ac1d46dd62c33","url":"./archives/2020/03/index.html"},{"revision":"67c52669e1e66cccd8f3b10b0aba564f","url":"./archives/2020/04/index.html"},{"revision":"7b46420f3f96cac10c18a80926fab45c","url":"./archives/2020/06/index.html"},{"revision":"cda2b9ff1c73e45d2f08e3e21b9da923","url":"./archives/2020/07/index.html"},{"revision":"cc0ad64e132f87d2c10f6c6f2faa3480","url":"./archives/2020/09/index.html"},{"revision":"ad7b992b05f122c964cdf1050465ed0e","url":"./archives/2020/10/index.html"},{"revision":"55bda146c8e24e07dce9afa5a13a1f51","url":"./archives/2020/11/index.html"},{"revision":"8776266c7799070ec4b1884480825ea2","url":"./archives/2020/12/index.html"},{"revision":"23b33d7d6fc5fd795e972761341e6351","url":"./archives/2020/index.html"},{"revision":"779d519721ea3465d2e39b4f1140c29d","url":"./archives/2020/page/2/index.html"},{"revision":"042a82b29226938e88ec6142e4428bdb","url":"./archives/2020/page/3/index.html"},{"revision":"e44ca30cf9d73701d9502321a2d4c662","url":"./archives/2021/01/index.html"},{"revision":"b9aa4f961810601c3996c48b7ea17a51","url":"./archives/2021/01/page/2/index.html"},{"revision":"60ca218f87722cd874d96ba1ec5ef833","url":"./archives/2021/index.html"},{"revision":"0d15aedbb2d8f3aa377135716587782b","url":"./archives/2021/page/2/index.html"},{"revision":"7136861c510acca47308be89b2545d64","url":"./archives/index.html"},{"revision":"b92bc33bd7b7c2171fb7a09504f5d782","url":"./archives/page/2/index.html"},{"revision":"a4c7039c87dbf3a05168acef0c58dbcd","url":"./archives/page/3/index.html"},{"revision":"f7cc52d156d0cf4bb1b00590c4ec3dda","url":"./archives/page/4/index.html"},{"revision":"bf40bad8615637cb01248691d2fd0953","url":"./atom.xml"},{"revision":"50f20e305ec10c29508832e6b747d696","url":"./baidusitemap.xml"},{"revision":"056b58498967c05fc51d228fcffa1300","url":"./browser.html"},{"revision":"d4eb5d2fde7c626f2eda90d52cb70f24","url":"./categories/hexo/index.html"},{"revision":"5e5ef6f6b9e001776f1915ae769f69c5","url":"./categories/index.html"},{"revision":"bd1270b9dcd495e115904695da090074","url":"./categories/markdown/index.html"},{"revision":"870e53b20aae3f6613766e11e639700a","url":"./categories/教程/index.html"},{"revision":"13edb05665d9bf194bc452712cde1dc0","url":"./categories/日志/index.html"},{"revision":"5fc352d18d3e307408e4010abf885d34","url":"./categories/电商/index.html"},{"revision":"a867efb29aa2776218d7cb3fa5b21127","url":"./categories/电商/page/2/index.html"},{"revision":"897d4c97eeeeae33341365d8fef714bf","url":"./categories/视频/index.html"},{"revision":"7d9e9b40fee1ca2ea55a98b99738cb7d","url":"./categories/站点/index.html"},{"revision":"e940bd5b5bcdafed4b17cb33ee0f501c","url":"./categories/软件/index.html"},{"revision":"0fdd0d96232a9bfd9fcf2ee95617c657","url":"./css/commentsbar.css"},{"revision":"90fd3456fd864251ce8cd4e71cc23030","url":"./css/cover.css"},{"revision":"f1f3e9effa01a29c456eae5eee8e549f","url":"./css/index.css"},{"revision":"16bd6515f1e52b8ad0db3dbc743d8504","url":"./css/mobile.css"},{"revision":"4dfbb9a266637c71a92fe7daefdecaf6","url":"./css/nesxc-css.css"},{"revision":"bff0ca156e0cf0f90dc6ceb59af5debd","url":"./css/sty.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"e8c90ec48a65b9033f4a8360d8469613","url":"./disclaimer/index.html"},{"revision":"0c436f3d1d4ee9b27b122597a3fbc906","url":"./img/pwa/browserconfig.xml"},{"revision":"0fe65e40f111ec67a5dd55c91411d9bd","url":"./img/pwa/manifest.json"},{"revision":"b9f301604492bae31546ea1674c04e7b","url":"./img/pwa/README.html"},{"revision":"fe33707b04a304fe8dab80f634957f4c","url":"./index.html"},{"revision":"08c161531ac32a125532bab01c44b50e","url":"./js/browser.js"},{"revision":"978e39748eab8606297a78af8410b19f","url":"./js/git.js"},{"revision":"47d2857f63201aa803c4370a53ab4a6c","url":"./js/hm.js"},{"revision":"bff8227d7135fd3e8c5112c005dcefc1","url":"./js/main.js"},{"revision":"bb88a15771f3e477c3e247640fe81c0f","url":"./js/s-nesxc.js"},{"revision":"e6a9c3f8fa43a7d3421169ea96eef44e","url":"./js/search/algolia.js"},{"revision":"86e7fcbc5aa273e6c3d2c94b0054809b","url":"./js/search/local-search.js"},{"revision":"b3938f358149bc8e5efb88252c2dc0f3","url":"./js/snow.js"},{"revision":"298a8a8354605d9316432d40aafe1407","url":"./js/sw-server.min.js"},{"revision":"8417ce22af4aa44bf709e7cfe44b620e","url":"./js/swiper_init.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"5720a78dca20fab16f21914ae3ac0757","url":"./js/utils.js"},{"revision":"417ab7b846cf10ff5a94dbafc052bb01","url":"./js/wow_init.js"},{"revision":"f5fdd4cd9b8d64247090d14dd8e9c064","url":"./link/index.html"},{"revision":"ab606b99de036bcc414c5d939d2c2b32","url":"./live2d-widget/autoload.js"},{"revision":"2596a8630c0801002b3dff127b50518b","url":"./live2d-widget/demo/demo.html"},{"revision":"814084edfca521aea7c069da8e0698ad","url":"./live2d-widget/demo/login.html"},{"revision":"ee7efff8ff5d1d4bd4a0ff99affd3ec7","url":"./live2d-widget/live2d.min.js"},{"revision":"2c2ab9dee580ea1b79ab8413279e6312","url":"./live2d-widget/README.html"},{"revision":"e01c75f70a9465389471f638b1356bf8","url":"./live2d-widget/waifu-tips.js"},{"revision":"8dd6573863792f6f2c2e57057d21ef96","url":"./live2d-widget/waifu-tips.json"},{"revision":"c0b987bdddfa732f8505a8d139bdb69b","url":"./live2d-widget/waifu.css"},{"revision":"ca08ea3e0818fe6c2b6c4e58de69fa7d","url":"./manifest.json"},{"revision":"3d19fc6b702198860ebf6b16303e790e","url":"./messageboard/index.html"},{"revision":"1162148136eb2ed7561dcef310d77716","url":"./newPost.json"},{"revision":"b484e7b6862d0d7577740a89c45a4e19","url":"./page/2/index.html"},{"revision":"dbcd0ba3887fe0794833e1f866bc3b48","url":"./page/3/index.html"},{"revision":"c3608c2229512869c57b3bd8c59c324a","url":"./page/4/index.html"},{"revision":"11cb093494ab9b3cfbf2c0ead6cb63b8","url":"./post/12ms.html"},{"revision":"b5542891bc9742a07e11cc994858d18c","url":"./post/1688hydzfa.html"},{"revision":"c45f03323d905eac3a823afba0da8db3","url":"./post/1688yunying.html"},{"revision":"33bfe45923f3c6668427c387e5f89b1f","url":"./post/2021welcome.html"},{"revision":"96f5e4d1fd32b439ac28f2dca8418d7d","url":"./post/20minmarkdown.html"},{"revision":"5287f86068a17d6e71fb3695e3625f75","url":"./post/30linuxcd.html"},{"revision":"cd7e62578c61a9cc10462ffff489c6a1","url":"./post/dsyyzsfx-1.html"},{"revision":"d29c98d45c15cef609ccee1d990c2510","url":"./post/dsyyzsfx-2.html"},{"revision":"f78e468f2cb7f5a15077368fba8f12c9","url":"./post/errorpush.html"},{"revision":"40cd03c62a8d4550652e61fdd29adf96","url":"./post/gitalk.html"},{"revision":"f18710e8bf53cd498bd36e5ee87c9d76","url":"./post/gridea.html"},{"revision":"ee3696b186aebf0e0130d3e4a4094633","url":"./post/hexo-ran.html"},{"revision":"e49dbe4f29a20c25dbd86b21b4e81efd","url":"./post/hexo.html"},{"revision":"f00f4519f7b94ac647c32ec6efd893cc","url":"./post/hexogithub.html"},{"revision":"5333486eeaee74d9d933fb919f69ce6e","url":"./post/hexohtml.html"},{"revision":"5ca2952a68a11220c954e167019e44fa","url":"./post/kfhf.html"},{"revision":"eddf3dde5c2093ac96bc834925962578","url":"./post/khfx.html"},{"revision":"b5790ec0279db61888e90222be94c4fb","url":"./post/macosmc.html"},{"revision":"983696ea16dc628a2c0280667a41cfda","url":"./post/noie.html"},{"revision":"87b51f53cced6989047ecc607282e044","url":"./post/OKR.html"},{"revision":"a4414b8976d63ac94d4acec9b37a2595","url":"./post/pzsoft.html"},{"revision":"bb4e8a671d622ea3ba957d2fad487e81","url":"./post/seojj.html"},{"revision":"fd873cfceb0775c0132cb88c62e8d3bb","url":"./post/smpbtb.html"},{"revision":"4212a7c61cccc29077cd8c163bb11178","url":"./post/smpfm.html"},{"revision":"1443b865d40ee3ffce5049b88ad5b633","url":"./post/smpkj.html"},{"revision":"fa9fc54e1440a12ff0b56e68dae0eb60","url":"./post/smpOpenCV.html"},{"revision":"97422eeb4a448a88f66765bc7d82fb00","url":"./post/smpset.html"},{"revision":"cacf443991c5dafbc5037121bea4c447","url":"./post/taobao11.html"},{"revision":"1b4c3a3d73feaa2b821292f920c67a6d","url":"./post/taobaoyunying.html"},{"revision":"85f33ea8f8f898869aab8cd929b7d538","url":"./post/taobaozhibo.html"},{"revision":"343ff8b187093744b58b92e5e1bd5c01","url":"./post/Typora.html"},{"revision":"beea14079ce61b1010e9d5dadea40481","url":"./post/virtualhardwareshack.html"},{"revision":"62c6631420e4763be5b2dfdf80b61467","url":"./post/websitefx.html"},{"revision":"9aead7d440bcae4e0e455564fecf89fc","url":"./post/wpnoadmin.html"},{"revision":"04d870dcd291d28757885df29d629959","url":"./post/wpsslerror.html"},{"revision":"c63cd61a28915f5acd8506a2b48e6a07","url":"./post/yunyin.html"},{"revision":"ddb23145fcf6f1ca947311571a29e188","url":"./post/yydd.html"},{"revision":"77a48c9bd6b6c3bc0cf3d2b6becd458b","url":"./post/zc.html"},{"revision":"2844d95a7deada7d7e4e7c419d5b67e9","url":"./public/newPost.json"},{"revision":"f6f7ff6d6b7b7b652cb92a25eb2cef5b","url":"./public/webpushr-sw.js"},{"revision":"7666a24c604407ba7ca254fd701be592","url":"./qn/index.html"},{"revision":"359741f0905b55854e687803f51ca031","url":"./search.xml"},{"revision":"de54a0e361abb4a14216662945d230da","url":"./sitemap.xml"},{"revision":"36db98cc7f39fe2fcdcbcbc1e7fef8f2","url":"./tags/1688/index.html"},{"revision":"ae2613d87f70b9613374ac16b9106ddd","url":"./tags/bilibili/index.html"},{"revision":"c7d93eeebca9163e42b09a186f0ef5e5","url":"./tags/hexo-ran/index.html"},{"revision":"4110777b3c05255f0748ae1ff020b7a6","url":"./tags/hexo/index.html"},{"revision":"84360c4781c55a0a45d81fb8b0efd095","url":"./tags/index.html"},{"revision":"a5bc203eece15f5b499d20367ad67dcd","url":"./tags/Linux/index.html"},{"revision":"fe8e89d8a57db5decf3f3c7d08ed7033","url":"./tags/markdown/index.html"},{"revision":"572610a004b9ea8caf88ceb6c2f2f3cc","url":"./tags/OKR/index.html"},{"revision":"fc725044ff99fe4cfe75516716dd87d8","url":"./tags/WordPress错误/index.html"},{"revision":"3538498474de409ac6bd3d89f090dc18","url":"./tags/优化/index.html"},{"revision":"53d23143a2542aeec82a8cd2d3ce1912","url":"./tags/学习/index.html"},{"revision":"2cb4f973d2b65f370af26eebfb0fe79b","url":"./tags/开发/index.html"},{"revision":"360357c507dd6e72d3d055d3e814034c","url":"./tags/技巧/index.html"},{"revision":"a652df62cd2adc6b1be258ad7ded5cba","url":"./tags/技巧/page/2/index.html"},{"revision":"2f7d4855c35b5564a5e7af90046b38fc","url":"./tags/教程/index.html"},{"revision":"d4303188b6a62ecc1a7d83ecb37f776e","url":"./tags/树莓派/index.html"},{"revision":"a666bd9191a89adce858689f2cd8e5f7","url":"./tags/淘宝/index.html"},{"revision":"0486b01ae8c6f022b21692268c4482ef","url":"./tags/电商基础教程/index.html"},{"revision":"b8376693e8501c450de3f51b74d5011e","url":"./tags/破解软件/index.html"},{"revision":"af3a3b6c8ca956ceeec12cf49bc96c7f","url":"./tags/维护/index.html"},{"revision":"361fe7cb5e5fb49fb6be0385f7fbcf42","url":"./tags/网站教程/index.html"},{"revision":"ad0b60ad2d681d8c6d5bc72c1a5757f4","url":"./tags/美化/index.html"},{"revision":"c685d61720d8d6af37662da69ce4e6a7","url":"./tags/转载/index.html"},{"revision":"f5b7d7bd65d55f33cd22de01657336d0","url":"./tags/软件/index.html"},{"revision":"f6f7ff6d6b7b7b652cb92a25eb2cef5b","url":"./webpushr-sw.js"}],{
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