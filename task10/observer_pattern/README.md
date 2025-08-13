# Observer Pattern – News Agency Example

## Overview

This demonstrates the **Observer Pattern** in TypeScript.

- **NewsAgency** (Subject) manages a list of observers (channels) and notifies them when news is published.
- **NewsChannel** (Observer) receives updates from the agency.

---

## Files

- **Observer.ts** – Observer interface
- **NewsChannel.ts** – Concrete observer
- **NewsAgency.ts** – Publisher/subject
- **client.ts** – Demo usage

---

## EXPECTED OUTPUT

```yaml
NewsAgency publishes: "New species of bird discovered in the Amazon!"
[CNN] Breaking News: New species of bird discovered in the Amazon!
[BBC] Breaking News: New species of bird discovered in the Amazon!
[Al Jazeera] Breaking News: New species of bird discovered in the Amazon!
NewsAgency publishes: "Stock market hits record high!"
[CNN] Breaking News: Stock market hits record high!
[Al Jazeera] Breaking News: Stock market hits record high!
```
