import { DocumentTemplate } from "./DocumentTemplate";

// Create the original document
const originalDoc = new DocumentTemplate(
  "Monthly Report",
  "This is the content of the monthly report...",
  "Confidential - Company Use Only"
);

// Clone the document
const clonedDoc = originalDoc.clone();

// Change the title of the cloned document
clonedDoc.title = "Monthly Report - Revised Version";

// Output both to confirm original is unchanged
console.log("Original Document:", originalDoc);
console.log("Cloned Document:", clonedDoc);
