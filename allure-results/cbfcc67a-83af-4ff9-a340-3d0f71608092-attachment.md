# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\apitest.spec.js >> Verify Post Request
- Location: tests\api\apitest.spec.js:28:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 405
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import data from '../../testData/data.json' assert { type: 'json' };
  3  | import objectdata from '../../testData/objectdata.json' assert { type: 'json' };
  4  | import { getRequest, postRequest } from '../api/APIBase.js';
  5  | 
  6  | test('Verify API Response', async ({ request }) => {
  7  |     const response = await getRequest(request, data.allObjects);
  8  |     console.log(response.status());
  9  |     await expect(response.status()).toBe(200);
  10 | 
  11 |     const body = await response.json();
  12 | 
  13 |     expect(Array.isArray(body)).toBeTruthy();
  14 |     expect(body.length).toBeGreaterThan(0);
  15 |     expect(body[0].id).toEqual(objectdata.id);
  16 |     expect(body[0].name).toEqual(objectdata.name);
  17 |     expect(body[0].data.capacity).toEqual(objectdata.data.capacity);
  18 |     expect(body[0].data.color).toEqual(objectdata.data.color);
  19 | 
  20 |     body.forEach(item => {
  21 |         expect(item).toHaveProperty('id');
  22 |         expect(item).toHaveProperty('name');
  23 |         expect(item).toHaveProperty('data');
  24 |     });
  25 | 
  26 | });
  27 | 
  28 | test.only('Verify Post Request', async ({ request }) => {
  29 |     console.log(objectdata.createObject);
  30 | 
  31 |     const response = await postRequest(request, data.allObjects, objectdata.createObject);
  32 |     console.log(response.status());
> 33 |     await expect(response.status()).toBe(200);
     |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  34 | 
  35 |     expect(response.ok()).toBeTruthy();
  36 | 
  37 |     const responseBody = await response.json();
  38 |     console.log(responseBody);
  39 |     expect(responseBody.id).toBeDefined();
  40 | 
  41 | 
  42 | 
  43 | });
```