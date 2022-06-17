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
  default: () => Video
});
module.exports = __toCommonJS(stdin_exports);
var import_index_61e3dd22 = require("../../../chunks/index-61e3dd22.js");
var import_webln = require("webln");
var video_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-128hzhq{position:relative}.controls.svelte-128hzhq{position:absolute;top:0;width:100%;transition:opacity 1s}.info.svelte-128hzhq{display:flex;width:100%;justify-content:space-between}span.svelte-128hzhq{padding:0.2em 0.5em;color:white;text-shadow:0 0 8px black;font-size:1.4em;opacity:0.7}.time.svelte-128hzhq{width:3em}.time.svelte-128hzhq:last-child{text-align:right}progress.svelte-128hzhq{display:block;width:100%;height:10px;-webkit-appearance:none;-moz-appearance:none;appearance:none}progress.svelte-128hzhq::-webkit-progress-bar{background-color:rgba(0, 0, 0, 0.2)}progress.svelte-128hzhq::-webkit-progress-value{background-color:rgba(255, 255, 255, 0.6)}video.svelte-128hzhq{width:100%}",
  map: null
};
function format(seconds) {
  if (isNaN(seconds))
    return "...";
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  let secondStr = seconds.toString();
  if (seconds < 10)
    secondStr = "0" + seconds;
  return `${minutes}:${secondStr}`;
}
const Video = (0, import_index_61e3dd22.c)(($$result, $$props, $$bindings, slots) => {
  let time = 0;
  let duration;
  let paused = true;
  let displayVideo = "#";
  $$result.css.add(css);
  return `<div class="${"w-1/2 mx-auto text-center svelte-128hzhq"}"><h1 class="${"text-4xl my-4"}">Pay for video by the second!</h1>
	<p>Click &quot;Stream!&quot; to play a video for a rate of 2 sats per 5 seconds</p>
	<br>
	<p>Remember to set a budget!</p>
	<br></div>

<div class="${"w-1/2 mx-auto text-center svelte-128hzhq"}">
	<video poster="${"https://i.kym-cdn.com/entries/icons/original/000/018/489/nick-young-confused-face-300x256-nqlyaa.jpg"}"${(0, import_index_61e3dd22.b)("src", displayVideo, 0)} class="${"svelte-128hzhq"}"${(0, import_index_61e3dd22.b)("currentTime", time, 0)}${(0, import_index_61e3dd22.b)("paused", paused, 0)}><track kind="${"captions"}"></video>
	<div class="${"controls svelte-128hzhq"}" style="${"opacity: " + (0, import_index_61e3dd22.e)(0)}"><progress${(0, import_index_61e3dd22.b)("value", 0, 0)} class="${"svelte-128hzhq"}"></progress>
		<div class="${"info svelte-128hzhq"}"><span class="${"time svelte-128hzhq"}">${(0, import_index_61e3dd22.e)(format(time))}</span>
			<span class="${"svelte-128hzhq"}">click anywhere to ${(0, import_index_61e3dd22.e)("play")} / drag to seek</span>
			<span class="${"time svelte-128hzhq"}">${(0, import_index_61e3dd22.e)(format(duration))}</span></div></div>
	<button type="${"button"}" class="${"lnbtn my-3 self-center"}">${`Stream!`}</button>
</div>`;
});
