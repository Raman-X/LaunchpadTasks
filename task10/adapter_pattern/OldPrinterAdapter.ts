import { OldPrinter } from "./OldPrinter";

// New expected interface
export interface NewPrinter {
  print(message: string): void;
}

// Adapter class
export class OldPrinterAdapter implements NewPrinter {
  private oldPrinter: OldPrinter;

  constructor(oldPrinter: OldPrinter) {
    this.oldPrinter = oldPrinter;
  }

  public print(message: string): void {
    // Adapt the call to match OldPrinter's method
    this.oldPrinter.printText(message);
  }
}
