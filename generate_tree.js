const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const { ethers } = require('ethers');

// Sample eligibility list
const whitelist = [
  { index: 0, address: '0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2', amount: ethers.utils.parseEther("100") },
  { index: 1, address: '0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db', amount: ethers.utils.parseEther("200") }
];

const leaves = whitelist.map(x => 
  keccak256(ethers.utils.solidityPack(['uint256', 'address', 'uint256'], [x.index, x.address, x.amount]))
);

const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const root = tree.getHexRoot();

console.log('Merkle Root:', root);

// Example: Get proof for index 0
const leaf = leaves[0];
const proof = tree.getHexProof(leaf);
console.log('Proof for index 0:', proof);
