const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"7dd5c51594ec8293982f48de4aabdd41","url":"./404.html"},{"revision":"b536fcd26e7cde80d4bbd8d9c006d90c","url":"./about/index.html"},{"revision":"77e3df813b74324126db490740c1654c","url":"./aboutsite/index.html"},{"revision":"8e575c5a0f3a4e38b07812c98051454f","url":"./archives/2020/02/index.html"},{"revision":"42a4fde70d7450ae756f93dd0efeb845","url":"./archives/2020/03/index.html"},{"revision":"a877878109ff411c27c2e0703a255588","url":"./archives/2020/04/index.html"},{"revision":"d27d0c5eb0b2352dfd4476d639ead7ab","url":"./archives/2020/06/index.html"},{"revision":"1617a0cc49e74b9a35adfd6bdaae450a","url":"./archives/2020/07/index.html"},{"revision":"726bc6bd10afbbd7353118d7049acefc","url":"./archives/2020/09/index.html"},{"revision":"05740e496cd1be0b814c5deb8122106a","url":"./archives/2020/10/index.html"},{"revision":"a26eeda00040db4a50e6aae71367a232","url":"./archives/2020/11/index.html"},{"revision":"f7e9a6b1527880c5b04269da991c12f2","url":"./archives/2020/12/index.html"},{"revision":"bebbb496852ab3c7efbed3f619e7dde8","url":"./archives/2020/index.html"},{"revision":"cfcde54a38db9479cdf1cfadead1dabf","url":"./archives/2020/page/2/index.html"},{"revision":"3e8809da14de42f0af2bc8598c1e4d4c","url":"./archives/2020/page/3/index.html"},{"revision":"b7843df5e5c9eae979d635229c7ec698","url":"./archives/2021/01/index.html"},{"revision":"17db327c2fc8ee60a6676194fad15ed0","url":"./archives/2021/01/page/2/index.html"},{"revision":"2fac9d2fecaf153be615b63b546d5b89","url":"./archives/2021/index.html"},{"revision":"c489a8a153bc7d82e499247abba5eee6","url":"./archives/2021/page/2/index.html"},{"revision":"a75b21671a3d5dd5d3850c837b299e95","url":"./archives/index.html"},{"revision":"01093002740ca3a59ab713be51776b3e","url":"./archives/page/2/index.html"},{"revision":"4d555c82621a808b13b7972f7e52d53a","url":"./archives/page/3/index.html"},{"revision":"70df3a5c6c294526f17b72c8da170b41","url":"./archives/page/4/index.html"},{"revision":"bf40bad8615637cb01248691d2fd0953","url":"./atom.xml"},{"revision":"19dc5f9c7df2f6ee5fc25380d29a89ea","url":"./baidusitemap.xml"},{"revision":"7b06f4c3da4ef8b84e4ebcc9a4512df8","url":"./bing.json"},{"revision":"056b58498967c05fc51d228fcffa1300","url":"./browser.html"},{"revision":"1c84674c998e792e034424584db242cb","url":"./categories/hexo/index.html"},{"revision":"049aadb40838e6a9e98a5abd8a352ee8","url":"./categories/index.html"},{"revision":"c4dbe73ed121d6ef027e9979922447cd","url":"./categories/markdown/index.html"},{"revision":"9d2b328f10831b80c796ffbbe7c0cdfc","url":"./categories/教程/index.html"},{"revision":"487cba1f552829a649c01f6021abb6bb","url":"./categories/日志/index.html"},{"revision":"abfb2583817887bb8a12d8b59b019c28","url":"./categories/电商/index.html"},{"revision":"90c0ad163908bde440e88859a75e5e55","url":"./categories/电商/page/2/index.html"},{"revision":"60667ac0b70e33dafa2d3406782fd3e6","url":"./categories/视频/index.html"},{"revision":"354db3bd178b2c229088bbf16d08a9f4","url":"./categories/站点/index.html"},{"revision":"6586d8d9b968981dd6b113914520e2d0","url":"./categories/软件/index.html"},{"revision":"0fdd0d96232a9bfd9fcf2ee95617c657","url":"./css/commentsbar.css"},{"revision":"90fd3456fd864251ce8cd4e71cc23030","url":"./css/cover.css"},{"revision":"f1f3e9effa01a29c456eae5eee8e549f","url":"./css/index.css"},{"revision":"16bd6515f1e52b8ad0db3dbc743d8504","url":"./css/mobile.css"},{"revision":"4dfbb9a266637c71a92fe7daefdecaf6","url":"./css/nesxc-css.css"},{"revision":"bff0ca156e0cf0f90dc6ceb59af5debd","url":"./css/sty.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fd7f660196a6004a5a3fe9bad5055b98","url":"./disclaimer/index.html"},{"revision":"0c436f3d1d4ee9b27b122597a3fbc906","url":"./img/pwa/browserconfig.xml"},{"revision":"0fe65e40f111ec67a5dd55c91411d9bd","url":"./img/pwa/manifest.json"},{"revision":"31408db2cc3adc34990c1e14a748fdd8","url":"./img/pwa/README.html"},{"revision":"375d3c088e402756d8a6e3a056903586","url":"./index.html"},{"revision":"08c161531ac32a125532bab01c44b50e","url":"./js/browser.js"},{"revision":"978e39748eab8606297a78af8410b19f","url":"./js/git.js"},{"revision":"47d2857f63201aa803c4370a53ab4a6c","url":"./js/hm.js"},{"revision":"bff8227d7135fd3e8c5112c005dcefc1","url":"./js/main.js"},{"revision":"bb88a15771f3e477c3e247640fe81c0f","url":"./js/s-nesxc.js"},{"revision":"e6a9c3f8fa43a7d3421169ea96eef44e","url":"./js/search/algolia.js"},{"revision":"86e7fcbc5aa273e6c3d2c94b0054809b","url":"./js/search/local-search.js"},{"revision":"b3938f358149bc8e5efb88252c2dc0f3","url":"./js/snow.js"},{"revision":"298a8a8354605d9316432d40aafe1407","url":"./js/sw-server.min.js"},{"revision":"8417ce22af4aa44bf709e7cfe44b620e","url":"./js/swiper_init.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"5720a78dca20fab16f21914ae3ac0757","url":"./js/utils.js"},{"revision":"417ab7b846cf10ff5a94dbafc052bb01","url":"./js/wow_init.js"},{"revision":"d6e049fe2ce1968793a84bcf66e24b5f","url":"./link/index.html"},{"revision":"ab606b99de036bcc414c5d939d2c2b32","url":"./live2d-widget/autoload.js"},{"revision":"2596a8630c0801002b3dff127b50518b","url":"./live2d-widget/demo/demo.html"},{"revision":"814084edfca521aea7c069da8e0698ad","url":"./live2d-widget/demo/login.html"},{"revision":"ee7efff8ff5d1d4bd4a0ff99affd3ec7","url":"./live2d-widget/live2d.min.js"},{"revision":"2c2ab9dee580ea1b79ab8413279e6312","url":"./live2d-widget/README.html"},{"revision":"e01c75f70a9465389471f638b1356bf8","url":"./live2d-widget/waifu-tips.js"},{"revision":"8dd6573863792f6f2c2e57057d21ef96","url":"./live2d-widget/waifu-tips.json"},{"revision":"c0b987bdddfa732f8505a8d139bdb69b","url":"./live2d-widget/waifu.css"},{"revision":"ca08ea3e0818fe6c2b6c4e58de69fa7d","url":"./manifest.json"},{"revision":"19ad502cc7917cfd2be7dae1a50167d5","url":"./messageboard/index.html"},{"revision":"1162148136eb2ed7561dcef310d77716","url":"./newPost.json"},{"revision":"4442a64208ca2d9c52957e735fe9428d","url":"./page/2/index.html"},{"revision":"1630e6c3b99f77ad5a9c766b9cdd0008","url":"./page/3/index.html"},{"revision":"a6403293002ef41ff57cd5a0d9b11266","url":"./page/4/index.html"},{"revision":"8dfdf49d1c47dceef906e09baba84b94","url":"./post/12ms.html"},{"revision":"81e4c1d1b7f99d1ede7243187a2aa001","url":"./post/1688hydzfa.html"},{"revision":"a29789c9ee9a69a19ae501a818b42004","url":"./post/1688yunying.html"},{"revision":"b7fb88de4b42c1a7cc7311dde7e1f814","url":"./post/2021welcome.html"},{"revision":"f54452fce645576438ce10e549371d74","url":"./post/20minmarkdown.html"},{"revision":"fd11cdd14ee2c6f5d58b87d853c5c8bd","url":"./post/30linuxcd.html"},{"revision":"17c95bea5839fd0a805621dcbdba524f","url":"./post/dsyyzsfx-1.html"},{"revision":"0121d2b724e34e21491a1e51d40d10d6","url":"./post/dsyyzsfx-2.html"},{"revision":"51c14d8d812fa519427c9cf5a014f1c0","url":"./post/errorpush.html"},{"revision":"213b517ae3e5dac33312903ba77121e3","url":"./post/gitalk.html"},{"revision":"120651fd4249d1b263cba0056f5ff8f4","url":"./post/gridea.html"},{"revision":"90b5cb17a40589b98146b49bb6e7758f","url":"./post/hexo-ran.html"},{"revision":"c0a2c7761036b7be423a169783e4a7a5","url":"./post/hexo.html"},{"revision":"96724e191c6044099a399b0dd131a55c","url":"./post/hexogithub.html"},{"revision":"d76d5db89f5fe5b7b1e1890b65cb0736","url":"./post/hexohtml.html"},{"revision":"2c11fd262eaea28dbeb88303001d0e43","url":"./post/kfhf.html"},{"revision":"609541156dc93a3cc8abb14a6ed8aa4f","url":"./post/khfx.html"},{"revision":"7fe47df5fae20b1569cf0cfa356e6d6b","url":"./post/macosmc.html"},{"revision":"b2c0e1e5caf3774e34d1f9ee6e6ef804","url":"./post/noie.html"},{"revision":"49ad290ad19ee3fc1beadbdc2ec6da0a","url":"./post/OKR.html"},{"revision":"0e0f034f5a851169e2cc7bcf3e5e597a","url":"./post/pzsoft.html"},{"revision":"6cf123e2a4fe8234769cb969a830d35e","url":"./post/seojj.html"},{"revision":"93569f6c38d3967d58f16fa8c333a9fa","url":"./post/smpbtb.html"},{"revision":"755114667f2489c0c9f2eb0eb46ea93a","url":"./post/smpfm.html"},{"revision":"751ade8f9564bcfc55c6fa93242d2e22","url":"./post/smpkj.html"},{"revision":"6079b069ad161e6db2a80a829c968446","url":"./post/smpOpenCV.html"},{"revision":"b2ba6e770ef2911a686419d7b7b88f23","url":"./post/smpset.html"},{"revision":"7d36a2d17f94ca05c70c7e67a9e32679","url":"./post/taobao11.html"},{"revision":"7b5226e3b2261568f36d23106c397006","url":"./post/taobaoyunying.html"},{"revision":"620add790331273f78e0983368b76af6","url":"./post/taobaozhibo.html"},{"revision":"4b71eca0b7d101c12145a8d45085bf53","url":"./post/Typora.html"},{"revision":"d2d16ce0f74e11134ad1127851d25fa9","url":"./post/virtualhardwareshack.html"},{"revision":"63c87ad9bd9fa983efbfef157b4049b2","url":"./post/websitefx.html"},{"revision":"a08b040351434aa539d448085365843f","url":"./post/wpnoadmin.html"},{"revision":"fddb958778459dbb8f45b7201b0e05fb","url":"./post/wpsslerror.html"},{"revision":"c93aa5bde3bdda2bea75ece0ab5a8a43","url":"./post/yunyin.html"},{"revision":"5eb29caa2f0e644efd21c887e5dba117","url":"./post/yydd.html"},{"revision":"b2dbe34c4e52418b90dd174479cc2515","url":"./post/zc.html"},{"revision":"2844d95a7deada7d7e4e7c419d5b67e9","url":"./public/newPost.json"},{"revision":"f6f7ff6d6b7b7b652cb92a25eb2cef5b","url":"./public/webpushr-sw.js"},{"revision":"7666a24c604407ba7ca254fd701be592","url":"./qn/index.html"},{"revision":"202204690c46a4e81ee57a208aad828e","url":"./search.xml"},{"revision":"555817168940d6b63d3b834345e53773","url":"./sitemap.xml"},{"revision":"8a5970bd6eb59ad712f81fe49ad88859","url":"./tags/1688/index.html"},{"revision":"2e319dc8e17a9152bb6da0f2b82ff3e5","url":"./tags/bilibili/index.html"},{"revision":"016d9af72e9b9cf05c31042392956248","url":"./tags/hexo-ran/index.html"},{"revision":"444c219d01aa2b68f9f7b9eb4482d9d6","url":"./tags/hexo/index.html"},{"revision":"c9ba03ac364672f37be371863df6d69f","url":"./tags/index.html"},{"revision":"822e4d18d57161aa3894e2d5027aa732","url":"./tags/Linux/index.html"},{"revision":"26d292aaf52ec6573d0b92541a2ff0ad","url":"./tags/markdown/index.html"},{"revision":"d5f32902f8716835ce0465fbf2407de6","url":"./tags/OKR/index.html"},{"revision":"abf484ff4be998f45ce0e2c001cadf40","url":"./tags/WordPress错误/index.html"},{"revision":"bb3d3f212866f5697235689788675416","url":"./tags/优化/index.html"},{"revision":"ba9abd7acd79e7dcd5d0b1bfd1c55690","url":"./tags/学习/index.html"},{"revision":"cdcdb59538caf8b23f25a8978538d2d1","url":"./tags/开发/index.html"},{"revision":"f6915bf4b7786011674b005c5b1c6873","url":"./tags/技巧/index.html"},{"revision":"63cf1b2e862f420b7a475c6944d37891","url":"./tags/技巧/page/2/index.html"},{"revision":"aae6c4afdf708296d64901a93fe0bcb7","url":"./tags/教程/index.html"},{"revision":"595e881d81298572ffa6541bc2e56666","url":"./tags/树莓派/index.html"},{"revision":"88069b2dfaaa04e99c73f94a0a63e019","url":"./tags/淘宝/index.html"},{"revision":"c58197800188bff399bdfa8339446ab5","url":"./tags/电商基础教程/index.html"},{"revision":"db8cd6e3aef0f013de0d8ce94e6b4d5d","url":"./tags/破解软件/index.html"},{"revision":"f036cd2c0c3070e1a73089ce1f3d3661","url":"./tags/维护/index.html"},{"revision":"4a16a2277ae32d82e946c34db97a6792","url":"./tags/网站教程/index.html"},{"revision":"24a478d6123c13278e72dacaa1de6793","url":"./tags/美化/index.html"},{"revision":"a7e02811f293f63ec38a00639603b7c8","url":"./tags/转载/index.html"},{"revision":"e66635e452fcf0ffe8794302e24d1848","url":"./tags/软件/index.html"},{"revision":"f6f7ff6d6b7b7b652cb92a25eb2cef5b","url":"./webpushr-sw.js"}],{
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