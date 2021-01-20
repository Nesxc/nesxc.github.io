const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4ecf4ca94b047f23dfe7d8f921f963e7","url":"./404.html"},{"revision":"2af95156e33d8c8c6c7b76415121c584","url":"./about/index.html"},{"revision":"62f7b84419420759c61c7f3818b3f77e","url":"./aboutsite/index.html"},{"revision":"ab25d20897657df1646a8d1a2b454154","url":"./archives/2020/02/index.html"},{"revision":"25c933b3c734cebcdb8182cb81381f4e","url":"./archives/2020/03/index.html"},{"revision":"55d14dfc91fd15d651a4b967800e8b8e","url":"./archives/2020/04/index.html"},{"revision":"b12654096731b65960633e0a60a90a8f","url":"./archives/2020/06/index.html"},{"revision":"2749d57a5f4c96f9ae74518c453303fd","url":"./archives/2020/07/index.html"},{"revision":"2969c27902b354a714fc9ebc18469afe","url":"./archives/2020/09/index.html"},{"revision":"d593b1f927e6755546267abb0eaae4b1","url":"./archives/2020/10/index.html"},{"revision":"590830b0d068861d8eb0a39ed3b78069","url":"./archives/2020/11/index.html"},{"revision":"98c276b0e582050b4435b21b88cdeec4","url":"./archives/2020/12/index.html"},{"revision":"81cecb5813405d8099b22e8ef9c11c86","url":"./archives/2020/index.html"},{"revision":"cbd8874f3ae8bf75185e8d69166a806a","url":"./archives/2020/page/2/index.html"},{"revision":"c2e27d2a677e98826458f874161e25f6","url":"./archives/2020/page/3/index.html"},{"revision":"d6f1f9f33b6caba50cd626efea6abba6","url":"./archives/2021/01/index.html"},{"revision":"e40b49ca3136abbe2a0a1a9c389d92c9","url":"./archives/2021/01/page/2/index.html"},{"revision":"ed477214b1e707180e267ae7fed0508f","url":"./archives/2021/index.html"},{"revision":"346c0d307d869a7068846b619cf5ea20","url":"./archives/2021/page/2/index.html"},{"revision":"b4e683e76fc2fdebfaa601bb8b9d1a4c","url":"./archives/index.html"},{"revision":"c93b9e6f3b77355718380b45c254a96e","url":"./archives/page/2/index.html"},{"revision":"c86ed17d3ef46e6b47ccb7df658ec0a1","url":"./archives/page/3/index.html"},{"revision":"f94315f62477344c1180510d874ca5f2","url":"./archives/page/4/index.html"},{"revision":"bf40bad8615637cb01248691d2fd0953","url":"./atom.xml"},{"revision":"99c28b529386d1c3626e64e505bd79dc","url":"./baidusitemap.xml"},{"revision":"1f36d99ea553ed4d25e6ae57857a0760","url":"./bing.json"},{"revision":"056b58498967c05fc51d228fcffa1300","url":"./browser.html"},{"revision":"78a06523f21cdb399bccd35bafb6c1ee","url":"./categories/hexo/index.html"},{"revision":"91b48b13eebfb059df70161df3d89118","url":"./categories/index.html"},{"revision":"057ce7547599e307d1ca54b54181bad6","url":"./categories/markdown/index.html"},{"revision":"8f1003f057bbb37503d759368f917ee6","url":"./categories/教程/index.html"},{"revision":"e495c3128ec01db02c2e94bede85495c","url":"./categories/日志/index.html"},{"revision":"fe17dd09e31c18374b380137f68c38cc","url":"./categories/电商/index.html"},{"revision":"5d0d6df06056eae603759fdc4d7f2cca","url":"./categories/电商/page/2/index.html"},{"revision":"a217245d908670d28581594f5c513638","url":"./categories/视频/index.html"},{"revision":"9b01a7b04d465be0dad98e58acf54c28","url":"./categories/站点/index.html"},{"revision":"de2357cb524e761b248221c94a519ef2","url":"./categories/软件/index.html"},{"revision":"0fdd0d96232a9bfd9fcf2ee95617c657","url":"./css/commentsbar.css"},{"revision":"90fd3456fd864251ce8cd4e71cc23030","url":"./css/cover.css"},{"revision":"f1f3e9effa01a29c456eae5eee8e549f","url":"./css/index.css"},{"revision":"16bd6515f1e52b8ad0db3dbc743d8504","url":"./css/mobile.css"},{"revision":"4dfbb9a266637c71a92fe7daefdecaf6","url":"./css/nesxc-css.css"},{"revision":"bff0ca156e0cf0f90dc6ceb59af5debd","url":"./css/sty.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"b6691806b7ef21da2b03f3365cd33128","url":"./disclaimer/index.html"},{"revision":"0c436f3d1d4ee9b27b122597a3fbc906","url":"./img/pwa/browserconfig.xml"},{"revision":"0fe65e40f111ec67a5dd55c91411d9bd","url":"./img/pwa/manifest.json"},{"revision":"b22d62d4ff670eb3bf3d53a06e624c36","url":"./img/pwa/README.html"},{"revision":"dfdbe4ac4d43fa6c3ed966857e82b170","url":"./index.html"},{"revision":"08c161531ac32a125532bab01c44b50e","url":"./js/browser.js"},{"revision":"978e39748eab8606297a78af8410b19f","url":"./js/git.js"},{"revision":"47d2857f63201aa803c4370a53ab4a6c","url":"./js/hm.js"},{"revision":"bff8227d7135fd3e8c5112c005dcefc1","url":"./js/main.js"},{"revision":"bb88a15771f3e477c3e247640fe81c0f","url":"./js/s-nesxc.js"},{"revision":"e6a9c3f8fa43a7d3421169ea96eef44e","url":"./js/search/algolia.js"},{"revision":"86e7fcbc5aa273e6c3d2c94b0054809b","url":"./js/search/local-search.js"},{"revision":"b3938f358149bc8e5efb88252c2dc0f3","url":"./js/snow.js"},{"revision":"298a8a8354605d9316432d40aafe1407","url":"./js/sw-server.min.js"},{"revision":"8417ce22af4aa44bf709e7cfe44b620e","url":"./js/swiper_init.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"5720a78dca20fab16f21914ae3ac0757","url":"./js/utils.js"},{"revision":"417ab7b846cf10ff5a94dbafc052bb01","url":"./js/wow_init.js"},{"revision":"9e4e25ed92640f0a07820c097294fec0","url":"./link/index.html"},{"revision":"ab606b99de036bcc414c5d939d2c2b32","url":"./live2d-widget/autoload.js"},{"revision":"2596a8630c0801002b3dff127b50518b","url":"./live2d-widget/demo/demo.html"},{"revision":"814084edfca521aea7c069da8e0698ad","url":"./live2d-widget/demo/login.html"},{"revision":"ee7efff8ff5d1d4bd4a0ff99affd3ec7","url":"./live2d-widget/live2d.min.js"},{"revision":"2c2ab9dee580ea1b79ab8413279e6312","url":"./live2d-widget/README.html"},{"revision":"e01c75f70a9465389471f638b1356bf8","url":"./live2d-widget/waifu-tips.js"},{"revision":"8dd6573863792f6f2c2e57057d21ef96","url":"./live2d-widget/waifu-tips.json"},{"revision":"c0b987bdddfa732f8505a8d139bdb69b","url":"./live2d-widget/waifu.css"},{"revision":"ca08ea3e0818fe6c2b6c4e58de69fa7d","url":"./manifest.json"},{"revision":"2c32ae2079147703d71aed329f3bc142","url":"./messageboard/index.html"},{"revision":"1162148136eb2ed7561dcef310d77716","url":"./newPost.json"},{"revision":"8765d1e0c902d4b3e3f5a364c4cde4b8","url":"./page/2/index.html"},{"revision":"dc151de6a4af3e1fd1e054fe14338564","url":"./page/3/index.html"},{"revision":"5bce723ff08be668b487e7a96497c5ed","url":"./page/4/index.html"},{"revision":"8dfdf49d1c47dceef906e09baba84b94","url":"./post/12ms.html"},{"revision":"81e4c1d1b7f99d1ede7243187a2aa001","url":"./post/1688hydzfa.html"},{"revision":"a29789c9ee9a69a19ae501a818b42004","url":"./post/1688yunying.html"},{"revision":"b7fb88de4b42c1a7cc7311dde7e1f814","url":"./post/2021welcome.html"},{"revision":"f54452fce645576438ce10e549371d74","url":"./post/20minmarkdown.html"},{"revision":"fd11cdd14ee2c6f5d58b87d853c5c8bd","url":"./post/30linuxcd.html"},{"revision":"17c95bea5839fd0a805621dcbdba524f","url":"./post/dsyyzsfx-1.html"},{"revision":"0121d2b724e34e21491a1e51d40d10d6","url":"./post/dsyyzsfx-2.html"},{"revision":"51c14d8d812fa519427c9cf5a014f1c0","url":"./post/errorpush.html"},{"revision":"213b517ae3e5dac33312903ba77121e3","url":"./post/gitalk.html"},{"revision":"120651fd4249d1b263cba0056f5ff8f4","url":"./post/gridea.html"},{"revision":"90b5cb17a40589b98146b49bb6e7758f","url":"./post/hexo-ran.html"},{"revision":"c0a2c7761036b7be423a169783e4a7a5","url":"./post/hexo.html"},{"revision":"96724e191c6044099a399b0dd131a55c","url":"./post/hexogithub.html"},{"revision":"9173fe15ee53752170495913fafd1635","url":"./post/hexohtml.html"},{"revision":"2c11fd262eaea28dbeb88303001d0e43","url":"./post/kfhf.html"},{"revision":"5371f28923b22a07ab1cec796a09ed1d","url":"./post/khfx.html"},{"revision":"7fe47df5fae20b1569cf0cfa356e6d6b","url":"./post/macosmc.html"},{"revision":"b2c0e1e5caf3774e34d1f9ee6e6ef804","url":"./post/noie.html"},{"revision":"49ad290ad19ee3fc1beadbdc2ec6da0a","url":"./post/OKR.html"},{"revision":"0e0f034f5a851169e2cc7bcf3e5e597a","url":"./post/pzsoft.html"},{"revision":"6cf123e2a4fe8234769cb969a830d35e","url":"./post/seojj.html"},{"revision":"93569f6c38d3967d58f16fa8c333a9fa","url":"./post/smpbtb.html"},{"revision":"755114667f2489c0c9f2eb0eb46ea93a","url":"./post/smpfm.html"},{"revision":"751ade8f9564bcfc55c6fa93242d2e22","url":"./post/smpkj.html"},{"revision":"6079b069ad161e6db2a80a829c968446","url":"./post/smpOpenCV.html"},{"revision":"b2ba6e770ef2911a686419d7b7b88f23","url":"./post/smpset.html"},{"revision":"7d36a2d17f94ca05c70c7e67a9e32679","url":"./post/taobao11.html"},{"revision":"7b5226e3b2261568f36d23106c397006","url":"./post/taobaoyunying.html"},{"revision":"620add790331273f78e0983368b76af6","url":"./post/taobaozhibo.html"},{"revision":"bb28c4885a73b5364ef591fceaabeef5","url":"./post/Typora.html"},{"revision":"d2d16ce0f74e11134ad1127851d25fa9","url":"./post/virtualhardwareshack.html"},{"revision":"63c87ad9bd9fa983efbfef157b4049b2","url":"./post/websitefx.html"},{"revision":"78e984478dc12e4b5f180d66a8d23647","url":"./post/wpnoadmin.html"},{"revision":"fddb958778459dbb8f45b7201b0e05fb","url":"./post/wpsslerror.html"},{"revision":"c93aa5bde3bdda2bea75ece0ab5a8a43","url":"./post/yunyin.html"},{"revision":"5eb29caa2f0e644efd21c887e5dba117","url":"./post/yydd.html"},{"revision":"b2dbe34c4e52418b90dd174479cc2515","url":"./post/zc.html"},{"revision":"2844d95a7deada7d7e4e7c419d5b67e9","url":"./public/newPost.json"},{"revision":"f6f7ff6d6b7b7b652cb92a25eb2cef5b","url":"./public/webpushr-sw.js"},{"revision":"7666a24c604407ba7ca254fd701be592","url":"./qn/index.html"},{"revision":"1980c41d1bb0e63e84ff834a63783a95","url":"./search.xml"},{"revision":"bf71200a4830d47f2e8f32fcfa70d7a5","url":"./sitemap.xml"},{"revision":"84d7713ebe332376fb4cd096239e6ec6","url":"./tags/1688/index.html"},{"revision":"c9eafab05dd7c08f6027e9ba1bf53d38","url":"./tags/bilibili/index.html"},{"revision":"72330252bf35813d85300dd06c7ec01b","url":"./tags/hexo-ran/index.html"},{"revision":"eff2057a4d31c9a95f763605d665601a","url":"./tags/hexo/index.html"},{"revision":"fb40418c1c056d064631a537aa558fa6","url":"./tags/index.html"},{"revision":"436bf36eb1272e7e6136263b7ac90361","url":"./tags/Linux/index.html"},{"revision":"bbb12fca680f7daae17c3f177c853cd7","url":"./tags/markdown/index.html"},{"revision":"daee0096c3a379eaae5b601fc40a0844","url":"./tags/OKR/index.html"},{"revision":"1d450aedc57838625904b1cb4f29f512","url":"./tags/WordPress错误/index.html"},{"revision":"764a0eae1353031c255be63ecee7fcab","url":"./tags/优化/index.html"},{"revision":"1858ce47aa7e0d85df1d55119c8b6439","url":"./tags/学习/index.html"},{"revision":"aaf1d72de2d81115cc4c62b6134987fb","url":"./tags/开发/index.html"},{"revision":"9c03628584f17bc81e0c83d18264b008","url":"./tags/技巧/index.html"},{"revision":"77c592bac276135ccc985f43df973e96","url":"./tags/技巧/page/2/index.html"},{"revision":"51aaafe693b82501f49e2894ba4392dc","url":"./tags/教程/index.html"},{"revision":"382bf900554a754bd7554f473dbff581","url":"./tags/树莓派/index.html"},{"revision":"c6e25c0a4ac9bd91496356094dc431fc","url":"./tags/淘宝/index.html"},{"revision":"5e5da3ae1d79f369fd0253a7b215e3cb","url":"./tags/电商基础教程/index.html"},{"revision":"a49bc9e37f5ab697c6a37a7bcee628c8","url":"./tags/破解软件/index.html"},{"revision":"375d46fe78f86031721634ee227bbe37","url":"./tags/维护/index.html"},{"revision":"f808d9e029535f8172c9e3fa90ed1e2c","url":"./tags/网站教程/index.html"},{"revision":"2ac9c985a13784e7de5aa7ddc9b0a919","url":"./tags/美化/index.html"},{"revision":"1ca9211e240ea1a4857ab40f10037ffa","url":"./tags/转载/index.html"},{"revision":"a6ffac3a6a0d608d5d77f72f4fdbbfed","url":"./tags/软件/index.html"},{"revision":"f6f7ff6d6b7b7b652cb92a25eb2cef5b","url":"./webpushr-sw.js"}],{
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