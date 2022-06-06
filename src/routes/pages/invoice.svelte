<script lang="ts">
	import {
		activateWebln,
		getInfo,
		makeInvoice,
		sendPayment,
		invoice,
		paymentResponse
	} from '../../scripts/webln';
	import type { RequestInvoiceArgs } from 'webln';

	let defaultAmount = 0;
	let minimumAmount = 1;
	let maximumAmount = 1000;
	let defaultMemo = 'Test Invoice';

	let paymentRequest = '';

	function handleMakeInvoiceClick() {
		makeInvoice({ defaultAmount, minimumAmount, maximumAmount, defaultMemo });
	}

	function handleSendPaymentClick() {
		// Use if you're not making your own payment request
		sendPayment(paymentRequest);
	}
</script>

<div class="container mx-auto flex flex-col items-center">
	<h1 class="text-4xl">Payment Demo</h1>
	<br />
	<h2 class="text-2xl">Create an Invoice</h2>
	<input type="text" bind:value={defaultAmount} placeholder="Enter Amount" />
	<input type="text" bind:value={minimumAmount} placeholder="Enter Minimum" />
	<input type="text" bind:value={maximumAmount} placeholder="Enter Maximum" />
	<input type="text" bind:value={defaultMemo} placeholder="Enter Memo" />

	<button type="button" class="lnbtn" on:click={handleMakeInvoiceClick}>Make Invoice</button>
	<br />

	{#if $invoice}
		<h3 class="text-xl">Invoice</h3>
		<code class="w-full break-words">{$invoice.paymentRequest}</code>
	{/if}

	<h2 class="text-2xl">Pay an Invoice</h2>
	<textarea bind:value={paymentRequest} placeholder="Invoice" />
	<p class="w-1/2 border break-all">Payment Request: {paymentRequest}</p>
	<button class="lnbtn" on:click={handleSendPaymentClick}>Send Payment</button>

	{#if $paymentResponse}
		<p>Success!</p>
		<p>Preimage: {$paymentResponse.preimage}</p>
		<p>Payment Hash: {$paymentResponse.paymentHash}</p>
	{/if}
</div>
