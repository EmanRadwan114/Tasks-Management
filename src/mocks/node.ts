import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);

console.log("MSW NODE MODULE LOADED");
if (process.env.NEXT_RUNTIME === "nodejs" && process.env.NODE_ENV === "development") {
  server.listen({ onUnhandledRequest: "bypass" });
  console.log("MSW Node server listening (from top-level node.ts)...");
}



