import { assertEquals } from "https://deno.land/std@0.138.0/testing/asserts.ts";
import { rmSpaces, rmComments } from "./parse.ts";

Deno.test("Parse Utils", async (t) => {
  await t.step("Remove Whitespaces", () => {
    console.log("A");
    assertEquals(rmSpaces("   a a"), "a a");
    console.log("B");
    assertEquals(rmSpaces("\t a a"), "a a");
    console.log("C");
    assertEquals(rmSpaces("\t a b //go"), "a b //go");
  });

  await t.step("Remove Comments", () => {
    console.log("A");
    assertEquals(rmComments("// some test"), "");
    console.log("B");
    assertEquals(rmComments("// some test"), "");
    console.log("C");
    assertEquals(rmComments("// some test"), "");
    console.log("D");
    assertEquals(rmComments("before // some test"), "before ");
    console.log("E");
    assertEquals(rmComments("before // some test"), "before ");
    console.log("F");
    assertEquals(rmComments("before// // some test"), "before// ");
    console.log("G");
    assertEquals(rmComments("before// // some test"), "before// ");
    console.log("H");
    assertEquals(
      rmComments("call funca '//text' // some test"),
      "call funca '//text' "
    );
  });
});
