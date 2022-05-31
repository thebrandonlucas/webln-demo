import { writable, get } from 'svelte/store';
import {
	type RequestInvoiceResponse,
	requestProvider,
	type GetInfoResponse,
	type RequestInvoiceArgs,
	type WebLNProvider,
	type SendPaymentResponse,
	type KeysendArgs
} from 'webln';
// import { requestInvoice } from 'lnurl-pay'


interface PaymentResponse {
	preimage: string;
	paymentHash: string;
	route: object;
}

export const invoice = writable<RequestInvoiceResponse>();
export const paymentResponse = writable<PaymentResponse>();
export const info = writable<GetInfoResponse>();
export const keysendPreimage = writable<SendPaymentResponse>();

function createStream() {
	const { subscribe, set } = writable<boolean>(false);

	return {
		subscribe,
		start: () => set(true),
		stop: () => set(false)
	};
}
export const streaming = createStream();

export async function activateWebln() {
	try {
		const webln = await requestProvider();
		webln.enable();
	} catch (err: any) {
		// Why use "any" annotation? https://stackoverflow.com/a/69021263
		// Tell the user what went wrong
		alert(err.message);
	}
}

export async function getInfo() {
	try {
		const webln = await requestProvider();
		const _info: GetInfoResponse = await webln.getInfo();
		info.set(_info);
	} catch (err: any) {
		// Why use "any" annotation? https://stackoverflow.com/a/69021263
		// Tell the user what went wrong
		alert(err.message);
	}
}

export async function makeInvoice(args: RequestInvoiceArgs) {
	try {
		const webln = await requestProvider();
		const _invoice = await webln.makeInvoice(args);
		console.log(_invoice.paymentRequest);
		console.log(await webln.sendPayment(_invoice.paymentRequest));

		invoice.set(_invoice);
	} catch (err: any) {
		// Why use "any" annotation? https://stackoverflow.com/a/69021263
		// Tell the user what went wrong
		alert(err.message);
	}
}

export async function sendPayment(paymentRequest: string) {
	try {
		const webln = await requestProvider();
    webln.enable();
		const response = await webln.sendPayment(paymentRequest);
		console.log('pre',await response);

		paymentResponse.set(response);
	} catch (err: any) {
		// Why use "any" annotation? https://stackoverflow.com/a/69021263
		// Tell the user what went wrong
		alert(err.message);
	}
}

export async function keysend({ destination, amount, customRecords }: KeysendArgs) {
	try {
		const webln = await requestProvider();
		const args = customRecords
			? {
					destination,
					amount,
					customRecords
			  }
			: {
					destination,
					amount
			  };
		console.log(args);
		const _preimage = await webln.keysend(args);

		console.log('keysend', _preimage);
		keysendPreimage.set(_preimage);
	} catch (err: any) {
		// Why use "any" annotation? https://stackoverflow.com/a/69021263
		// Tell the user what went wrong
		alert(err.message);
	}
}

export async function login(paymentRequest: string) {
	// TODO: use lnurl auth
	// try {
	// 	const webln = await requestProvider();
	// 	const _preimage = await webln.sendPayment(paymentRequest);
	// 	console.log('pre', _preimage);
	// 	preimage.set(_preimage);
	// } catch (err: any) {
	// 	// Why use "any" annotation? https://stackoverflow.com/a/69021263
	// 	// Tell the user what went wrong
	// 	alert(err.message);
	// }
}

async function paymentCycle(
	webln: WebLNProvider,
	satoshisPerInterval: number,
	memo: string | undefined
) {
  // const { invoice, params, successAction, validatePreimage } =
  // await requestInvoice({
  //   lnUrlOrAddress:
  //     'lnurl1dp68gurn8ghj7urp0yh8xarpva5kueewvaskcmme9e5k7tewwajkcmpdddhx7amw9akxuatjd3cz7atnv4erqgfuvv5',
  //   tokens: 333, // satoshis
  // })
	// const { paymentRequest } = await webln.makeInvoice({
	// 	defaultAmount: satoshisPerInterval,
	// 	// defaultMemo: memo || undefined
	// });
	// const preimage = await webln.sendPayment(paymentRequest);
	// console.log('Payment cycle: ', paymentRequest, preimage);
}

export async function stream(
	satoshisPerInterval: number,
	paymentIntervalSeconds = 1,
	memo: string | undefined = undefined,
	maxIntervals: number | null = null
) {
	// Generate multiple payment requests
	const webln = await requestProvider();
	await webln.enable();

	await paymentCycle(webln, satoshisPerInterval, memo);
	// Stream -> call sendPayment multiple times as long as budget allows
	// Use setTimeout to ensure it's not constantly calling
	// makeInvoice
	// sendPayment
	// Get the current value of streaming
	let isStreaming = get(streaming);
	const stream = setInterval(async () => {
		isStreaming = get(streaming);
		console.log('Currently streaming', isStreaming);
		if (!isStreaming) {
			console.log('Stream stopping');
			clearInterval(stream);
		}
	}, paymentIntervalSeconds * 1000);

	console.log('outside stream', isStreaming);
}
