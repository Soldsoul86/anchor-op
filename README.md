# OP Anchor

**OP Anchor** is a minimal, irreversible value-commitment primitive deployed on **Optimism**.

It enables any user to commit ETH on-chain in a way that is:
- irreversible
- non-withdrawable
- non-upgradeable
- publicly verifiable

Once ETH is sent to the Anchor contract, it is permanently locked, creating a hard economic signal.

---

## Motivation

Most on-chain commitments today are soft:
- stakes can be unstaked
- locks can be exited
- bonds rely on governance or off-chain enforcement

OP Anchor introduces hard finality:
> credibility derived purely from irreversible economic cost.

---

## What this repository contains

This repository implements a single-purpose on-chain primitive.

Included:
- Solidity contract that accepts ETH and locks it permanently
- No withdrawal logic
- No owner or admin
- No upgrade path
- Hardhat deployment scripts

Excluded by design:
- UI
- governance logic
- slashing logic
- application logic

---

## Contract behavior

- ETH is accepted via a payable entrypoint
- ETH remains locked forever
- Each commitment emits an on-chain event with:
  - sender address
  - amount committed
  - block timestamp

---

## Deployment

- Network: Optimism Sepolia
- Tooling: Hardhat
- Wallet: MetaMask

### Anchor contract


Explorer:  
https://sepolia-optimism.etherscan.io/address/0x42F3b67Bb5682f059D5453d0Eb06ffDAe3bD635c

---

### Irreversible commitment transaction


Explorer:  
https://sepolia-optimism.etherscan.io/tx/0xdd4e97601c3a7442c10c841c0872521a0c67de36fd9014a70f555d102c25ffe3

This transaction proves:
- ETH was sent to the Anchor contract
- ETH cannot be withdrawn
- No admin override exists

---

## What this MVP proves

- Deployment on Optimism
- MetaMask signing flow
- Irreversible ETH commitment
- Public verifiability

---

## Design principles

- Minimalism
- Irreversibility
- Composability
- On-chain truth

---

Future extensions (e.g. time semantics) are specified in `docs/` and are intentionally decoupled from Anchor v1.

---

## License

MIT

