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
  default: () => Keysend
});
module.exports = __toCommonJS(stdin_exports);
var import_index_61e3dd22 = require("../../../chunks/index-61e3dd22.js");
var import_webln_904efb3e = require("../../../chunks/webln-904efb3e.js");
var import_webln = require("webln");
const Keysend = (0, import_index_61e3dd22.c)(($$result, $$props, $$bindings, slots) => {
  let $keysendPreimage, $$unsubscribe_keysendPreimage;
  $$unsubscribe_keysendPreimage = (0, import_index_61e3dd22.a)(import_webln_904efb3e.k, (value) => $keysendPreimage = value);
  let pubkeyDestination;
  let amount;
  let customRecordKey;
  $$unsubscribe_keysendPreimage();
  return `<h1 class="${"text-4xl"}">Keysend</h1>
<p>Keysend is a method to pay without needing an invoice</p>

<input type="${"text"}" placeholder="${"Enter recipient's pubkey"}"${(0, import_index_61e3dd22.b)("value", pubkeyDestination, 0)}>
<input type="${"text"}" placeholder="${"Enter amount"}"${(0, import_index_61e3dd22.b)("value", amount, 0)}>

<br>
<p>Custom Record. Key should be from the <a target="${"_blank"}" href="${"https://github.com/satoshisstream/satoshis.stream/blob/main/TLV_registry.md#field-7629173-proposed"}">TLV Registry</a></p>
<input type="${"text"}" placeholder="${"Enter custom record key"}"${(0, import_index_61e3dd22.b)("value", customRecordKey, 0)}>
<input type="${"text"}" placeholder="${"Enter custom record value"}"${(0, import_index_61e3dd22.b)("value", customRecordKey, 0)}>
<br>
<button class="${"lnbtn"}">Send!</button>

${$keysendPreimage ? `<p>Send successful!</p>
	<p>${(0, import_index_61e3dd22.e)($keysendPreimage.preimage)}</p>` : ``}`;
});
