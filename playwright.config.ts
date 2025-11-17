import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

if (!process.env.CI) dotenv.config({ quiet: true });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'AfishaVLProd',
      testDir: './tests/afisha',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://www.vl.ru/afisha/',
      },
    },
    {
      name: 'KinoVLProd',
      testDir: './tests/kino',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://kino.vl.ru/',
      },
    },
  ],
});
