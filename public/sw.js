if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        i[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const i = document.createElement("script");
              (i.src = e), document.head.appendChild(i), (i.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!i[e]) throw new Error(`Module ${e} didn’t register its module`);
          return i[e];
        })
      );
    },
    s = (s, i) => {
      Promise.all(s.map(e)).then((e) => i(1 === e.length ? e[0] : e));
    },
    i = { require: Promise.resolve(s) };
  self.define = (s, n, a) => {
    i[s] ||
      (i[s] = Promise.resolve().then(() => {
        let i = {};
        const c = { uri: location.origin + s.slice(1) };
        return Promise.all(
          n.map((s) => {
            switch (s) {
              case "exports":
                return i;
              case "module":
                return c;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = a(...e);
          return i.default || (i.default = s), i;
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
        { url: "/CV.pdf", revision: "cb3d73b7b38d2c255bf626559e0ff5f4" },
        {
          url: "/_next/static/chunks/18.5dd5c495d9b4afafd2fe.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/_next/static/chunks/4.4e76808054e5828122f6.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/_next/static/chunks/6.46dd4e6be3600a3cabcc.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/_next/static/chunks/7.7729363912f91dd9afad.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url:
            "/_next/static/chunks/a621c6d6b0e0f3d9c286172de904f218404abe89.c85ede1a2055f7e37e79.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url:
            "/_next/static/chunks/b3fde4e130b99ca7088fe256fb8c354e6136b697.a9c267cac26afd58f8d0.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url:
            "/_next/static/chunks/ee9974e4832feb30b1f7a035081edf935c5b1feb.b78c70d5dc58f07d7ffe.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/_next/static/chunks/framework.f9803f2774bc67c45cde.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/_next/static/chunks/main-030d69f610e11ddcda55.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/_next/static/chunks/pages/_app-3e7ec88fac91f0d192ec.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/_next/static/chunks/pages/_error-ea4b755d6e3bc2471140.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/_next/static/chunks/pages/contact-edc67e55b6583bfef3af.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/_next/static/chunks/pages/diplomas-e7b6a0a7a0a1f30ab63c.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url:
            "/_next/static/chunks/pages/experience/%5Bid%5D-2493d0c3ab10dcdf451f.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/_next/static/chunks/pages/experiences-fc0837b11c02a561790d.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/_next/static/chunks/pages/index-49c908968938efd5a08a.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/_next/static/chunks/pages/skills-6938fe90ce4f50fc2a8a.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/_next/static/chunks/polyfills-79441a336eb07a143a5d.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/_next/static/chunks/webpack-b5b75f2979f60c29d1c3.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/_next/static/css/3ef99dccd1ddda673267.css",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/_next/static/sJKPgbZ43pkUzy3eEQeZq/_buildManifest.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/_next/static/sJKPgbZ43pkUzy3eEQeZq/_ssgManifest.js",
          revision: "sJKPgbZ43pkUzy3eEQeZq",
        },
        {
          url: "/contact/envelope.png",
          revision: "58260c84cccdb5a2056cd28bc9387b57",
        },
        {
          url: "/contact/linkedin.webp",
          revision: "1fd638084e44863cfc4826b15cccadff",
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
        { url: "/images/me.JPG", revision: "7952ea1c33d6e6f9a14933d66fd5a2d0" },
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
        {
          url: "/skills/OSGI.png",
          revision: "2b2a159a34b5ead01a9148658a9b73cb",
        },
        {
          url: "/skills/anglais.png",
          revision: "20d6bc1f46c9699e686e84cdadbcd362",
        },
        {
          url: "/skills/csharp.png",
          revision: "72861c60d8c6f444fab457fc8f2177cb",
        },
        {
          url: "/skills/git.png",
          revision: "728ff5a8e44d74cd0f2359ef0a9ec88a",
        },
        {
          url: "/skills/graphql.png",
          revision: "e7f32a3e1c538ef387b2abf5a55d5468",
        },
        {
          url: "/skills/hibernate.png",
          revision: "266087b807ed06c32518d8f94941cf78",
        },
        {
          url: "/skills/java.png",
          revision: "4eb1819dc863ef386e09d86e9f482a9f",
        },
        {
          url: "/skills/javascript.png",
          revision: "095e65afaeb6bb732773bff90f5d7f24",
        },
        {
          url: "/skills/jquery.gif",
          revision: "9999c1a8c347b81c5cb5df967664c4c3",
        },
        {
          url: "/skills/laravel.png",
          revision: "b0ba6d0d7144a425934b9f2daab2b971",
        },
        {
          url: "/skills/mysql.png",
          revision: "25c275d881fc8199e59e2f5fa4af3832",
        },
        {
          url: "/skills/next-js.svg",
          revision: "b5d25ca3c0decaea251b75c69a934e8b",
        },
        {
          url: "/skills/nodejs.png",
          revision: "85458a6717bed07d7db5146928d3cdd0",
        },
        {
          url: "/skills/office.png",
          revision: "8a7db4271f1103fe195591ce3e500faa",
        },
        {
          url: "/skills/oracle.png",
          revision: "77742a1cf484dfe3b24da588e4829931",
        },
        {
          url: "/skills/php.png",
          revision: "1b29a538acb3efa07b2289d932b2daa9",
        },
        {
          url: "/skills/postgresql.png",
          revision: "50156c71fb2cf47d5cfe134231975922",
        },
        {
          url: "/skills/python.png",
          revision: "48d5e2ff23c70d96fcd2375d622eea27",
        },
        {
          url: "/skills/react.png",
          revision: "b44a1baec38ef8b3d2f1cfd39c3e3b3d",
        },
        {
          url: "/skills/rest.png",
          revision: "2771b76a468ca5438b7a0c34a74aad84",
        },
        {
          url: "/skills/spring.png",
          revision: "539d308c4f0064736a0d846381fab72e",
        },
        {
          url: "/skills/symfony.png",
          revision: "904eeade0431adb7708940e3bc08c53f",
        },
        {
          url: "/skills/tailwindcss.png",
          revision: "4f4e8c9dbbc104e79c2f23ced37aa7f4",
        },
        {
          url: "/skills/typescript.png",
          revision: "8388f7a973742b602ab63df5e1094a6c",
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
