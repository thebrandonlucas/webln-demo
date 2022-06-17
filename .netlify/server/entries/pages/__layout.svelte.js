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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_61e3dd22 = require("../../chunks/index-61e3dd22.js");
var app = "";
var nav_svelte_svelte_type_style_lang = "";
const css = {
  code: ".link.svelte-1db9zu5{margin-left:1rem;margin-right:1rem;border-radius:0.375rem;border-bottom-width:2px;--tw-border-opacity:1;border-color:rgb(253 224 71 / var(--tw-border-opacity));padding:0.5rem;vertical-align:baseline;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.link.svelte-1db9zu5:hover{--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}#menu-btn.svelte-1db9zu5{margin:0px;margin-top:auto;margin-bottom:auto;margin-left:auto;margin-right:auto;margin-bottom:1.25rem;display:flex;height:2.5rem;width:2.5rem;flex-direction:column;align-items:center;justify-content:center;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(253 186 116 / var(--tw-bg-opacity));transition-duration:300ms\n}#menu-btn.svelte-1db9zu5:hover{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}@media(min-width: 768px){#menu-btn.svelte-1db9zu5{display:none\n    }}.hamburger.svelte-1db9zu5{margin:0.125rem;height:0.25rem;width:1rem;border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))\n}",
  map: null
};
const Nav = (0, import_index_61e3dd22.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"hidden flex-row bg-yellow-300 justify-around items-center text-center text-black text-xl transition-all md:flex"}"><a href="${"/"}"><img src="${"/narsil-logo.png"}" class="${"w-20 h-20"}" alt="${"logo"}"></a>
	<a class="${"link svelte-1db9zu5"}" href="${"/pages/invoice"}">Invoice</a>
	
	
	
	<a class="${"link svelte-1db9zu5"}" href="${"/pages/video"}">Stream Video</a>
	</nav>

<div class="${"bg-yellow-300 py-4 justify-between items-center text-center text-black text-xl md:py-0"}"><button id="${"menu-btn"}" class="${"svelte-1db9zu5"}"><span class="${"hamburger svelte-1db9zu5"}"></span>
		<span class="${"hamburger svelte-1db9zu5"}"></span>
		<span class="${"hamburger svelte-1db9zu5"}"></span></button>

	
	<nav id="${"menu"}" class="${"hidden md:hidden flex-col transition-all"}"><a class="${"link svelte-1db9zu5"}" href="${"/"}">Home</a>
		<a class="${"link svelte-1db9zu5"}" href="${"/pages/invoice"}">Invoice</a>
		
		
		
		<a class="${"link svelte-1db9zu5"}" href="${"/pages/payStreamVideo"}">Stream Video</a>
		</nav>
</div>`;
});
const _layout = (0, import_index_61e3dd22.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_61e3dd22.v)(Nav, "Nav").$$render($$result, {}, {}, {})}

<div class="${"h-screen"}">${slots.default ? slots.default({}) : ``}</div>

<div class="${"text-center mb-4"}"><a href="${"https://twitter.com/brandonstlucas"}" target="${"_blank"}" class="${"text-xl text-bitcoin-orange hover:text-yellow-300"}">bslucas@getalby.com</a></div>`;
});
