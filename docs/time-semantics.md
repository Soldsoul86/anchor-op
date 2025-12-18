# Time Semantics for Anchor — Design Specification (v2)

## Purpose

This document specifies a time-based semantic layer that can be composed
on top of Anchor v1 without modifying the Anchor contract or introducing
any ETH withdrawal paths.

This specification is conceptual and does not represent deployed code.

---

## Design Principle

Anchor v1 provides **irreversible economic finality**.

Time semantics must:
- add meaning to *when* a commitment becomes active
- never affect *whether* ETH can be withdrawn

All ETH committed to Anchor remains permanently locked.

---

## Core Idea

Time semantics are represented as **off-chain or on-chain metadata**
that reference Anchor commitment transactions.

The Anchor contract itself remains a pure value sink.

---

## Reference Model: TimeLock Registry

A separate registry contract (or indexer) MAY record:

- Anchor contract address
- Commitment transaction hash
- Commitment amount
- Activation timestamp (`validAfter`)
- Optional metadata hash

This registry:
- never receives ETH
- never sends ETH
- never calls Anchor
- only stores and exposes metadata

---

## Commitment Lifecycle

1. User commits ETH directly to Anchor v1
2. User (or protocol) registers commitment metadata in the registry
3. Before `validAfter`:
   - commitment exists
   - commitment is inactive
4. After `validAfter`:
   - commitment is considered active by consuming protocols

At no point can ETH be reclaimed or redirected.

---

## Security Properties

The following properties MUST hold:

- ETH committed to Anchor is never moved
- Time semantics do not introduce execution paths into Anchor
- Registry logic is non-custodial
- Registry failure does not affect Anchor safety

---

## Non-Goals (Explicit)

This specification does NOT attempt to:

- implement ETH withdrawals
- implement refunds or reversibility
- enforce time locks at the ETH level
- couple Anchor logic to registry logic
- provide governance or admin controls

---

## Composability

Protocols MAY use time semantics to:

- gate DAO voting rights
- delay activation of economic commitments
- signal long-term intent
- create temporal anti-spam mechanisms

Protocols MUST NOT assume ETH retrievability.

---

## Rationale

Separating economic finality (Anchor) from temporal meaning (registry)
preserves the minimalism and security of Anchor v1 while enabling
richer application-layer behavior.

This separation prevents feature creep and reduces attack surface.

---

## Status

This specification describes a potential Phase 2 extension.
No implementation is deployed at this time.

