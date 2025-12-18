# Security Properties — Anchor v1

## Overview

Anchor v1 is a minimal, single-purpose smart contract that enables
irreversible ETH commitments on Optimism.

This document describes the explicit security properties, invariants,
and non-goals of Anchor v1.

Anchor v1 is frozen and will not be modified.

---

## Threat Model

Anchor v1 assumes the following adversarial conditions:

- Any externally owned account (EOA) may send ETH or arbitrary calldata
- Attackers may attempt to trigger unintended execution paths
- Attackers may attempt to extract or redirect committed ETH
- Attackers may attempt to exploit reentrancy or delegate calls

Anchor v1 makes **no assumptions** about trusted callers.

---

## Core Invariant

**Invariant:**  
Once ETH enters the Anchor contract, it can never leave under any execution path.

This invariant holds regardless of:
- calldata contents
- sender identity
- transaction ordering
- block timing

---

## Enforcement Mechanism

The invariant is enforced by construction:

- The contract contains no functions that transfer ETH
- The contract performs no external calls
- The contract has no owner, admin, or privileged roles
- The contract does not use `call`, `delegatecall`, `send`, or `transfer`
- The contract does not include `selfdestruct`

The only executable paths are:
- `receive() external payable {}`
- `fallback() external payable {}`

Both paths accept ETH and perform no state changes.

---

## Runtime Verification

The invariant has been verified on-chain by:

1. Deploying Anchor v1 on Optimism Sepolia
2. Committing ETH via direct value transfer
3. Executing arbitrary calldata (`0xdeadbeef`) post-commitment
4. Observing no ETH outflow or balance reduction

The contract balance is monotonic and non-decreasing.

---

## Non-Goals (Explicit)

Anchor v1 explicitly does NOT attempt to:

- Allow withdrawals or refunds
- Support time-locked reversibility
- Store metadata or commitments
- Perform access control
- Implement governance or upgrade logic
- Serve as an application-level escrow

These features, if required, must be implemented as
separate, composable layers that do not modify Anchor v1.

---

## Immutability Guarantee

Anchor v1 is frozen at release tag:

`v1.0-anchor-finality`

All security claims in this document apply exclusively
to that tagged version.

---

## Summary

Anchor v1 provides a single, strong guarantee:

> ETH committed to Anchor v1 is irrecoverable by design.

This guarantee is enforced by minimalism rather than complexity.

