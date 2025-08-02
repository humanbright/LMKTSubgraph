import {
  Buy as BuyEvent,
  Deployed as DeployedEvent,
  Graduated as GraduatedEvent,
  Initialized as InitializedEvent,
  Launched as LaunchedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Sell as SellEvent
} from "../generated/Bonding/Bonding"
import {
  Buy,
  Deployed,
  Graduated,
  Initialized,
  Launched,
  OwnershipTransferred,
  Sell
} from "../generated/schema"

export function handleBuy(event: BuyEvent): void {
  let entity = new Buy(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.token = event.params.token
  entity.buyer = event.params.buyer
  entity.sybilIn = event.params.sybilIn
  entity.tokenOut = event.params.tokenOut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeployed(event: DeployedEvent): void {
  let entity = new Deployed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGraduated(event: GraduatedEvent): void {
  let entity = new Graduated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.agentToken = event.params.agentToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLaunched(event: LaunchedEvent): void {
  let entity = new Launched(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.token = event.params.token
  entity.pair = event.params.pair

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSell(event: SellEvent): void {
  let entity = new Sell(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.seller = event.params.seller
  entity.tokenIn = event.params.tokenIn
  entity.sybilOut = event.params.sybilOut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
