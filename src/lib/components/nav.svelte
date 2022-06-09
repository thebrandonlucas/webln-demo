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
	class="hidden flex-row bg-yellow-300 justify-around items-center text-center 
text-black text-xl transition-all md:flex"
>
	<a href="/"><img src="./narsil-logo.png" class="w-20 h-20" /></a>
	<a class="link" href="/pages/invoice">Invoice</a>
	<!-- <a href="/pages/keysend">Keysend</a> -->
	<!-- <a href="/pages/login">Login</a> -->
	<!-- <a href="/pages/node">Node Info</a> -->
	<a class="link" href="/pages/video">Stream Video</a>
	<!-- <a href="/pages/scroll">Pay to Scroll</a> -->
</nav>

<div
	class="bg-yellow-300 py-4 justify-between items-center text-center 
text-black text-xl md:py-0"
>
	<button id="menu-btn" on:click={clickMenu}>
		<span class="hamburger" />
		<span class="hamburger" />
		<span class="hamburger" />
	</button>

	<!-- Mobile Menu -->
	<nav id="menu" class="hidden md:hidden flex-col transition-all">
		<a class="link" href="/">Home</a>
		<a class="link" href="/pages/invoice">Invoice</a>
		<!-- <a href="/pages/keysend">Keysend</a> -->
		<!-- <a href="/pages/login">Login</a> -->
		<!-- <a href="/pages/nodeInfo">Node Info</a> -->
		<a class="link" href="/pages/payStreamVideo">Stream Video</a>
		<!-- <a href="/pages/payScroll">Pay to Scroll</a> -->
	</nav>
</div>

<style>
	.link {
		@apply p-2 mx-4 align-baseline border-b-2 rounded-md border-yellow-300
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
