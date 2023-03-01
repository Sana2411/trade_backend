import Web3 from "web3";
import { Request, Response } from "express";
import express = require('express');
import bodyParser = require('body-parser');
import { ethers } from "ethers";



// Declaration of variables
const router = express();
const abiFile = require("./ABI/Token.json");
const abiFile1 = require("./abi/coinstar.json");

// Defining the network on which we are working
const web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-2-s2.binance.org:8545"));

// body parse krne me help kr rha h 
router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 5000 }));


router.post('/buy', async function (req: Request, res: Response) {
    try {
        const contractAddress = "0x555c31DeBb8E8D47823e27A7023F961cEd7DaF09";
        console.log(contractAddress);
        const myAddress = req.body.address;
        const key = req.body.walletKey;
        let contract = new web3.eth.Contract(abiFile1.ABI, contractAddress, { from: myAddress });
        const gasPrice = await web3.eth.getGasPrice();
        const tokenPrice = await contract.methods.tokenPrice().call();
        const priceInEther = web3.utils.fromWei(tokenPrice, 'ether')
        const token: number = req.body.token;
        let abc = 0;
        if (true) {
            abc = token * parseFloat(priceInEther);
        }
        if (abc > 0) {
            const valueToSend = web3.utils.toWei(abc.toString(), 'ether');
            console.log(priceInEther);

            let tx = contract.methods.buy(token).encodeABI();
            const rawTransaction = {
                gasPrice: gasPrice,
                gas: 550000,
                to: contractAddress,
                value: valueToSend,
                data: tx,
                chainId: 97
            };
            const signedTx = await web3.eth.accounts.signTransaction(rawTransaction, key);
            const buy = await web3.eth.sendSignedTransaction(signedTx.rawTransaction || 'hi im hare to help you');
            if (!buy) {
                res.status(400).json({ message: 'Failed to get details', flag: false });
            }
            return res.status(200).json({ message: buy, flag: true });
        }
        else {
            res.status(400).json({ message: 'Invalid BNB', flag: false });
        }
    } catch (error: any) {
        return res.status(404).json({ message: error.message.toString(), flag: false });

    }
});

router.post('/sell', async function (req: Request, res: Response) {
    try {
        const contractAddress = "0x3836c856060EA6723f31C40D2ac5E6FeA70a8919";
        const myAddress = req.body.address;
        const userId = req.body.id;
        console.log(abiFile1.ABI);


        const key = "8cfe57ad8305b1f7b074ca5412cc1da63f3e916543b7d3ed41e0b060bad269d0";


        let contract = new web3.eth.Contract(abiFile1.ABI, contractAddress, { from: myAddress });
        console.log(contract);

        const gasPrice = await web3.eth.getGasPrice();

        let tx = await contract.methods.sell(req.body.amount, req.body.id).encodeABI();
        const rawTransaction = {
            gasPrice: gasPrice,
            gas: 550000,
            to: contractAddress,
            data: tx,
            chainId: 97
        };
        const signedTx = await web3.eth.accounts.signTransaction(rawTransaction, key);
        const sell = await web3.eth.sendSignedTransaction(signedTx.rawTransaction || 'hi im hare to help you');
        if (!sell) {
            res.status(400).json({ message: 'Failed to get details', flag: false });
        }
        return res.status(200).json({ message: sell, flag: true });
    } catch (error: any) {
        return res.status(404).json({ message: error.message.toString(), flag: false });

    }
});



const port = 5000;
router.listen(port, () => console.log(`Listening on port ${port}...`)
);


  // const amount = web3.utils.toWei(Number(req.body.token).toFixed(18), 'ether')

        // let tx = await contract.methods.buy({
        //     value: ethers.parseEther(amount.toString())
        // }).encodeABI();
        // // let tx = await contract.methods.buy(amount).encodeABI();
        // console.log(amount.toString())
        // if (amount !== undefined) {
        //     // call the method
        //     amount.toString();
        // } else {
        //     // handle the error
        //     console.log('variable is undefined');
        // }