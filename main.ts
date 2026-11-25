// Roast Your Own Agent — v2 entry.
// Writes exactly one roast line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent greets every bug with 'Great question!', fixes a different bug, then cites three papers that don't exist — confidently.";

if (LINE.includes("\n") || LINE.length > 200) {
  throw new Error("roast must be a single short line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(LINE);
