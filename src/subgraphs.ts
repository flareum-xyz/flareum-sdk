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


export const MONEY_MAKER_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/moneymaker-COSTON',
  [ChainId.FLARE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/money-maker'
}