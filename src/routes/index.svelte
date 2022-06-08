<script lang="ts">
	import { activateWebln } from '../lib/scripts/webln';
</script>

<h1>Home</h1>
<button class="lnbtn" on:click={activateWebln}>Activate</button>
