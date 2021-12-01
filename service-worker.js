/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "4718e9c92cac7a3c366e653cae9028b1"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.956d9096.css",
    "revision": "d5e6da4a1b9127c1c28c466ca2fe86fa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e50a5206.js",
    "revision": "6f27c3532be60e76bca8e5465568abd1"
  },
  {
    "url": "assets/js/11.9e2b9dd3.js",
    "revision": "5a22a1cca167c9fbcdea0c8d96dd5fbf"
  },
  {
    "url": "assets/js/12.649e8ffe.js",
    "revision": "ae9ed2f6e474bfdb9e7097f00a62b0d8"
  },
  {
    "url": "assets/js/13.a2ef7a68.js",
    "revision": "365b23ebc6911529167d61c8edda2f6b"
  },
  {
    "url": "assets/js/14.5f4d8f6c.js",
    "revision": "5fb0f1b4aff3efbe080d5d16044c8418"
  },
  {
    "url": "assets/js/15.25e86172.js",
    "revision": "1bb970b6bda1a5ee9c1153d7cb3fc961"
  },
  {
    "url": "assets/js/16.21e07ba7.js",
    "revision": "e4e5fbd08961a9201ee29bd243d6b842"
  },
  {
    "url": "assets/js/17.7bd6360b.js",
    "revision": "33d927d5a91e1ee1fac8276cca58cecc"
  },
  {
    "url": "assets/js/18.ce896916.js",
    "revision": "69bb7a14c2f47131da308164eec47508"
  },
  {
    "url": "assets/js/19.00ab1af0.js",
    "revision": "da7498daf4f42718247dfde73c8d32d7"
  },
  {
    "url": "assets/js/2.3e67f844.js",
    "revision": "196a36d44058665bb53200a35170526f"
  },
  {
    "url": "assets/js/20.6950dbdd.js",
    "revision": "b8e966d51b7a9b6d0d6cc3034cf697e4"
  },
  {
    "url": "assets/js/21.a8f43ee2.js",
    "revision": "6332560e05b82580763de1d7ca8362de"
  },
  {
    "url": "assets/js/22.322715b2.js",
    "revision": "289b9a82dbe18021c9a001f8f1b5f7c6"
  },
  {
    "url": "assets/js/23.655b243b.js",
    "revision": "ad0b7838e0ec0548d24c9c3eb2032dca"
  },
  {
    "url": "assets/js/24.cb303621.js",
    "revision": "e4694b627594881524af7817a9ba2895"
  },
  {
    "url": "assets/js/25.4030eae2.js",
    "revision": "48b41c07258313d9d2b8c7d17b6d23e0"
  },
  {
    "url": "assets/js/26.a1ce5b76.js",
    "revision": "9e7c5a361a41098fb47a8e5465dfeee8"
  },
  {
    "url": "assets/js/3.3f1297c0.js",
    "revision": "b55efa3cb25f7fec33bb1af7ec580bf6"
  },
  {
    "url": "assets/js/4.1edd8bc8.js",
    "revision": "42c744e5b7528d02d3d3b9b8777aea4f"
  },
  {
    "url": "assets/js/5.092f70bc.js",
    "revision": "e7110cc0224667168de1c76788d2de49"
  },
  {
    "url": "assets/js/6.42db2f93.js",
    "revision": "5e5467b3af90ec210553eab11b8fc7bd"
  },
  {
    "url": "assets/js/7.dac019ed.js",
    "revision": "0363aadd197cb9a2db71b6f88d55c1c8"
  },
  {
    "url": "assets/js/8.de49d965.js",
    "revision": "aa1b34d336ed37fa024324e5b24bf90d"
  },
  {
    "url": "assets/js/9.60c9ff1e.js",
    "revision": "3f8ddb5f8354d3e17434d92a1cfd928a"
  },
  {
    "url": "assets/js/app.e1307dce.js",
    "revision": "77d786240ddd1c83497974a9ddf6dab1"
  },
  {
    "url": "conclusion/index.html",
    "revision": "4e63fbc17450ae33dd05e35c76282da2"
  },
  {
    "url": "design/index.html",
    "revision": "bd1eb5c824b811c9d35de7c939a6944d"
  },
  {
    "url": "index.html",
    "revision": "90ec1aa8b49a59538c9c9516076a1b8a"
  },
  {
    "url": "intro/index.html",
    "revision": "a19d8ef4ce76597d7f355c95c89845a1"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "acbfd2e69153fd9f5946b717c20598b8"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "8251bbf579cdae2f8b4e1e77d36848a0"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "045b3a2a480117304dbb753659b19d1b"
  },
  {
    "url": "software/index.html",
    "revision": "7881d22be5cea91e098935dcc7d26620"
  },
  {
    "url": "test/index.html",
    "revision": "c603b87a8c26fef4be0b0d42c663c708"
  },
  {
    "url": "use cases/index.html",
    "revision": "30b2bce7b25ad9d9b8c0508f43002a44"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
