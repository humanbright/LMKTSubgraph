import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Buy,
  Deployed,
  Graduated,
  Initialized,
  Launched,
  OwnershipTransferred,
  Sell
} from "../generated/Bonding/Bonding"

export function createBuyEvent(
  buyer: Address,
  sybilIn: BigInt,
  tokenOut: BigInt
): Buy {
  let buyEvent = changetype<Buy>(newMockEvent())

  buyEvent.parameters = new Array()

  buyEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam(
      "sybilIn",
      ethereum.Value.fromUnsignedBigInt(sybilIn)
    )
  )
  buyEvent.parameters.push(
    new ethereum.EventParam(
      "tokenOut",
      ethereum.Value.fromUnsignedBigInt(tokenOut)
    )
  )

  return buyEvent
}

export function createDeployedEvent(
  token: Address,
  amount0: BigInt,
  amount1: BigInt
): Deployed {
  let deployedEvent = changetype<Deployed>(newMockEvent())

  deployedEvent.parameters = new Array()

  deployedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  deployedEvent.parameters.push(
    new ethereum.EventParam(
      "amount0",
      ethereum.Value.fromUnsignedBigInt(amount0)
    )
  )
  deployedEvent.parameters.push(
    new ethereum.EventParam(
      "amount1",
      ethereum.Value.fromUnsignedBigInt(amount1)
    )
  )

  return deployedEvent
}

export function createGraduatedEvent(
  token: Address,
  agentToken: Address
): Graduated {
  let graduatedEvent = changetype<Graduated>(newMockEvent())

  graduatedEvent.parameters = new Array()

  graduatedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  graduatedEvent.parameters.push(
    new ethereum.EventParam(
      "agentToken",
      ethereum.Value.fromAddress(agentToken)
    )
  )

  return graduatedEvent
}

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createLaunchedEvent(
  sender: Address,
  token: Address,
  pair: Address,
  param3: BigInt
): Launched {
  let launchedEvent = changetype<Launched>(newMockEvent())

  launchedEvent.parameters = new Array()

  launchedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  launchedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  launchedEvent.parameters.push(
    new ethereum.EventParam("pair", ethereum.Value.fromAddress(pair))
  )
  launchedEvent.parameters.push(
    new ethereum.EventParam("param3", ethereum.Value.fromUnsignedBigInt(param3))
  )

  return launchedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSellEvent(
  seller: Address,
  tokenIn: BigInt,
  sybilOut: BigInt
): Sell {
  let sellEvent = changetype<Sell>(newMockEvent())

  sellEvent.parameters = new Array()

  sellEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIn",
      ethereum.Value.fromUnsignedBigInt(tokenIn)
    )
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "sybilOut",
      ethereum.Value.fromUnsignedBigInt(sybilOut)
    )
  )

  return sellEvent
}
