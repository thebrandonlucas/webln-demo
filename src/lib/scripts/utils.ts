export async function delay(ms = 1000) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// Source: https://stackoverflow.com/a/48161723
export function sha256(message: string) {
  const match = message.match(/.{1,2}/g);
  if (!match) return null;
  const msgUint8 = new Uint8Array(match.map((byte) => parseInt(byte, 16)));

  //const msgUint8 = new TextEncoder().encode(message);
  return crypto.subtle.digest('SHA-256', msgUint8).then(hashBuffer => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  });
}

// If hash of preimage === paymentHash, return true
export async function validatePayment(preimage: string, paymentHash: string) {
	const hash = await sha256(preimage);
	if (hash === paymentHash) return true;
	return false;
  // return preimage === paymentHashSecret;
}