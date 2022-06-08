<script>
	import { getInfo, info } from '../../lib/scripts/webln';
</script>

<h1 class="text-4xl">Node Info</h1>
<p>Retrieve information about your lightning node</p>

<button class="lnbtn" on:click={getInfo}>Get Node Info</button>

{#if $info}
	<p>Alias: {$info.node.alias}</p>
	<p>Pubkey: {$info.node.pubkey}</p>
	<p>Color: {$info.node.color}</p>
{/if}
