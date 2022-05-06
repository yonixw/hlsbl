import { readLines } from "https://deno.land/std@0.138.0/io/buffer.ts";

export const rmSpaces = (line: string) => line.replace(/^\s*/, "");

export const rmComments = (line: string) => line.replace(/\/\/[^\/]*?$/, "");

export const getLines = async (filepath: string) => {
  const lines = [];
  const f = await Deno.open(filepath);
  for await (const l of readLines(f)) {
    lines.push(l);
  }
  return lines;
};
