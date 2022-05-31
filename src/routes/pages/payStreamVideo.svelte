<script lang="ts">
	import { stream, streaming } from '../../scripts/webln';

	let satoshisPerInterval: number = 1;
	let paymentIntervalSeconds: number;
	let memo: string;
	let maxIntervals: number;

	function handleStreamClick() {
    // TODO: how to turn off streaming at will?
    if ($streaming) {
      streaming.stop()
    } else {
      streaming.start()
    }
		stream(satoshisPerInterval, paymentIntervalSeconds, memo, maxIntervals);
	}
</script>

<h1 class="text-4xl">Stream Sats</h1>

<input type="text" bind:value={satoshisPerInterval} placeholder="Satoshis Per Interval" />
<input
	type="text"
	bind:value={paymentIntervalSeconds}
	placeholder="Interval (in seconds)"
/>
<input
	type="text"
	bind:value={maxIntervals}
	placeholder="(Optional) Set max intervals, must be below budget amount"
/>
<input type="text" bind:value={memo} placeholder="Memo to have on each payment" />

{#if $streaming}
	<button type="button" class="lnbtn" on:click={handleStreamClick}>Stop Streaming</button>
{:else}
	<button type="button" class="lnbtn" on:click={handleStreamClick}>Stream!</button>
{/if}
