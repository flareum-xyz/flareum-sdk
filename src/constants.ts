import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  COSTON = 16,
  FLARE = 14

}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

/**
 * DEX SDK
 */
export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: '0xF5c7d9733e5f53abCC1695820c4818C59B457C2C',
  [ChainId.FLARE]: '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10'
}

export const FLU_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: '0x477Fd10Db0D80eAFb773cF623B258313C3739413',
  [ChainId.FLARE]: '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd'
}

export const MASTERCHEF_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: '0xEAA9637E54D4Da88d7A56E797C2EAa4950111033',
  [ChainId.FLARE]: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: '0xd7f655E3376cE2D7A2b08fF01Eb3B1023191A901',
  [ChainId.FLARE]: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4'
}

export const MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: '0x6De03a4221d325Edc9707CEdeff9C150e99d6eC5',
  [ChainId.FLARE]: '0x861726BFE27931A4E22a7277bDe6cb8432b65856'
}

export const BORINGHELPER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: '0x832452DBa66232193C0fb525D5165a3A58b6811B',
  [ChainId.FLARE]: '0x1dd4D86180EEe39ac4fB35ECa67CACF608Ab5741'
}

export const FARMLENSV2_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: '0x6B41A932D2A9f00476229733980D80EE11Dd1617',
  [ChainId.FLARE]: '0xF16d25Eba0D8E51cEAF480141bAf577aE55bfdd2'
}

export const MONEY_MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: '0x6De03a4221d325Edc9707CEdeff9C150e99d6eC5',
  [ChainId.FLARE]: '0x63C0CF90aE12190B388F9914531369aC1e4e4e47'
}

export const INIT_CODE_HASH: { [chainId in ChainId]: string } = {
  [ChainId.COSTON]: '0x6c67ac67d0dad54be7b066edd9b4154fb5a0ab7d01232259b9ff26ebc1739ba2',
  [ChainId.FLARE]: '0x0bbca9af0511ad1a1da383135cf3a8d2ac620e549ef9f6ae3a4c33c2fed0af91'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
