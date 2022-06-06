export interface Invoice {
  chain_address?: string,
  created_at: string,
  description?: string,
  id: string,
  mtokens?: string,
  payment?: string,
  request: string,
  secret: string,
  tokens?: number
}