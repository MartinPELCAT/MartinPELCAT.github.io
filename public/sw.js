if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let i = Promise.resolve();
      return (
        s[e] ||
          (i = new Promise(async (i) => {
            if ("document" in self) {
              const s = document.createElement("script");
              (s.src = e), document.head.appendChild(s), (s.onload = i);
            } else importScripts(e), i();
          })),
        i.then(() => {
          if (!s[e]) throw new Error(`Module ${e} didn’t register its module`);
          return s[e];
        })
      );
    },
    i = (i, s) => {
      Promise.all(i.map(e)).then((e) => s(1 === e.length ? e[0] : e));
    },
    s = { require: Promise.resolve(i) };
  self.define = (i, n, a) => {
    s[i] ||
      (s[i] = Promise.resolve().then(() => {
        let s = {};
        const t = { uri: location.origin + i.slice(1) };
        return Promise.all(
          n.map((i) => {
            switch (i) {
              case "exports":
                return s;
              case "module":
                return t;
              default:
                return e(i);
            }
          })
        ).then((e) => {
          const i = a(...e);
          return s.default || (s.default = i), s;
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
          url: "/_next/static/Pqtmehiz3pkMVEW3Lo1Vi/_buildManifest.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url: "/_next/static/Pqtmehiz3pkMVEW3Lo1Vi/_ssgManifest.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url: "/_next/static/chunks/18.5dd5c495d9b4afafd2fe.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url: "/_next/static/chunks/4.53f9c80a7ec04067e321.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url: "/_next/static/chunks/6.46dd4e6be3600a3cabcc.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url: "/_next/static/chunks/7.7729363912f91dd9afad.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url:
            "/_next/static/chunks/a621c6d6b0e0f3d9c286172de904f218404abe89.c9025eb4fa00bead3af6.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url:
            "/_next/static/chunks/b3fde4e130b99ca7088fe256fb8c354e6136b697.a9c267cac26afd58f8d0.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url:
            "/_next/static/chunks/ee9974e4832feb30b1f7a035081edf935c5b1feb.b78c70d5dc58f07d7ffe.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url: "/_next/static/chunks/framework.f9803f2774bc67c45cde.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url: "/_next/static/chunks/main-030d69f610e11ddcda55.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url: "/_next/static/chunks/pages/_app-b35e1aefcee41aae0eb1.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url: "/_next/static/chunks/pages/_error-ea4b755d6e3bc2471140.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url: "/_next/static/chunks/pages/contact-348646bcddf26a4703ab.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url: "/_next/static/chunks/pages/diplomas-e7b6a0a7a0a1f30ab63c.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url:
            "/_next/static/chunks/pages/experience/%5Bid%5D-2493d0c3ab10dcdf451f.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url: "/_next/static/chunks/pages/experiences-fc0837b11c02a561790d.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url: "/_next/static/chunks/pages/index-6b3d668ab3a1f2820c87.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url: "/_next/static/chunks/pages/skills-13f8aaa6569c75fc30d0.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url: "/_next/static/chunks/polyfills-79441a336eb07a143a5d.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url: "/_next/static/chunks/webpack-321cc46478932614d577.js",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        {
          url: "/_next/static/css/fdb837b63ae594983413.css",
          revision: "Pqtmehiz3pkMVEW3Lo1Vi",
        },
        { url: "/favicon.ico", revision: "f1231392d9b0fb70407c11b64e14f09f" },
        {
          url: "/i18n/en/date.json",
          revision: "d5c774627968a19f3a11912739e2bfcb",
        },
        {
          url: "/i18n/en/experience.json",
          revision: "8120de8d9c9eb47c56b6a0327ae6ae47",
        },
        {
          url: "/i18n/en/index.json",
          revision: "676cf343827a384bf6d64af06f160479",
        },
        {
          url: "/i18n/fr/date.json",
          revision: "88160efbe27c5b023d123ce80a2bf8f2",
        },
        {
          url: "/i18n/fr/experience.json",
          revision: "642427bec9e664db6f45964f19394dd5",
        },
        {
          url: "/i18n/fr/index.json",
          revision: "93c6f1459d24f418e8cb7de9ba3adf3b",
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
        {
          url: "/images/CD74.png",
          revision: "7afde863f8717d407bc7ff9b8dc4e3b6",
        },
        {
          url: "/images/logotetras.png",
          revision: "815ca9fff6144ff04b62cba946a05912",
        },
        {
          url: "/images/overkiz.png",
          revision: "9b685a4f4ab8c05a2c8deb605855f13a",
        },
        {
          url: "/images/sopra.png",
          revision: "01fec4f1ab53edc612e24978573482a8",
        },
        {
          url: "/images/usmb-logo.png",
          revision: "ff5aa4a86cd23db3d9fb58f919e78385",
        },
        {
          url: "/images/ynov-logo.png",
          revision: "b925d8bcf0996c903247f2f4d97b5618",
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
