import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);

let isStarted = false;

export const startServer = async () => {
  if (!isStarted) {
    server.listen({ onUnhandledRequest: "warn" });
    isStarted = true;
  }
};
