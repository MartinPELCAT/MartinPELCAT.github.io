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
  self.define = (s, i, r) => {
    n[s] ||
      (n[s] = Promise.resolve().then(() => {
        let n = {};
        const a = { uri: location.origin + s.slice(1) };
        return Promise.all(
          i.map((s) => {
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
          const s = r(...e);
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
          url: "/_next/static/OmAT97MOvxYWl9YdwA8op/_buildManifest.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url: "/_next/static/OmAT97MOvxYWl9YdwA8op/_ssgManifest.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url: "/_next/static/chunks/15.2c3e422e88f018fba1d3.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url: "/_next/static/chunks/4.2f362fc2e396bcb6389b.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url:
            "/_next/static/chunks/4e8d32e2b9bc09636fe78292560d1ab29e5809bf.c4aea8d373573d75cdb1.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url: "/_next/static/chunks/5.e3841f52a77d252f3856.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url:
            "/_next/static/chunks/7118ad5e188e7fac0bdbe233a6efc2a72fe17379.4b8dac7850f1cad8a38d.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url: "/_next/static/chunks/framework.bb026090cb9d8c12d9a0.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url: "/_next/static/chunks/main-151c5e9f74f2ee4e985d.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url: "/_next/static/chunks/pages/_app-fd59342db4511768e142.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url: "/_next/static/chunks/pages/_error-6f43d9faff1170dae9ec.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url: "/_next/static/chunks/pages/contact-60745e4f493cb6c14417.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url: "/_next/static/chunks/pages/diplomas-126d50428466aa7bbed1.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url: "/_next/static/chunks/pages/experiences-ffee7e925b068144e932.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url: "/_next/static/chunks/pages/index-563e7754290502ac1d3b.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url: "/_next/static/chunks/pages/skills-e44369fe573d7bf55df6.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url: "/_next/static/chunks/polyfills-4f4acd756cef4fe6da1b.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url: "/_next/static/chunks/webpack-d7aba54081b65426ee3e.js",
          revision: "OmAT97MOvxYWl9YdwA8op",
        },
        {
          url: "/_next/static/css/9d4daf2c0847c1abf2bb.css",
          revision: "OmAT97MOvxYWl9YdwA8op",
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
