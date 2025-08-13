# Adapter Pattern – OldPrinter to NewPrinter Example

## Overview

We have an `OldPrinter` with a method `printText(text)`,  
but the application expects a `print(message)` method.

We use an `OldPrinterAdapter` to adapt the old interface to the new one.

---

## Files

- **OldPrinter.ts** – Legacy printer class
- **OldPrinterAdapter.ts** – Adapter implementing the new interface
- **client.ts** – Demonstration of adapting the old printer
- **README.md** – This description

---
