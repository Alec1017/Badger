require('dotenv').config();

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL;
const METAMASK_PUBLIC_KEY = process.env.METAMASK_PUBLIC_KEY;
const METAMASK_PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(ALCHEMY_API_URL);

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
const contractAddress = "0xef60f6FdAfCF49a82281ef5bfc48001701A0E265"; //0x267A2265e10A2eEACe084818F97B520960bC428b
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);


async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(METAMASK_PUBLIC_KEY, 'latest'); // get latest nonce

    const tx = {
        'from': METAMASK_PUBLIC_KEY,
        'to': contractAddress,
        'nonce': nonce,
        'gas': 500000,
        'data': nftContract.methods.mintNFT(METAMASK_PUBLIC_KEY, tokenURI).encodeABI()
    };

    console.log(tx)

    const signPromise = web3.eth.accounts.signTransaction(tx, METAMASK_PRIVATE_KEY);

    signPromise
        .then((signedTx) => {
            web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, hash) {
                if (!err) {
                    console.log('The hash of the transaction is: ', hash, '\nCheck Alchemy Mempool to view the status of the transaction.');
                } else {
                    console.log('Something went wrong when submitting the transaction:', err);
                }
            })
        })
        .catch((err) => {
            console.log('Promise failed:', err);
        });
};

mintNFT("https://gateway.pinata.cloud/ipfs/QmZjXRyaXyfoH8jwai1T42WKgrk4kDSqCbkfKQqMJDuCPN");