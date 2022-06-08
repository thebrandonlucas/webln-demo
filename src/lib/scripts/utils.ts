export async function delay(ms = 1000) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// Source: https://stackoverflow.com/a/48161723
export async function sha256(message: string) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message);                    

  // hash the message
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string                  
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

export async function validatePayment(preimage: string, paymentHashSecret: string) {
	// const hash = await sha256(preimage);
	// if (hash === paymentHash) return true;
	// return false;
  return preimage === paymentHashSecret;
}