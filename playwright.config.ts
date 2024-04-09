import type { PlaywrightTestConfig } from '@playwright/test';
export default {
    webServer: {
        command: 'npm run build && npm run preview',
        port: 4173,
    },
    testDir: 'tests',
    testMatch: /(.+\.)?(test|spec)[0-9]\.[jt]s/,
} satisfies PlaywrightTestConfig;
