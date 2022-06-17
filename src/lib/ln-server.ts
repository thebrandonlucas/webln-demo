import lightning from 'lightning'

export const { lnd } = lightning.authenticatedLndGrpc({
  cert: process.env.CERT,
  macaroon: process.env.MACAROON,
  socket: process.env.SOCKET
});