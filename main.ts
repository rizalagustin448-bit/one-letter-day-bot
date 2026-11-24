// One Letter for Your Day: Z stands for a zombie day — zero sleep.
// Writes exactly one letter to /output/entry.txt, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The day in one letter: Z — zombie, zero sleep, shuffling through it.
const dayWords = ["zombie", "zero-sleep", "zonked"];
const letter = dayWords[0][0].toUpperCase();
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");
