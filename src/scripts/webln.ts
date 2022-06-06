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
		await webln.enable();
		const response = await webln.sendPayment(paymentRequest);
    return false
		// paymentResponse.set(response);
	} catch (err: any) {
		// Why use "any" annotation? https://stackoverflow.com/a/69021263
		// Tell the user what went wrong
    console.log('err!', err)
		alert(err.message);
    return true
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

// export async function toggleStream
