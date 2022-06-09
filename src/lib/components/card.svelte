<script lang="ts">
	export let btnText: string;
	export let title: string;
	export let btnClickHandler: () => any;
</script>

<div class="flex flex-col grow justify-between border-2 card m-2 p-4">
	<h2 class="text-2xl mb-4">{title}</h2>
	<div class="flex flex-col grow">
		<slot />
	</div>
	<button type="button" class="lnbtn self-center mt-4" on:click={btnClickHandler}>{btnText}</button>
</div>
