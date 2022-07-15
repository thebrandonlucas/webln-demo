// import { lnService } from 'ln-service';
import lightning from 'lightning'
import type { RequestHandler } from "@sveltejs/kit";
// import { lnd } from '$lib/ln-server'
import type { Invoice } from '$lib/types/invoice';

export async function get(request: RequestHandler) {
  // try {
  //   const invoice: Invoice = await lightning.createInvoice({
  //     lnd,
  //     tokens: 1,
  //     description: "",
  //   });

  //   console.log(invoice);
  //   return {
  //     status: 200,
  //     body: {
  //       invoice
  //     },
  //     headers: {
  //       'set-cookie': ['_ln_id', invoice.id]
  //     }
  //   }
  // } catch(err) {
  //   return {
  //     status: 500,
  //     body: {
  //       error: console.error(err)
  //     }
  //   }
  // }
}