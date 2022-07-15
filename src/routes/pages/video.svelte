<script lang="ts">
	import { sendPayment } from '$lib/scripts/webln';
	import { delay, validatePayment } from '$lib/scripts/utils';
	import video from '$lib/.assets/never_gonna_give.mp4';

	const PAYMENT_INTERVAL_MS = 5000;

	let streamToggled = false;
	// These values are bound to properties of the video
	let time = 0;
	let duration: number;
	let paused = true;

	let showControls = true;
	let showControlsTimeout: NodeJS.Timeout;

	let displayVideo = '#';

	function handleMove(this: any, e: any) {
		// Make the controls visible, but fade out after
		// 2.5 seconds of inactivity
		clearTimeout(showControlsTimeout);
		showControlsTimeout = setTimeout(() => (showControls = false), 2500);
		showControls = true;

		if (!duration) return; // video not loaded yet
		if (e.type !== 'touchmove' && !(e.buttons & 1)) return; // mouse not down

		const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
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
		try {
      console.log('before')
			const response: Response = await fetch('/video/invoice', {
				// TODO: implement streaming on server side
				// headers: {
				// 	Range: 'bytes=0-499'
				// }
			});
			const { payment_request, payment_hash } = await response.json();

      console.log('pay request', payment_request, payment_hash)
			// If payment takes longer than a second,
			// make the video stop until payment has been secured
			const timeout = setTimeout(() => {
				paused = true;
			}, PAYMENT_INTERVAL_MS);
			const paymentResponse = await sendPayment(payment_request);
      console.log('payresponse', paymentResponse)
			clearTimeout(timeout);

			const isPaymentValid = await validatePayment(paymentResponse.preimage, payment_hash);

			if (isPaymentValid) {
				paused = false;
				displayVideo = video;
			} else {
				paused = true;
				streamToggled = false;
				displayVideo = '#';
			}
		} catch (err: any) {
			alert(err.message);
			streamToggled = false;
			throw Error(err);
		}
	}

	async function handleStreamClick() {
		if (!streamToggled) {
			streamToggled = true;
			// 240 seconds is approx length of video / 5 = 48
			const VIDEO_PAYMENT_INTERVALS = 48;
			for (let i = 0; i < VIDEO_PAYMENT_INTERVALS; i++) {
				if (!streamToggled) break;
				await payStream();
				// Only request payment after the first interval is up
				await delay(PAYMENT_INTERVAL_MS);
			}
      paused = true;
      streamToggled = false;
		} else {
			paused = true;
			streamToggled = false;
		}
	}
</script>

<div class="w-1/2 mx-auto text-center">
	<h1 class="text-4xl my-4">Pay for video by the second!</h1>
	<p>Click "Stream!" to play a video for a rate of 2 sats per 5 seconds</p>
	<br />
	<p>Remember to set a budget!</p>
	<br />
</div>

<div class="w-1/2 mx-auto text-center">
	<!-- svelte-ignore component-name-lowercase -->
	<video
		poster="https://i.kym-cdn.com/entries/icons/original/000/018/489/nick-young-confused-face-300x256-nqlyaa.jpg"
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
	<button type="button" class="lnbtn my-3 self-center" on:click={handleStreamClick}>
		{#if streamToggled}
			Stop Streaming
		{:else}
			Stream!
		{/if}
	</button>
</div>

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
