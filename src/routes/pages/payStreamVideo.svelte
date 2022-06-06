<script lang="ts">
	import type { Invoice } from 'src/lib/types/invoice';

	import { sendPayment } from '../../scripts/webln';

	let satoshisPerInterval: number = 1;
	let paymentIntervalSeconds: number;
	let memo: string;
	let maxIntervals: number;

	let streamToggled = false;
	let stream: NodeJS.Timer;

	async function pay(stream: NodeJS.Timer) {
		try {
			const response: Response = await fetch('/lightning/invoice');
			const invoice: Invoice = (await response.json()).invoice;
      console.log('invoice', invoice);
			await sendPayment(invoice.request);
		} catch (err) {
			console.error(err);
			clearInterval(stream);
      streamToggled = false;
		}
	}

	async function handleStreamClick() {
		if (!streamToggled) {
			// Kickoff the stream first
			// TODO: What if they don't set a budget?

      // If user doesn't set a budget,
      // how do we stop infinite looping?

      // Maybe instead of streaming payments on interval,
      // we stream video on interval, make a payment on video,
      // stop the stream while

			await pay(stream);
      
      streamToggled = true;
			stream = setInterval(async () => await pay(stream), 1000);
		} else {
			clearInterval(stream);
      streamToggled = false;
		}
	}
</script>

<h1 class="text-4xl">Stream Sats</h1>

<button type="button" class="lnbtn" on:click={handleStreamClick}>
	{#if streamToggled}
		Stop Streaming
	{:else}
		Stream!
	{/if}
</button>

<!-- <button type="button" class="lnbtn" on:click={handleStreamClick} /> -->
