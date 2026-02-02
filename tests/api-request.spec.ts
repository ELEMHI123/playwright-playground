import { request as pwRequest, test } from '@playwright/test';

test('api ping', async ({ }) => {
  const api = await pwRequest.newContext({
    baseURL: process.env.API_BASE_URL,
  });

  const r = await api.get('/swagger');
  console.log(r.status(), await r.text());
});
