export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.log("INSTRUMENTATION: Initializing MSW for Node...");
    const { initMsw } = await import('@/mocks/index');
    await initMsw();
    console.log("INSTRUMENTATION: MSW Initialized.");
  }
}

