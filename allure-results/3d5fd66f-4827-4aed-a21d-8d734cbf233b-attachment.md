# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\APIExample.spec.js >> Verify Post request
- Location: tests\api\APIExample.spec.js:30:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 405
```

# Test source

```ts
  1   | 
  2   | import { test, expect } from '@playwright/test';
  3   | import data from '../../testData/data.json' assert { type: 'json' };
  4   | 
  5   | 
  6   | 
  7   | 
  8   | 
  9   | test('Verify API Response', async ({ request }) => {
  10  |     const response = await request.get('https://api.restful-api.dev/objects');
  11  | 
  12  |     expect(response.status()).toBe(200);
  13  | 
  14  | 
  15  |     const body = await response.json();
  16  | 
  17  |     expect(Array.isArray(body)).toBeTruthy();
  18  |     expect(body.length).toBeGreaterThan(0);
  19  |     expect(body[0].id).toEqual("1");
  20  |     expect(body[0].name).toEqual("Google Pixel 6 Pro");
  21  |     expect(body[0].data.capacity).toEqual("128 GB");
  22  |     expect(body[0].data.color).toEqual("Cloudy White1");
  23  | 
  24  |     body.forEach(item => {
  25  |         expect(item).toHaveProperty('id');
  26  |         expect(item).toHaveProperty('name');
  27  |         expect(item).toHaveProperty('data');
  28  |     });
  29  | });
  30  | test.only('Verify Post request', async ({ request }) => {
  31  | 
  32  | 
  33  |     const response = await request.post('https://api.restful-api.dev/objects', {
  34  |         'data': {
  35  |             "name": "Apple MacBook Pro 16",
  36  |             "data": {
  37  |                 "year": 2019,
  38  |                 "price": 1849.99,
  39  |                 "CPU model": "Intel Core i9",
  40  |                 "Hard disk size": "1 TB"
  41  |             }
  42  |         }
  43  |     });
  44  |     const responseBody = await response.json();
  45  |     console.log(responseBody);
  46  | 
> 47  |     expect(response.status()).toBe(200);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  48  |     expect(response.ok()).toBeTruthy();
  49  |     expect(responseBody.id).toBeDefined();
  50  | 
  51  |     const response1 = await request.get(`https://api.restful-api.dev/objects/${responseBody.id}`);
  52  | 
  53  | 
  54  |     expect(response1.status()).toBe(200);
  55  |     const getResponseBody1 = await response1.json();
  56  |     console.log(getResponseBody1);
  57  |     expect(getResponseBody1.name).toEqual("Apple MacBook Pro 16");
  58  |     expect(getResponseBody1.data.year).toEqual(2019);
  59  |     expect(getResponseBody1.data.price).toEqual(1849.99);
  60  |     expect(getResponseBody1.data["CPU model"]).toEqual("Intel Core i9");
  61  |     expect(getResponseBody1.data["Hard disk size"]).toEqual("1 TB");
  62  | 
  63  | 
  64  | 
  65  |     const response4 = await request.put(`https://api.restful-api.dev/objects/${responseBody.id}`, {
  66  |         'data': {
  67  |             "name": "Apple MacBook Pro 16 (Updated)",
  68  |             "data": {
  69  |                 "year": 2026,
  70  |                 "price": 3000.99,
  71  |                 "CPU model": "Intel Core i9",
  72  |                 "Hard disk size": "2 TB"
  73  |             }
  74  |         }
  75  |     });
  76  |     const getResponseBody4 = await response4.json();
  77  |     console.log(getResponseBody4);
  78  | 
  79  |     const response5 = await request.patch(`https://api.restful-api.dev/objects/${responseBody.id}`, {
  80  |         'data': {
  81  |             "name": "Apple MacBook Pro 16 (Patch Updated)",
  82  |         }
  83  |     });
  84  |     const getResponseBody5 = await response5.json();
  85  |     console.log(getResponseBody5);
  86  | 
  87  | 
  88  | 
  89  | 
  90  | 
  91  | 
  92  |     const response2 = await request.delete(`https://api.restful-api.dev/objects/${responseBody.id}`);
  93  |     expect(response2.status()).toBe(200);
  94  |     const getResponseBody2 = await response2.json();
  95  |     console.log(getResponseBody2);
  96  |     // expect(getResponseBody2).toEqual({ "message": "Object deleted successfully" }); 
  97  | 
  98  |     const response3 = await request.get(`https://api.restful-api.dev/objects/${responseBody.id}`);
  99  |     const getResponseBody3 = await response3.json();
  100 |     console.log(getResponseBody3);
  101 |     expect(response3.status()).toBe(404);
  102 | 
  103 | 
  104 | 
  105 | });
  106 | 
  107 | 
```