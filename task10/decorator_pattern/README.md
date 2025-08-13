# Decorator Pattern – Coffee Example

## Overview

The **Decorator Pattern** allows us to dynamically add functionality to an object without changing its base class.

We have:

- **Coffee interface** – Defines `cost()` and `description()`.
- **SimpleCoffee** – Base coffee.
- **Milk**, **Sugar**, **WhippedCream** – Decorators that wrap a coffee and add extra cost/description.

---

## Why Decorator?

You can mix and match decorators at runtime to create custom coffee orders without making a huge subclass hierarchy.
