const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b5047113cc1b2847f1fdfae8f6f660f3","url":"./404.html"},{"revision":"fbd85ab87774463e5df774999540958b","url":"./about/index.html"},{"revision":"41846f14494856e21f15de2d28cdcc33","url":"./aboutsite/index.html"},{"revision":"52a99fcd9452d2bcdd523cf334d45b15","url":"./archives/2020/02/index.html"},{"revision":"8dae4dc475ff98e8ea3c512954a490ab","url":"./archives/2020/03/index.html"},{"revision":"fa1e93a590d9f396e76e1a40fc307319","url":"./archives/2020/04/index.html"},{"revision":"3e570e58c14ad856de216cdc4b342e7d","url":"./archives/2020/06/index.html"},{"revision":"0aab7e4d86a58abd6b1320d8b49b666e","url":"./archives/2020/07/index.html"},{"revision":"44c7b0ff2c8d5f22bf026d4e7ab01d69","url":"./archives/2020/09/index.html"},{"revision":"6271b47b0dd5f57a026e07f068d84eb8","url":"./archives/2020/10/index.html"},{"revision":"90180f9d9064352910e4f98598e57b96","url":"./archives/2020/11/index.html"},{"revision":"b3c24d2de90cc893ac0ed9bca1e5df19","url":"./archives/2020/12/index.html"},{"revision":"f75e0b9bc269f4b175119e22b832f552","url":"./archives/2020/index.html"},{"revision":"fc404da3a498ad3ce9b0edd6f3d22671","url":"./archives/2020/page/2/index.html"},{"revision":"1d5eb30d5c36b1326c08edc5fbdff3c0","url":"./archives/2020/page/3/index.html"},{"revision":"995c0c5205b816daa91fed2c00dec8af","url":"./archives/2021/01/index.html"},{"revision":"83ee5b682a89f3dbc644400fda5af5a8","url":"./archives/2021/01/page/2/index.html"},{"revision":"715204409552391988ac1239ab191b3a","url":"./archives/2021/index.html"},{"revision":"308179ca7bf2265335407b445add981c","url":"./archives/2021/page/2/index.html"},{"revision":"655125b6ccc2571562455ed2abaa51ec","url":"./archives/index.html"},{"revision":"62e5b697d77349010591e7dd0c00ef46","url":"./archives/page/2/index.html"},{"revision":"905c540167de28c4c2d3469f90ae5017","url":"./archives/page/3/index.html"},{"revision":"7d1911f76a916b059a218e4b374a7e0e","url":"./archives/page/4/index.html"},{"revision":"bf40bad8615637cb01248691d2fd0953","url":"./atom.xml"},{"revision":"9fc7846d5d65ba410a600f3b2a07aede","url":"./baidusitemap.xml"},{"revision":"056b58498967c05fc51d228fcffa1300","url":"./browser.html"},{"revision":"8fcf62efb456b0b3de8fc4eaad7ad8fe","url":"./categories/hexo/index.html"},{"revision":"1cf8498b9cb3915e49a13969a49941f3","url":"./categories/index.html"},{"revision":"a8e1e74355bd031d43b8bb699886a7be","url":"./categories/markdown/index.html"},{"revision":"8765501f11d70977e9db6be0a0dceed6","url":"./categories/教程/index.html"},{"revision":"273680985062c866fe9268050e0967df","url":"./categories/日志/index.html"},{"revision":"fae8eb7ec646428c3f09e6d458d7a53a","url":"./categories/电商/index.html"},{"revision":"97b77e1d56cd1d28709a430c393d8f5d","url":"./categories/电商/page/2/index.html"},{"revision":"fffd478069154619ef48171f92999641","url":"./categories/视频/index.html"},{"revision":"159a127ab3d478e8937dc51889b604a1","url":"./categories/站点/index.html"},{"revision":"2a26fd15dbd2059e48fb74dd41054fd6","url":"./categories/软件/index.html"},{"revision":"0fdd0d96232a9bfd9fcf2ee95617c657","url":"./css/commentsbar.css"},{"revision":"90fd3456fd864251ce8cd4e71cc23030","url":"./css/cover.css"},{"revision":"f1f3e9effa01a29c456eae5eee8e549f","url":"./css/index.css"},{"revision":"16bd6515f1e52b8ad0db3dbc743d8504","url":"./css/mobile.css"},{"revision":"4dfbb9a266637c71a92fe7daefdecaf6","url":"./css/nesxc-css.css"},{"revision":"bff0ca156e0cf0f90dc6ceb59af5debd","url":"./css/sty.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"37901b36576f1b7b098b75a57e2b3947","url":"./disclaimer/index.html"},{"revision":"0c436f3d1d4ee9b27b122597a3fbc906","url":"./img/pwa/browserconfig.xml"},{"revision":"0fe65e40f111ec67a5dd55c91411d9bd","url":"./img/pwa/manifest.json"},{"revision":"177d309df41973fb4d70ef949aabfbf7","url":"./img/pwa/README.html"},{"revision":"da7ebb87747d6ae7d9c17dac2aa13367","url":"./index.html"},{"revision":"08c161531ac32a125532bab01c44b50e","url":"./js/browser.js"},{"revision":"978e39748eab8606297a78af8410b19f","url":"./js/git.js"},{"revision":"47d2857f63201aa803c4370a53ab4a6c","url":"./js/hm.js"},{"revision":"bff8227d7135fd3e8c5112c005dcefc1","url":"./js/main.js"},{"revision":"bb88a15771f3e477c3e247640fe81c0f","url":"./js/s-nesxc.js"},{"revision":"e6a9c3f8fa43a7d3421169ea96eef44e","url":"./js/search/algolia.js"},{"revision":"86e7fcbc5aa273e6c3d2c94b0054809b","url":"./js/search/local-search.js"},{"revision":"b3938f358149bc8e5efb88252c2dc0f3","url":"./js/snow.js"},{"revision":"298a8a8354605d9316432d40aafe1407","url":"./js/sw-server.min.js"},{"revision":"8417ce22af4aa44bf709e7cfe44b620e","url":"./js/swiper_init.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"5720a78dca20fab16f21914ae3ac0757","url":"./js/utils.js"},{"revision":"417ab7b846cf10ff5a94dbafc052bb01","url":"./js/wow_init.js"},{"revision":"fc9175ed8bec6cafa948484d0f04444f","url":"./link/index.html"},{"revision":"ab606b99de036bcc414c5d939d2c2b32","url":"./live2d-widget/autoload.js"},{"revision":"2596a8630c0801002b3dff127b50518b","url":"./live2d-widget/demo/demo.html"},{"revision":"814084edfca521aea7c069da8e0698ad","url":"./live2d-widget/demo/login.html"},{"revision":"ee7efff8ff5d1d4bd4a0ff99affd3ec7","url":"./live2d-widget/live2d.min.js"},{"revision":"2c2ab9dee580ea1b79ab8413279e6312","url":"./live2d-widget/README.html"},{"revision":"e01c75f70a9465389471f638b1356bf8","url":"./live2d-widget/waifu-tips.js"},{"revision":"8dd6573863792f6f2c2e57057d21ef96","url":"./live2d-widget/waifu-tips.json"},{"revision":"c0b987bdddfa732f8505a8d139bdb69b","url":"./live2d-widget/waifu.css"},{"revision":"ca08ea3e0818fe6c2b6c4e58de69fa7d","url":"./manifest.json"},{"revision":"e4e8f00cfe2f8a0007b2391144f6272c","url":"./messageboard/index.html"},{"revision":"1162148136eb2ed7561dcef310d77716","url":"./newPost.json"},{"revision":"2142b11a206f13ae9e528e71c3376e0c","url":"./page/2/index.html"},{"revision":"fca2aba0fbd8273a29bec9be05b257e6","url":"./page/3/index.html"},{"revision":"2d05b95fc396fc8aacf26bc526d20175","url":"./page/4/index.html"},{"revision":"11cb093494ab9b3cfbf2c0ead6cb63b8","url":"./post/12ms.html"},{"revision":"b5542891bc9742a07e11cc994858d18c","url":"./post/1688hydzfa.html"},{"revision":"c45f03323d905eac3a823afba0da8db3","url":"./post/1688yunying.html"},{"revision":"33bfe45923f3c6668427c387e5f89b1f","url":"./post/2021welcome.html"},{"revision":"96f5e4d1fd32b439ac28f2dca8418d7d","url":"./post/20minmarkdown.html"},{"revision":"5287f86068a17d6e71fb3695e3625f75","url":"./post/30linuxcd.html"},{"revision":"cd7e62578c61a9cc10462ffff489c6a1","url":"./post/dsyyzsfx-1.html"},{"revision":"d29c98d45c15cef609ccee1d990c2510","url":"./post/dsyyzsfx-2.html"},{"revision":"f78e468f2cb7f5a15077368fba8f12c9","url":"./post/errorpush.html"},{"revision":"40cd03c62a8d4550652e61fdd29adf96","url":"./post/gitalk.html"},{"revision":"f18710e8bf53cd498bd36e5ee87c9d76","url":"./post/gridea.html"},{"revision":"a16028f9e349f90153488d14479d4025","url":"./post/hexo-ran.html"},{"revision":"e49dbe4f29a20c25dbd86b21b4e81efd","url":"./post/hexo.html"},{"revision":"f00f4519f7b94ac647c32ec6efd893cc","url":"./post/hexogithub.html"},{"revision":"5333486eeaee74d9d933fb919f69ce6e","url":"./post/hexohtml.html"},{"revision":"5ca2952a68a11220c954e167019e44fa","url":"./post/kfhf.html"},{"revision":"eddf3dde5c2093ac96bc834925962578","url":"./post/khfx.html"},{"revision":"b5790ec0279db61888e90222be94c4fb","url":"./post/macosmc.html"},{"revision":"983696ea16dc628a2c0280667a41cfda","url":"./post/noie.html"},{"revision":"87b51f53cced6989047ecc607282e044","url":"./post/OKR.html"},{"revision":"a4414b8976d63ac94d4acec9b37a2595","url":"./post/pzsoft.html"},{"revision":"bb4e8a671d622ea3ba957d2fad487e81","url":"./post/seojj.html"},{"revision":"fd873cfceb0775c0132cb88c62e8d3bb","url":"./post/smpbtb.html"},{"revision":"4212a7c61cccc29077cd8c163bb11178","url":"./post/smpfm.html"},{"revision":"1443b865d40ee3ffce5049b88ad5b633","url":"./post/smpkj.html"},{"revision":"fa9fc54e1440a12ff0b56e68dae0eb60","url":"./post/smpOpenCV.html"},{"revision":"97422eeb4a448a88f66765bc7d82fb00","url":"./post/smpset.html"},{"revision":"cacf443991c5dafbc5037121bea4c447","url":"./post/taobao11.html"},{"revision":"1b4c3a3d73feaa2b821292f920c67a6d","url":"./post/taobaoyunying.html"},{"revision":"85f33ea8f8f898869aab8cd929b7d538","url":"./post/taobaozhibo.html"},{"revision":"343ff8b187093744b58b92e5e1bd5c01","url":"./post/Typora.html"},{"revision":"beea14079ce61b1010e9d5dadea40481","url":"./post/virtualhardwareshack.html"},{"revision":"62c6631420e4763be5b2dfdf80b61467","url":"./post/websitefx.html"},{"revision":"9aead7d440bcae4e0e455564fecf89fc","url":"./post/wpnoadmin.html"},{"revision":"04d870dcd291d28757885df29d629959","url":"./post/wpsslerror.html"},{"revision":"c63cd61a28915f5acd8506a2b48e6a07","url":"./post/yunyin.html"},{"revision":"3f4113ade7fb847c251ffda9d2637403","url":"./post/yydd.html"},{"revision":"77a48c9bd6b6c3bc0cf3d2b6becd458b","url":"./post/zc.html"},{"revision":"2844d95a7deada7d7e4e7c419d5b67e9","url":"./public/newPost.json"},{"revision":"f6f7ff6d6b7b7b652cb92a25eb2cef5b","url":"./public/webpushr-sw.js"},{"revision":"7666a24c604407ba7ca254fd701be592","url":"./qn/index.html"},{"revision":"386669010803f05f0e6f20d938eafdf5","url":"./search.xml"},{"revision":"8544833f6e0670ac244d258fec97cf02","url":"./sitemap.xml"},{"revision":"4b3d2796bc1976d418214fb8e8efaac7","url":"./tags/1688/index.html"},{"revision":"169979c15c32a6fec51ed866672470e1","url":"./tags/bilibili/index.html"},{"revision":"acdd8a3204e03657256d74131b5741f3","url":"./tags/hexo-ran/index.html"},{"revision":"9d1dcd99f710b249104b5a52f3fd4602","url":"./tags/hexo/index.html"},{"revision":"a740fd508082616b0014f1b42a0ac567","url":"./tags/index.html"},{"revision":"b04e004e1826b2336e40e6e5f135161f","url":"./tags/Linux/index.html"},{"revision":"a3abe2f0942e3c346b6306f276548ccc","url":"./tags/markdown/index.html"},{"revision":"6ece4030f9f46c06b917ec58977ea0ea","url":"./tags/OKR/index.html"},{"revision":"5dee46ea0254c0bae5f111199a8183cd","url":"./tags/WordPress错误/index.html"},{"revision":"267ee923f7cb33f26e090734b8185912","url":"./tags/优化/index.html"},{"revision":"20e69d9503504f0ce71a22bdf035c375","url":"./tags/学习/index.html"},{"revision":"3b57614864ef3004182537fca71e92db","url":"./tags/开发/index.html"},{"revision":"6109c4777044aaf075244a1e497a2727","url":"./tags/技巧/index.html"},{"revision":"59efc33d7555f6dffd4d522a7ae1de05","url":"./tags/技巧/page/2/index.html"},{"revision":"a5ec7e891d27cf97ccab782baa2a3af4","url":"./tags/教程/index.html"},{"revision":"078075de80d51568e28a5da641acc8b5","url":"./tags/树莓派/index.html"},{"revision":"f0ae522a03c9405c96abddbbfa024d25","url":"./tags/淘宝/index.html"},{"revision":"1f6f2f7c7a04af9d59eab9168d33efdf","url":"./tags/电商基础教程/index.html"},{"revision":"efc59a5e1d0bd3d914f6896adb8398d7","url":"./tags/破解软件/index.html"},{"revision":"cc583f8149631d6eb7fc0866b49a93e8","url":"./tags/维护/index.html"},{"revision":"3b7e0c0a6fba330fcd0854fd823a750b","url":"./tags/网站教程/index.html"},{"revision":"89f69585c2ee2508ee6ea5bea9f80eb8","url":"./tags/美化/index.html"},{"revision":"f925df46c683cea338c3f0e4f1634dcb","url":"./tags/转载/index.html"},{"revision":"69d30fb8e6ccbceefa436e4cb0e18c92","url":"./tags/软件/index.html"},{"revision":"f6f7ff6d6b7b7b652cb92a25eb2cef5b","url":"./webpushr-sw.js"}],{
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