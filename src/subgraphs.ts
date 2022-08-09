import { ChainId } from './constants'

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const BLOCKS_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: ZERO_ADDRESS,
  [ChainId.FLARE]: 'https://thegraph.com/explorer/subgraph/dasconnor/FLARE-blocks'
}

export const EXCHANGE_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange-COSTON',
  [ChainId.FLARE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange'
}

export const MASTERCHEF_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/masterchefv2-COSTON',
  [ChainId.FLARE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/masterchefv2'
}

export const DEXCANDLES_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles-COSTON',
  [ChainId.FLARE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles'
}

export const BAR_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: ZERO_ADDRESS,
  [ChainId.FLARE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/bar'
}

export const LENDING_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending-COSTON',
  [ChainId.FLARE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending'
}

export const ROCKET_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/rocket-COSTON',
  [ChainId.FLARE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/rocket'
}

export const SJOE_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/sjoe-COSTON',
  [ChainId.FLARE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/sjoe'
}

export const MONEY_MAKER_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/moneymaker-COSTON',
  [ChainId.FLARE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/money-maker'
}

export const VEJOE_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/vejoe-COSTON',
  [ChainId.FLARE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/vejoe'
}

export const BOOSTED_MASTERCHEF_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/boostedmasterchef-COSTON',
  [ChainId.FLARE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/boosted-master-chef'
}

export const NFT_CONTRACTS_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/nft-contract-COSTON',
  [ChainId.FLARE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/nft-contracts'
}

export const JOEPEG_MARKETPLACE_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/marketplace-COSTON',
  [ChainId.FLARE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/marketplace'
}
