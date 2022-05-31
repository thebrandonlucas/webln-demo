<script>
	function clickMenu() {
		const btn = document.getElementById('menu-btn');
		const nav = document.getElementById('menu');
		btn?.classList.toggle('open');
		nav?.classList.toggle('flex');
		nav?.classList.toggle('hidden');
	}
</script>

<nav
	class="hidden flex-row bg-bitcoin-orange py-5 justify-between items-center text-center 
text-black text-xl transition-all md:flex"
>
	<a href="/">Home</a>
	<a href="/pages/invoice">Invoice</a>
	<a href="/pages/keysend">Keysend</a>
	<a href="/pages/login">Login</a>
	<a href="/pages/nodeInfo">Node Info</a>
	<a href="/pages/payStreamVideo">Pay to Stream Video</a>
	<a href="/pages/payScroll">Pay to Scroll</a>
</nav>

<div
	class="bg-bitcoin-orange py-5 justify-between items-center text-center 
text-black text-xl"
>
	<button id="menu-btn" on:click={clickMenu}>
		<span class="hamburger" />
		<span class="hamburger" />
		<span class="hamburger" />
	</button>

	<!-- Mobile Menu -->
	<nav id="menu" class="hidden md:hidden flex-col transition-all">
		<a href="/">Home</a>
		<a href="/pages/invoice">Invoice</a>
		<a href="/pages/keysend">Keysend</a>
		<a href="/pages/login">Login</a>
		<a href="/pages/nodeInfo">Node Info</a>
		<a href="/pages/payStreamVideo">Pay to Stream Video</a>
		<a href="/pages/payScroll">Pay to Scroll</a>
	</nav>
</div>

<style>
	a {
		@apply p-2 mx-4 align-baseline border-b-2 rounded-md border-bitcoin-orange 
            hover:border-white
          hover:text-white transition-all;
	}

	#menu-btn {
		@apply flex flex-col my-auto mx-auto w-10 h-10 mb-5 rounded-md items-center 
            bg-orange-300 hover:shadow-xl duration-300 md:hidden justify-center m-0
            hover:scale-110 hover:bg-white;
	}

	.hamburger {
		@apply m-0.5 bg-gray-500 rounded-lg w-4 h-1;
	}
</style>
