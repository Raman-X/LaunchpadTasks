# Factory Method Pattern - Logistics Example

## Overview

This folder demonstrates the **Factory Method** design pattern using different types of logistics:

- **Sea Logistic** → Ship
- **Air Logistic** → Plane
- **Land Logistic** → Truck

The `LogisticsFactory` class creates the correct type of `Vehicle` based on a string input.

---

## Files

- **Vehicle.ts** — Vehicle interface
- **Ship.ts**, **Plane.ts**, **Truck.ts** — Concrete vehicle implementations
- **LogisticsFactory.ts** — Factory to create vehicles
- **index.ts** — Example usage
