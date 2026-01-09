import { APIRequestContext, request as pwRequest } from '@playwright/test';

export async function createMerchantApi(token: string): Promise<APIRequestContext> {
  return await pwRequest.newContext({
    baseURL: process.env.API_BASE_URL,
    extraHTTPHeaders: {
      accept: 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
}
