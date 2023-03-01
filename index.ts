
// // calling different packages which we install
// import Web3 from "web3";
// import { Request, Response } from "express";
// import express = require('express');
// import bodyParser = require('body-parser');

// // Declaration of variables
// const router = express();
// // const abiFile = require("./ABI/Token.json");
// const abiFile1 = require("./ABI/Tap.json");

// // Defining the network on which we are working
// const web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-2-s2.binance.org:8545"));

// // body parse krne me help kr rha h
// router.use(bodyParser.json({ limit: '50mb' }));
// router.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 5000 }));

// ////////////////////SOURCE CODE OF ABI//////////////GET BALANCE OF USER/////////////////////////
// router.get('/getBalance', async function (req: Request, res: Response) {
//     try {
//         let contract = new web3.eth.Contract(abiFile.abi, abiFile.contractAddress);

//         let bal = await contract.methods.balanceOf(req.body.address).call();

//         if (!bal) {
//             return res.status(400).json({ message: 'Failed to get details', flag: false });
//         }
//         return res.status(200).json({ message: `The balance of the user is: ${bal}`, flag: true });
//     } catch (error: any) {
//         return res.status(404).json({ message: error.message.toString(), flag: false });
//     }
// });

// router.get('/getallowance', async function (req: Request, res: Response) {
//     try {
//         let contract = new web3.eth.Contract(abiFile.abi, abiFile.contractAddress);
//         let ownerAddress = req.body.address1;

//         let spenderAddress = req.body.address;
//         let allowance = await contract.methods.allowance(ownerAddress, spenderAddress).call();
//         if (!allowance) {
//             return res.status(400).json({ message: 'Fail to get details', flag: false });
//         }
//         return res.status(200).json({ message: `The allowance of the spender is: ${allowance}`, flag: true });

//     } catch (error: any) {
//         return res.status(404).json({ message: error.message.toString(), flag: false });
//     }

// });
// router.get('/getdecimals', async function (req: Request, res: Response) {
//     try {
//         let contract = new web3.eth.Contract(abiFile.abi, abiFile.contractAddress);
//         let decimals = await contract.methods.decimals().call();
//         if (!decimals) {
//             return res.status(400).json({ message: 'Fail to get details', flag: false });
//         }
//         return res.status(200).json({ message: `The decimal of my token is: ${decimals}`, flag: true });
//     } catch (error: any) {
//         return res.status(404).json({ message: error.message.toString(), flag: false });
//     }

// });

// router.get('/getname', async function (req: Request, res: Response) {
//     try {
//         let contract = new web3.eth.Contract(abiFile.abi, abiFile.contractAddress);
//         let name = await contract.methods.name().call();
//         if (!name) {
//             return res.status(400).json({ message: 'Fail to get details', flag: false });
//         }
//         return res.status(200).json({ message: `The name of my token is: ${name}`, flag: true });
//     } catch (error: any) {
//         return res.status(404).json({ message: error.message.toString(), flag: false });
//     }

// });

// router.get('/getowner', async function (req: Request, res: Response) {
//     try {
//         let contract = new web3.eth.Contract(abiFile.abi, abiFile.contractAddress);
//         let owner = await contract.methods.owner().call();
//         if (!owner) {
//             return res.status(400).json({ message: 'Fail to get details', flag: false });
//         }
//         return res.status(200).json({ message: ` The owner of my token is: ${owner}`, flag: true });
//     } catch (error: any) {
//         return res.status(404).json({ message: error.message.toString(), flag: false });
//     }

// });

// router.get('/getsymbol', async function (req: Request, res: Response) {
//     try {
//         let contract = new web3.eth.Contract(abiFile.abi, abiFile.contractAddress);
//         let symbol = await contract.methods.symbol().call();

//         if (!symbol) {
//             return res.status(400).json({ message: 'Fail to get details', flag: false });
//         }
//         return res.status(200).json({ message: ` The symbol of my token is: ${symbol}`, flag: true });
//     } catch (error: any) {
//         return res.status(404).json({ message: error.message.toString(), flag: false });
//     }

// });

// router.get('/getTokenInfo', async function (req: Request, res: Response) {
//     try {
//         console.log("hiiiiii sanaan");

//         let contract = new web3.eth.Contract(abiFile.abi, abiFile.contractAddress);
//         let totalSupply = await contract.methods.totalSupply().call();
//         let symbol = await contract.methods.symbol().call();
//         let owner = await contract.methods.owner().call();
//         let name = await contract.methods.name().call();
//         let decimals = await contract.methods.decimals().call();



//         if (!totalSupply) {
//             return res.status(400).json({ message: 'Fail to get details', flag: false });
//         }
//         return res.status(200).json({
//             message: {
//                 name: name,
//                 symbol: symbol,
//                 decimals: decimals,
//                 totalSupply: totalSupply,
//                 owner: owner,
//             }, flag: true
//         });
//     } catch (error: any) {
//         return res.status(404).json({ message: error.message.toString(), flag: false });
//     }

// });


// router.get('/gettotalSupply', async function (req: Request, res: Response) {
//     try {
//         let contract = new web3.eth.Contract(abiFile.abi, abiFile.contractAddress);
//         let totalSupply = await contract.methods.totalSupply().call();

//         if (!totalSupply) {
//             return res.status(400).json({ message: 'Fail to get details', flag: false });
//         }
//         return res.status(200).json({ message: ` The TotalSupply of my token is: ${totalSupply}`, flag: true });
//     } catch (error: any) {
//         return res.status(404).json({ message: error.message.toString(), flag: false });
//     }

// });

// // ****************************

// router.post('/buy', async function (req: Request, res: Response) {
//     try {
//         const contractAddress = "0x79d3987e2DEabDE82aEAb7268D7893D2139353A5";
//         const myAddress = req.body.address;

//         const key = "3c1918e765a2682cf053706cbdbe327a55e24b42e1210566004678fb6ea549dc";


//         let contract = new web3.eth.Contract(abiFile1.abi, abiFile1.contractAddress, { from: myAddress });
//         console.log(contract);

//         const gasPrice = await web3.eth.getGasPrice();

//         let tx = await contract.methods.buy(req.body.amount).encodeABI();
//         const rawTransaction = {
//             gasPrice: gasPrice,
//             gas: 550000,
//             to: contractAddress,
//             data: tx,
//             chainId: 97
//         };
//         const signedTx = await web3.eth.accounts.signTransaction(rawTransaction, key);
//         const buy = await web3.eth.sendSignedTransaction(signedTx.rawTransaction || 'hi im hare to help you');
//         if (!buy) {
//             res.status(400).json({ message: 'Failed to get details', flag: false });
//         }
//         return res.status(200).json({ message: buy, flag: true });
//     } catch (error: any) {
//         return res.status(400).json({ message: error.message.toString(), flag: false, sana: "hiiii" });
//     }
// });

// router.post('/setPrices', async function (req: Request, res: Response) {
//     try {
//         const contractAddress = "0x79d3987e2DEabDE82aEAb7268D7893D2139353A5";
//         const myAddress = req.body.address;

//         const key = "3c1918e765a2682cf053706cbdbe327a55e24b42e1210566004678fb6ea549dc";


//         let contract = new web3.eth.Contract(abiFile1.abi, abiFile1.contractAddress, { from: myAddress });


//         const gasPrice = await web3.eth.getGasPrice();

//         let tx = await contract.methods.setPrices(req.body.newSellPrice, req.body.newBuyPrice).encodeABI();
//         const rawTransaction = {
//             gasPrice: gasPrice,
//             gas: 550000,
//             to: contractAddress,
//             data: tx,
//             chainId: 97
//         };
//         const signedTx = await web3.eth.accounts.signTransaction(rawTransaction, key);
//         const setPrices = await web3.eth.sendSignedTransaction(signedTx.rawTransaction || 'hi im hare to help you');
//         if (!setPrices) {
//             res.status(400).json({ message: 'Failed to get details', flag: false });
//         }
//         return res.status(200).json({ message: setPrices, flag: true });
//     } catch (error: any) {
//         return res.status(400).json({ message: error.message.toString(), flag: false });
//     }
// });

// router.post('/initialize', async function (req: Request, res: Response) {
//     try {
//         const contractAddress = "0x79d3987e2DEabDE82aEAb7268D7893D2139353A5";
//         const myAddress = req.body.address;

//         const key = "3c1918e765a2682cf053706cbdbe327a55e24b42e1210566004678fb6ea549dc";


//         let contract = new web3.eth.Contract(abiFile1.abi, abiFile1.contractAddress, { from: myAddress });


//         const gasPrice = await web3.eth.getGasPrice();

//         let tx = await contract.methods.initialize(req.body._myToken).encodeABI();
//         const rawTransaction = {
//             gasPrice: gasPrice,
//             gas: 550000,
//             to: contractAddress,
//             data: tx,
//             chainId: 97
//         };
//         const signedTx = await web3.eth.accounts.signTransaction(rawTransaction, key);
//         const initialize = await web3.eth.sendSignedTransaction(signedTx.rawTransaction || 'hi im hare to help you');
//         if (!initialize) {
//             res.status(400).json({ message: 'Failed to get details', flag: false });
//         }
//         return res.status(200).json({ message: initialize, flag: true });
//     } catch (error: any) {
//         return res.status(400).json({ message: error.message.toString(), flag: false });
//     }
// });

// router.post('/sell', async function (req: Request, res: Response) {
//     try {
//         const contractAddress = "0x79d3987e2DEabDE82aEAb7268D7893D2139353A5";
//         const myAddress = req.body.address;

//         const key = "3c1918e765a2682cf053706cbdbe327a55e24b42e1210566004678fb6ea549dc";


//         let contract = new web3.eth.Contract(abiFile1.abi, abiFile1.contractAddress, { from: myAddress });


//         const gasPrice = await web3.eth.getGasPrice();

//         let tx = await contract.methods.sell(req.body.amount, req.body.id).encodeABI();
//         const rawTransaction = {
//             gasPrice: gasPrice,
//             gas: 550000,
//             to: contractAddress,
//             data: tx,
//             chainId: 97
//         };
//         const signedTx = await web3.eth.accounts.signTransaction(rawTransaction, key);
//         const sell = await web3.eth.sendSignedTransaction(signedTx.rawTransaction || 'hi im hare to help you');
//         if (!sell) {
//             res.status(400).json({ message: 'Failed to get details', flag: false });
//         }
//         return res.status(200).json({ message: sell, flag: true });
//     } catch (error: any) {
//         return res.status(400).json({ message: error.message.toString(), flag: false });
//     }
// });


// router.post('/renounceOwnership', async function (req: Request, res: Response) {
//     try {
//         const contractAddress = "0x79d3987e2DEabDE82aEAb7268D7893D2139353A5";
//         const myAddress = req.body.address;

//         const key = "3c1918e765a2682cf053706cbdbe327a55e24b42e1210566004678fb6ea549dc";


//         let contract = new web3.eth.Contract(abiFile1.abi, abiFile1.contractAddress, { from: myAddress });


//         const gasPrice = await web3.eth.getGasPrice();

//         let tx = await contract.methods.renounceOwnership().encodeABI();
//         const rawTransaction = {
//             gasPrice: gasPrice,
//             gas: 550000,
//             to: contractAddress,
//             data: tx,
//             chainId: 97
//         };
//         const signedTx = await web3.eth.accounts.signTransaction(rawTransaction, key);
//         const renounceOwnership = await web3.eth.sendSignedTransaction(signedTx.rawTransaction || 'hi im hare to help you');
//         if (!renounceOwnership) {
//             res.status(400).json({ message: 'Failed to get details', flag: false });
//         }
//         return res.status(200).json({ message: renounceOwnership, flag: true });
//     } catch (error: any) {
//         return res.status(400).json({ message: error.message.toString(), flag: false });
//     }
// });



// // port
// const port = 5000;
// router.listen(port, () => console.log(`Listening on port ${port}...`)
// );