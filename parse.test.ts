import { assertEquals } from "https://deno.land/std@0.138.0/testing/asserts.ts";
import { rmSpaces } from "./parse.ts";

Deno.test("Parse Utils", (t) => {
  t.step("Remove Whitespaces", (t) => {
    assertEquals(rmSpaces("   a a"), "a a");
    assertEquals(rmSpaces("\t a a"), "a a");
    assertEquals(rmSpaces("\t a b //go"), "a b //go");
  });
});
