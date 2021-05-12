const fs = require('fs');
const contractABI = require("../src/artifacts/contracts/Badge.sol/Badge.json");

async function deploy() {
    const Badge = await ethers.getContractFactory("Badge");
    const threshold = ethers.utils.parseEther('0.1').toString();
    
    // Start deployment, returning a promise that resolves to a contract object
    const badge = await Badge.deploy('0x86e01A74081EC882eEA1de77e8C56f71783CFfbD', threshold); // args go inside the deploy()
    console.log("Contract deployed to address:", badge.address);

    contractABI['networkAddress'] = badge.address

    await fs.promises.writeFile("./src/artifacts/contracts/Badge.sol/Badge.json", JSON.stringify(contractABI, null, 4), function(err, result) {
      if (err) console.log('error', err);
    })
}
 
deploy()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
