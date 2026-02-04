# Merkle Airdrop Distributor

Distributing tokens to a large number of users on-chain is prohibitively expensive. This repository utilizes **Merkle Trees** to offload the storage of eligibility data off-chain while maintaining cryptographic certainty on-chain.



## Features
* **Minimal Gas Cost**: The contract only stores a single 32-byte `merkleRoot`.
* **User-Claim Model**: Eligible users pay the gas to claim their own tokens.
* **Double-Claim Protection**: Uses a bitmask or mapping to ensure each eligible leaf is only claimed once.

## How it Works
1. Create a list of addresses and amounts.
2. Generate a Merkle Tree and its Root off-chain using the provided script.
3. Deploy the contract with the Root.
4. Users provide a "Merkle Proof" (sibling hashes) to the `claim` function to prove they belong to the tree.

## License
MIT
