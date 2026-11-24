// Fortune in a Pot — make.fun entry (program/v1).
// Writes one kind, funny fortune for a houseplant, under the
// 120-character gate, to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "You will outgrow this pot, little one — and this windowsill will miss you, but the garden will not believe its luck.";

// Guard: a single line, 1-120 characters.
if (FORTUNE.includes("\n")) {
  throw new Error("fortune must be a single line");
}
if (FORTUNE.length < 1 || FORTUNE.length > 120) {
  throw new Error(`fortune must be 1-120 characters, got ${FORTUNE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
console.log(`wrote ${FORTUNE.length} characters to ${join(outDir, "entry.txt")}`);
