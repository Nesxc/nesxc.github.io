const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"53f1c2f8e9886cd444ecdc612d537528","url":"./404.html"},{"revision":"87213cb6cff26976ed6694b846c5b00a","url":"./about/index.html"},{"revision":"1eda983d892ebff985cbef8c00aa3526","url":"./aboutsite/index.html"},{"revision":"5f84e6eee29669edb8f91bcc91da1422","url":"./archives/2020/02/index.html"},{"revision":"e917dcf8dbe5832c8582a69cf85ff7f0","url":"./archives/2020/03/index.html"},{"revision":"4548a4a31633cf1a98b143d57d1a7ff8","url":"./archives/2020/04/index.html"},{"revision":"a3a9beff53bb7f42e5c1a8a27f2af4bb","url":"./archives/2020/06/index.html"},{"revision":"7deefc69e520b1389041b90c3b84b1f3","url":"./archives/2020/07/index.html"},{"revision":"6160af1f169e7fe952b3607ed7f9543f","url":"./archives/2020/09/index.html"},{"revision":"f7d16ac5d4c2de8fa7bfb780959b1b7b","url":"./archives/2020/10/index.html"},{"revision":"b0cecc72018c05475370af5d73402c5f","url":"./archives/2020/11/index.html"},{"revision":"c35b82143ae88e3ec17532d2d4eaadef","url":"./archives/2020/12/index.html"},{"revision":"b6dac9db3c4628f7088ee37321fff721","url":"./archives/2020/index.html"},{"revision":"bc32c6917a69e9c816d017f3f3d0ad78","url":"./archives/2020/page/2/index.html"},{"revision":"47e6b967e8dfbd8751ad20adb1fb4e78","url":"./archives/2020/page/3/index.html"},{"revision":"8b251ad2d929745de9cc200a784f947d","url":"./archives/2021/01/index.html"},{"revision":"7341e16a45d3b1cb78d04fc7772dd126","url":"./archives/2021/01/page/2/index.html"},{"revision":"095803ed7ab3497d121ccfc4518fda4a","url":"./archives/2021/index.html"},{"revision":"358aa4c30f67f3f07e703eca9daa9a92","url":"./archives/2021/page/2/index.html"},{"revision":"5bac0fdffd53feff61fb6ec4aa23219d","url":"./archives/index.html"},{"revision":"681341d6c006f5078989add778da71cf","url":"./archives/page/2/index.html"},{"revision":"b60f4172a05e5f304207f08f884371f0","url":"./archives/page/3/index.html"},{"revision":"c9c0efe2e32bd82228c778317ef30b27","url":"./archives/page/4/index.html"},{"revision":"bf40bad8615637cb01248691d2fd0953","url":"./atom.xml"},{"revision":"9fc7846d5d65ba410a600f3b2a07aede","url":"./baidusitemap.xml"},{"revision":"cdb36216748981f9c141af4b9baa9073","url":"./bing.json"},{"revision":"056b58498967c05fc51d228fcffa1300","url":"./browser.html"},{"revision":"618d42d5f6f0658737a75d5f1c7492c6","url":"./categories/hexo/index.html"},{"revision":"b57b4783dcbaf14db88f128cfa926024","url":"./categories/index.html"},{"revision":"bcd3e1f242012a28d9f5bc166e67450a","url":"./categories/markdown/index.html"},{"revision":"4a9be483c5270b7b9044f4ab6d0c4f38","url":"./categories/教程/index.html"},{"revision":"b595f735876656757d43e5ec4e8cb50c","url":"./categories/日志/index.html"},{"revision":"623a452c52af281f0476c4cea9fcea44","url":"./categories/电商/index.html"},{"revision":"de43eefe999526542dd1fd90f27d10d1","url":"./categories/电商/page/2/index.html"},{"revision":"eba87130b3bc08a4016b0aa13dc1f452","url":"./categories/视频/index.html"},{"revision":"59cb7e5bdba46ddc2a488a29136e7732","url":"./categories/站点/index.html"},{"revision":"d6cf8af291ae23ba8fdc8e224729318a","url":"./categories/软件/index.html"},{"revision":"0fdd0d96232a9bfd9fcf2ee95617c657","url":"./css/commentsbar.css"},{"revision":"90fd3456fd864251ce8cd4e71cc23030","url":"./css/cover.css"},{"revision":"f1f3e9effa01a29c456eae5eee8e549f","url":"./css/index.css"},{"revision":"16bd6515f1e52b8ad0db3dbc743d8504","url":"./css/mobile.css"},{"revision":"4dfbb9a266637c71a92fe7daefdecaf6","url":"./css/nesxc-css.css"},{"revision":"bff0ca156e0cf0f90dc6ceb59af5debd","url":"./css/sty.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"6d3043da54310c01ab7b1dd58bc44812","url":"./disclaimer/index.html"},{"revision":"0c436f3d1d4ee9b27b122597a3fbc906","url":"./img/pwa/browserconfig.xml"},{"revision":"0fe65e40f111ec67a5dd55c91411d9bd","url":"./img/pwa/manifest.json"},{"revision":"2ddbedd53c575a50a1154b807501aeaf","url":"./img/pwa/README.html"},{"revision":"fe911dd4e22f0dc793c9996453a0ec4c","url":"./index.html"},{"revision":"08c161531ac32a125532bab01c44b50e","url":"./js/browser.js"},{"revision":"978e39748eab8606297a78af8410b19f","url":"./js/git.js"},{"revision":"47d2857f63201aa803c4370a53ab4a6c","url":"./js/hm.js"},{"revision":"bff8227d7135fd3e8c5112c005dcefc1","url":"./js/main.js"},{"revision":"bb88a15771f3e477c3e247640fe81c0f","url":"./js/s-nesxc.js"},{"revision":"e6a9c3f8fa43a7d3421169ea96eef44e","url":"./js/search/algolia.js"},{"revision":"86e7fcbc5aa273e6c3d2c94b0054809b","url":"./js/search/local-search.js"},{"revision":"b3938f358149bc8e5efb88252c2dc0f3","url":"./js/snow.js"},{"revision":"298a8a8354605d9316432d40aafe1407","url":"./js/sw-server.min.js"},{"revision":"8417ce22af4aa44bf709e7cfe44b620e","url":"./js/swiper_init.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"5720a78dca20fab16f21914ae3ac0757","url":"./js/utils.js"},{"revision":"417ab7b846cf10ff5a94dbafc052bb01","url":"./js/wow_init.js"},{"revision":"b49395727ff80e7753384e5589de8e95","url":"./link/index.html"},{"revision":"ab606b99de036bcc414c5d939d2c2b32","url":"./live2d-widget/autoload.js"},{"revision":"2596a8630c0801002b3dff127b50518b","url":"./live2d-widget/demo/demo.html"},{"revision":"814084edfca521aea7c069da8e0698ad","url":"./live2d-widget/demo/login.html"},{"revision":"ee7efff8ff5d1d4bd4a0ff99affd3ec7","url":"./live2d-widget/live2d.min.js"},{"revision":"2c2ab9dee580ea1b79ab8413279e6312","url":"./live2d-widget/README.html"},{"revision":"e01c75f70a9465389471f638b1356bf8","url":"./live2d-widget/waifu-tips.js"},{"revision":"8dd6573863792f6f2c2e57057d21ef96","url":"./live2d-widget/waifu-tips.json"},{"revision":"c0b987bdddfa732f8505a8d139bdb69b","url":"./live2d-widget/waifu.css"},{"revision":"ca08ea3e0818fe6c2b6c4e58de69fa7d","url":"./manifest.json"},{"revision":"618318c14ac2890bbae89313ceeb9ce9","url":"./messageboard/index.html"},{"revision":"1162148136eb2ed7561dcef310d77716","url":"./newPost.json"},{"revision":"56e47493d6d43e3e0f6ac8a9649736bb","url":"./page/2/index.html"},{"revision":"e7b6ac1fb7d50ba9512c0ff4a3ff5d5d","url":"./page/3/index.html"},{"revision":"71b11313c26b74ba3d72743da828b1f1","url":"./page/4/index.html"},{"revision":"11cb093494ab9b3cfbf2c0ead6cb63b8","url":"./post/12ms.html"},{"revision":"b5542891bc9742a07e11cc994858d18c","url":"./post/1688hydzfa.html"},{"revision":"c45f03323d905eac3a823afba0da8db3","url":"./post/1688yunying.html"},{"revision":"33bfe45923f3c6668427c387e5f89b1f","url":"./post/2021welcome.html"},{"revision":"96f5e4d1fd32b439ac28f2dca8418d7d","url":"./post/20minmarkdown.html"},{"revision":"5287f86068a17d6e71fb3695e3625f75","url":"./post/30linuxcd.html"},{"revision":"cd7e62578c61a9cc10462ffff489c6a1","url":"./post/dsyyzsfx-1.html"},{"revision":"d29c98d45c15cef609ccee1d990c2510","url":"./post/dsyyzsfx-2.html"},{"revision":"f78e468f2cb7f5a15077368fba8f12c9","url":"./post/errorpush.html"},{"revision":"40cd03c62a8d4550652e61fdd29adf96","url":"./post/gitalk.html"},{"revision":"f18710e8bf53cd498bd36e5ee87c9d76","url":"./post/gridea.html"},{"revision":"a16028f9e349f90153488d14479d4025","url":"./post/hexo-ran.html"},{"revision":"e49dbe4f29a20c25dbd86b21b4e81efd","url":"./post/hexo.html"},{"revision":"f00f4519f7b94ac647c32ec6efd893cc","url":"./post/hexogithub.html"},{"revision":"5333486eeaee74d9d933fb919f69ce6e","url":"./post/hexohtml.html"},{"revision":"5ca2952a68a11220c954e167019e44fa","url":"./post/kfhf.html"},{"revision":"eddf3dde5c2093ac96bc834925962578","url":"./post/khfx.html"},{"revision":"b5790ec0279db61888e90222be94c4fb","url":"./post/macosmc.html"},{"revision":"983696ea16dc628a2c0280667a41cfda","url":"./post/noie.html"},{"revision":"87b51f53cced6989047ecc607282e044","url":"./post/OKR.html"},{"revision":"a4414b8976d63ac94d4acec9b37a2595","url":"./post/pzsoft.html"},{"revision":"bb4e8a671d622ea3ba957d2fad487e81","url":"./post/seojj.html"},{"revision":"fd873cfceb0775c0132cb88c62e8d3bb","url":"./post/smpbtb.html"},{"revision":"4212a7c61cccc29077cd8c163bb11178","url":"./post/smpfm.html"},{"revision":"1443b865d40ee3ffce5049b88ad5b633","url":"./post/smpkj.html"},{"revision":"fa9fc54e1440a12ff0b56e68dae0eb60","url":"./post/smpOpenCV.html"},{"revision":"97422eeb4a448a88f66765bc7d82fb00","url":"./post/smpset.html"},{"revision":"cacf443991c5dafbc5037121bea4c447","url":"./post/taobao11.html"},{"revision":"1b4c3a3d73feaa2b821292f920c67a6d","url":"./post/taobaoyunying.html"},{"revision":"85f33ea8f8f898869aab8cd929b7d538","url":"./post/taobaozhibo.html"},{"revision":"343ff8b187093744b58b92e5e1bd5c01","url":"./post/Typora.html"},{"revision":"beea14079ce61b1010e9d5dadea40481","url":"./post/virtualhardwareshack.html"},{"revision":"62c6631420e4763be5b2dfdf80b61467","url":"./post/websitefx.html"},{"revision":"9aead7d440bcae4e0e455564fecf89fc","url":"./post/wpnoadmin.html"},{"revision":"04d870dcd291d28757885df29d629959","url":"./post/wpsslerror.html"},{"revision":"c63cd61a28915f5acd8506a2b48e6a07","url":"./post/yunyin.html"},{"revision":"3f4113ade7fb847c251ffda9d2637403","url":"./post/yydd.html"},{"revision":"77a48c9bd6b6c3bc0cf3d2b6becd458b","url":"./post/zc.html"},{"revision":"2844d95a7deada7d7e4e7c419d5b67e9","url":"./public/newPost.json"},{"revision":"f6f7ff6d6b7b7b652cb92a25eb2cef5b","url":"./public/webpushr-sw.js"},{"revision":"7666a24c604407ba7ca254fd701be592","url":"./qn/index.html"},{"revision":"386669010803f05f0e6f20d938eafdf5","url":"./search.xml"},{"revision":"ff0efb0850c5a572dc954eb5356b071a","url":"./sitemap.xml"},{"revision":"c92a9a7a54dd4d31d954dd72fa9795a3","url":"./tags/1688/index.html"},{"revision":"9e6e24fad2be480ef945b65a977beedd","url":"./tags/bilibili/index.html"},{"revision":"76ba0273638dd6804ab5477876463dc5","url":"./tags/hexo-ran/index.html"},{"revision":"db5ab1e54c835ddd6ec6c3fb445e80e5","url":"./tags/hexo/index.html"},{"revision":"93048ac29c01cd3828f8cab457e98afe","url":"./tags/index.html"},{"revision":"94840f85a4eba4e0406d04bc50cd125a","url":"./tags/Linux/index.html"},{"revision":"b540e7a129ac25c10e489bebaa0868a5","url":"./tags/markdown/index.html"},{"revision":"8858e0f6b4ccc846d5c3811235f9d0bd","url":"./tags/OKR/index.html"},{"revision":"86817028cdbc1345a88977e2aedf9fb9","url":"./tags/WordPress错误/index.html"},{"revision":"d88bbeb8a8cb328531b4a173902727a4","url":"./tags/优化/index.html"},{"revision":"54880eb71f498da979c1a335d864a0ea","url":"./tags/学习/index.html"},{"revision":"dcd2aec201d4f9c2aacf9fa15b3fd75b","url":"./tags/开发/index.html"},{"revision":"f29563146625ce5233e1a7f423d59d94","url":"./tags/技巧/index.html"},{"revision":"31c5f61fee04daffa20bfc03d0ba358a","url":"./tags/技巧/page/2/index.html"},{"revision":"47e84370477a417611cfccfa61ffdb00","url":"./tags/教程/index.html"},{"revision":"9c3cf12b93e68318c9f9bdff57ec3831","url":"./tags/树莓派/index.html"},{"revision":"fe899ccd38f6abb4e2d29d0351614304","url":"./tags/淘宝/index.html"},{"revision":"a13e9b0298c3487332c4db2749fa983a","url":"./tags/电商基础教程/index.html"},{"revision":"8ac4f02f6dfe28883b7f373e82718a1b","url":"./tags/破解软件/index.html"},{"revision":"0be96187c30fde04aa4820a9a878d485","url":"./tags/维护/index.html"},{"revision":"9ef2ebe8d1e4412b82bb973ca9c7f58f","url":"./tags/网站教程/index.html"},{"revision":"8ee9388bfb3ce4e0dbca0b6228a64d0e","url":"./tags/美化/index.html"},{"revision":"c8cd16fcef7c1aea7a9f0df447cf20bf","url":"./tags/转载/index.html"},{"revision":"e1dc284af97f614e35dac011bf897f9b","url":"./tags/软件/index.html"},{"revision":"f6f7ff6d6b7b7b652cb92a25eb2cef5b","url":"./webpushr-sw.js"}],{
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