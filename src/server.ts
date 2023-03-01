import Web3 from "web3";
import { Request, Response } from "express";
import express = require('express');
import bodyParser = require('body-parser');
import { ethers } from "ethers";
var cors = require('cors')




const router = express();
const abiFile = require("./ABI/Token.json");
const abiFile1 = require("./abi/coinstar.json");

const web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-2-s2.binance.org:8545"));

router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 5000 }));


router.use(cors());

var corsOptions = {
    origin: 'http://127.0.0.1:5501',
    optionsSuccessStatus: 200
}


router.post('/buy', cors(corsOptions), async function (req: Request, res: Response) {
    try {
        const contractAddress = "0x555c31DeBb8E8D47823e27A7023F961cEd7DaF09";
        // console.log(contractAddress);
        const myAddress = req.body.address;
        const key = req.body.walletKey;
        let contract = new web3.eth.Contract(abiFile1.ABI, contractAddress, { from: myAddress });
        const gasPrice = await web3.eth.getGasPrice();
        const valueToSend = web3.utils.toWei(req.body.eth, 'ether');
        // console.log(valueToSend);

        let tx = contract.methods.buy(req.body.token).encodeABI();
        const rawTransaction = {
            gasPrice: gasPrice,
            gas: 550000,
            to: contractAddress,
            value: valueToSend,
            data: tx,
            chainId: 97
        };
        const signedTx = await web3.eth.accounts.signTransaction(rawTransaction, key);
        const reciept = await web3.eth.sendSignedTransaction(signedTx.rawTransaction || 'hi im hare to help you');
        if (!reciept) {
            res.status(400).json({ message: 'Failed to get details', flag: false });
        }
        return res.status(200).json({ message: reciept, flag: true });
    } catch (error: any) {
        return res.status(404).json({ message: error.message.toString(), flag: false });

    }
});

router.post('/sell', cors(corsOptions), async function (req: Request, res: Response) {
    try {
        const contractAddress = "0x555c31DeBb8E8D47823e27A7023F961cEd7DaF09";
        const myAddress = req.body.address;
        const id = req.body.id;
        const key = req.body.walletKey;
        let contract = new web3.eth.Contract(abiFile1.ABI, contractAddress, { from: myAddress });
        const gasPrice = await web3.eth.getGasPrice();
        let tx = await contract.methods.sell(req.body.amount, id).encodeABI();
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

router.get('/getID', async function (req: Request, res: Response) {
    try {
        const contractAddress = "0x555c31DeBb8E8D47823e27A7023F961cEd7DaF09";
        let contract = new web3.eth.Contract(abiFile1.ABI, contractAddress);
        let ID = await contract.methods.getID(req.body.user).call();
        if (!ID) {
            return res.status(400).json({ message: 'Failed to get details', flag: false });
        }
        return res.status(200).json({ message: `The ID of the user is: ${ID}`, flag: true });
    } catch (error: any) {
        return res.status(404).json({ message: error.message.toString(), flag: false });
    }
});
