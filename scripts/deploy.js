const { ethers } = require("hardhat");

async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT");

    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy();
    console.log("Contract deployed to address:", myNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
    // 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512