/* eslint-disable prefer-const */
import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
  LikeEvent,
  TweetEvent,
  Tweet as Contract,
} from "../generated/Tweet/Tweet";
import { Tweet, User, Like } from "../generated/schema";

export function handleTweetEvent(event: TweetEvent): void {
  let entity = new Tweet(event.params.tokenId.toHex());
  entity.userAddress = event.params.userAddress;
  entity.tokenId = event.params.tokenId;
  entity.title = event.params.title;
  entity.body = event.params.body;
  entity.image = event.params.image;
  entity.createAt = event.block.timestamp;
  entity.like = 0;

  entity.save();
}

export function handleLikeEvent(event: LikeEvent): void {
  let entity = new Like(
    `${event.params.userAddress.toHex()}-${event.params.tokenId}`
  );
  entity.userAddress = event.params.userAddress;
  entity.tokenId = event.params.tokenId;
  entity.save();

  // twiit
  let tweet = Tweet.load(event.params.tokenId.toHex());
  if (tweet !== null) {
    tweet.like = tweet.like + 1;
    tweet.save();
  }
}
