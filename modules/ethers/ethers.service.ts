import { Contract, ethers } from 'ethers';

const jsonRpcProvider = new ethers.providers.JsonRpcProvider('https://graph-node.beets-ftm-node.com/rpc');

export class EthersService {
    getContractAt(address: string, abi: any): Contract {
        return new Contract(address, abi, jsonRpcProvider);
    }
}

export const ethersService = new EthersService();
