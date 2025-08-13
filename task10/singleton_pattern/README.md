# Singleton Pattern - DatabaseConnection Example

## Overview

This folder contains an example of the **Singleton** design pattern implemented in TypeScript.

The Singleton pattern ensures that a class has only **one instance** and provides a global point of access to it.

In this example, we simulate connecting to a database. The first time we call `getInstance()`, it creates the connection. Subsequent calls return the same object.

## How it works:

> Private constructor → Prevents direct instantiation (new DatabaseConnection() is not allowed outside the class).

> Static instance property → Stores the only instance of the class.

> getInstance() method → Creates the instance on first call, then reuses it.

> When you run this, "Connecting to the database..." will be logged only once, proving that only one instance is created.
