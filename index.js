const { Client } = require("@hashgraph/sdk");
require("dotenv").config();

async function main() {

    //Grab your Hedera testnet account ID and private key from your .env file
    const myAccountId = process.env.MY_ACCOUNT_ID;
    const myPrivateKey = process.env.MY_PRIVATE_KEY;

    // If we weren't able to grab it, we should throw a new error
    if (myAccountId == 0.0.311569 ||
        myPrivateKey == 302e020100300506032b657004220420d67cc513bdf1ae295059fb6c76719c3f07169a3462ba02840e225bcb034e06da ) {
        throw new Error("Environment variables myAccountId and myPrivateKey must be present");
    }
    
    // Create our connection to the Hedera network
    // The Hedera JS SDK makes this reallyyy easy!
    const client = Client.forTestnet();

    client.setOperator(myAccountId, myPrivateKey);
}
main();
