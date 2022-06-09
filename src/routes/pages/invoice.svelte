<script lang="ts">
	import { makeInvoice, invoice, paymentResponse, sendPayment } from '$lib/scripts/webln';
	import Card from '$lib/components/card.svelte';

	let defaultAmount = 100;
	let minimumAmount = 1;
	let maximumAmount = 1000;
	let defaultMemo = 'Sample Invoice';

	let copied = false;

	let paymentRequest = '';

	function handleMakeInvoiceClick() {
		makeInvoice({ defaultAmount, minimumAmount, maximumAmount, defaultMemo });
	}

	async function handleSendPaymentClick() {
		// Use if you're not making your own payment request
		sendPayment(paymentRequest);
	}

	function copyInvoiceToClipboard() {
		navigator.clipboard.writeText($invoice.paymentRequest).then(() => {
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 3000);
		});
	}
</script>

<div class="container mx-auto text-center h-full my-4">
	<h1 class="text-4xl">Invoice Demo</h1>

	<br />
	<br />
	<p>
		This page demonstrates two core <a
			href="https://www.webln.guide/introduction/welcome"
			class="text-bitcoin-orange hover:text-yellow-300 transition-all">WebLN</a
		> functionalities: <code>makeInvoice</code> and <code>sendPayment</code>
	</p>
  <p>You can test payments for yourself by using two different accounts, creating an invoice using one account, and paying if with another </p>
  <br />
	<div class="flex flex-col md:flex-row">
		<Card btnText="Make Invoice" title="Create an Invoice" btnClickHandler={handleMakeInvoiceClick}>
			<p></p>
      <label for="amount" class="self-start">Amount</label>
			<input
				id="amount"
				class="p-3 border-2 rounded-md focus:outline-bitcoin-orange"
				type="text"
				bind:value={defaultAmount}
				placeholder="Enter Amount"
			/>
			<label for="memo" class="self-start">Memo (optional)</label>
			<input
				id="memo"
				class="p-3 border-2 rounded-md focus:outline-bitcoin-orange"
				type="text"
				bind:value={defaultMemo}
				placeholder="Enter Memo"
			/>
			{#if $invoice}
				<h3 class="text-xl">Invoice</h3>
				<div
					class="flex flex-row bg-gray-500 border-none rounded-md p-2 max-w-fit text-white text-left text-clip"
				>
					<div>
						<code class="break-all overflow-hidden">{$invoice.paymentRequest}</code>
					</div>
					<div class="self-center">
						<button
							class={`border-2 rounded-md ml-4 py-2 h-1/3 w-20 text-center transition-all ${
								copied ? 'border-green-600 bg-gray-600' : 'border-gray-400'
							}`}
							on:click={copyInvoiceToClipboard}>{copied ? 'Copied!' : 'Copy'}</button
						>
					</div>
				</div>
			{/if}
		</Card>

		<Card btnText="Send Payment" title="Pay an Invoice" btnClickHandler={handleSendPaymentClick}>
			<textarea
				class="flex grow bg-gray-500 border-none rounded-md p-2 text-white text-left text-clip focus:outline-bitcoin-orange"
				bind:value={paymentRequest}
				placeholder="Paste an invoice here"
			/>
		</Card>
	</div>
	{#if $paymentResponse}
		<p>Success!</p>
		<p>Preimage: {$paymentResponse.preimage}</p>
		<p>Payment Hash: {$paymentResponse.paymentHash}</p>
	{/if}
</div>
