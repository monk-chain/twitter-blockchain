// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "hardhat/console.sol";

/** @title Profile.
 * @notice It is a contract for users to bind their address
 * to a customizable profile by depositing a NFT.
 */
contract PancakeProfile is AccessControl {
    using Counters for Counters.Counter;

    mapping(address => User) public users;

    // Used for generating the userId
    Counters.Counter public countUsers;

    // Event to notify that a user is registered
    event UserNew(address indexed userAddress, uint256 userId);

    // Modifier for admin roles
    modifier onlyOwner() {
        require(
            hasRole(DEFAULT_ADMIN_ROLE, _msgSender()),
            "Not the main admin"
        );
        _;
    }

    struct User {
        uint256 userId;
        address account;
        string name;
        string image;
    }

    constructor() public {}

    /**
     * @dev To create a user profile. It sends the NFT to the contract
     */
    function createProfile(string memory _name, string memory _image) public {
        User memory user = users[_msgSender()];
        require(user.account == address(0), "User exists!");

        // Increment the countUsers counter and get userId
        countUsers.increment();
        uint256 newUserId = countUsers.current();

        // Add data to the struct for newUserId
        users[_msgSender()] = User({
            userId: newUserId,
            account: _msgSender(),
            name: _name,
            image: _image
        });

        // Emit an event
        emit UserNew(_msgSender(), newUserId);
    }

    /**
     * @dev Check the user's profile for a given address
     */
    function getUserProfile(address _userAddress)
        external
        view
        returns (
            uint256,
            string memory,
            address,
            string memory
        )
    {
        return (
            users[_userAddress].userId,
            users[_userAddress].name,
            users[_userAddress].account,
            users[_userAddress].image
        );
    }

    // TODO list

    // // Event to notify a user pausing her profile
    // event UserPause(address indexed userAddress, uint256 teamId);

    // // Event to notify that user points are increased
    // event UserPointIncrease(address indexed userAddress, uint256 numberPoints, uint256 indexed campaignId);

    // // Event to notify that a list of users have an increase in points
    // event UserPointIncreaseMultiple(address[] userAddresses, uint256 numberPoints, uint256 indexed campaignId);

    // // Event to notify that a user is reactivating her profile
    // event UserReactivate(address indexed userAddress, uint256 teamId, address nftAddress, uint256 tokenId);

    // // Event to notify that a user is pausing her profile
    // event UserUpdate(address indexed userAddress, address nftAddress, uint256 tokenId);

    /**
     * @dev To update user profile.
     * Callable only by registered users.
     */
    // function updateProfile(address _nftAddress, uint256 _tokenId) external {
    //     require(hasRegistered[_msgSender()], "Has not registered");
    //     require(hasRole(NFT_ROLE, _nftAddress), "NFT address invalid");
    //     require(users[_msgSender()].isActive, "User not active");

    //     address currentAddress = users[_msgSender()].nftAddress;
    //     uint256 currentTokenId = users[_msgSender()].tokenId;

    //     // Interface to deposit the NFT contract
    //     IERC721 nftNewToken = IERC721(_nftAddress);

    //     require(
    //         _msgSender() == nftNewToken.ownerOf(_tokenId),
    //         "Only NFT owner can update"
    //     );

    //     // Transfer token to new address
    //     nftNewToken.safeTransferFrom(_msgSender(), address(this), _tokenId);

    //     // Transfer CAKE token to this address
    //     cakeToken.safeTransferFrom(
    //         _msgSender(),
    //         address(this),
    //         numberCakeToUpdate
    //     );

    //     // Interface to deposit the NFT contract
    //     IERC721 nftCurrentToken = IERC721(currentAddress);

    //     // Transfer old token back to the owner
    //     nftCurrentToken.safeTransferFrom(
    //         address(this),
    //         _msgSender(),
    //         currentTokenId
    //     );

    //     // Update mapping in storage
    //     users[_msgSender()].nftAddress = _nftAddress;
    //     users[_msgSender()].tokenId = _tokenId;

    //     emit UserUpdate(_msgSender(), _nftAddress, _tokenId);
    // }
}
