import { validatePayment } from '$lib/scripts/utils';
import type { RequestEvent } from '@sveltejs/kit';

export async function get(request: RequestEvent) {
	// TODO: Secure video behind paywall using Range header to get chunks per sat
	// https://blog.logrocket.com/build-video-streaming-server-node/
	// https://github.com/sveltejs/kit/pull/3384
	// const videoSize = fs.statSync('./assets/never_gonna_give.mp4').size;
}
