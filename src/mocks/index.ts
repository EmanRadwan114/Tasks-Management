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
      onUnhandledRequest(request, print) {
        // Ignore internal Next.js and static asset requests to prevent interference
        const url = new URL(request.url);
        if (
          url.pathname.startsWith("/_next") ||
          url.pathname.includes(".") // Catch static files / extensions
        ) {
          return;
        }

        // Specifically check for API requests
        if (url.pathname.includes("/api/")) {
          print.warning();
        }
      },
    });
  }
}
