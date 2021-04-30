const fs = require('fs')
const contractABI = require("../src/artifacts/contracts/MyNFT.sol/MyNFT.json");

async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT");
    
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy();
    console.log("Contract deployed to address:", myNFT.address);

    contractABI['networkAddress'] = myNFT.address

    await fs.promises.writeFile("./src/artifacts/contracts/MyNFT.sol/MyNFT.json", JSON.stringify(contractABI, null, 4), function(err, result) {
      if (err) console.log('error', err);
    })
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });