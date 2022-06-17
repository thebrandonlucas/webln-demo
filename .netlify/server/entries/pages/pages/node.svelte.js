var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Node
});
module.exports = __toCommonJS(stdin_exports);
var import_index_61e3dd22 = require("../../../chunks/index-61e3dd22.js");
const Node = (0, import_index_61e3dd22.c)(($$result, $$props, $$bindings, slots) => {
  let $info, $$unsubscribe_info;
  $$unsubscribe_info = (0, import_index_61e3dd22.a)(info, (value) => $info = value);
  $$unsubscribe_info();
  return `<h1 class="${"text-4xl"}">Node Info</h1>
<p>Retrieve information about your lightning node</p>

<button class="${"lnbtn"}">Get Node Info</button>

${$info ? `<p>Alias: ${(0, import_index_61e3dd22.e)($info.node.alias)}</p>
	<p>Pubkey: ${(0, import_index_61e3dd22.e)($info.node.pubkey)}</p>
	<p>Color: ${(0, import_index_61e3dd22.e)($info.node.color)}</p>` : ``}`;
});
