//Contract based on https://docs.openzeppelin.com/contracts/3.x/erc721
// SPDX-License-Identifier: MIT
pragma solidity >=0.7.3;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";


contract Badge is ERC721, Ownable {
    using Counters for Counters.Counter;
    using SafeMath for uint256;

    Counters.Counter private _tokenIds;

    address payable private _charityAddress;

    mapping(address => uint256) private _donations;

    uint256 private _donationThreshold;


    constructor(address payable _address, uint256 _threshold) public ERC721("Dino", "BDG") {
        _charityAddress = _address;
        _donationThreshold = _threshold;
    }


    event Mint(address _address, uint256 _token_id);


    // Checks whether the user is qualified to receive an NFT
    function checkQualification() public view returns (bool) {
        return _donations[msg.sender] >= _donationThreshold;
    }


    function checkProgress() public view returns (uint256) {
        return _donations[msg.sender];
    }


    // Donates money to the charity address
    function donate() public payable {
        require(msg.value > 0);

        _donations[msg.sender] = _donations[msg.sender].add(msg.value);

        _charityAddress.transfer(msg.value);
    }


    // Mints an NFT to a specific recipient
    function mintNFT(string memory tokenURI)
        public onlyOwner
    {
        require(_donations[msg.sender] >= _donationThreshold, 'User does not qualify for this NFT');

        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        emit Mint(address(this), newItemId);
    }
}