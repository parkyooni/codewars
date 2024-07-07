import { describe, it, expect } from "vitest";
import DNAtoRNA from "../lib/DNA to RNA Conversion.js";

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    expect(DNAtoRNA("TTTT"), "UUUU");
    expect(DNAtoRNA("GCAT"), "GCAU");
    expect(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
  });
});
