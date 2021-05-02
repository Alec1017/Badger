const fs = require('fs')
const contractABI = require("../src/artifacts/contracts/Badge.sol/Badge.json");

async function main() {
    const Badge = await ethers.getContractFactory("Badge");
    
    // Start deployment, returning a promise that resolves to a contract object
    const badge = await Badge.deploy();
    console.log("Contract deployed to address:", badge.address);

    contractABI['networkAddress'] = badge.address

    await fs.promises.writeFile("./src/artifacts/contracts/Badge.sol/Badge.json", JSON.stringify(contractABI, null, 4), function(err, result) {
      if (err) console.log('error', err);
    })
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });