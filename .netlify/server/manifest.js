var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png", "narsil-logo.png"]),
  mimeTypes: { ".png": "image/png" },
  _: {
    entry: { "file": "start-a0072239.js", "js": ["start-a0072239.js", "chunks/index-c83b5075.js", "chunks/index-750aea8d.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "endpoint",
        id: "video",
        pattern: /^\/video\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/video/index.ts.js")))
      },
      {
        type: "endpoint",
        id: "video/invoice",
        pattern: /^\/video\/invoice\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/video/invoice.ts.js")))
      },
      {
        type: "endpoint",
        id: "lightning/invoice",
        pattern: /^\/lightning\/invoice\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/lightning/invoice.ts.js")))
      },
      {
        type: "page",
        id: "pages/invoice",
        pattern: /^\/pages\/invoice\/?$/,
        names: [],
        types: [],
        path: "/pages/invoice",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "pages/keysend",
        pattern: /^\/pages\/keysend\/?$/,
        names: [],
        types: [],
        path: "/pages/keysend",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "pages/login",
        pattern: /^\/pages\/login\/?$/,
        names: [],
        types: [],
        path: "/pages/login",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "pages/node",
        pattern: /^\/pages\/node\/?$/,
        names: [],
        types: [],
        path: "/pages/node",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "pages/scroll",
        pattern: /^\/pages\/scroll\/?$/,
        names: [],
        types: [],
        path: "/pages/scroll",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "pages/video",
        pattern: /^\/pages\/video\/?$/,
        names: [],
        types: [],
        path: "/pages/video",
        shadow: null,
        a: [0, 8],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
