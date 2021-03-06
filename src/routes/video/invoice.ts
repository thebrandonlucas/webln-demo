import lnurl from 'lnurl-pay';
import { parsePaymentRequest } from 'invoices';

const RECIPIENT = 'bslucas@getalby.com';
const AMOUNT = 2;

export async function get(request: any) {
	try {
		const { invoice } = await lnurl.requestInvoice({
			lnUrlOrAddress: RECIPIENT,
			tokens: AMOUNT
		});
		console.log('payment req server', invoice);

		const invoiceParsed = parsePaymentRequest({ request: invoice });

		return {
			status: 200,
			body: {
				payment_request: invoice,
				payment_hash: invoiceParsed.id
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
