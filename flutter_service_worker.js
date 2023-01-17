'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1bd341722e3b32e9ed402a114f97b3bc",
".git/config": "a10c65587086f94198f057931c39e169",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0edebe02e26957d8e3cf65d9ba08b023",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9d3f31d0113b1d05210d158c72721f63",
".git/logs/refs/heads/main": "ba4ac3d1ecf77dbbe4ed02ab15746cb4",
".git/logs/refs/remotes/origin/main": "2294f44e11203eecc6cc52c8a84cfa17",
".git/objects/03/3a73d319a35247291e34938ec0868bf2124eca": "86ba73fcd4fc5cefab452704750c2afa",
".git/objects/06/3d3b956fda4e5d388a1f0f0edbd265af836648": "79eeaf84ca4ffc2b6c9f9f7cc05d4dc5",
".git/objects/18/3cbb9800ee5b0159f07ce23212c7fb3cd20d8e": "abc54540740205ffe7255feef82ae138",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/c41f81bdde91a27ea2e69c813217553d59ac75": "b46eab58de7743175548df56ee86b1f6",
".git/objects/1c/ff87854df02b8cee84c53f465d8bbcb08fe123": "87862add15e79a72efa0f8c12a970cf9",
".git/objects/1d/6538b579fd99cfdad2188e4286ef1d2c1ef514": "12edfdd4141308db4310a1cfbe96e51f",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/5ef6cce20148ce6bd9832b7f7a322eec0f5032": "96b4c497f557e89b611ae16b38eb3f4c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/d37f67935b1069d2f651b3517430fd70b04c4d": "cdccc2dec9d27508be5a9a02514e637b",
".git/objects/56/272dc19e7629fc82578df725be665c7efe9fa0": "b51b68b6020357d09692ed56904ac696",
".git/objects/69/abc78f50dec6ef5f10d0772409668fde53fd9d": "774db076ad296be7d131d9df9fc07cd4",
".git/objects/72/4fa89926cbb8e19bd8fcf3543a8aba1207c8db": "b0d20fa2583bba5711486d02a6874379",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/805933a04da0e4ad4bdd4eb5b4eabe49a22c35": "2e14c58432994586b0185c1db5d37d78",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/757a1d1d00d52cf420b1046c3e179a202295fd": "fb343574f9b226dde4fe8ad4c32f06ad",
".git/objects/95/0602a045e645c8122e5bd0d956924cc02d3afb": "0eccfccb41da3602ca74016705c6f994",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/1a24e2d6014e3c50650f3dfab5175a04c86be3": "787575138f6fa0420f98189c02118660",
".git/objects/af/0e25017cf5a0df6ab59cc9f6295b20c72532b6": "bda98edd2526040790b02b0cc97c3eb5",
".git/objects/b0/c49cae0de035d9c7b43bedd4d6f400a7f57598": "a2790fc10c23bc99360e05f6ece268c0",
".git/objects/b2/4e5b71ad885415479c50246ef371ef20eb7485": "c35d6a18035d3c2025256e819062844e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/aa0ad2790cf28a81df96fd56ef5d6b99e79f1e": "bc5d781fb45f99c95f46ae1851f61cb2",
".git/objects/b9/d10b0c8a4718c9876c5ddcf919b4a8e20d4f4f": "98f60e5d539e01aa5230071982b5093d",
".git/objects/bb/48bee01772df8271d1e9def5b0a13424e8fae9": "461b94d746ab8c696938f357619df5e5",
".git/objects/bd/df2360d8199f49d6af2ebda0a61473e2f74d77": "ff4b9ab4866bdee5ac6a081916c28f61",
".git/objects/be/51421b246da94d6c152cdb5c86e90986247a38": "17aed255f1748e62e430e90c2e81c778",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/ca/feaea64eef8d023d7e3ec3959e6222f6824879": "9cb48322f90b7ef11e73d3ee6f2358ed",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/a2dedc3bc91300ac3a78795539d343ed7d4959": "36c9a6be64f6f31ed20ebcdbcc6a1544",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/8d83ba61327a749ae405a8f6922bc849b3ef4b": "65431014da41bd841331520951c5827c",
".git/objects/e4/2e462fcd69f406ea6e301d60202476a0ab503f": "439d5a10742d86c5db2360b099974419",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/ec624b867bf4cd6ff23bf233b4f6d97d1dbf16": "058e2a00d782f3ae4fa8bc819081cdc5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/dd5944a00209bf58e6a594c9722f3281c34550": "57a9092723758cae14edb410cddca0da",
".git/objects/fb/4d2b21c41c49140bf4f1f6ba707cdf82a684c1": "d1b9e09c89dd30709391359b835ab4b0",
".git/refs/heads/main": "6fb8bb5f8d90f63682a117d83452123c",
".git/refs/remotes/origin/main": "6fb8bb5f8d90f63682a117d83452123c",
"assets/AssetManifest.json": "125417f3ff751b96233200a3fa5d3018",
"assets/assets/add.json": "554cffd4c6ea6dd2a3ca46e161623c83",
"assets/assets/empty.json": "68bf1fbc677baa5c37ff3259332fb8af",
"assets/assets/logo.png": "4ebf9aeb6748cff00730bbef005f8a49",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "09961c5b2c7e2b49bcd4a2ff7faa035b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/lottie_flutter/assets/checked_done_.json": "05e1fb9152e598ac312807458f59536c",
"assets/packages/lottie_flutter/assets/emoji_shock.json": "20f19001b9e67ba054417ee6d485606c",
"assets/packages/lottie_flutter/assets/empty_box.json": "6885ee14cc038225eec3fb6ccbd0a65e",
"assets/packages/lottie_flutter/assets/favourite_app_icon.json": "ccb04721931dd1cf900ed574d3295d54",
"assets/packages/lottie_flutter/assets/hamburger_arrow.json": "9def84d12cf68f58ae298d829e769925",
"assets/packages/lottie_flutter/assets/happy_gift.json": "5291bbc15a1570ba508b2e295c5f2c55",
"assets/packages/lottie_flutter/assets/Indicators2.json": "4f249bbfb006933b4e7925e39b948911",
"assets/packages/lottie_flutter/assets/motorcycle.json": "83e43c2d2ea41af6ed030dacee8c10f4",
"assets/packages/lottie_flutter/assets/muzli.json": "1d82beccb985674b7383681eb2c63ddb",
"assets/packages/lottie_flutter/assets/preloader.json": "1fc56294faa15fea6b84a58d1dfe1ee5",
"assets/packages/lottie_flutter/assets/rrect.json": "b22a25462064d46038278716cd2d3f91",
"assets/packages/lottie_flutter/assets/walkthrough.json": "7c6fff77dc2cb03fb5df84e3b77a1899",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a77956e1ab317315ae640978c8874a2b",
"/": "a77956e1ab317315ae640978c8874a2b",
"main.dart.js": "6cd14ed344be6e29e169875ac8feb9fe",
"manifest.json": "cbfdf2a75d7c508b65480acd66bafcac",
"version.json": "fa2390ebe438b4fd4e7f68912a45bc8c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
