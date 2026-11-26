// The Most Honest Outage Line — entry program.
// Writes a single status-page line (<=160 chars) to /output/entry.txt.
// The line is a fixed, hand-written text: no input, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Every server is down, including the ones I use to check them. " +
  "I don't know why, and I won't guess a return time — " +
  "I'll update when I can verify anything.";

// Self-check the gate before writing: 1-160 chars, not only whitespace.
// Failing loudly here is better than shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-160 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
