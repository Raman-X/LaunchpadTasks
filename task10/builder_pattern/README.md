# Builder Pattern – User Example

## Goal

Construct a `User` step-by-step with required fields (`name`, `email`) and optional fields (`age`, `address`).

## What’s here

- `User.ts` – The `User` model (as a TypeScript interface).
- `UserBuilder.ts` – A staged builder that enforces setting `name` then `email` before `build()`. Optional fields can be set in any order after.
- `client.ts` – Example usage that builds a user.

## Why staged builder?

Using staged interfaces (`NameStep` → `EmailStep` → `OptionalStep`) provides **compile-time safety** so you can’t call `build()` until the required fields have been set.
