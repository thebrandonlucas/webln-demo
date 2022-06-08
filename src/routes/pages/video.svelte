<script lang="ts">
	import type { Invoice } from '$lib/types/invoice';
	import { delay } from '$lib/scripts/utils';

	import { sendPayment } from '$lib/scripts/webln';
	import { validatePayment } from '$lib/scripts/utils';
	import video from '$lib/.assets/never_gonna_give.mp4';

	let satoshisPerInterval: number = 1;
	let paymentIntervalSeconds: number;
	let memo: string;
	let maxIntervals: number;
	let videoSrc: string = '#';

	let streamToggled = false;
	// These values are bound to properties of the video
	let time = 0;
	let duration: number;
	let paused = true;

	let showControls = true;
	let showControlsTimeout: NodeJS.Timeout;

	// Used to track time of last mouse down event
	let lastMouseDown: number;

  let displayVideo = "#";

	function handleMove(this: any, e: any) {
		// Make the controls visible, but fade out after
		// 2.5 seconds of inactivity
		clearTimeout(showControlsTimeout);
		showControlsTimeout = setTimeout(() => (showControls = false), 2500);
		showControls = true;

		if (!duration) return; // video not loaded yet
		if (e.type !== 'touchmove' && !(e.buttons & 1)) return; // mouse not down

		const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
		// TODO: fix 'this' typescript err
		const { left, right } = this.getBoundingClientRect();
		time = (duration * (clientX - left)) / (right - left);
	}

	function format(seconds: number) {
		if (isNaN(seconds)) return '...';

		const minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);
		let secondStr: string = seconds.toString();
		if (seconds < 10) secondStr = '0' + seconds;

		return `${minutes}:${secondStr}`;
	}

	async function payStream() {
    console.log('video', video)
		try {
			const response: Response = await fetch('/video/invoice', {
				// headers: {
				// 	Range: 'bytes=0-499'
				// }
			});
			const invoice: Invoice = (await response.json()).invoice;
			const payment = await sendPayment(invoice.request);
			console.log(
				'payment',
				payment,
				invoice,
				await validatePayment(payment.preimage, invoice.secret)
			);
			const isPaymentValid = await validatePayment(payment.preimage, invoice.secret);
			if (isPaymentValid) {
				paused = false;
				// streamToggled = false;
        displayVideo = video;
			} else {
        paused = true;
        streamToggled = false;
        displayVideo = "#";
      }
		} catch (err) {
			// If the user confirms the first tx and doesn't set a budget,
			// then this will just keep looping until an error occurs
			console.error(err);
			streamToggled = false;
		}
	}

	async function handleStreamClick() {
		if (!streamToggled) {
      streamToggled = true;
			for (let i = 0; i < 100; i++) {
				if (!streamToggled) break;
				await payStream();
				await delay(1000);
			}
		} else {
      paused = true;
      streamToggled = false;
      // displayVideo = "#";
    }
	}
</script>

<h1 class="text-4xl text-center">Guess the video!</h1>

<div class="w-1/2 mx-auto">
	<video
		poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
		src={displayVideo}
		on:mousemove={handleMove}
		on:touchmove|preventDefault={handleMove}
		bind:currentTime={time}
		bind:duration
    bind:paused
	>
		<track kind="captions" />
	</video>

	<div class="controls" style="opacity: {duration && showControls ? 1 : 0}">
		<progress value={time / duration || 0} />

		<div class="info">
			<span class="time">{format(time)}</span>
			<span>click anywhere to {paused ? 'play' : 'pause'} / drag to seek</span>
			<span class="time">{format(duration)}</span>
		</div>
	</div>
</div>

<button type="button" class="lnbtn" on:click={handleStreamClick}>
	{#if streamToggled}
		Stop Streaming
	{:else}
		Stream!
	{/if}
</button>

<style>
	div {
		position: relative;
	}

	.controls {
		position: absolute;
		top: 0;
		width: 100%;
		transition: opacity 1s;
	}

	.info {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	span {
		padding: 0.2em 0.5em;
		color: white;
		text-shadow: 0 0 8px black;
		font-size: 1.4em;
		opacity: 0.7;
	}

	.time {
		width: 3em;
	}

	.time:last-child {
		text-align: right;
	}

	progress {
		display: block;
		width: 100%;
		height: 10px;
		-webkit-appearance: none;
		appearance: none;
	}

	progress::-webkit-progress-bar {
		background-color: rgba(0, 0, 0, 0.2);
	}

	progress::-webkit-progress-value {
		background-color: rgba(255, 255, 255, 0.6);
	}

	video {
		/* width: 50%; */
		width: 100%;
	}
</style>
