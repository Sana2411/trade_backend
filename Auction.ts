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