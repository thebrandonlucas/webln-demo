import lightning from 'lightning';
import { lnd } from '$lib/ln-server';
import type { Invoice } from '$lib/types/invoice';
import lnurl from 'lnurl-pay';
import { parsePaymentRequest } from 'invoices';

const RECIPIENT = 'bslucas@getalby.com';
const AMOUNT = 2;

export async function get(request: any) {
	try {
		// using GRPC
		// const invoice: Invoice = await lightning.createInvoice({
		// 	lnd,
		// 	tokens: 1,
		// 	description: 'Video payment invoice (1 second)'
		// });

		// using lnurl
		const { invoice } = await lnurl.requestInvoice({
			lnUrlOrAddress: RECIPIENT,
			tokens: AMOUNT
		});

		const invoiceParsed = parsePaymentRequest({ request: invoice });

		return {
			status: 200,
			body: {
				payment_request: invoice,
				payment_hash: invoiceParsed.id
			},
			headers: {
				'set-cookie': ['_ln_id', invoiceParsed.id]
			}
		};
	} catch (err) {
		return {
			status: 500,
			body: {
				error: console.error(err)
			}
		};
	}
}
