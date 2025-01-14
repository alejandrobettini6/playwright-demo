import { test, chromium } from '@playwright/test';

//NOTE: In order to mantein good practices, we should create a separate the performance and accessibility audits
test.describe('Performance tests', () => {
    let browser;
    let page;

    test.beforeEach(async () => {
        //NOTE: remote debugging is required to run the lighthouse audit
        browser = await chromium.launch({
            args: ['--remote-debugging-port=9222'],
        });
        page = await browser.newPage();

        await page.goto('/');
    });

    test('performance and accessibility audits for home page', async () => {


        const { playAudit } = await import('playwright-lighthouse');

        await playAudit({
            page,
            thresholds: {
                performance: 80,
                accessibility: 90,
            },
            port: 9222,
            reports: {
                formats: {
                    html: true,
                },
                name: 'lighthouse-report',
                directory: 'lighthouse-reports'
            }
        });
        await browser.close();
    });
});