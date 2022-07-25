// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "hardhat/console.sol";

contract Tweet is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter _tokenIds;

    // address to like
    mapping(address => uint256) public likes;

    // mapping(uint256 => TweetToken) public tweets;

    // Event to Tweeted
    event TweetEvent(
        address indexed userAddress,
        uint256 tokenId,
        string title,
        string body,
        string image,
        uint256 createAt
    );
    // Event to Like
    event LikeEvent(address indexed userAddress, uint256 tokenId);

    struct TweetToken {
        uint256 id; // tokenId
        string title;
        string body;
        string image;
    }

    constructor() ERC721("Tweet", "tweets") {}

    function mint(
        string memory _title,
        string memory _body,
        string memory _image
    ) public returns (uint256) {
        uint256 newId = _tokenIds.current();
        _mint(_msgSender(), newId);
        _tokenIds.increment();
        emit TweetEvent(
            _msgSender(),
            newId,
            _title,
            _body,
            _image,
            block.timestamp
        );

        return newId;
    }

    function like(uint256 _tokenId) public {
        uint256 newId = _tokenIds.current();
        require(likes[_msgSender()] == 0, "Like exists!");
        require(newId >= _tokenId, "Tweet not exists!");
        emit LikeEvent(_msgSender(), _tokenId);
        likes[_msgSender()] = _tokenId;
    }
}
