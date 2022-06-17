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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_61e3dd22 = require("../../chunks/index-61e3dd22.js");
var import_webln = require("webln");
const Routes = (0, import_index_61e3dd22.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-1/2 mx-auto text-center my-10"}"><h1 class="${"text-4xl font-bold"}">${(0, import_index_61e3dd22.e)(" ")}Lightning for the Web</h1>
	<h2 class="${"text-2xl"}">Using <a href="${"https://www.webln.guide/introduction/welcome"}" class="${"lnlink"}">WebLN</a>
		and the
		<a href="${"https://lightning.network/"}" class="${"lnlink"}">Lightning Network</a> for web payments
	</h2>

	<br> <br>
	<p class="${"text-xl"}">This website uses WebLN to demonstrate payments with the lightning network.</p>
	<p class="${"text-xl"}">It currently demonstrates creating invoices, paying invoices, and streaming video.
	</p>
	<br><br>
	<p class="${"text-xl"}">Check back soon to see more WebLN-based features and demos!</p>
	<br><br>
	<p class="${"text-xl"}">Special thanks to the <a class="${"lnlink"}" href="${"https://getalby.com/"}">Alby Team</a>, which was the
		client used to test this site.
	</p>
	<p class="${"text-xl"}">And to Ren\xE9 Aaron for his <a class="${"lnlink"}" href="${"https://webln.twentyuno.net/"}">WebLN Experiments site</a>, from which this drew a lot of inspiration.
	</p>
  <br> <br>
	<p class="${"text-xl"}">Feel free to reach out to me at <span class="${"underline"}">thebrandonlucas@gmail.com</span> if you have
		any questions!
	</p></div>`;
});
