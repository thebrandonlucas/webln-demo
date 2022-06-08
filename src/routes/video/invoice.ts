import lightning from 'lightning';
import { lnd } from '$lib/ln-server';
import type { Invoice } from '$lib/types/invoice';

export async function get(request: any) {
  // request invoice here

	try {
		const invoice: Invoice = await lightning.createInvoice({
			lnd,
			tokens: 2,
			description: 'Video payment invoice (1 second)'
		});

		return {
			status: 200,
			body: {
				invoice
			},
			headers: {
				'set-cookie': ['_ln_id', invoice.id]
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
