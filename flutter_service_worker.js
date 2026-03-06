'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dabbc79e9a16ced7d0975757d618b71a",
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
"main.dart.js": "412f4102abbfbbb100f19dec20e87dd2",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"README.md": "44563a2cc136e4360793a6eb808f959f",
"favicon.png": "a9dcce39487c6bb4f34666e3c4a1a8e9",
"icons/Icon-192.png": "8a6a78252329d1f604a0360465120bf0",
"icons/Icon-maskable-192.png": "8a6a78252329d1f604a0360465120bf0",
"icons/Icon-maskable-512.png": "ed5ed8c616b152366c6dd59a8a72853e",
"icons/Icon-512.png": "ed5ed8c616b152366c6dd59a8a72853e",
"manifest.json": "3b8be0da867ac4e0e647daa94351440f",
".git/config": "37d4056c10132546e7c62d66a0eb1e37",
".git/objects/0c/58b9407ee5364cdaab29ee846531cb6ff316ad": "2fa2db031f57683860b9aa540498ac45",
".git/objects/9e/0209178b753a43e21bba69ca44848e52cdc548": "9fc6c80a5bb67e798a774e981be58895",
".git/objects/5f/6af5eb9eeb19815168695c94299178feb896af": "18c2a02753e03cca7a87fce9e175f494",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/1f/10fe3da95c505e1b748945dbe0fce63d2cbc29": "7ce67ef4243a6530c2a008d70dcb2706",
".git/objects/1a/3659194992ccdf7efe0d1d811b0545a2a3f89e": "a9da91ee0f37423f885f3ccfe9b7f50b",
".git/objects/17/77ddce5647c205f23a6ef1f31d610e251a6385": "aa548491b9fbf33241889b2e13066ae5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/21d584692eed4d17b46370301bfac198be8ba2": "86ec223d126c8ffc9be0298fe7616af7",
".git/objects/10/835a0f6b4af6b6d2b182a61b66207709882d98": "3ce64051f0f8dfd19587719da9541fc7",
".git/objects/2a/d4b249f315ed049f7fcb21b2ca8a8e32502bd3": "61e8763561b3de7c511666b382fe1410",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/020468d9379d236298740c94dc6a5e5c17af01": "60a0c42e9e2fcf36bba7babfb85fb39a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/83/87316ac80886c378b43f81e09793fc76904990": "de5ab7bca26d1363a51a18e51f24046c",
".git/objects/77/e18991ad24c54fcfc1f204ad5294881ee10f6b": "6f6b1f5df9ac2ad423b9b06ffda35a81",
".git/objects/25/7f29ff0d9fae9d82ae86104ff4a9f629da8ac5": "084d9e8ff309f9b7cd33ababc489b8ad",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a0729e9d2ae357c412e2abc262ea43ff",
".git/logs/refs/heads/main": "65b45d8321d340f387f9b819bacfc9a8",
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
".git/refs/remotes/origin/main": "8f746c112997f3e5b25473cbc0e937e1",
".git/index": "307910537a30ffd0d6f1d4e36256a626",
".git/COMMIT_EDITMSG": "981a75d5ea0c6f0b6b368d6486dafee8",
"assets/NOTICES": "6edc9094d47651b5089940f4515de646",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "1f17a36f66ad5681c38a828aab100cce",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "39eac08e90a24b8bea2174d918c0b935",
"assets/fonts/MaterialIcons-Regular.otf": "c9d879cdec58ae017f9e0a72e285c74b",
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
