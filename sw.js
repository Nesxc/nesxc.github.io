const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4f6fa1cfada9f33bd2f8eaea308d5ac7","url":"./404.html"},{"revision":"ccc06ba6d895b9fc3621fbc1cc0b7ea1","url":"./about/index.html"},{"revision":"e5a807a31bf31a10827315cab45d0e99","url":"./aboutsite/index.html"},{"revision":"453787ce151ae902be3347c72bfe878b","url":"./archives/2020/02/index.html"},{"revision":"76e27d1bd1b80b58e5369ea95122d891","url":"./archives/2020/03/index.html"},{"revision":"97f30d48a8f6da04a86ce06cfba20551","url":"./archives/2020/04/index.html"},{"revision":"fd7bffe852651bea46fde5c1f800a49d","url":"./archives/2020/06/index.html"},{"revision":"7e5f26b2e487192aef920d9271d29a09","url":"./archives/2020/07/index.html"},{"revision":"147b1d64f4b6f4a1f5e038f5ed8f015e","url":"./archives/2020/09/index.html"},{"revision":"fccef1b36f3fe9338214278f83fc56e3","url":"./archives/2020/10/index.html"},{"revision":"d21fdebc24c4f4e2e6c4ebcbc1877815","url":"./archives/2020/11/index.html"},{"revision":"49bb6908ee75fc68745e269fb8869981","url":"./archives/2020/12/index.html"},{"revision":"a5a0f2980c8e00dd90cb205480714d4a","url":"./archives/2020/index.html"},{"revision":"6d836515056acdc85ee9154ea03e8f48","url":"./archives/2020/page/2/index.html"},{"revision":"10bbd48a5e6feb57b884d78e4f75bd89","url":"./archives/2020/page/3/index.html"},{"revision":"a1678ff8530f80686394a52cbb80d8c0","url":"./archives/2021/01/index.html"},{"revision":"44469d2065f47a01b76382aa7501d0e3","url":"./archives/2021/01/page/2/index.html"},{"revision":"f9bd9b7b2a1f5eea59232390c5a6b93f","url":"./archives/2021/index.html"},{"revision":"fa44edf6616dc0b82344cc43304335f5","url":"./archives/2021/page/2/index.html"},{"revision":"6b901d4e8a3ae75cafdea79f468c05d8","url":"./archives/index.html"},{"revision":"6762b27a3151e96e4927e1a4730530aa","url":"./archives/page/2/index.html"},{"revision":"525e9df8f21d0e8323aeb60a9f0108ad","url":"./archives/page/3/index.html"},{"revision":"49beb45946ca45b9baf1a3c4122594b5","url":"./archives/page/4/index.html"},{"revision":"bf40bad8615637cb01248691d2fd0953","url":"./atom.xml"},{"revision":"9fc7846d5d65ba410a600f3b2a07aede","url":"./baidusitemap.xml"},{"revision":"056b58498967c05fc51d228fcffa1300","url":"./browser.html"},{"revision":"635c1a0225ebabb50b0597657ff9b08b","url":"./categories/hexo/index.html"},{"revision":"0b3df08597a5dd777df7caf7d575e86a","url":"./categories/index.html"},{"revision":"859f13b81bcaf31dfb1c5e81304c65b1","url":"./categories/markdown/index.html"},{"revision":"8fa7e2f1046f9624d1a74903d280d511","url":"./categories/教程/index.html"},{"revision":"906388250bbbd547c05574c4a6dcbe8b","url":"./categories/日志/index.html"},{"revision":"0b3752a5e05017b2cdde9812649fe1b1","url":"./categories/电商/index.html"},{"revision":"0ae48c16285be4589ec7c48633bcf1dc","url":"./categories/电商/page/2/index.html"},{"revision":"43fd35d82d6f4bbad86e8102ef2e651f","url":"./categories/视频/index.html"},{"revision":"a4b354d88ed428333ba446e4cb00c91b","url":"./categories/站点/index.html"},{"revision":"9a43f3ef7a41b84964351179f0c2dcf1","url":"./categories/软件/index.html"},{"revision":"0fdd0d96232a9bfd9fcf2ee95617c657","url":"./css/commentsbar.css"},{"revision":"90fd3456fd864251ce8cd4e71cc23030","url":"./css/cover.css"},{"revision":"f1f3e9effa01a29c456eae5eee8e549f","url":"./css/index.css"},{"revision":"16bd6515f1e52b8ad0db3dbc743d8504","url":"./css/mobile.css"},{"revision":"4dfbb9a266637c71a92fe7daefdecaf6","url":"./css/nesxc-css.css"},{"revision":"bff0ca156e0cf0f90dc6ceb59af5debd","url":"./css/sty.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d1807da4421d3f72adbbb3c66fddfe4e","url":"./disclaimer/index.html"},{"revision":"0c436f3d1d4ee9b27b122597a3fbc906","url":"./img/pwa/browserconfig.xml"},{"revision":"0fe65e40f111ec67a5dd55c91411d9bd","url":"./img/pwa/manifest.json"},{"revision":"a2d9bfff4199907c0fb08aee9bfc00a5","url":"./img/pwa/README.html"},{"revision":"8c1b86da24fec89bad4e49497bf0f7ad","url":"./index.html"},{"revision":"08c161531ac32a125532bab01c44b50e","url":"./js/browser.js"},{"revision":"978e39748eab8606297a78af8410b19f","url":"./js/git.js"},{"revision":"47d2857f63201aa803c4370a53ab4a6c","url":"./js/hm.js"},{"revision":"bff8227d7135fd3e8c5112c005dcefc1","url":"./js/main.js"},{"revision":"bb88a15771f3e477c3e247640fe81c0f","url":"./js/s-nesxc.js"},{"revision":"e6a9c3f8fa43a7d3421169ea96eef44e","url":"./js/search/algolia.js"},{"revision":"86e7fcbc5aa273e6c3d2c94b0054809b","url":"./js/search/local-search.js"},{"revision":"b3938f358149bc8e5efb88252c2dc0f3","url":"./js/snow.js"},{"revision":"298a8a8354605d9316432d40aafe1407","url":"./js/sw-server.min.js"},{"revision":"8417ce22af4aa44bf709e7cfe44b620e","url":"./js/swiper_init.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"5720a78dca20fab16f21914ae3ac0757","url":"./js/utils.js"},{"revision":"417ab7b846cf10ff5a94dbafc052bb01","url":"./js/wow_init.js"},{"revision":"ab077b7d11bab77338dbcab085d5df5b","url":"./link/index.html"},{"revision":"ab606b99de036bcc414c5d939d2c2b32","url":"./live2d-widget/autoload.js"},{"revision":"2596a8630c0801002b3dff127b50518b","url":"./live2d-widget/demo/demo.html"},{"revision":"814084edfca521aea7c069da8e0698ad","url":"./live2d-widget/demo/login.html"},{"revision":"ee7efff8ff5d1d4bd4a0ff99affd3ec7","url":"./live2d-widget/live2d.min.js"},{"revision":"2c2ab9dee580ea1b79ab8413279e6312","url":"./live2d-widget/README.html"},{"revision":"e01c75f70a9465389471f638b1356bf8","url":"./live2d-widget/waifu-tips.js"},{"revision":"8dd6573863792f6f2c2e57057d21ef96","url":"./live2d-widget/waifu-tips.json"},{"revision":"c0b987bdddfa732f8505a8d139bdb69b","url":"./live2d-widget/waifu.css"},{"revision":"ca08ea3e0818fe6c2b6c4e58de69fa7d","url":"./manifest.json"},{"revision":"2efb34502ee8ba1ec3fa34ce5e9471d9","url":"./messageboard/index.html"},{"revision":"1162148136eb2ed7561dcef310d77716","url":"./newPost.json"},{"revision":"9d810000c0a7833d2b0cb1881f411f89","url":"./page/2/index.html"},{"revision":"1496e69f76bd99c54f0fd1c153668c86","url":"./page/3/index.html"},{"revision":"2140948f868355b3a26998e3e672aaed","url":"./page/4/index.html"},{"revision":"11cb093494ab9b3cfbf2c0ead6cb63b8","url":"./post/12ms.html"},{"revision":"b5542891bc9742a07e11cc994858d18c","url":"./post/1688hydzfa.html"},{"revision":"c45f03323d905eac3a823afba0da8db3","url":"./post/1688yunying.html"},{"revision":"33bfe45923f3c6668427c387e5f89b1f","url":"./post/2021welcome.html"},{"revision":"96f5e4d1fd32b439ac28f2dca8418d7d","url":"./post/20minmarkdown.html"},{"revision":"5287f86068a17d6e71fb3695e3625f75","url":"./post/30linuxcd.html"},{"revision":"cd7e62578c61a9cc10462ffff489c6a1","url":"./post/dsyyzsfx-1.html"},{"revision":"d29c98d45c15cef609ccee1d990c2510","url":"./post/dsyyzsfx-2.html"},{"revision":"f78e468f2cb7f5a15077368fba8f12c9","url":"./post/errorpush.html"},{"revision":"40cd03c62a8d4550652e61fdd29adf96","url":"./post/gitalk.html"},{"revision":"f18710e8bf53cd498bd36e5ee87c9d76","url":"./post/gridea.html"},{"revision":"ee3696b186aebf0e0130d3e4a4094633","url":"./post/hexo-ran.html"},{"revision":"e49dbe4f29a20c25dbd86b21b4e81efd","url":"./post/hexo.html"},{"revision":"f00f4519f7b94ac647c32ec6efd893cc","url":"./post/hexogithub.html"},{"revision":"5333486eeaee74d9d933fb919f69ce6e","url":"./post/hexohtml.html"},{"revision":"5ca2952a68a11220c954e167019e44fa","url":"./post/kfhf.html"},{"revision":"eddf3dde5c2093ac96bc834925962578","url":"./post/khfx.html"},{"revision":"b5790ec0279db61888e90222be94c4fb","url":"./post/macosmc.html"},{"revision":"983696ea16dc628a2c0280667a41cfda","url":"./post/noie.html"},{"revision":"87b51f53cced6989047ecc607282e044","url":"./post/OKR.html"},{"revision":"a4414b8976d63ac94d4acec9b37a2595","url":"./post/pzsoft.html"},{"revision":"bb4e8a671d622ea3ba957d2fad487e81","url":"./post/seojj.html"},{"revision":"fd873cfceb0775c0132cb88c62e8d3bb","url":"./post/smpbtb.html"},{"revision":"4212a7c61cccc29077cd8c163bb11178","url":"./post/smpfm.html"},{"revision":"1443b865d40ee3ffce5049b88ad5b633","url":"./post/smpkj.html"},{"revision":"fa9fc54e1440a12ff0b56e68dae0eb60","url":"./post/smpOpenCV.html"},{"revision":"97422eeb4a448a88f66765bc7d82fb00","url":"./post/smpset.html"},{"revision":"cacf443991c5dafbc5037121bea4c447","url":"./post/taobao11.html"},{"revision":"1b4c3a3d73feaa2b821292f920c67a6d","url":"./post/taobaoyunying.html"},{"revision":"85f33ea8f8f898869aab8cd929b7d538","url":"./post/taobaozhibo.html"},{"revision":"343ff8b187093744b58b92e5e1bd5c01","url":"./post/Typora.html"},{"revision":"beea14079ce61b1010e9d5dadea40481","url":"./post/virtualhardwareshack.html"},{"revision":"62c6631420e4763be5b2dfdf80b61467","url":"./post/websitefx.html"},{"revision":"9aead7d440bcae4e0e455564fecf89fc","url":"./post/wpnoadmin.html"},{"revision":"04d870dcd291d28757885df29d629959","url":"./post/wpsslerror.html"},{"revision":"c63cd61a28915f5acd8506a2b48e6a07","url":"./post/yunyin.html"},{"revision":"ddb23145fcf6f1ca947311571a29e188","url":"./post/yydd.html"},{"revision":"77a48c9bd6b6c3bc0cf3d2b6becd458b","url":"./post/zc.html"},{"revision":"2844d95a7deada7d7e4e7c419d5b67e9","url":"./public/newPost.json"},{"revision":"f6f7ff6d6b7b7b652cb92a25eb2cef5b","url":"./public/webpushr-sw.js"},{"revision":"7666a24c604407ba7ca254fd701be592","url":"./qn/index.html"},{"revision":"386669010803f05f0e6f20d938eafdf5","url":"./search.xml"},{"revision":"8544833f6e0670ac244d258fec97cf02","url":"./sitemap.xml"},{"revision":"4581efed13d9fd786356c93404c9e729","url":"./tags/1688/index.html"},{"revision":"fdd27794739fd6ef59ecbfcac3cf9c5c","url":"./tags/bilibili/index.html"},{"revision":"0b46339675546114892fa13c4eb29e0d","url":"./tags/hexo-ran/index.html"},{"revision":"1deee4a2ea026fa1101a57163db06398","url":"./tags/hexo/index.html"},{"revision":"3f7fab7bf89ce7c888740772c89c931d","url":"./tags/index.html"},{"revision":"d6f109afc198fbaf3c61e4fda59eb6fc","url":"./tags/Linux/index.html"},{"revision":"3f7b8423ce155940306ca411b8b94be3","url":"./tags/markdown/index.html"},{"revision":"a1b79f79a50bbf1318bd7674b637351a","url":"./tags/OKR/index.html"},{"revision":"579f8dad4844c0b6f7510dfb3e8a79b5","url":"./tags/WordPress错误/index.html"},{"revision":"06a4c39bfdce2229e7e4d43ccf1381a1","url":"./tags/优化/index.html"},{"revision":"ce4e073aedf1c1ff8bb32d75dac84500","url":"./tags/学习/index.html"},{"revision":"3687fd0c4dd0d3cf78226752f14f3abd","url":"./tags/开发/index.html"},{"revision":"a771629d05f79079dc83141c4e4c78a0","url":"./tags/技巧/index.html"},{"revision":"62dcbb0e15b46d0bc1ec4bc04ce168bf","url":"./tags/技巧/page/2/index.html"},{"revision":"2b00d189d30131d64f8c878668377103","url":"./tags/教程/index.html"},{"revision":"fb846dfd19ddb35239b9f8815226eb59","url":"./tags/树莓派/index.html"},{"revision":"3c086ff3d2cd2890e9b3ec2a52d80877","url":"./tags/淘宝/index.html"},{"revision":"bf7c7da1b2d0466488c360af7f5c4157","url":"./tags/电商基础教程/index.html"},{"revision":"0d7f6c43eb9db36bb23175c7fffb1353","url":"./tags/破解软件/index.html"},{"revision":"6b39a980eb25457c2d94033d135fdab5","url":"./tags/维护/index.html"},{"revision":"1d595a9b3491a6a560f1b0df2ba781f5","url":"./tags/网站教程/index.html"},{"revision":"3015dc97db15743a7c1afb5773c2c92f","url":"./tags/美化/index.html"},{"revision":"0eee7288aad98921b9e6815ae704bd8f","url":"./tags/转载/index.html"},{"revision":"bad190e568a2c852437ffbd9d6dc1034","url":"./tags/软件/index.html"},{"revision":"f6f7ff6d6b7b7b652cb92a25eb2cef5b","url":"./webpushr-sw.js"}],{
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