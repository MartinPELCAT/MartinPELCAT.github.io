if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        n[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const n = document.createElement("script");
              (n.src = e), document.head.appendChild(n), (n.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!n[e]) throw new Error(`Module ${e} didn’t register its module`);
          return n[e];
        })
      );
    },
    s = (s, n) => {
      Promise.all(s.map(e)).then((e) => n(1 === e.length ? e[0] : e));
    },
    n = { require: Promise.resolve(s) };
  self.define = (s, t, i) => {
    n[s] ||
      (n[s] = Promise.resolve().then(() => {
        let n = {};
        const a = { uri: location.origin + s.slice(1) };
        return Promise.all(
          t.map((s) => {
            switch (s) {
              case "exports":
                return n;
              case "module":
                return a;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = i(...e);
          return n.default || (n.default = s), n;
        });
      }));
  };
}
define("./sw.js", ["./workbox-a8b10d99"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url:
            "/_next/static/chunks/0751351c6328c17f6dc531eb04740ddaad3e419f.efa6e56d0758a8af4290.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/chunks/16.68a8469329584f873fdb.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/chunks/17.cacaf0e4bcceb59630a3.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/chunks/4.399cdf50a97416857d6b.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/chunks/6.143ad19f014a9e2270b1.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url:
            "/_next/static/chunks/7118ad5e188e7fac0bdbe233a6efc2a72fe17379.4b8dac7850f1cad8a38d.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url:
            "/_next/static/chunks/c8f7fe3b0e41be846d5687592cf2018ff6e22687.7cb2e5c05579d69987a6.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/chunks/framework.4562b91c17eb0c763be9.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/chunks/main-415dafbbc2cf7065dc16.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/chunks/pages/_app-11f7bf883d3853ba45ea.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/chunks/pages/_error-1eef498f085a5521f46a.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/chunks/pages/contact-d57476da451ee5d79a2e.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/chunks/pages/diplomas-71585b7a0b5653bb2f34.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/chunks/pages/experiences-3d13591815b663ea7707.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/chunks/pages/index-01fe390d7f90610d12cc.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/chunks/pages/skills-0fb39f396a21415fa9a0.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/chunks/polyfills-28654a8145d7603786fc.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/chunks/webpack-aeb55f54622d170899e7.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/css/9c0039963e2f9362d16b.css",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/vQuYoMFIbtGlY20XU0mGV/_buildManifest.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        {
          url: "/_next/static/vQuYoMFIbtGlY20XU0mGV/_ssgManifest.js",
          revision: "vQuYoMFIbtGlY20XU0mGV",
        },
        { url: "/favicon.ico", revision: "f1231392d9b0fb70407c11b64e14f09f" },
        {
          url: "/i18n/en/date.json",
          revision: "d5c774627968a19f3a11912739e2bfcb",
        },
        {
          url: "/i18n/en/index.json",
          revision: "364caf0f456e4502063708e32b19b7d3",
        },
        {
          url: "/i18n/fr/date.json",
          revision: "88160efbe27c5b023d123ce80a2bf8f2",
        },
        {
          url: "/i18n/fr/index.json",
          revision: "9d315ae7d3fc1c92875c35382b885521",
        },
        {
          url: "/icons/icon-192x192.png",
          revision: "aac7c9bc2fd95ec86848f8577a213940",
        },
        {
          url: "/icons/icon-256x256.png",
          revision: "b0dbd2b4c98406e7b0843a44f0a3d577",
        },
        {
          url: "/icons/icon-384x384.png",
          revision: "5fe5cbe5ba0a7a6d93a202c4bb4b75c3",
        },
        {
          url: "/icons/icon-512x512.png",
          revision: "8fd32e0acc9e58390a23110925abfff4",
        },
        { url: "/manifest.json", revision: "413b6b0823e10d7aaaa771cee8328808" },
        {
          url: "/manifest.webmanifest",
          revision: "0d9dbbcd6c5c2ec8fa26dbf3b6e38344",
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    );
});
