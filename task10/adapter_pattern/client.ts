import { OldPrinter } from "./OldPrinter";
import type { NewPrinter } from "./OldPrinterAdapter";
import { OldPrinterAdapter } from "./OldPrinterAdapter";

// Create an old printer
const legacyPrinter = new OldPrinter();

// Wrap it in an adapter to use new interface
const adaptedPrinter: NewPrinter = new OldPrinterAdapter(legacyPrinter);

// Use the adapted printer with the new method name
adaptedPrinter.print("Hello from the adapted printer!");
