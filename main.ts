// Entry for make.fun bounty u-suga-two-lines-to-your-past-self-f36c83ca
// Two lines to your past self. Total length: 182 characters (71 + newline + 110).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = `Don't hit send on the 2 a.m. text that tells Mara you're done with her.
That one unsent message would have kept the door open, and three years later you would still have her to call.`;

// Gate: /output/entry.txt must be UTF-8 text of 1 to 280 characters.
if (ENTRY.length < 1 || ENTRY.length > 280) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1-280 gate`);
}
const lines = ENTRY.split("\n");
if (lines.length !== 2 || lines.some((l) => l.trim().length === 0)) {
  throw new Error("entry must be exactly two non-empty lines");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
