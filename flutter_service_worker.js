'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "40c3a4a96f5b7773e9619d1386fccf6d",
"version.json": "08b02bf926f7e2b0b8a8b3034f4769c6",
"splash/img/light-2x.png": "4e276d35057219971abc22bf31d2dcb7",
"splash/img/dark-4x.png": "df09c8b86981be9139caf1b1733bc538",
"splash/img/light-3x.png": "bbee4cd2e13b3e5f4468591be0fc28da",
"splash/img/dark-3x.png": "bbee4cd2e13b3e5f4468591be0fc28da",
"splash/img/light-4x.png": "df09c8b86981be9139caf1b1733bc538",
"splash/img/dark-2x.png": "4e276d35057219971abc22bf31d2dcb7",
"splash/img/dark-1x.png": "09b6d096fcf7610bf9040c38b5792986",
"splash/img/light-1x.png": "09b6d096fcf7610bf9040c38b5792986",
"index.html": "c3a9e93f9275d06ad4c573e210d7a3a4",
"/": "c3a9e93f9275d06ad4c573e210d7a3a4",
"main.dart.js": "6969656afb9edd7f4cbe3c5c80295e7a",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"README.md": "44563a2cc136e4360793a6eb808f959f",
"favicon.png": "a9dcce39487c6bb4f34666e3c4a1a8e9",
"icons/Icon-192.png": "8a6a78252329d1f604a0360465120bf0",
"icons/Icon-maskable-192.png": "8a6a78252329d1f604a0360465120bf0",
"icons/Icon-maskable-512.png": "ed5ed8c616b152366c6dd59a8a72853e",
"icons/Icon-512.png": "ed5ed8c616b152366c6dd59a8a72853e",
"manifest.json": "3b8be0da867ac4e0e647daa94351440f",
".git/ORIG_HEAD": "b0a906b30c7b4c1fdd4486b6148422a3",
".git/config": "37d4056c10132546e7c62d66a0eb1e37",
".git/objects/0c/58b9407ee5364cdaab29ee846531cb6ff316ad": "2fa2db031f57683860b9aa540498ac45",
".git/objects/50/2cf81310efb5b150ac3369a664b00ab7496954": "793f382b492aeea75d10c6138b951e52",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/9e/0209178b753a43e21bba69ca44848e52cdc548": "9fc6c80a5bb67e798a774e981be58895",
".git/objects/32/7f1e9a264a3b62d844dba193bc1d3573b92085": "97ca7b079ef8eb959bb892c2387defa3",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/3c/e136d56eb84d1b1751063eff6b84abfa7d19fd": "647e69b8be8c64d534ed4ccf8f873684",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/886b6a19fa68cc4c57435eb9c5cb95d4013641": "ce888ebc3090a01f14c32b4ee54ad635",
".git/objects/67/a807789861d3ae33e47478524d07ed82434e3a": "529a09eb1fa8bc28956278253183dbe3",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/60/ff52b7e389be95b784eea1df89880164dee7d2": "6e3d45165c3321ae4e724593a81ad37e",
".git/objects/5f/2e6a85d66e22059cafffaf68fbda7e6f8cfbf3": "e96ff96a24a92e9d994acaf6f22b8a70",
".git/objects/5f/6af5eb9eeb19815168695c94299178feb896af": "18c2a02753e03cca7a87fce9e175f494",
".git/objects/a4/c60749591017fab3d17c9c9408cd091d2fb197": "e3c451989b7b23e941326f1a2f542fb6",
".git/objects/a4/22df6a1f05f07405bf9507a26619ad4b0a3edf": "c98514ccdebf6a4a7720d1d341091186",
".git/objects/d9/a38b858229cf2dd027aa56aac58bf87c821bb7": "37577009f28225f10416084f13e28f8d",
".git/objects/d9/3d81a2b20bc6cb97007ceb560fe2fab9ff650b": "81093f2c0dc0877d9b18781aa27f7ed8",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/2c9965da08f523eb3c52a1ce77672e1c0f316a": "44e98a5d4f736be7270d2fb7511e1591",
".git/objects/ad/1a46341bfa208e20d7fd65728c6e4a0daac25e": "f86cf8ed6d2e1e6950581c1d06c86136",
".git/objects/d0/0f006ec684106cb8b3485373d0b796872cc2fc": "34d21021d110e093f131ec62818fee5b",
".git/objects/d0/663477a4beec0d7bc6f2fa69888857d9ea3114": "4e31b9dd44a66fc7ffad8e2536b19ae5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f2/471a0d103ccf35c2bcf4708f8dfc3693020314": "c1165e18824fe56c19a382118ddfb35b",
".git/objects/e3/aa666daf01886d3c0bbe18bdac0880704fd789": "88c7a62132e604dbd522e527bac1cc9a",
".git/objects/ca/7a23e29d63ecfcbb78cecfa6a642c8a0d0fe7f": "952499717940aea70a76638a337b9b2a",
".git/objects/ca/27177a4e44f403fe8d8ecb8bd3143d6e38b9c8": "b67cd51683902029f4ce9547d4004974",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c1/e3b8ca38840c0f222c75315f9f86b6c04b1af5": "be489f22884f103db7f3c2ac6b6cd0c3",
".git/objects/29/8e2d611845741ab186958d1b577b8b3e9ef85f": "f14b963408167992e5b11c2490921692",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/16/8d2cf5f40d654a7a7756381f4a4d9074cc0e70": "205a9181dcf5c4f06ea9d4ab1f525975",
".git/objects/42/2d42912782e7992489cbe335231bb7b34d7c08": "00ef5af0e2e424baff84aa2ee53934f3",
".git/objects/45/5ee8011f2c2526f1fdb830b934e403a035c3ed": "15818d1442b5bd6be897f059881e4e87",
".git/objects/1f/10fe3da95c505e1b748945dbe0fce63d2cbc29": "7ce67ef4243a6530c2a008d70dcb2706",
".git/objects/73/812daa14c463d01115b8780199abbbc5201eb3": "31622beb8be38f766432bb7b3e34d66d",
".git/objects/1a/3659194992ccdf7efe0d1d811b0545a2a3f89e": "a9da91ee0f37423f885f3ccfe9b7f50b",
".git/objects/17/77ddce5647c205f23a6ef1f31d610e251a6385": "aa548491b9fbf33241889b2e13066ae5",
".git/objects/8a/c0efda791714a0eb42a63ee034b2fb9a3c14be": "ecd028726d6cdde4370a44c4cf409492",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/21d584692eed4d17b46370301bfac198be8ba2": "86ec223d126c8ffc9be0298fe7616af7",
".git/objects/10/835a0f6b4af6b6d2b182a61b66207709882d98": "3ce64051f0f8dfd19587719da9541fc7",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/75/d158afb168efe78d697f924302d634ebdfa36e": "4cba6e1504acd082ee9007f50b1eb485",
".git/objects/81/589eeccd6718e4526f44cf0cec41be13d4d357": "f8ae57fc9c9479f7680feb73397c53b2",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/2a/f9ee7c18cc858e44c4dc6a8b804a9fc0051abc": "6c0a4291a194e4aca17670ae7a37108b",
".git/objects/2a/d4b249f315ed049f7fcb21b2ca8a8e32502bd3": "61e8763561b3de7c511666b382fe1410",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/020468d9379d236298740c94dc6a5e5c17af01": "60a0c42e9e2fcf36bba7babfb85fb39a",
".git/objects/5c/c64ee7a5c010e9f32e93560867db6c6b4dd35e": "e9403be320810d3a013b9e716b1f650f",
".git/objects/31/4e149002399c8594e72b07d5ae6e3c7b27d36c": "8dfd227585811c1502a314134625eb88",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/98/3276f7a879f7016654924541ab75ed738ee9af": "05bbdea656142026695dfd1886946e3c",
".git/objects/98/7934660e5f932fed697985bff3153aa4dbd693": "a62e7a5919d24b78877c1e6dfbd188dc",
".git/objects/30/f99826f369ef9970d1378a2d03ce026791905c": "4f227ee0c831e1c95c4e5d884bae6f68",
".git/objects/5e/5c9d7ba0d37b5e09815a8b2fd7749c8abb0a3e": "e88bba1f86914b8bea8b5564c70a5821",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/64/b607eba63db0b40b6c622791c8c2d8a6198acc": "26906d4f766773188618191a203c0f8f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/aaec7ee4148b24707b7f1c45a89f3a177cfa26": "d7fd213464e27431731dcd52dd5a32a5",
".git/objects/d2/c8ed9047043ffae1d377a62edd49411fa95000": "1ca0be530994b94daa246aa905355745",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/e8/d21870c832e411c6515dd9c52458ee1d327a73": "4c1118c90541eb98238956970d90bbe7",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/8a39bb7923f43e687e921a1e4920f88f25943b": "67624f3d061bdac19c765b6624e91b70",
".git/objects/83/87316ac80886c378b43f81e09793fc76904990": "de5ab7bca26d1363a51a18e51f24046c",
".git/objects/77/e18991ad24c54fcfc1f204ad5294881ee10f6b": "6f6b1f5df9ac2ad423b9b06ffda35a81",
".git/objects/77/aea5f352c1c99d2f987c47192a3b2104cbb2da": "85dd985a6ae7f96de3fc269782e1eda4",
".git/objects/84/df597f917c092e696cdae0d7fafce4a095c5bb": "2cb1c84c1a493bc66d304118b1ff1ffc",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/1d/e37dbdb94e4bb538468b8641f06ab36d2b964f": "e93b64cbeeccf5727b560a2934deebc1",
".git/objects/8b/005350ee0f871b93f863019e8cbcd0e89d3ab5": "bb4a3b8ee02aefcf1982260a7318ef2e",
".git/objects/8e/9c5053c6ef88ffc4fcefd293658801ce1e8c9a": "0daa056e70b7a3a6c7c5d30ca4ccee19",
".git/objects/8e/154cc60359652ffb48f8a7d28a91810f4ea693": "b0b67107664b28c2f4012412b333c402",
".git/objects/25/7f29ff0d9fae9d82ae86104ff4a9f629da8ac5": "084d9e8ff309f9b7cd33ababc489b8ad",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a0729e9d2ae357c412e2abc262ea43ff",
".git/logs/refs/heads/main": "65b45d8321d340f387f9b819bacfc9a8",
".git/logs/refs/remotes/origin/HEAD": "dcd61cc901e7d3c1e4f9fdd81ab46fba",
".git/logs/refs/remotes/origin/main": "6ef371d537f5ea0530f980a23b6aa9f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8f746c112997f3e5b25473cbc0e937e1",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "8f746c112997f3e5b25473cbc0e937e1",
".git/index": "307910537a30ffd0d6f1d4e36256a626",
".git/COMMIT_EDITMSG": "981a75d5ea0c6f0b6b368d6486dafee8",
".git/FETCH_HEAD": "e60bddcf2d16acdaa2feefbb61088dbd",
"assets/NOTICES": "f6674be1b7d0029a0392847bd34f174b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "1f17a36f66ad5681c38a828aab100cce",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "39eac08e90a24b8bea2174d918c0b935",
"assets/fonts/MaterialIcons-Regular.otf": "fcd3f71718d864712aabadf153965a16",
"assets/assets/sounds/text_message.mp3": "60345ba3b95e50f1b93fec8157eb5ff6",
"assets/assets/sounds/alarm001.mp3": "5866d045d7838945dcfe39670e7e0ee1",
"assets/assets/sounds/alarm003.mp3": "1d505c1b7a997f335c42cec8494a8bfe",
"assets/assets/sounds/alarm002.mp3": "8e37c28f94e3f6634be9888b092d41a1",
"assets/assets/sounds/image_message.mp3": "ee0d06710d697cf11ac3c2b904f1fce4",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
