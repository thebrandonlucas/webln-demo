<script lang="ts">
	import { keysend, keysendPreimage } from '../../lib/scripts/webln';
	import Index from '../index.svelte';

	let pubkeyDestination: string;
	let amount: number;
	let customRecordKey: string;
	let customRecordValue: string;

	function handleKeysendClick() {
		keysend({
			destination: pubkeyDestination,
			amount,
			// customRecords:
			// 	customRecordKey && customRecordValue ? { customRecordKey: customRecordValue } : undefined
		});
	}
</script>

<h1 class="text-4xl">Keysend</h1>
<p>Keysend is a method to pay without needing an invoice</p>

<input type="text" bind:value={pubkeyDestination} placeholder="Enter recipient's pubkey" />
<input type="text" bind:value={amount} placeholder="Enter amount" />

<br />
<p>
	Custom Record. Key should be from the <a
		target="_blank"
		href="https://github.com/satoshisstream/satoshis.stream/blob/main/TLV_registry.md#field-7629173-proposed"
		>TLV Registry</a
	>
</p>
<input type="text" bind:value={customRecordKey} placeholder="Enter custom record key" />
<input type="text" bind:value={customRecordKey} placeholder="Enter custom record value" />
<br />
<button class="lnbtn" on:click={handleKeysendClick}>Send!</button>

{#if $keysendPreimage}
	<p>Send successful!</p>
	<p>{$keysendPreimage.preimage}</p>
{/if}
