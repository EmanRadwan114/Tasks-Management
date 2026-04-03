export async function initMsw() {
  if (typeof window === "undefined") {
    const { server } = await import("./node");
    server.listen({ onUnhandledRequest: "bypass" });
    console.log("MSW Node server listening (from initMsw)...");

  } else {
    const { worker } = await import("./browser");
    await worker.start({
      serviceWorker: {
        url: "/mockServiceWorker.js", // must match public/
      },
      onUnhandledRequest: "bypass",
    });
  }
}
