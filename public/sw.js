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
  self.define = (s, i, a) => {
    n[s] ||
      (n[s] = Promise.resolve().then(() => {
        let n = {};
        const c = { uri: location.origin + s.slice(1) };
        return Promise.all(
          i.map((s) => {
            switch (s) {
              case "exports":
                return n;
              case "module":
                return c;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = a(...e);
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
          url: "/_next/static/chunks/18.cae900bcf95f6fe03d34.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url: "/_next/static/chunks/4.d70e6d2e0a9e87585f25.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url: "/_next/static/chunks/6.2d810a0779dffc189d35.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url: "/_next/static/chunks/7.7729363912f91dd9afad.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url:
            "/_next/static/chunks/a621c6d6b0e0f3d9c286172de904f218404abe89.7cb2e5c05579d69987a6.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url:
            "/_next/static/chunks/b3fde4e130b99ca7088fe256fb8c354e6136b697.a9c267cac26afd58f8d0.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url:
            "/_next/static/chunks/ee9974e4832feb30b1f7a035081edf935c5b1feb.c4aea8d373573d75cdb1.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url: "/_next/static/chunks/framework.f9803f2774bc67c45cde.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url: "/_next/static/chunks/main-030d69f610e11ddcda55.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url: "/_next/static/chunks/pages/_app-cf71baf553009fb707a6.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url: "/_next/static/chunks/pages/_error-ea4b755d6e3bc2471140.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url: "/_next/static/chunks/pages/contact-348646bcddf26a4703ab.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url: "/_next/static/chunks/pages/diplomas-1ad29597b42675af37d7.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url:
            "/_next/static/chunks/pages/experience/%5Bid%5D-2493d0c3ab10dcdf451f.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url: "/_next/static/chunks/pages/experiences-d0e38115de99afbed616.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url: "/_next/static/chunks/pages/index-6b3d668ab3a1f2820c87.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url: "/_next/static/chunks/pages/skills-13f8aaa6569c75fc30d0.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url: "/_next/static/chunks/polyfills-79441a336eb07a143a5d.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url: "/_next/static/chunks/webpack-467ec5a063acce7ac9cd.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url: "/_next/static/css/751d82da88e0aac58a17.css",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url: "/_next/static/oHVSBkDnHWQwfHCXY-DJU/_buildManifest.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
        },
        {
          url: "/_next/static/oHVSBkDnHWQwfHCXY-DJU/_ssgManifest.js",
          revision: "oHVSBkDnHWQwfHCXY-DJU",
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
        {
          url: "/images/CD74.png",
          revision: "7afde863f8717d407bc7ff9b8dc4e3b6",
        },
        {
          url: "/images/overkiz.png",
          revision: "9b685a4f4ab8c05a2c8deb605855f13a",
        },
        {
          url: "/images/sopra.png",
          revision: "01fec4f1ab53edc612e24978573482a8",
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
