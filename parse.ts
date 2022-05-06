import { readLines } from "https://deno.land/std@0.138.0/io/buffer.ts";

//const f = await Deno.open(Deno.args[0] || "");
//for await (const l of readLines(f)) console.log("Processing:", l);

export const rmSpaces = (line: string) => line.replace(/$\s+/, "");

export const rmComments = (line: string) => line.replace(/\\\\.*\n/g, "");
