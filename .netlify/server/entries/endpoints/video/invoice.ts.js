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
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
var import_lnurl_pay = __toESM(require("lnurl-pay"));
var import_invoices = require("invoices");
const RECIPIENT = "bslucas@getalby.com";
const AMOUNT = 2;
async function get(request) {
  try {
    const { invoice } = await import_lnurl_pay.default.requestInvoice({
      lnUrlOrAddress: RECIPIENT,
      tokens: AMOUNT
    });
    console.log("payment req server");
    const invoiceParsed = (0, import_invoices.parsePaymentRequest)({ request: invoice });
    return {
      status: 200,
      body: {
        hello: "hello",
        payment_request: invoice,
        payment_hash: invoiceParsed.id
      }
    };
  } catch (err) {
    return {
      status: 500,
      body: {
        error: err.message,
        message: "hello"
      }
    };
  }
}
