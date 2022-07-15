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
  default: () => Invoice
});
module.exports = __toCommonJS(stdin_exports);
var import_index_61e3dd22 = require("../../../chunks/index-61e3dd22.js");
var import_webln_904efb3e = require("../../../chunks/webln-904efb3e.js");
var import_webln = require("webln");
const Card = (0, import_index_61e3dd22.c)(($$result, $$props, $$bindings, slots) => {
  let { btnText } = $$props;
  let { title } = $$props;
  let { btnClickHandler } = $$props;
  if ($$props.btnText === void 0 && $$bindings.btnText && btnText !== void 0)
    $$bindings.btnText(btnText);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.btnClickHandler === void 0 && $$bindings.btnClickHandler && btnClickHandler !== void 0)
    $$bindings.btnClickHandler(btnClickHandler);
  return `<div class="${"flex flex-col grow justify-between border-2 card m-2 p-4"}"><h2 class="${"text-2xl mb-4"}">${(0, import_index_61e3dd22.e)(title)}</h2>
	<div class="${"flex flex-col grow"}">${slots.default ? slots.default({}) : ``}</div>
	<button type="${"button"}" class="${"lnbtn self-center mt-4"}">${(0, import_index_61e3dd22.e)(btnText)}</button></div>`;
});
let minimumAmount = 1;
let maximumAmount = 1e3;
const Invoice = (0, import_index_61e3dd22.c)(($$result, $$props, $$bindings, slots) => {
  let $invoice, $$unsubscribe_invoice;
  let $paymentResponse, $$unsubscribe_paymentResponse;
  $$unsubscribe_invoice = (0, import_index_61e3dd22.a)(import_webln_904efb3e.i, (value) => $invoice = value);
  $$unsubscribe_paymentResponse = (0, import_index_61e3dd22.a)(import_webln_904efb3e.p, (value) => $paymentResponse = value);
  let defaultAmount = 100;
  let defaultMemo = "Sample Invoice";
  let paymentRequest = "";
  function handleMakeInvoiceClick() {
    try {
      (0, import_webln_904efb3e.m)({
        defaultAmount,
        minimumAmount,
        maximumAmount,
        defaultMemo
      });
    } catch (e) {
      throw new Error(e);
    }
  }
  async function handleSendPaymentClick() {
    (0, import_webln_904efb3e.s)(paymentRequest);
  }
  $$unsubscribe_invoice();
  $$unsubscribe_paymentResponse();
  return `<div class="${"container mx-auto text-center h-full my-4"}"><h1 class="${"text-4xl"}">Invoice Demo</h1>

	<br>
	<br>
	<p>This page demonstrates two core <a href="${"https://www.webln.guide/introduction/welcome"}" class="${"text-bitcoin-orange hover:text-yellow-300 transition-all"}">WebLN</a>
		functionalities: <code>makeInvoice</code> and <code>sendPayment</code></p>
	<p>You can test payments for yourself by using two different accounts, creating an invoice using
		one account, and paying if with another
	</p>
	<br>
	<div class="${"flex flex-col md:flex-row"}">${(0, import_index_61e3dd22.v)(Card, "Card").$$render($$result, {
    btnText: "Make Invoice",
    title: "Create an Invoice",
    btnClickHandler: handleMakeInvoiceClick
  }, {}, {
    default: () => {
      return `<p></p>
			<label for="${"amount"}" class="${"self-start"}">Amount</label>
			<input id="${"amount"}" class="${"p-3 border-2 rounded-md focus:outline-bitcoin-orange"}" type="${"text"}" placeholder="${"Enter Amount"}"${(0, import_index_61e3dd22.b)("value", defaultAmount, 0)}>
			<label for="${"memo"}" class="${"self-start"}">Memo (optional)</label>
			<input id="${"memo"}" class="${"p-3 border-2 rounded-md focus:outline-bitcoin-orange"}" type="${"text"}" placeholder="${"Enter Memo"}"${(0, import_index_61e3dd22.b)("value", defaultMemo, 0)}>
			${$invoice ? `<h3 class="${"text-xl"}">Invoice</h3>
				<div class="${"flex flex-row bg-gray-500 border-none rounded-md p-2 max-w-fit text-white text-left text-clip"}"><div><code class="${"break-all overflow-hidden"}">${(0, import_index_61e3dd22.e)($invoice.paymentRequest)}</code></div>
					<div class="${"self-center"}"><button${(0, import_index_61e3dd22.b)("class", `border-2 rounded-md ml-4 py-2 h-1/3 w-20 text-center transition-all ${"border-gray-400"}`, 0)}>${(0, import_index_61e3dd22.e)("Copy")}</button></div></div>` : ``}`;
    }
  })}

		${(0, import_index_61e3dd22.v)(Card, "Card").$$render($$result, {
    btnText: "Send Payment",
    title: "Pay an Invoice",
    btnClickHandler: handleSendPaymentClick
  }, {}, {
    default: () => {
      return `<textarea class="${"flex grow bg-gray-500 border-none rounded-md p-2 text-white text-left text-clip focus:outline-bitcoin-orange"}" placeholder="${"Paste an invoice here"}">${""}</textarea>`;
    }
  })}</div>
	${$paymentResponse ? `<p>Success!</p>
		<p>Preimage: ${(0, import_index_61e3dd22.e)($paymentResponse.preimage)}</p>
		<p>Payment Hash: ${(0, import_index_61e3dd22.e)($paymentResponse.paymentHash)}</p>` : ``}</div>`;
});
