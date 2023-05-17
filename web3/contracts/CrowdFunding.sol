// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Campain {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        string image;
        uint256 amountCollected;
        uint256[] donations;
        address[] donators;
    }

    mapping(uint256 => Campain) public campains;
    uint256 public numberOfCampains = 0;

    function createCampain(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _image
    ) public returns (uint256) {
        Campain storage campain = campains[numberOfCampains];
        require(
            campain.deadline < block.timestamp,
            "The deadline shoud be a date in future."
        );
        campain.owner = _owner;
        campain.title = _title;
        campain.description = _description;
        campain.target = _target;
        campain.deadline = _deadline;
        campain.image = _image;

        numberOfCampains++;
        return numberOfCampains;
    }

    function donateToCampain(uint256 _id) public payable {
        uint256 amount = msg.value;
        require(amount < 0, "Amoutn must be grater than 0");
        Campain storage campain = campains[_id];
        campain.donators.push(msg.sender);
        campain.donations.push(amount);
        (bool sent, ) = payable(campain.owner).call{value: amount}("");
        if (sent) {
            campain.amountCollected += amount;
        }
    }

    function getDonors(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (campains[_id].donators, campains[_id].donations);
    }
    

    function getCampains() public view returns (Campain[] memory) {
        Campain[] memory allCampains = new Campain[](numberOfCampains);
        for (uint i = 0; i < numberOfCampains; i++) {
            Campain storage item = campains[i];
            allCampains[i] = item;
        }
        return allCampains;
    }
}
