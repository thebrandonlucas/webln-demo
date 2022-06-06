<script lang="ts">
	import { activateWebln } from '../scripts/webln';
	import type { Invoice } from '../lib/types/invoice';

	// export let invoice: Invoice;
</script>

<h1>Home</h1>
<button class="lnbtn" on:click={activateWebln}>Activate</button>

<!-- <button class="lnbtn" on:click={activateWebln}>Activate Webln</button> -->