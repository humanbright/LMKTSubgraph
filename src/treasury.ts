import {
  MktPurchased as MktPurchasedEvent,
  MktSold as MktSoldEvent,
  CollateralWhitelisted as CollateralWhitelistedEvent,
  CommerceFeeReceived as CommerceFeeReceivedEvent,
  PriceFeedSet as PriceFeedSetEvent,
  TokenQueryIdSet as TokenQueryIdSetEvent,
  MktPrice as MktPriceEvent
} from "../generated/Treasury/Treasury"
import {
  MktPurchased,
  MktSold,
  CollateralWhitelisted,
  CommerceFeeReceived,
  PriceFeedSet,
  TokenQueryIdSet,
  MktPrice
} from "../generated/schema"

export function handlePurchase(event: MktPurchasedEvent): void {
  let entity = new MktPurchased(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.token = event.params.collateralToken
  entity.buyer = event.params.buyer
  entity.tokenIn = event.params.collateralAmount
  entity.tokenOut = event.params.lmktAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSold(event: MktSoldEvent): void {
  let entity = new MktSold(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.collateralToken
  entity.tokenIn = event.params.lmktAmount
  entity.tokenOut = event.params.collateralAmount
  entity.seller = event.params.seller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWhitelisted(event: CollateralWhitelistedEvent): void {
  let entity = new CollateralWhitelisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.isWhitelisted = event.params.isWhitelisted

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeReceived(event: CommerceFeeReceivedEvent): void {
  let entity = new CommerceFeeReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount
  entity.token = event.params.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeedSet(event: PriceFeedSetEvent): void {
  let entity = new PriceFeedSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.feed = event.params.feed
  entity.token = event.params.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleQueryIdSet(
  event: TokenQueryIdSetEvent
): void {
  let entity = new TokenQueryIdSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.query = event.params.queryId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePrice(event: MktPriceEvent): void {
  let entity = new MktPrice(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenAmount = event.params.lmktAmount
  entity.collateralAmount = event.params.collateralValue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
